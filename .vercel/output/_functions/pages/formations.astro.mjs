import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Card_Cp0hndOh.mjs';
import { a as $$QueryLoop } from '../chunks/QueryLoop_CLzrzhf2.mjs';
import { $ as $$Section } from '../chunks/Section_D3wqhrx4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Formations", "description": "D\xE9couvrez nos formations de maquillage \xE0 Annecy.", "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Formations</h1> ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "formations", "columns": 2, "gap": 6 })} ` })} ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/formations/index.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/formations/index.astro";
const $$url = "/formations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
