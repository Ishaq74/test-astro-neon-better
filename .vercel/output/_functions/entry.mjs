import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BJCkMffq.mjs';
import { manifest } from './manifest_BpwPqZEP.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---all_.astro.mjs');
const _page2 = () => import('./pages/auth/connexion.astro.mjs');
const _page3 = () => import('./pages/auth/inscription.astro.mjs');
const _page4 = () => import('./pages/auth/mot-de-passe-oublie.astro.mjs');
const _page5 = () => import('./pages/auth/profil.astro.mjs');
const _page6 = () => import('./pages/auth/reset-password.astro.mjs');
const _page7 = () => import('./pages/equipe/_slug_.astro.mjs');
const _page8 = () => import('./pages/equipe.astro.mjs');
const _page9 = () => import('./pages/formations/_slug_.astro.mjs');
const _page10 = () => import('./pages/formations.astro.mjs');
const _page11 = () => import('./pages/galerie/_slug_.astro.mjs');
const _page12 = () => import('./pages/galerie.astro.mjs');
const _page13 = () => import('./pages/services/_slug_.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/[...all].ts", _page1],
    ["src/pages/auth/connexion.astro", _page2],
    ["src/pages/auth/inscription.astro", _page3],
    ["src/pages/auth/mot-de-passe-oublie.astro", _page4],
    ["src/pages/auth/profil.astro", _page5],
    ["src/pages/auth/reset-password.astro", _page6],
    ["src/pages/equipe/[slug].astro", _page7],
    ["src/pages/equipe/index.astro", _page8],
    ["src/pages/formations/[slug].astro", _page9],
    ["src/pages/formations/index.astro", _page10],
    ["src/pages/galerie/[slug].astro", _page11],
    ["src/pages/galerie/index.astro", _page12],
    ["src/pages/services/[slug].astro", _page13],
    ["src/pages/services/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "103b5bd0-2364-4f5c-959e-a7ec9189f79d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
