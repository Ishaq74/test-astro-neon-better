import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout, c as $$Icon } from '../../chunks/Card_Cp0hndOh.mjs';
import { $ as $$Section } from '../../chunks/Section_D3wqhrx4.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_DGm8vDJb.mjs';
import { c as contentLoader, b as $$Badge, a as $$QueryLoop } from '../../chunks/QueryLoop_CLzrzhf2.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CnqQtINo.mjs';
import { $ as $$Cta } from '../../chunks/Cta_B6UvuT4C.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (typeof slug !== "string") {
    throw new Error("Slug param is required and must be a string");
  }
  const service = await contentLoader.loadServiceBySlug(slug);
  let tags = [];
  let steps = [];
  if (service && service.id) {
    (await contentLoader.loadFaq()).filter((f) => f.servicesGlobal === 1 || f.serviceId === service.id);
    (await contentLoader.loadAvis()).filter((a) => a.servicesGlobal === 1 || a.serviceId === service.id);
    (await contentLoader.loadGalerie()).filter((img) => img.servicesGlobal === 1 || img.serviceId === service.id);
    if (Array.isArray(service.tags)) tags = service.tags;
    else if (typeof service.tags === "string" && service.tags) {
      try {
        tags = JSON.parse(service.tags);
      } catch {
        tags = [];
      }
    }
    if (Array.isArray(service.steps)) steps = service.steps;
    else if (typeof service.steps === "string" && service.steps) {
      try {
        steps = JSON.parse(service.steps);
      } catch {
        steps = [];
      }
    }
  }
  if (!service) {
    return Astro2.redirect("/404", 404);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": service?.title, "description": service?.description, "lang": "fr", "data-astro-cid-tcy35dad": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "header", "data-astro-cid-tcy35dad": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: service?.nom || "" }
  ], "data-astro-cid-tcy35dad": true })} ${maybeRenderHead()}<div class="hero-center" data-astro-cid-tcy35dad> <div class="hero-icon" data-astro-cid-tcy35dad> ${service?.icon ? renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": service.icon, "class": "icon-main", "data-astro-cid-tcy35dad": true })}` : renderTemplate`<span class="icon-main" data-astro-cid-tcy35dad>🎨</span>`} </div> ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h1", "fontSize": "h1", "fontWeight": "700", "align": "center", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`${service?.title}` })} ${renderComponent($$result3, "Text", $$Text, { "as": "p", "variant": "secondary", "class": "hero-desc", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`${service?.description}` })} <div class="hero-infos" data-astro-cid-tcy35dad> <div class="hero-info-block" data-astro-cid-tcy35dad> <span class="hero-price" data-astro-cid-tcy35dad>${service?.prix}</span> <div class="hero-info-labels" data-astro-cid-tcy35dad> ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`À partir de` })} ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`par prestation` })} </div> </div> <div class="hero-info-block" data-astro-cid-tcy35dad> <span class="hero-info-emoji" data-astro-cid-tcy35dad>⏱️</span> <div class="hero-info-labels" data-astro-cid-tcy35dad> ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`Durée` })} ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`2-4h selon prestation` })} </div> </div> </div> ${tags.length > 0 && renderTemplate`<div class="hero-tags" data-astro-cid-tcy35dad> ${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "variant": "primary", "size": "md", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`#${tag}` })}`)} </div>`} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "lg", "as": "section", "data-astro-cid-tcy35dad": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`Galerie` })} ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "galerie", "serviceId": service.id, "columns": 4, "gap": 4, "data-astro-cid-tcy35dad": true })} ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "lg", "as": "section", "data-astro-cid-tcy35dad": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`Avis` })} ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "avis", "serviceId": service.id, "columns": 2, "gap": 4, "data-astro-cid-tcy35dad": true })} ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "section", "data-astro-cid-tcy35dad": true }, { "default": async ($$result3) => renderTemplate` <div class="details-grid" data-astro-cid-tcy35dad> <div data-astro-cid-tcy35dad> ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`Ce service inclut` })} <div class="steps-list" data-astro-cid-tcy35dad> ${steps.length > 0 ? steps.map((step, i) => renderTemplate`<div class="step-item" data-astro-cid-tcy35dad> <span class="step-num" data-astro-cid-tcy35dad>${i + 1}</span> ${renderComponent($$result3, "Text", $$Text, { "as": "span", "class": "step-text", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`${step}` })} </div>`) : service?.notes && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "as": "div", "class": "step-notes", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`${service.notes}` })}`} </div> </div> <div data-astro-cid-tcy35dad> ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h3", "fontSize": "h3", "fontWeight": "700", "data-astro-cid-tcy35dad": true }, { "default": async ($$result4) => renderTemplate`Pourquoi choisir ce service ?` })} <ul class="benefits-list" data-astro-cid-tcy35dad> <li data-astro-cid-tcy35dad>Techniques professionnelles exclusives</li> <li data-astro-cid-tcy35dad>Produits haut de gamme certifiés</li> <li data-astro-cid-tcy35dad>Personnalisation selon vos goûts</li> <li data-astro-cid-tcy35dad>Résultat longue durée garanti</li> </ul> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "section", "data-astro-cid-tcy35dad": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Cta", $$Cta, { "title": "Pr\xEAt(e) pour votre transformation ?", "desc": `R\xE9servez d\xE8s maintenant votre prestation <strong>${service?.nom}</strong> et d\xE9couvrez l'art du maquillage professionnel adapt\xE9 \xE0 votre personnalit\xE9 unique.`, "cta1": { label: "R\xE9server maintenant \u2192", href: "/#contact", variant: "primary" }, "cta2": { label: "\u2190 Voir tous nos services", href: "/services", variant: "outline" }, "infos": "\u2728 Consultation gratuite \u2022 \u{1F3A8} Devis personnalis\xE9 \u2022 \u2B50 Satisfaction garantie", "icon": "\u{1F4DE}", "data-astro-cid-tcy35dad": true })} ` })} ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/services/[slug].astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
