import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { b as $$Layout, $ as $$Card, a as $$Button } from '../../chunks/Card_Bf7KbEzA.mjs';
import { $ as $$Section } from '../../chunks/Section_D3wqhrx4.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_IBT9X32D.mjs';
import { $ as $$Input } from '../../chunks/Input_DmVHHyxx.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MotDePasseOublie = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
import { authClient } from '../../lib/auth-client';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgot-form');
    const email = document.getElementById('email');
    const alertDiv = document.getElementById('forgot-alert');
    const submitBtn = document.getElementById('forgot-submit');
    if (!form || !email || !alertDiv || !submitBtn) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        alertDiv.style.display = 'none';
        alertDiv.textContent = '';
        submitBtn.disabled = true;
        if (!email.value) {
            alertDiv.textContent = 'Veuillez renseigner votre adresse e-mail.';
            alertDiv.style.display = 'block';
            email.focus();
            submitBtn.disabled = false;
            return;
        }
        try {
            await authClient.requestPasswordReset({
                email: email.value,
                redirectTo: "/auth/reset-password"
            });
            alertDiv.textContent = 'Un email de r\xE9initialisation a \xE9t\xE9 envoy\xE9.';
            alertDiv.style.display = 'block';
            alertDiv.style.color = 'green';
        } catch (err) {
            alertDiv.textContent = err?.message || 'Erreur lors de la demande.';
            alertDiv.style.display = 'block';
            alertDiv.style.color = 'red';
        }
        submitBtn.disabled = false;
    });
});
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Mot de passe oubli\xE9", "description": "R\xE9initialisez votre mot de passe" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "class": "auth-section" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "max-w-md mx-auto" }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<form id="forgot-form" autocomplete="on" novalidate> ${renderComponent($$result4, "Heading", $$Heading, { "tag": "h1", "fontSize": "h2", "fontWeight": "700", "align": "center" }, { "default": async ($$result5) => renderTemplate`Mot de passe oublié` })} ${renderComponent($$result4, "Text", $$Text, { "as": "p", "align": "center", "class": "mb-4" }, { "default": async ($$result5) => renderTemplate`Entrez votre adresse e-mail pour recevoir un lien de réinitialisation.` })} ${renderComponent($$result4, "Input", $$Input, { "id": "email", "name": "email", "type": "email", "label": "Adresse e-mail", "required": true, "autofocus": true, "class": "mb-4" })} <div id="forgot-alert" class="mb-4" style="display:none"></div> ${renderComponent($$result4, "Button", $$Button, { "id": "forgot-submit", "type": "submit", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": async ($$result5) => renderTemplate`Réinitialiser le mot de passe` })} <div class="mt-4 text-center"> <a href="/auth/connexion" class="text-sm text-primary hover:underline">Retour à la connexion</a> </div> </form> ` })} ` })} ` }));
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/mot-de-passe-oublie.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/mot-de-passe-oublie.astro";
const $$url = "/auth/mot-de-passe-oublie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MotDePasseOublie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
