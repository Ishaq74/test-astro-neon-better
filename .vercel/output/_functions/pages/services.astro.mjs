import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Card_Bf7KbEzA.mjs';
import { a as $$QueryLoop } from '../chunks/QueryLoop_BB7XwcHZ.mjs';
import { $ as $$Section } from '../chunks/Section_D3wqhrx4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services", "description": "D\xE9couvrez nos services de maquillage professionnel \xE0 Annecy.", "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Nos Services</h1> ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "services", "active": true, "columns": 3, "gap": 6 })} ` })} ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/services/index.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
