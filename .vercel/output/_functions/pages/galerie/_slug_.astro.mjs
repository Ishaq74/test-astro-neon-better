import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../../chunks/Card_Diwi7u9N.mjs';
import { $ as $$Section } from '../../chunks/Section_D3wqhrx4.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_DDtzxLq5.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CnqQtINo.mjs';
import { c as contentLoader, d as $$GalerieCard, a as $$QueryLoop } from '../../chunks/QueryLoop_DIFe0P7S.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (typeof slug !== "string") {
    throw new Error("Slug param is required and must be a string");
  }
  const galerie = await contentLoader.loadGalerieBySlug(slug);
  if (!galerie) {
    return Astro2.redirect("/404", 404);
  }
  let relatedImages = [];
  if (galerie && galerie.id) {
    relatedImages = (await contentLoader.loadGalerie()).filter((img) => img.id !== galerie.id && (img.servicesGlobal === 1 || img.formationsGlobal === 1));
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": galerie?.title || galerie?.alt || "Galerie", "description": galerie?.description || "", "lang": "fr" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "header" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Accueil", href: "/" },
    { label: "Galerie", href: "/galerie" },
    { label: galerie?.title || galerie?.alt || "" }
  ] })} ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h1", "fontSize": "h1", "fontWeight": "700" }, { "default": async ($$result4) => renderTemplate`${galerie?.title || galerie?.alt}` })} ${renderComponent($$result3, "Text", $$Text, { "as": "p", "variant": "secondary" }, { "default": async ($$result4) => renderTemplate`${galerie?.description}` })} ${renderComponent($$result3, "GalerieCard", $$GalerieCard, { "entry": galerie })} ` })} ${relatedImages.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "padding": "lg" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h3", "fontWeight": "700" }, { "default": async ($$result4) => renderTemplate`Autres images de la galerie` })} ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "galerie", "global": true, "columns": 3, "gap": 4, "filter": ((img) => img.id !== galerie.id) })} ` })}`}` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/galerie/[slug].astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/galerie/[slug].astro";
const $$url = "/galerie/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
