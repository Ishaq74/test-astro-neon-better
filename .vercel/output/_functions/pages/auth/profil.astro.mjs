import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { g as getServerSession, b as $$Layout, $ as $$Card, a as $$Button, c as $$Icon } from '../../chunks/Card_Bf7KbEzA.mjs';
import { a as $$Text, $ as $$Heading } from '../../chunks/Text_IBT9X32D.mjs';
import { $ as $$Input } from '../../chunks/Input_DmVHHyxx.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Profil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profil;
  const session = await getServerSession(Astro2.request);
  if (!session?.user) {
    return Astro2.redirect("/connexion");
  }
  const user = session.user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon Profil", "description": "Page de profil utilisateur" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", ` <script type="module">
    import { authClient } from '../../src/lib/auth-client';
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('profil-form');
      const nameInput = form.querySelector('input[name="name"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      const btnText = document.getElementById('profil-btn-text');
      const loader = document.getElementById('profil-loader');
      const errorEl = document.getElementById('profil-error');
      const editNameBtn = document.getElementById('edit-name-btn');
      const verifyBtn = document.getElementById('verify-email-btn');

      const showError = (msg) => {
        errorEl.textContent = msg;
        errorEl.classList.remove('hidden');
      };

      const showSuccess = (msg) => {
        errorEl.textContent = msg;
        errorEl.classList.remove('hidden');
        errorEl.classList.remove('text-red-500');
        errorEl.classList.add('text-green-600');
      };

      const clearError = () => {
        errorEl.textContent = '';
        errorEl.classList.add('hidden');
        errorEl.classList.remove('text-green-600');
        errorEl.classList.remove('text-red-500');
      };

      if (editNameBtn) {
        editNameBtn.addEventListener('click', () => {
          nameInput.removeAttribute('readonly');
          nameInput.classList.remove('bg-gray-100', 'cursor-not-allowed');
          nameInput.classList.add('bg-white', 'cursor-text', 'border-blue-500');
          nameInput.focus();
        });
      }

      if (verifyBtn) {
        verifyBtn.addEventListener('click', async () => {
          clearError();
          verifyBtn.disabled = true;
          verifyBtn.textContent = 'Envoi...';
          try {
            await authClient.sendVerificationEmail({
              email: document.getElementById('email').value,
              callbackURL: '/profil'
            });
            showSuccess('Un email de v\xE9rification a \xE9t\xE9 envoy\xE9. V\xE9rifiez votre bo\xEEte mail.');
          } catch (err) {
            showError('Erreur lors de l\u2019envoi du mail.');
          } finally {
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'V\xE9rifier';
          }
        });
      }

      const setLoading = (loading) => {
        submitBtn.disabled = loading;
        btnText.style.display = loading ? 'none' : '';
        loader.classList.toggle('hidden', !loading);
      };

      form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        clearError();

        const name = nameInput.value.trim();
        if (!name) {
          showError('Le nom ne peut pas \xEAtre vide.');
          nameInput.focus();
          return;
        }

        setLoading(true);

        try {
          // V\xE9rifier la disponibilit\xE9 du nom avant update
          const response = await authClient.checkUsernameAvailable?.({ name });
          if (response?.data?.available === false) {
            showError('Ce nom est d\xE9j\xE0 pris. Choisissez-en un autre.');
            setLoading(false);
            return;
          }

          // Update avec BetterAuth
          await authClient.updateUser({ name });

          // Remettre en readonly apr\xE8s update
          nameInput.setAttribute('readonly', 'true');
          nameInput.classList.add('bg-gray-100', 'cursor-not-allowed');
          nameInput.classList.remove('bg-white', 'cursor-text', 'border-blue-500');

          showSuccess('Profil mis \xE0 jour !');
        } catch (err) {
          console.error(err);
          showError('Une erreur est survenue. R\xE9essayez plus tard.');
        } finally {
          setLoading(false);
        }
      });
    });
  <\/script> `])), renderComponent($$result2, "Heading", $$Heading, { "tag": "h1", "fontSize": "h2", "fontWeight": "700", "align": "center", "class": "mb-6" }, { "default": async ($$result3) => renderTemplate`Mon Profil` }), renderComponent($$result2, "Card", $$Card, { "class": "max-w-md mx-auto mt-4" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<form id="profil-form" class="flex flex-col gap-4"> ${renderComponent($$result3, "Text", $$Text, { "as": "label", "for": "name", "class": "block text-sm font-medium mb-1" }, { "default": async ($$result4) => renderTemplate`Nom` })} <div class="flex items-center gap-2"> ${renderComponent($$result3, "Input", $$Input, { "id": "name", "name": "name", "type": "text", "value": user?.name ?? "", "autocomplete": "name", "readonly": true, "aria-label": "Nom", "class": "w-full bg-gray-100 cursor-not-allowed" })} ${renderComponent($$result3, "Button", $$Button, { "type": "button", "variant": "primary", "id": "edit-name-btn", "aria-label": "Modifier le nom" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:edit" })} ` })} </div> ${renderComponent($$result3, "Text", $$Text, { "id": "profil-error", "as": "p", "class": "mt-1 text-xs text-red-500 hidden" })} <div class="flex items-center justify-between"> <div class="flex-1"> ${renderComponent($$result3, "Text", $$Text, { "as": "label", "for": "email", "class": "block text-sm font-medium mb-1" }, { "default": async ($$result4) => renderTemplate`Email` })} ${renderComponent($$result3, "Input", $$Input, { "id": "email", "name": "email", "type": "email", "value": user.email ?? "", "disabled": true, "autocomplete": "email", "aria-label": "Email", "class": "w-full bg-gray-100 cursor-not-allowed" })} </div> <div class="ml-3 mt-6"> ${user.emailVerified ? renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:check-circle", "class:list": ["text-green-500"] })}` : renderTemplate`${renderComponent($$result3, "Button", $$Button, { "size": "sm", "variant": "secondary", "id": "verify-email-btn" }, { "default": async ($$result4) => renderTemplate`Vérifier` })}`} </div> </div> <div class="mt-4"> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "w-full flex items-center justify-center gap-2" }, { "default": async ($$result4) => renderTemplate` <span id="profil-btn-text">Mettre à jour</span> <span id="profil-loader" class="hidden"> <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path> </svg> </span> ` })} </div> </form> ` })) })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/profil.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/auth/profil.astro";
const $$url = "/auth/profil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profil,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
