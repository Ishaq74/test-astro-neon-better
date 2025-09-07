import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as Fragment, r as renderTemplate } from './astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
/* empty css                          */

const $$Astro = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items = [], class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["breadcrumb", className], "class:list")} aria-label="Fil d'Ariane" data-astro-cid-axfwwucj> ${items.map((item, idx) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-axfwwucj": true }, { "default": ($$result2) => renderTemplate`${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-axfwwucj>${item.label}</a>` : renderTemplate`<span data-astro-cid-axfwwucj>${item.label}</span>`}${idx < items.length - 1 && renderTemplate`<span data-astro-cid-axfwwucj>›</span>`}` })}`)} </nav> `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
