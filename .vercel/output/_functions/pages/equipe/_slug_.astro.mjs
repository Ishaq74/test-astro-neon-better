import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../../chunks/Card_Bf7KbEzA.mjs';
import { $ as $$Section } from '../../chunks/Section_D3wqhrx4.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_IBT9X32D.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CnqQtINo.mjs';
import { c as contentLoader, $ as $$TeamCard, a as $$QueryLoop } from '../../chunks/QueryLoop_BB7XwcHZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (typeof slug !== "string") {
    throw new Error("Slug param is required and must be a string");
  }
  const user = await contentLoader.loadUserBySlug(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": user?.nom || "Membre \xE9quipe", "description": user?.bio || "", "lang": "fr" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "as": "header" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Accueil", href: "/" },
    { label: "\xC9quipe", href: "/equipe" },
    { label: user?.nom || "" }
  ] })} ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h1", "fontSize": "h1", "fontWeight": "700" }, { "default": async ($$result4) => renderTemplate`${user?.nom}` })} ${renderComponent($$result3, "Text", $$Text, { "as": "p", "variant": "secondary" }, { "default": async ($$result4) => renderTemplate`${user?.bio}` })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "entry": user })} ` })} ${relatedMembers.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "padding": "lg" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tag": "h2", "fontSize": "h3", "fontWeight": "700" }, { "default": async ($$result4) => renderTemplate`Autres membres de l'équipe` })} ${renderComponent($$result3, "QueryLoop", $$QueryLoop, { "collection": "team", "global": true, "columns": 3, "gap": 4, "filter": ((m) => m.id !== member.id) })} ` })}`}` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/equipe/[slug].astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/equipe/[slug].astro";
const $$url = "/equipe/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
