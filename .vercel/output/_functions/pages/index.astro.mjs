import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import { c as $$Icon, a as $$Button, b as $$Layout } from '../chunks/Card_Cp0hndOh.mjs';
import { c as contentLoader, a as $$QueryLoop } from '../chunks/QueryLoop_CLzrzhf2.mjs';
import { $ as $$Section } from '../chunks/Section_D3wqhrx4.mjs';
import 'clsx';
/* empty css                                 */
import { a as $$Text, $ as $$Heading } from '../chunks/Text_DGm8vDJb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AnimatedSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnimatedSection;
  const {
    animation = "fade-in",
    delay = 0,
    threshold = 0.1,
    rootMargin = "0px",
    class: className = ""
  } = Astro2.props;
  function getInitialClass() {
    switch (animation) {
      case "slide-up":
        return "as-slide-up";
      case "slide-left":
        return "as-slide-left";
      case "slide-right":
        return "as-slide-right";
      case "scale-in":
        return "as-scale-in";
      default:
        return "as-fade-in";
    }
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`as-animated-section ${getInitialClass()} ${className}`, "class")}${addAttribute(`animation-delay: ${delay}ms;`, "style")} data-astro-cid-2sjmcec4> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/AnimatedSection.astro", void 0);

const $$DecorLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="decor-line" data-astro-cid-it6lo5wc> <div class="decor-line-left" data-astro-cid-it6lo5wc></div> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:star", "class": "decor-line-icon decor-line-star-rotate", "data-astro-cid-it6lo5wc": true })} <div class="decor-line-right" data-astro-cid-it6lo5wc></div> </div> `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/decor/DecorLine.astro", void 0);

const $$HeroIndex = createComponent(async ($$result, $$props, $$slots) => {
  const allIdentities = await contentLoader.loadSiteIdentity();
  const siteIdentity = allIdentities.find((s) => s.id === 1);
  return renderTemplate`${maybeRenderHead()}<section class="hero-index-section" data-astro-cid-yhjlmain> <div class="hero-index-container" data-astro-cid-yhjlmain> <div class="hero-index-grid" data-astro-cid-yhjlmain> <div class="hero-index-content" data-astro-cid-yhjlmain> ${renderComponent($$result, "Text", $$Text, { "as": "span", "variant": "secondary", "class": "hero-index-label", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`L'artisane de votre beauté` })} ${renderComponent($$result, "Heading", $$Heading, { "tag": "h1", "fontSize": "h1", "fontWeight": "700", "class": "hero-index-title", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`
Une Approche
<span class="hero-index-title-gradient" data-astro-cid-yhjlmain>Unique</span> ` })} ${renderComponent($$result, "Text", $$Text, { "as": "p", "class": "hero-index-desc", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`
Passionnée par l'art du maquillage et la transmission, je vous accompagne avec bienveillance pour révéler votre beauté naturelle et développer votre confiance.
` })} <div class="hero-index-rating" data-astro-cid-yhjlmain> <div class="hero-index-stars" data-astro-cid-yhjlmain> ${[...Array(5)].map((_, i) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:star", "class": "hero-index-star", "data-astro-cid-yhjlmain": true })}`)} </div> <span class="hero-index-rating-label" data-astro-cid-yhjlmain>4.9/5 • 120+ clientes satisfaites</span> </div> <div class="hero-index-ctas" data-astro-cid-yhjlmain> ${renderComponent($$result, "Button", $$Button, { "href": "/services", "variant": "primary", "size": "lg", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`Découvrir mes services` })} ${renderComponent($$result, "Button", $$Button, { "href": "/galerie", "variant": "secondary", "size": "lg", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`Voir la galerie` })} </div> ${renderComponent($$result, "DecorLine", $$DecorLine, { "data-astro-cid-yhjlmain": true })} </div> <div class="hero-index-image-wrap" data-astro-cid-yhjlmain> <div class="hero-index-image-container" data-astro-cid-yhjlmain> <img${addAttribute(siteIdentity?.heroImage || "/assets/placeholder.jpg", "src")} alt="Neill Beauty - Maquillage professionnel" class="hero-index-image" data-astro-cid-yhjlmain> <div class="hero-index-image-gradient" data-astro-cid-yhjlmain></div> </div> <div class="hero-index-badge" data-astro-cid-yhjlmain> <div class="hero-index-badge-content" data-astro-cid-yhjlmain> ${renderComponent($$result, "Text", $$Text, { "as": "div", "class": "hero-index-badge-years", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`15+` })} ${renderComponent($$result, "Text", $$Text, { "as": "div", "class": "hero-index-badge-label", "data-astro-cid-yhjlmain": true }, { "default": async ($$result2) => renderTemplate`Années d'expérience` })} </div> </div> </div> </div> </div> </section> `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/Banner/HeroIndex.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slider;
  const {
    preset = "default",
    className = "",
    gap = "1.5rem",
    itemMinWidth = "280px",
    showScrollbar = false,
    autoScroll = false,
    scrollSpeed = 50,
    pauseOnHover = true
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", "", "", "", ' data-astro-cid-gumh76hp> <div class="slider-container" data-astro-cid-gumh76hp> <ul class="slider-list" data-astro-cid-gumh76hp> ', ` </ul> </div> <div class="slider-controls" data-astro-cid-gumh76hp> <button class="slider-button slider-button--prev" aria-label="Scroll left" data-astro-cid-gumh76hp> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-astro-cid-gumh76hp> <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gumh76hp></path> </svg> </button> <button class="slider-button slider-button--next" aria-label="Scroll right" data-astro-cid-gumh76hp> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-astro-cid-gumh76hp> <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gumh76hp></path> </svg> </button> </div> </div>  <script type="module">
  class SliderComponent {
    constructor(slider) {
      this.slider = slider;
      this.list = slider.querySelector('.slider-list');
      this.prevButton = slider.querySelector('.slider-button--prev');
      this.nextButton = slider.querySelector('.slider-button--next');
      
      this.scrollAmount = 280; // Default scroll amount
      
      this.init();
    }

    init() {
      this.bindEvents();
      this.updateButtons();
    }

    bindEvents() {
      if (this.prevButton) {
        this.prevButton.addEventListener('click', () => this.scrollLeft());
      }
      
      if (this.nextButton) {
        this.nextButton.addEventListener('click', () => this.scrollRight());
      }

      // Update button states on scroll
      this.list.addEventListener('scroll', () => this.updateButtons());

      // Keyboard navigation
      this.slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.scrollLeft();
        if (e.key === 'ArrowRight') this.scrollRight();
      });

      // Touch/swipe support
      let startX = 0;
      let scrollLeft = 0;

      this.list.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - this.list.offsetLeft;
        scrollLeft = this.list.scrollLeft;
      });

      this.list.addEventListener('touchmove', (e) => {
        if (!startX) return;
        e.preventDefault();
        const x = e.touches[0].pageX - this.list.offsetLeft;
        const walk = (x - startX) * 2;
        this.list.scrollLeft = scrollLeft - walk;
      });

      this.list.addEventListener('touchend', () => {
        startX = 0;
      });
    }

    scrollLeft() {
      this.list.scrollBy({
        left: -this.scrollAmount,
        behavior: 'smooth'
      });
    }

    scrollRight() {
      this.list.scrollBy({
        left: this.scrollAmount,
        behavior: 'smooth'
      });
    }

    updateButtons() {
      const isAtStart = this.list.scrollLeft <= 0;
      const isAtEnd = this.list.scrollLeft >= this.list.scrollWidth - this.list.clientWidth - 1;

      if (this.prevButton) {
        this.prevButton.disabled = isAtStart;
      }
      if (this.nextButton) {
        this.nextButton.disabled = isAtEnd;
      }
    }
  }

  // Initialize all sliders
  document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-wrapper');
    sliders.forEach(slider => new SliderComponent(slider));
  });
<\/script>`])), maybeRenderHead(), addAttribute(`slider-wrapper preset-slider-${preset} ${className}`, "class"), addAttribute(`
    --slider-gap: ${gap};
    --slider-item-min-width: ${itemMinWidth};
    --slider-scroll-speed: ${scrollSpeed}s;
    ${showScrollbar ? "" : "--slider-scrollbar-display: none;"}
  `, "style"), addAttribute(autoScroll, "data-auto-scroll"), addAttribute(pauseOnHover, "data-pause-on-hover"), renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/organisms/Slider.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Accueil", "description": "Bienvenue sur le site de maquillage professionnel \xE0 Annecy. D\xE9couvrez nos services, formations, \xE9quipe et galerie.", "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="position:relative; min-height:100vh;"> ${renderComponent($$result2, "HeroIndex", $$HeroIndex, {})} <div style="position:relative; z-index:1;"> ${renderComponent($$result2, "AnimatedSection", $$AnimatedSection, { "animation": "fade-in" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` <h1>Nos Services</h1> ${renderComponent($$result4, "DecorLine", $$DecorLine, {})} ${renderComponent($$result4, "QueryLoop", $$QueryLoop, { "collection": "services", "active": true, "columns": 3, "gap": 6 })} ` })} ` })} ${renderComponent($$result2, "AnimatedSection", $$AnimatedSection, { "animation": "slide-up", "delay": 100 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` <h2>Formations</h2> ${renderComponent($$result4, "DecorLine", $$DecorLine, {})} ${renderComponent($$result4, "QueryLoop", $$QueryLoop, { "collection": "formations", "columns": 2, "gap": 6 })} ` })} ` })} ${renderComponent($$result2, "AnimatedSection", $$AnimatedSection, { "animation": "slide-left", "delay": 200 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` <h2>Notre équipe</h2> ${renderComponent($$result4, "DecorLine", $$DecorLine, {})} ${renderComponent($$result4, "QueryLoop", $$QueryLoop, { "collection": "team", "active": true, "columns": 3, "gap": 6 })} ` })} ` })} ${renderComponent($$result2, "AnimatedSection", $$AnimatedSection, { "animation": "slide-right", "delay": 300 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` <h2>Galerie</h2> ${renderComponent($$result4, "DecorLine", $$DecorLine, {})} ${renderComponent($$result4, "QueryLoop", $$QueryLoop, { "collection": "galerie", "global": true, "columns": 4, "gap": 4 })} ` })} ` })} ${renderComponent($$result2, "AnimatedSection", $$AnimatedSection, { "animation": "scale-in", "delay": 400 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` <h2>Avis</h2> ${renderComponent($$result4, "DecorLine", $$DecorLine, {})} ${renderComponent($$result4, "QueryLoop", $$QueryLoop, { "collection": "avis", "global": true, "columns": 2, "gap": 4 })} ` })} ` })} <!-- Test Slider pour avis --> ${renderComponent($$result2, "AnimatedSection", $$AnimatedSection, { "animation": "fade-in", "delay": 500 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` <h2>Avis (Slider Test)</h2> ${renderComponent($$result4, "DecorLine", $$DecorLine, {})} ${renderComponent($$result4, "Slider", $$Slider, { "preset": "accent", "gap": "1.2rem", "itemMinWidth": "320px" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "QueryLoop", $$QueryLoop, { "collection": "avis", "global": true, "columns": 2, "gap": 0.5 })} ` })} ` })} ` })} </div> </div> ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
