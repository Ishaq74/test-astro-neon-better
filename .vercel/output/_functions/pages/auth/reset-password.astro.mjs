import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { $ as $$Card, a as $$Button, b as $$Layout } from '../../chunks/Card_Bf7KbEzA.mjs';
import { $ as $$Input } from '../../chunks/Input_DmVHHyxx.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_IBT9X32D.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ResetPasswordForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
import { authClient } from '../../lib/auth-client';

export function handleResetPasswordForm() {
  function getTokenFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('token');
  }

  const form = document.getElementById('reset-form');
  const password = document.getElementById('password');
  const alertDiv = document.getElementById('reset-alert');
  const submitBtn = document.getElementById('reset-submit');
  const loader = document.getElementById('reset-loader');
  const btnText = document.getElementById('reset-btn-text');

  if (!form || !password || !alertDiv || !submitBtn || !loader || !btnText) return;

  const resetButtonState = () => {
    submitBtn.disabled = false;
    btnText.style.display = '';
    loader.style.display = 'none';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    alertDiv.classList.add('hidden');
    alertDiv.textContent = '';
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    loader.style.display = 'inline-block';

    const token = getTokenFromUrl();
    if (!token) {
      alertDiv.textContent = 'Lien invalide ou expir\xE9.';
      alertDiv.setAttribute('variant', 'error');
      alertDiv.classList.remove('hidden');
      resetButtonState();
      return;
    }
    if (!password.value || password.value.length < 8) {
      alertDiv.textContent = 'Le mot de passe doit contenir au moins 8 caract\xE8res.';
      alertDiv.setAttribute('variant', 'error');
      alertDiv.classList.remove('hidden');
      password.focus();
      resetButtonState();
      return;
    }
    try {
      const { error } = await authClient.resetPassword({
        newPassword: password.value,
        token
      });
      if (error) {
        alertDiv.textContent = error.message || 'Erreur lors de la r\xE9initialisation.';
        alertDiv.setAttribute('variant', 'error');
        alertDiv.classList.remove('hidden');
        resetButtonState();
        return;
      }
      alertDiv.textContent = 'Mot de passe mis \xE0 jour avec succ\xE8s. Vous pouvez vous connecter.';
      alertDiv.setAttribute('variant', 'success');
      alertDiv.classList.remove('hidden');
      setTimeout(() => {
        window.location.href = '/connexion';
      }, 2000);
    } catch (err) {
      alertDiv.textContent = 'Erreur inattendue.';
      alertDiv.setAttribute('variant', 'error');
      alertDiv.classList.remove('hidden');
      resetButtonState();
    }
  });
}

document.addEventListener('DOMContentLoaded', handleResetPasswordForm);
<\/script>`])), renderComponent($$result, "Card", $$Card, { "class": "w-full max-w-md mx-auto" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<form id="reset-form" autocomplete="on" novalidate> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h1", "fontSize": "h2", "fontWeight": "700", "align": "center" }, { "default": async ($$result3) => renderTemplate`Réinitialiser le mot de passe` })} ${renderComponent($$result2, "Text", $$Text, { "as": "p", "align": "center", "class": "mb-4" }, { "default": async ($$result3) => renderTemplate`Choisissez un nouveau mot de passe.` })} ${renderComponent($$result2, "Input", $$Input, { "id": "password", "name": "password", "type": "password", "label": "Nouveau mot de passe", "required": true, "autofocus": true, "class": "mb-4" })} <div id="reset-alert" class="mb-4" style="display:none"></div> ${renderComponent($$result2, "Button", $$Button, { "id": "reset-submit", "type": "submit", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": async ($$result3) => renderTemplate`Valider` })} <div class="mt-4 text-center"> <a href="/auth/connexion" class="text-sm text-primary hover:underline">Retour à la connexion</a> </div> </form> ` }));
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/Auth/ResetPasswordForm.astro", void 0);

const prerender = false;
const $$ResetPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Modifier le mot de passe", "description": "Changez votre mot de passe" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ResetPasswordForm", $$ResetPasswordForm, {})} ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/reset-password.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/reset-password.astro";
const $$url = "/auth/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
