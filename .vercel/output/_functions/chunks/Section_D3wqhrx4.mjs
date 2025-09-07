import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, h as addAttribute, n as renderSlot, m as maybeRenderHead } from './astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
/* empty css                          */

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    as: Tag = "section",
    container = false,
    layout,
    padding = "sm",
    gap,
    cols,
    justify,
    align,
    direction,
    bgColor,
    bgImage,
    bgOpacity = 1,
    bgSize = "cover",
    bgPosition = "center",
    class: className,
    id
  } = Astro2.props;
  const bgStyles = [];
  if (bgColor) {
    const color = bgColor.startsWith("#") || bgColor.startsWith("rgb") ? bgColor : `var(--theme-${bgColor})`;
    bgStyles.push(`background-color: ${color}`);
  }
  if (bgImage) {
    bgStyles.push(`background-image: url(${bgImage})`);
    bgStyles.push(`background-size: ${bgSize}`);
    bgStyles.push(`background-position: ${bgPosition}`);
    bgStyles.push(`background-repeat: no-repeat;`);
  }
  if (bgOpacity < 1) {
    bgStyles.push(`opacity: ${bgOpacity}`);
  }
  const contentStyles = [];
  if (layout) {
    contentStyles.push(`display: ${layout}`);
    if (gap) contentStyles.push(`gap: ${gap}`);
    if (justify) contentStyles.push(`justify-content: ${justify}`);
    if (align) contentStyles.push(`align-items: ${align}`);
    if (layout === "flex" && direction) contentStyles.push(`flex-direction: ${direction}`);
    if (layout === "grid" && cols) {
      const gridCols = /^\d+$/.test(cols) ? `repeat(${cols}, 1fr)` : cols;
      contentStyles.push(`grid-template-columns: ${gridCols}`);
    }
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "id": id, "class:list": ["section-wrapper", className], "data-astro-cid-5v3l7meg": true }, { "default": ($$result2) => renderTemplate`${(bgImage || bgColor) && renderTemplate`${maybeRenderHead()}<div class="section-bg"${addAttribute(bgStyles.join("; "), "style")} data-astro-cid-5v3l7meg></div>`}<div${addAttribute(["section-content", { "container": container }], "class:list")}${addAttribute(contentStyles.join("; "), "style")} data-astro-cid-5v3l7meg> ${renderSlot($$result2, $$slots["default"])} </div> ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Section.astro", void 0);

export { $$Section as $ };
