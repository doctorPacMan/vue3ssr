import { Request, Response } from 'express';
import { renderToString } from '@vue/server-renderer';
import fs from 'fs';
import { h } from 'vue';
import bundle from './bundle'
import { SSR } from '../typings';

export default <SSR.Scoped>function (ctx: SSR.Context): SSR.Renderer {
    const renderer: SSR.Renderer = {
        response: async (req: Request, res: Response) => {
            const context: SSR.BundleContext = await bundle(ctx).entry(req);
            const content: SSR.OutputContext = await renderer.context(context);

            if (fs.existsSync(ctx.paths.template())) {
                fs.readFile(ctx.paths.template(), (err: NodeJS.ErrnoException | null, template: Buffer) => {
                    if (err) {
                        throw err;
                    }
                    res.setHeader('Content-Type', 'text/html');
                    res.send(renderer.hydrate(template, content));
                });
            }
        },
        context: async ({ app, state }: SSR.BundleContext): Promise<SSR.OutputContext> => {

            const appHead = h(app._context.components.AppHead as any);
            return {
                head: await renderToString(appHead),
                app: await renderToString(app),
                state: JSON.stringify(state),
            };
        },
        hydrate: (template: Buffer, { app, head, state }: SSR.OutputContext) => {
            const html = template.toString()
                .replace('<meta name="head">', head)
                .replace('<div id="app"></div>', `<div id="app">${app}</div>`)
                .replace('<div id="state"></div>', `<script>window.__STATE__ = ${state}</script>`);
            return html;
        },
        fetchHTML: async (route: string) => {

            if (!fs.existsSync(ctx.paths.template())) throw 'No template';

            const template: Buffer = fs.readFileSync(ctx.paths.template());
            const context: SSR.BundleContext = await bundle(ctx).entry({}); // (req)
            const content: SSR.OutputContext = await renderer.context(context);
            return renderer.hydrate(template, content);
       },
   }
    return renderer
}