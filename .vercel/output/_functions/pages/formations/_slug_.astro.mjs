import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { c as $$Icon, a as $$Button, b as $$Layout } from '../../chunks/Card_Diwi7u9N.mjs';
import { $ as $$Section } from '../../chunks/Section_D3wqhrx4.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_DDtzxLq5.mjs';
import { c as contentLoader, b as $$Badge, a as $$QueryLoop } from '../../chunks/QueryLoop_DIFe0P7S.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CnqQtINo.mjs';
import { $ as $$Cta } from '../../chunks/Cta_jstpX-w4.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      icon: "mdi:star",
      title: "Conseils beaut\xE9 exclusifs",
      description: "Recevez mes meilleurs tips beaut\xE9 directement dans votre bo\xEEte mail"
    },
    {
      icon: "mdi:gift",
      title: "Offres privil\xE9gi\xE9es",
      description: "Acc\xE8s prioritaire \xE0 mes formations et r\xE9ductions exclusives"
    },
    {
      icon: "mdi:mail",
      title: "Tendances en avant-premi\xE8re",
      description: "D\xE9couvrez les derni\xE8res tendances maquillage avant tout le monde"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "padding": "xl", "bgColor": "gradient-hero", "class": "newsletter-section", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="newsletter-container" data-astro-cid-pt3pzrs6> <div class="newsletter-card" data-astro-cid-pt3pzrs6> <div class="newsletter-grid" data-astro-cid-pt3pzrs6> <div class="newsletter-content" data-astro-cid-pt3pzrs6> <div class="newsletter-header" data-astro-cid-pt3pzrs6> <div class="newsletter-header-icon" data-astro-cid-pt3pzrs6> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:mail", "class": "newsletter-header-icon-svg", "data-astro-cid-pt3pzrs6": true })} </div> <span class="newsletter-header-label" data-astro-cid-pt3pzrs6>Newsletter Beauté</span> </div> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "class": "newsletter-title", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`
Rejoignez ma
<span class="newsletter-title-gradient" data-astro-cid-pt3pzrs6>Communauté Beauté</span> ` })} ${renderComponent($$result2, "Text", $$Text, { "as": "p", "class": "newsletter-desc", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`
Inscrivez-vous à ma newsletter et recevez chaque mois mes conseils d'experte, les dernières tendances et des offres exclusives.
` })} <form method="post" action="#" class="newsletter-form" data-astro-cid-pt3pzrs6> <input type="email" name="email" placeholder="Votre adresse email" required class="newsletter-input" data-astro-cid-pt3pzrs6> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "newsletter-btn", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`S'inscrire` })} </form> ${renderComponent($$result2, "Text", $$Text, { "as": "p", "class": "newsletter-privacy", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`Désinscription possible à tout moment. Vos données sont protégées.` })} <div class="newsletter-benefits" data-astro-cid-pt3pzrs6> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h4", "fontSize": "h4", "fontWeight": "600", "class": "newsletter-benefits-title", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`Ce que vous recevrez :` })} <div class="newsletter-benefits-list" data-astro-cid-pt3pzrs6> ${benefits.map((benefit) => renderTemplate`<div class="newsletter-benefit-item" data-astro-cid-pt3pzrs6> <div class="newsletter-benefit-icon" data-astro-cid-pt3pzrs6> ${renderComponent($$result2, "Icon", $$Icon, { "name": benefit.icon, "class": "newsletter-benefit-icon-svg", "data-astro-cid-pt3pzrs6": true })} </div> <div data-astro-cid-pt3pzrs6> <div class="newsletter-benefit-title" data-astro-cid-pt3pzrs6>${benefit.title}</div> <div class="newsletter-benefit-desc" data-astro-cid-pt3pzrs6>${benefit.description}</div> </div> </div>`)} </div> </div> </div> <div class="newsletter-visual" data-astro-cid-pt3pzrs6> <div class="newsletter-visual-content" data-astro-cid-pt3pzrs6> <div class="newsletter-visual-gift" data-astro-cid-pt3pzrs6> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:gift", "class": "newsletter-visual-gift-svg", "data-astro-cid-pt3pzrs6": true })} </div> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h3", "fontSize": "h3", "fontWeight": "700", "class": "newsletter-visual-title", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`Cadeau de Bienvenue` })} ${renderComponent($$result2, "Text", $$Text, { "as": "p", "class": "newsletter-visual-desc", "data-astro-cid-pt3pzrs6": true }, { "default": ($$result3) => renderTemplate`
Guide gratuit "Les 10 Secrets d'un Maquillage Parfait" offert à votre inscription
` })} <div class="newsletter-visual-stats" data-astro-cid-pt3pzrs6> <div data-astro-cid-pt3pzrs6> <div class="newsletter-visual-stat-value" data-astro-cid-pt3pzrs6>1200+</div> <div class="newsletter-visual-stat-label" data-astro-cid-pt3pzrs6>Abonnées</div> </div> <div data-astro-cid-pt3pzrs6> <div class="newsletter-visual-stat-value" data-astro-cid-pt3pzrs6>98%</div> <div class="newsletter-visual-stat-label" data-astro-cid-pt3pzrs6>Satisfaction</div> </div> </div> <div class="newsletter-visual-deco deco1" data-astro-cid-pt3pzrs6></div> <div class="newsletter-visual-deco deco2" data-astro-cid-pt3pzrs6></div> <div class="newsletter-visual-deco deco3" data-astro-cid-pt3pzrs6></div> </div> </div> </div> </div> </div> ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/section/Newsletter.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (typeof slug !== "string") {
    throw new Error("Slug param is required and must be a string");
  }
  const formation = await contentLoader.loadFormationBySlug(slug);
  let tags = [];
  let steps = [];
  if (formation && formation.id) {
    (await contentLoader.loadFaq()).filter((f) => f.formationsGlobal === 1 || f.formationId === formation.id);
    (await contentLoader.loadAvis()).filter((a) => a.formationsGlobal === 1 || a.formationId === formation.id);
    (await contentLoader.loadGalerie()).filter((img) => img.formationsGlobal === 1 || img.formationId === formation.id);
    if (Array.isArray(formation.tags)) tags = formation.tags;
    else if (typeof formation.tags === "string" && formation.tags) {
      try {
        tags = JSON.parse(formation.tags);
      } catch {
        tags = [];
      }
    }
    if (Array.isArray(formation.steps)) steps = formation.steps;
    else if (typeof formation.steps === "string" && formation.steps) {
      try {
        steps = JSON.parse(formation.steps);
      } catch {
        steps = [];
      }
    }
  }
  if (!formation) {
    return Astro2.redirect("/404", 404);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": formation?.titre, "description": formation?.description || "", "lang": "fr", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "header", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Accueil", href: "/" },
    { label: "Formations", href: "/formations" },
    { label: formation?.titre || "" }
  ], "data-astro-cid-uw2b7yvs": true })} ${maybeRenderHead()}<div class="hero-center" data-astro-cid-uw2b7yvs> <div class="hero-icon" data-astro-cid-uw2b7yvs> ${formation?.icon ? renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": formation.icon, "class": "icon-main", "data-astro-cid-uw2b7yvs": true })}` : renderTemplate`<span class="icon-main" data-astro-cid-uw2b7yvs>🎓</span>`} </div> ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h1", "fontSize": "h1", "fontWeight": "700", "align": "center", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`${formation?.titre}` })} ${renderComponent($$result3, "Text", $$Text, { "as": "p", "variant": "secondary", "class": "hero-desc", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`${formation?.description || ""}` })} <div class="hero-infos" data-astro-cid-uw2b7yvs> <div class="hero-info-block" data-astro-cid-uw2b7yvs> <span class="hero-price" data-astro-cid-uw2b7yvs>${formation?.prix}</span> <div class="hero-info-labels" data-astro-cid-uw2b7yvs> ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`À partir de` })} ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`par formation` })} </div> </div> <div class="hero-info-block" data-astro-cid-uw2b7yvs> <span class="hero-info-emoji" data-astro-cid-uw2b7yvs>⏱️</span> <div class="hero-info-labels" data-astro-cid-uw2b7yvs> ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`Durée` })} ${renderComponent($$result3, "Text", $$Text, { "as": "div", "variant": "secondary", "class": "hero-info-label", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`2-5j selon module` })} </div> </div> </div> ${tags.length > 0 && renderTemplate`<div class="hero-tags" data-astro-cid-uw2b7yvs> ${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "variant": "primary", "size": "md", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`#${tag}` })}`)} </div>`} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "lg", "as": "section", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`Galerie` })} ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "galerie", "formationId": formation.id, "columns": 4, "gap": 4, "data-astro-cid-uw2b7yvs": true })} ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "lg", "as": "section", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`Avis` })} ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "avis", "formationId": formation.id, "columns": 2, "gap": 4, "data-astro-cid-uw2b7yvs": true })} ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "section", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result3) => renderTemplate` <div class="details-grid" data-astro-cid-uw2b7yvs> <div data-astro-cid-uw2b7yvs> ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h2", "fontWeight": "700", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`Ce module inclut` })} <div class="steps-list" data-astro-cid-uw2b7yvs> ${steps.length > 0 ? steps.map((step, i) => renderTemplate`<div class="step-item" data-astro-cid-uw2b7yvs> <span class="step-num" data-astro-cid-uw2b7yvs>${i + 1}</span> ${renderComponent($$result3, "Text", $$Text, { "as": "span", "class": "step-text", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`${step}` })} </div>`) : formation?.notes && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "as": "div", "class": "step-notes", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`${formation.notes}` })}`} </div> </div> <div data-astro-cid-uw2b7yvs> ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h3", "fontSize": "h3", "fontWeight": "700", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result4) => renderTemplate`Pourquoi choisir cette formation ?` })} <ul class="benefits-list" data-astro-cid-uw2b7yvs> <li data-astro-cid-uw2b7yvs>Pédagogie professionnelle et bienveillante</li> <li data-astro-cid-uw2b7yvs>Supports de cours exclusifs</li> <li data-astro-cid-uw2b7yvs>Certification reconnue</li> <li data-astro-cid-uw2b7yvs>Accompagnement personnalisé</li> </ul> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "section", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Cta", $$Cta, { "title": "Pr\xEAt(e) \xE0 vous former ?", "desc": `R\xE9servez votre place pour <strong>${formation?.titre}</strong> et boostez votre carri\xE8re dans le maquillage professionnel.`, "cta1": { label: "S'inscrire \u2192", href: "/#contact", variant: "primary" }, "cta2": { label: "\u2190 Voir toutes les formations", href: "/formations", variant: "secondary" }, "infos": "\u2728 Financement possible \u2022 \u{1F4DA} Petits groupes \u2022 \u2B50 Satisfaction garantie", "icon": "\u{1F4DE}", "data-astro-cid-uw2b7yvs": true })} ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "section", "data-astro-cid-uw2b7yvs": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Newsletter", $$Newsletter, { "data-astro-cid-uw2b7yvs": true })} ` })} ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/formations/[slug].astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/formations/[slug].astro";
const $$url = "/formations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
