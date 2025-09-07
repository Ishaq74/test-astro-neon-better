import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { $ as $$Section } from './Section_D3wqhrx4.mjs';
import { $ as $$Heading, a as $$Text } from './Text_IBT9X32D.mjs';
import { a as $$Button } from './Card_Bf7KbEzA.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cta;
  const { title, desc, cta1, cta2, infos, icon = "\u{1F4DE}", class: className = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "padding": "xl", "class": className, "data-astro-cid-mzttnwfd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="cta-box" data-astro-cid-mzttnwfd> <div class="cta-icon" data-astro-cid-mzttnwfd>${icon}</div> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "class": "cta-title", "data-astro-cid-mzttnwfd": true }, { "default": ($$result3) => renderTemplate`${title}` })} ${renderComponent($$result2, "Text", $$Text, { "as": "p", "class": "cta-desc", "data-astro-cid-mzttnwfd": true }, { "default": ($$result3) => renderTemplate`${desc}` })} <div class="cta-actions" data-astro-cid-mzttnwfd> ${renderComponent($$result2, "Button", $$Button, { "href": cta1.href, "variant": cta1.variant ?? "primary", "size": "lg", "data-astro-cid-mzttnwfd": true }, { "default": ($$result3) => renderTemplate`${cta1.label}` })} ${cta2 && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": cta2.href, "variant": cta2.variant ?? "secondary", "size": "lg", "data-astro-cid-mzttnwfd": true }, { "default": ($$result3) => renderTemplate`${cta2.label}` })}`} </div> ${infos && renderTemplate`${renderComponent($$result2, "Text", $$Text, { "as": "p", "class": "cta-infos", "data-astro-cid-mzttnwfd": true }, { "default": ($$result3) => renderTemplate`${infos}` })}`} </div> ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/section/Cta.astro", void 0);

export { $$Cta as $ };
