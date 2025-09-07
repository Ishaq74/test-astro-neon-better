import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, f as createAstro } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { $ as $$Card, a as $$Button, g as getServerSession, b as $$Layout } from '../../chunks/Card_Cp0hndOh.mjs';
import { $ as $$Input } from '../../chunks/Input_yNGei9po.mjs';
import { $ as $$Heading, a as $$Text } from '../../chunks/Text_DGm8vDJb.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$SignupForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
import { authClient } from '../../lib/auth-client';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  let errorEl = document.getElementById('signup-error');

  if (!form) return;

  const getInput = (name) => {
    const el = form.querySelector(\`input[name="\${name}"]\`);
    if (el) return el;
    return Array.from(form.querySelectorAll('input'))
      .find(i => i.getAttribute('name') === name) || null;
  };

  const nameInput = getInput('name');
  const emailInput = getInput('email');
  const passwordInput = getInput('password');
  const confirmPasswordInput = getInput('confirmPassword');

  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = document.getElementById('signup-btn-text');
  const loader = document.getElementById('signup-loader');

  const showError = (msg) => {
    console.log('Erreur affich\xE9e:', msg);
    if (!errorEl) return;
    errorEl.textContent = msg;
    errorEl.classList.remove('hidden');
    errorEl.style.display = 'block';
  };

  const clearError = () => {
    console.log('Erreur effac\xE9e');
    if (!errorEl) return;
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
    errorEl.style.display = 'none';
  };

  const isValidEmail = (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  const isStrongPassword = (pwd) => /^(?=.*[A-Za-z])(?=.*\\d).{8,}$/.test(pwd);

  const setLoading = (loading) => {
    console.log('Chargement:', loading);
    if (submitBtn) submitBtn.disabled = loading;
    if (btnText) btnText.style.display = loading ? 'none' : '';
    if (loader) loader.style.display = loading ? 'inline-block' : 'none';
  };

  if (passwordInput && confirmPasswordInput) {
    const live = () => {
      if (!confirmPasswordInput.value) {
        clearError();
        return;
      }
      if (passwordInput.value !== confirmPasswordInput.value) {
        showError('Les mots de passe ne correspondent pas.');
      } else {
        clearError();
      }
    };
    passwordInput.addEventListener('input', live);
    confirmPasswordInput.addEventListener('input', live);
  }

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    clearError();

    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const password = String(fd.get('password') || '');
    const confirmPassword = String(fd.get('confirmPassword') || '');

    console.log('Soumission du formulaire:', { name, email, password, confirmPassword });

    if (!name || !email || !password || !confirmPassword) {
      showError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    if (!isValidEmail(email)) {
      showError('Adresse email invalide.');
      emailInput?.focus();
      return;
    }
    if (password !== confirmPassword) {
      showError('Les mots de passe ne correspondent pas.');
      confirmPasswordInput?.focus();
      return;
    }
    if (!isStrongPassword(password)) {
      showError('Mot de passe trop faible. Au moins 8 caract\xE8res, une lettre et un chiffre.');
      passwordInput?.focus();
      return;
    }

    setLoading(true);
    try {
      const res = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: '/',
      });

      console.log('R\xE9sultat inscription:', res);

      if (res?.error) {
        showError(res.error?.message || 'Erreur lors de l\u2019inscription.');
        setLoading(false);
        return;
      }

  window.location.href = '/profil';
    } catch (err) {
      console.error('Erreur inattendue:', err);
      showError('Une erreur inattendue est survenue. R\xE9essayez plus tard.');
      setLoading(false);
    }
  });
});
<\/script>`], ["", ` <script type="module">
import { authClient } from '../../lib/auth-client';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  let errorEl = document.getElementById('signup-error');

  if (!form) return;

  const getInput = (name) => {
    const el = form.querySelector(\\\`input[name="\\\${name}"]\\\`);
    if (el) return el;
    return Array.from(form.querySelectorAll('input'))
      .find(i => i.getAttribute('name') === name) || null;
  };

  const nameInput = getInput('name');
  const emailInput = getInput('email');
  const passwordInput = getInput('password');
  const confirmPasswordInput = getInput('confirmPassword');

  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = document.getElementById('signup-btn-text');
  const loader = document.getElementById('signup-loader');

  const showError = (msg) => {
    console.log('Erreur affich\xE9e:', msg);
    if (!errorEl) return;
    errorEl.textContent = msg;
    errorEl.classList.remove('hidden');
    errorEl.style.display = 'block';
  };

  const clearError = () => {
    console.log('Erreur effac\xE9e');
    if (!errorEl) return;
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
    errorEl.style.display = 'none';
  };

  const isValidEmail = (email) => /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/.test(email);
  const isStrongPassword = (pwd) => /^(?=.*[A-Za-z])(?=.*\\\\d).{8,}$/.test(pwd);

  const setLoading = (loading) => {
    console.log('Chargement:', loading);
    if (submitBtn) submitBtn.disabled = loading;
    if (btnText) btnText.style.display = loading ? 'none' : '';
    if (loader) loader.style.display = loading ? 'inline-block' : 'none';
  };

  if (passwordInput && confirmPasswordInput) {
    const live = () => {
      if (!confirmPasswordInput.value) {
        clearError();
        return;
      }
      if (passwordInput.value !== confirmPasswordInput.value) {
        showError('Les mots de passe ne correspondent pas.');
      } else {
        clearError();
      }
    };
    passwordInput.addEventListener('input', live);
    confirmPasswordInput.addEventListener('input', live);
  }

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    clearError();

    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const password = String(fd.get('password') || '');
    const confirmPassword = String(fd.get('confirmPassword') || '');

    console.log('Soumission du formulaire:', { name, email, password, confirmPassword });

    if (!name || !email || !password || !confirmPassword) {
      showError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    if (!isValidEmail(email)) {
      showError('Adresse email invalide.');
      emailInput?.focus();
      return;
    }
    if (password !== confirmPassword) {
      showError('Les mots de passe ne correspondent pas.');
      confirmPasswordInput?.focus();
      return;
    }
    if (!isStrongPassword(password)) {
      showError('Mot de passe trop faible. Au moins 8 caract\xE8res, une lettre et un chiffre.');
      passwordInput?.focus();
      return;
    }

    setLoading(true);
    try {
      const res = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: '/',
      });

      console.log('R\xE9sultat inscription:', res);

      if (res?.error) {
        showError(res.error?.message || 'Erreur lors de l\u2019inscription.');
        setLoading(false);
        return;
      }

  window.location.href = '/profil';
    } catch (err) {
      console.error('Erreur inattendue:', err);
      showError('Une erreur inattendue est survenue. R\xE9essayez plus tard.');
      setLoading(false);
    }
  });
});
<\/script>`])), renderComponent($$result, "Card", $$Card, { "class": "w-full max-w-md mx-auto" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<form id="signup-form" autocomplete="on" novalidate> ${renderComponent($$result2, "Heading", $$Heading, { "tag": "h1", "fontSize": "h2", "fontWeight": "700", "align": "center" }, { "default": async ($$result3) => renderTemplate`Inscription` })} ${renderComponent($$result2, "Text", $$Text, { "as": "p", "align": "center", "class": "mb-4" }, { "default": async ($$result3) => renderTemplate`Créez votre compte` })} ${renderComponent($$result2, "Input", $$Input, { "id": "name", "name": "name", "label": "Nom", "required": true, "autofocus": true, "class": "mb-4" })} ${renderComponent($$result2, "Input", $$Input, { "id": "email", "name": "email", "type": "email", "label": "Email", "required": true, "class": "mb-4" })} ${renderComponent($$result2, "Input", $$Input, { "id": "password", "name": "password", "type": "password", "label": "Mot de passe", "required": true, "class": "mb-4" })} ${renderComponent($$result2, "Input", $$Input, { "id": "confirmPassword", "name": "confirmPassword", "type": "password", "label": "Confirmez le mot de passe", "required": true, "class": "mb-4" })} <div id="signup-error" class="mb-4" style="display:none"></div> ${renderComponent($$result2, "Button", $$Button, { "id": "signup-submit", "type": "submit", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": async ($$result3) => renderTemplate`S'inscrire` })} <div class="mt-4 text-center"> <a href="/auth/connexion" class="text-sm text-primary hover:underline">Déjà un compte ? Connectez-vous</a> </div> </form> ` }));
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/Auth/SignupForm.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Inscription = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Inscription;
  const session = await getServerSession(Astro2.request);
  if (session?.user) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inscription", "description": "Cr\xE9ez votre compte" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SignupForm", $$SignupForm, {})} ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/inscription.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/inscription.astro";
const $$url = "/auth/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Inscription,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
