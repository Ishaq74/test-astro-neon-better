import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, f as createAstro } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { $ as $$Card, a as $$Button, g as getServerSession, b as $$Layout } from '../../chunks/Card_Bf7KbEzA.mjs';
import { $ as $$Section } from '../../chunks/Section_D3wqhrx4.mjs';
import { $ as $$Input } from '../../chunks/Input_DmVHHyxx.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_IBT9X32D.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SignInForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
import { authClient } from '../../lib/auth-client';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signin-form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const errorDiv = document.getElementById('signin-error');
  const submitBtn = document.getElementById('signin-submit');
  const loader = document.getElementById('signin-loader');
  const btnText = document.getElementById('signin-btn-text');

  const showError = (msg, focusInput) => {
    errorDiv.textContent = msg;
    errorDiv.classList.remove('hidden');
    if (focusInput) focusInput.focus();
    submitBtn.disabled = false;
    btnText.style.display = '';
    loader.style.display = 'none';
  };

  const setLoading = (loading) => {
    submitBtn.disabled = loading;
    btnText.style.display = loading ? 'none' : '';
    loader.style.display = loading ? 'inline-block' : 'none';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorDiv.classList.add('hidden');
    errorDiv.textContent = '';
    
    if (!email.value || !password.value) {
      showError('Veuillez remplir tous les champs.', !email.value ? email : password);
      return;
    }

    setLoading(true);

    authClient.signIn.email({
      email: email.value,
      password: password.value,
      callbackURL: "/profil"
    }, {
      onRequest: () => { /* loader d\xE9j\xE0 activ\xE9 */ },
      onSuccess: () => { window.location.href = '/profil'; },
      onError: (ctx) => {
        let msg = ctx.error.message || 'Erreur lors de la connexion.';
        if (msg === 'Invalid email or password') {
          msg = 'Email ou mot de passe invalide.';
        }
        if (msg === 'Email not verified') {
          msg = "Adresse e-mail non v\xE9rifi\xE9e. Veuillez v\xE9rifier votre bo\xEEte mail.";
        }
        errorDiv.textContent = msg;
        errorDiv.classList.remove('hidden');
        submitBtn.disabled = false;
        btnText.style.display = '';
        loader.style.display = 'none';
      }
    });
  });
});
<\/script>`])), renderComponent($$result, "Card", $$Card, { "class": "w-full max-w-md mx-auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form id="signin-form" autocomplete="on" novalidate> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h1", "fontSize": "h2", "fontWeight": "700", "align": "center" }, { "default": ($$result3) => renderTemplate`Connexion` })} ${renderComponent($$result2, "Text", $$Text, { "as": "p", "align": "center", "class": "mb-4" }, { "default": ($$result3) => renderTemplate`Connectez-vous à votre compte PGastroCMS` })} ${renderComponent($$result2, "Input", $$Input, { "id": "email", "name": "email", "type": "email", "label": "Adresse e-mail", "required": true, "autofocus": true, "class": "mb-4" })} ${renderComponent($$result2, "Input", $$Input, { "id": "password", "name": "password", "type": "password", "label": "Mot de passe", "required": true, "class": "mb-4" })} <div id="signin-error" class="mb-4" style="display:none"></div> ${renderComponent($$result2, "Button", $$Button, { "id": "signin-submit", "type": "submit", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`Se connecter` })} <div class="mt-4 text-center flex flex-col gap-2"> <a href="/auth/inscription" class="text-sm text-primary hover:underline">Pas encore inscrit ? Créez un compte</a> <a href="/auth/mot-de-passe-oublie" class="text-sm text-gray-600 hover:underline">Mot de passe oublié ?</a> </div> </form> ` }));
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/Auth/SignInForm.astro", void 0);

const $$Astro = createAstro();
const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Connexion;
  const session = await getServerSession(Astro2.request);
  if (session?.user) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Connexion", "description": "Connectez-vous \xE0 votre compte" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "xl", "class": "auth-section" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SignInForm", $$SignInForm, {})} ` })} ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/connexion.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/connexion.astro";
const $$url = "/auth/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Connexion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
