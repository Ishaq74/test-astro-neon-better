import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, k as renderComponent, r as renderTemplate } from './astro/server_ILB7gN1T.mjs';
import { c as $$Icon } from './Card_Bf7KbEzA.mjs';
/* empty css                                  */

const $$Astro = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Input;
  const { label, id, error, iconLeft, iconRight, class: className, ...rest } = Astro2.props;
  const hasError = !!error;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["input-wrapper", className], "class:list")} data-astro-cid-3feqjc7r> <label${addAttribute(id, "for")} data-astro-cid-3feqjc7r>${label}</label> <div class="input-container" data-astro-cid-3feqjc7r> ${iconLeft && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconLeft, "class": "input-icon left-icon", "data-astro-cid-3feqjc7r": true })}`} <input${addAttribute(id, "id")}${addAttribute([
    "input-field",
    { "has-error": hasError },
    { "has-icon-left": !!iconLeft },
    { "has-icon-right": !!iconRight }
  ], "class:list")}${addAttribute(hasError ? "true" : "false", "aria-invalid")}${addAttribute(hasError ? `${id}-error` : void 0, "aria-describedby")}${spreadAttributes(rest)} data-astro-cid-3feqjc7r> ${iconRight && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconRight, "class": "input-icon right-icon", "data-astro-cid-3feqjc7r": true })}`} </div> ${hasError && renderTemplate`<p${addAttribute(`${id}-error`, "id")} class="error-message" data-astro-cid-3feqjc7r>${error}</p>`} </div> `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Input.astro", void 0);

export { $$Input as $ };
