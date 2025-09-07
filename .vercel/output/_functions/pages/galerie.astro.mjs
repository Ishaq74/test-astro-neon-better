import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Card_Diwi7u9N.mjs';
import { a as $$QueryLoop } from '../chunks/QueryLoop_DIFe0P7S.mjs';
import { $ as $$Section } from '../chunks/Section_D3wqhrx4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galerie", "description": "Galerie de nos r\xE9alisations en maquillage \xE0 Annecy.", "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Galerie</h1> ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "galerie", "global": true, "columns": 4, "gap": 4 })} ` })} ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/galerie/index.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/galerie/index.astro";
const $$url = "/galerie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
