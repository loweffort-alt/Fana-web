/* empty css                         */
import { k as createComponent, l as renderTemplate, n as addAttribute, p as renderHead, q as renderSlot, o as createAstro, m as maybeRenderHead, t as renderComponent } from './astro/server_B0zU52s8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/alex/Projects/Fana/src/layouts/Layout.astro", void 0);

const $$LogoIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="90" height="30" fill="none" viewBox="0 0 100 40"><path fill="#1D2633" d="M4.77 4.235C5.03 3.001 6.26 2 7.513 2h6.812L8.66 28.823H1.848c-1.254 0-2.06-1-1.799-2.235L4.77 4.235ZM27.477 4.235C27.738 3.001 28.967 2 30.22 2h6.812l-5.665 26.823h-6.812c-1.254 0-2.06-1-1.799-2.235l4.721-22.353ZM72.892 4.235C73.152 3.001 74.38 2 75.635 2h6.812l-5.665 26.823h-6.813c-1.254 0-2.059-1-1.798-2.235l4.72-22.353ZM39.303 2h6.812c1.254 0 2.06 1 1.799 2.235l-4.721 22.353c-.26 1.235-1.489 2.235-2.743 2.235h-6.812L39.303 2ZM84.718 2h6.812c1.254 0 2.06 1 1.799 2.235l-4.722 22.353c-.26 1.235-1.488 2.235-2.742 2.235h-6.813L84.718 2ZM50.185 4.235C50.445 3.001 51.673 2 52.927 2h6.813l-5.666 26.823h-6.812c-1.254 0-2.06-1-1.798-2.235l4.72-22.353ZM62.01 2h6.813c1.254 0 2.059 1 1.798 2.235l-7.081 33.53C63.278 38.999 62.05 40 60.796 40h-6.813L62.01 2ZM12.819 19.882h9.083l-1.416 6.706c-.261 1.235-1.49 2.235-2.743 2.235H10.93l1.888-8.94ZM44.52 31.059h9.082L51.714 40h-6.812c-1.255 0-2.06-1-1.799-2.235l1.416-6.706ZM69.174 33.138l-1.15 5.446c-.05.234-.128.298-.366.298h-.523c-.238 0-.29-.064-.24-.298l1.15-5.446c.05-.233.128-.298.366-.298h.523c.238 0 .29.065.24.298ZM70.686 36.812h-.107c-.114 0-.154.032-.177.145l-.344 1.627c-.05.234-.129.298-.366.298h-.524c-.237 0-.289-.064-.24-.298l1.15-5.446c.05-.233.13-.298.367-.298h1.08c1.244 0 1.715.443 1.485 1.53l-.192.911c-.23 1.088-.888 1.53-2.132 1.53Zm.316-2.699-.3 1.426c-.025.113.001.145.116.145h.172c.4 0 .615-.161.702-.572l.12-.572c.087-.41-.059-.572-.46-.572h-.172c-.114 0-.154.032-.178.145ZM74.74 34.991l.85.935c.446.483.508.773.394 1.313l-.03.145c-.215 1.015-.727 1.579-1.914 1.579-1.186 0-1.479-.475-1.205-1.773l.034-.16c.05-.234.129-.299.366-.299h.556c.238 0 .29.065.24.298l-.075.355c-.068.322.036.451.322.451.287 0 .443-.12.505-.41l.032-.154c.048-.226.022-.338-.224-.604l-.8-.862c-.448-.475-.505-.75-.391-1.29l.037-.176c.215-1.015.727-1.58 1.913-1.58 1.187 0 1.48.476 1.206 1.773l-.034.161c-.05.234-.129.298-.366.298h-.557c-.237 0-.289-.064-.24-.298l.075-.354c.068-.323-.035-.451-.322-.451-.286 0-.443.12-.504.41l-.029.137c-.05.234-.024.347.161.556ZM79.532 33.138c.05-.233.128-.298.366-.298h.523c.238 0 .29.065.24.298l-.856 4.053c-.274 1.297-.767 1.772-1.954 1.772-1.186 0-1.479-.475-1.205-1.773l.856-4.052c.05-.233.129-.298.366-.298h.524c.237 0 .289.065.24.298l-.897 4.246c-.068.322.044.451.355.451.302 0 .477-.129.545-.451l.897-4.246ZM82.938 36.417c.003.065.024.08.065.08.04 0 .069-.015.099-.08l1.414-3.367c.069-.17.151-.21.356-.21h.794c.237 0 .289.065.24.298l-1.15 5.446c-.05.234-.13.298-.367.298h-.376c-.237 0-.29-.064-.24-.298l.552-2.61c.015-.072.002-.089-.047-.089-.033 0-.07.017-.09.073l-1.142 2.659c-.082.193-.187.265-.424.265H82.4c-.246 0-.32-.072-.32-.265l-.028-2.66c-.005-.056-.018-.072-.059-.072-.049 0-.069.017-.084.089l-.551 2.61c-.05.234-.128.298-.366.298h-.376c-.238 0-.29-.064-.24-.298l1.15-5.446c.05-.233.129-.298.366-.298h.68c.286 0 .378.065.376.347l-.011 3.23ZM100 2c0 1.105-.89 2-1.987 2a1.993 1.993 0 0 1-1.987-2c0-1.105.89-2 1.987-2S100 .895 100 2Z"></path></svg>`;
}, "/home/alex/Projects/Fana/src/icons/LogoIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center p-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LogoIcon", $$LogoIcon, { "data-astro-cid-3ef6ksr2": true })} <!-- TODO: Hacerlo Responsive --> <ul class="hidden gap-5 items-center text-sm sm:flex" data-astro-cid-3ef6ksr2> <li class="group" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2> <span class="text-red-600 invisible group-hover:visible" data-astro-cid-3ef6ksr2>/</span> Home +
</a> </li> <li class="group" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2> <span class="text-red-600 invisible group-hover:visible" data-astro-cid-3ef6ksr2>/</span> Pages +
</a> </li> <li class="group" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2> <span class="text-red-600 invisible group-hover:visible" data-astro-cid-3ef6ksr2>/</span> Projects
        +
</a> </li> <li class="group" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2> <span class="text-red-600 invisible group-hover:visible" data-astro-cid-3ef6ksr2>/</span> Blog +
</a> </li> <li class="group" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2> <span class="text-red-600 invisible group-hover:visible" data-astro-cid-3ef6ksr2>/</span> Shop +
</a> </li> <li class="group" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2> <span class="text-red-600 invisible group-hover:visible" data-astro-cid-3ef6ksr2>/</span> Contacts
        +
</a> </li> </ul> <div class="flex gap-5 items-center relative" data-astro-cid-3ef6ksr2> <!-- <ShopCartIcon /> --> <!-- <SearchIcon /> --> <button class="bg-red-600 p-4 transition-all duration-300 hover:bg-red-700 hover:scale-105 rounded-md text-white text-sm h-full" data-astro-cid-3ef6ksr2>Agenda tu cita!</button> </div> </header> `;
}, "/home/alex/Projects/Fana/src/components/Header.astro", void 0);

function HeroBackground() {
  const texts = ["experiencia", "calidad", "novedad", "atencion"];
  const [text, setText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setText(texts[index]);
    const show = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    const hide = setTimeout(() => {
      setIsVisible(false);
    }, 4e3);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [index]);
  return /* @__PURE__ */ jsx("div", { className: "absolute z-10 h-full w-full text-center text-neutral-300 text-[4.5rem] lg:text-[13rem]", children: /* @__PURE__ */ jsxs("span", { className: "relative text font-bold", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `absolute z-[-1] ${isVisible ? "text-bottom opacity-0" : "invisible"}`,
        children: text
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: ` transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 scale-0"}`,
        children: text
      }
    )
  ] }) });
}

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="w-fit border-2 p-6 py-3 border-red-600 text-lg font-semibold rounded transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105">Learn More</button>`;
}, "/home/alex/Projects/Fana/src/components/Button.astro", void 0);

const $$FacebookIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="transition duration-300 hover:fill-red-700"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"></path></svg> </button>`;
}, "/home/alex/Projects/Fana/src/icons/FacebookIcon.astro", void 0);

const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="transition duration-300 hover:fill-red-700"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"></path></svg> </button>`;
}, "/home/alex/Projects/Fana/src/icons/InstagramIcon.astro", void 0);

const $$WhatsappIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="transition duration-300 hover:fill-red-700" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"></path></svg> </button>`;
}, "/home/alex/Projects/Fana/src/icons/WhatsappIcon.astro", void 0);

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative z-20 col-span-4 translate-x-[15%] lg:translate-x-0"> <div class="flex flex-col justify-between h-full"> <h1 class="text-5xl font-bold mb-7 mt-32 [text-shadow:_0px_0px_3px_rgb(0_0_0_/_25%)]"> <p class="w-fit text-lg font-semibold text-red-700 leading-tight">
/ ATENDEMOS TODO TIPO DE MARCAS Y MODELOS <br> </p>
Servicio de Mantenimiento <br>Y Reparaciones Avanzadas
</h1> ${renderComponent($$result, "Button", $$Button, {})} <div class="w-full flex mt-10"> <span class="mr-4 font-semibold"> We are in Socials </span> <div class="flex gap-5 items-center"> ${renderComponent($$result, "FacebookIcon", $$FacebookIcon, {})} ${renderComponent($$result, "InstagramIcon", $$InstagramIcon, {})} ${renderComponent($$result, "WhatsappIcon", $$WhatsappIcon, {})} </div> </div> </div> </div>`;
}, "/home/alex/Projects/Fana/src/components/HeroContent.astro", void 0);

const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<picture class="-z-10 col-span-3 h-10 flex justify-center items-center -translate-y-8"> <img class="max-w-none object-none scale-75 lg:scale-100" src="https://i.postimg.cc/FH7DK3WN/pngwing-com-1.png" alt="landcruiser-rojo"> </picture>`;
}, "/home/alex/Projects/Fana/src/components/HeroImage.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="grid h-[610px] grid-cols-7 justify-items-center items-center relative overflow-hidden"> ${renderComponent($$result, "HeroBackground", HeroBackground, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/alex/Projects/Fana/src/components/HeroBackground", "client:component-export": "HeroBackground" })} ${renderComponent($$result, "HeroContent", $$HeroContent, {})} ${renderComponent($$result, "HeroImage", $$HeroImage, {})} </section> <style>
  .text {
    position: relative;
    user-select: none;
    cursor: default;
  }

  .text .text-bottom {
    animation: myanim 3.5s 0.5s 1 forwards;
  }

  @keyframes myanim {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    75% {
      transform: scale(1.25);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>`;
}, "/home/alex/Projects/Fana/src/components/Hero.astro", void 0);

const $$MainServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-28 bg-red-200 grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 items-center lb:h-72" data-astro-cid-qkintdf6> <!-- <div></div> --> <div class="bg-red-600 white h-full flex justify-center items-center relative overflow-hidden" data-astro-cid-qkintdf6> <picture class="absolute rotate-[35deg] -translate-y-1/3 translate-x-1/4 opacity-85" data-astro-cid-qkintdf6> <img src="https://i.postimg.cc/NGWvTV5Y/png-transparent-car-tire-tread-wheel-printed-tires-printed-tread-pattern-stains-angle-text-photograp.png" alt="road_marks" data-astro-cid-qkintdf6> </picture> <div class="text-white font-semibold" data-astro-cid-qkintdf6>Putadon</div> <span class="absolute leading-none text-white bottom-0 right-0 font-extrabold text-[10rem] align-text-bottom opacity-50" data-astro-cid-qkintdf6>01</span> </div> <!-- <div></div> --> <!-- <div></div> --> <picture class="bg-blue-200 h-full w-full overflow-hidden" data-astro-cid-qkintdf6> <img class="object-cover aspect-square" src="https://i.postimg.cc/sD7sYDVf/Oil-Change-How-Long-Does-it-Take.jpg" alt="Motor maintainance" data-astro-cid-qkintdf6> </picture> <!-- <div></div> --> <!-- <div></div> --> <div class="row-start-2 row-end-2 col-start-2 col-end-3 row-span-1 col-span-1 lg:row-start-1 lg:col-start-3 texture02 h-full flex justify-center items-center relative overflow-hidden z-10" data-astro-cid-qkintdf6> <div class="text-white font-semibold" data-astro-cid-qkintdf6>Putadon</div> <span class="absolute leading-none text-white bottom-0 right-0 font-extrabold text-[10rem] align-text-bottom opacity-50" data-astro-cid-qkintdf6>02</span> </div> <!-- <div></div> --> <!-- <div></div> --> <picture class="row-span-1 col-start-1 col-end-2 col-span-1 lg:row-start-1 lg:col-start-4 lg:col-end-5 bg-blue-200 h-full w-full overflow-hidden relative" data-astro-cid-qkintdf6> <img class="absolute object-cover aspect-square bottom-0 right-0" src="https://i.postimg.cc/XqFx4MYV/Premium-Photo-Master-collects-a-rebuilt-motor-for-the-car.jpg" alt="Motor maintainance" data-astro-cid-qkintdf6> </picture> <!-- <div></div> --> </div> `;
}, "/home/alex/Projects/Fana/src/components/MainServices.astro", void 0);

const $$ExtraServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-96 bg-slate-200">ExtraServices</div>`;
}, "/home/alex/Projects/Fana/src/components/ExtraServices.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/alex/Projects/Fana/src/components/WhyChooseUs.astro", void 0);

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/alex/Projects/Fana/src/components/OurTeam.astro", void 0);

const $$AdvanceServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/alex/Projects/Fana/src/components/AdvanceServices.astro", void 0);

const $$Carrousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/alex/Projects/Fana/src/components/Carrousel.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/alex/Projects/Fana/src/components/Footer.astro", void 0);

const $$PhoneIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="#e43f29" viewBox="0 0 24 24" class="size-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg>`;
}, "/home/alex/Projects/Fana/src/icons/PhoneIcon.astro", void 0);

const $$AddressIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="size-5" viewBox="0 0 24 24" fill="#e43f29"><path stroke-linecap="round" stroke-linejoin="round" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>`;
}, "/home/alex/Projects/Fana/src/icons/AddressIcon.astro", void 0);

const $$StatusIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="green" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`;
}, "/home/alex/Projects/Fana/src/icons/StatusIcon.astro", void 0);

const $$StatusBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- TODO: Hacerlo Responsive -->${maybeRenderHead()}<div class="flex justify-between text-sm bg-black text-white p-3 flex-col sm:flex-row" data-astro-cid-fab2rga2> <div class="flex gap-2 items-center" data-astro-cid-fab2rga2> ${renderComponent($$result, "PhoneIcon", $$PhoneIcon, { "data-astro-cid-fab2rga2": true })} <span class="mr-2" data-astro-cid-fab2rga2>+51 991027051</span> ${renderComponent($$result, "AddressIcon", $$AddressIcon, { "data-astro-cid-fab2rga2": true })} <span data-astro-cid-fab2rga2> Villa El Salvador, Lima, Perú </span> </div> <div class="flex items-center gap-3" data-astro-cid-fab2rga2> <span data-astro-cid-fab2rga2>Abierto 8:00 am - 8:00 pm</span> ${renderComponent($$result, "StatusIcon", $$StatusIcon, { "data-astro-cid-fab2rga2": true })} </div> </div> `;
}, "/home/alex/Projects/Fana/src/components/StatusBar.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StatusBar", $$StatusBar, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "MainServices", $$MainServices, {})} ${renderComponent($$result2, "ExtraServices", $$ExtraServices, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "OurTeam", $$OurTeam, {})} ${renderComponent($$result2, "AdvanceServices", $$AdvanceServices, {})} ${renderComponent($$result2, "Carrousel", $$Carrousel, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/alex/Projects/Fana/src/pages/index.astro", void 0);

const $$file = "/home/alex/Projects/Fana/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
