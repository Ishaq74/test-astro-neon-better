import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, n as renderSlot } from './astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { c as $$Icon } from './Card_Bf7KbEzA.mjs';
/* empty css                                  */

const $$Astro$1 = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const {
    tag = "h2",
    align = "center",
    iconLeft,
    iconRight,
    iconSize = 24,
    iconPosition = "both",
    textColor = "black",
    fontFamily = "heading",
    fontWeight = "400",
    fontSize = "h2",
    className = "",
    ...htmlAttributes
  } = Astro2.props;
  const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
  const HeadingTag = validTags.includes(tag) ? tag : "h2";
  const justifyContentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }[align] || "justify-center";
  const knownColors = ["black", "white", "primary", "secondary", "tertiary"];
  const cssColor = knownColors.includes(textColor) ? `var(--color-${textColor})` : textColor;
  const cssFontFamily = `var(--font-family-${fontFamily})`;
  const cssFontWeight = `var(--font-weight-${fontWeight})`;
  const cssFontSize = `var(--font-size-${fontSize})`;
  return renderTemplate`<style>
  .heading {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
</style>${renderComponent($$result, "HeadingTag", HeadingTag, { "class": `heading ${justifyContentClass} ${className}`, "style": `color: ${cssColor}; font-family: ${cssFontFamily}; font-weight: ${cssFontWeight}; font-size: ${cssFontSize};`, ...htmlAttributes }, { "default": ($$result2) => renderTemplate`${iconLeft && (iconPosition === "left" || iconPosition === "both") && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": iconLeft, "size": iconSize })}`}${renderSlot($$result2, $$slots["default"])}${iconRight && (iconPosition === "right" || iconPosition === "both") && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": iconRight, "size": iconSize })}`}` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Heading.astro", void 0);

const $$Astro = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Text;
  const { as: Tag = "p", variant = "default", class: className, title } = Astro2.props;
  const variantClasses = {
    default: "text-default",
    secondary: "text-secondary",
    gradient: "text-gradient"
  };
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["text-base", variantClasses[variant], className], "title": title, "data-astro-cid-jsr45nuq": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Text.astro", void 0);

export { $$Heading as $, $$Text as a };
