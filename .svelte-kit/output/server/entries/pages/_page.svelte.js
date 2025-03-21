import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/ssr.js";
import { L as LightButton } from "../../chunks/SocialsLogos.svelte_svelte_type_style_lang.js";
import { O as OutlinedButton, l as logo } from "../../chunks/OutlinedButton.js";
import { D as Deco, N as NewsCard, n as newsImage1, a as newsImage2, b as newsImage3 } from "../../chunks/NewsSection.svelte_svelte_type_style_lang.js";
import { B as BgGradient } from "../../chunks/BgGradient.js";
/* empty css                                                     */
const css$2 = {
  code: '.banner-background.svelte-81kf01{width:100%;background-image:url("../../../assets/images/banner01.png");background-size:cover;background-position:center;background-repeat:no-repeat}.content.svelte-81kf01{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}',
  map: '{"version":3,"file":"LearnMoreSection.svelte","sources":["LearnMoreSection.svelte"],"sourcesContent":["<script>\\n  import OutlinedButton from \\"../UI/Buttons/OutlinedButton.svelte\\"\\n<\/script>\\n\\n<section class=\\"banner-background\\">\\n  <div class=\\"content pt-32 pb-16 max-md:pt-12 max-md:pb-8\\">\\n    <h1\\n      class=\\"text-white text-8xl font-cormorantSC max-lg:text-5xl max-sm:text-4xl max-xs:text-3xl\\"\\n    >\\n      Lorem ipsum\\n    </h1>\\n    <h2\\n      class=\\"text-white text-center text-xl pt-8 max-lg:text-lg max-md:text-sm\\"\\n    >\\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    </h2>\\n    <OutlinedButton\\n      href=\\"/features\\"\\n      text=\\"Learn More\\"\\n      class=\\"mt-16 max-md:mt-5 py-6 px-8 max-lg:px-4 max-lg:py-4 max-md:py-2\\"\\n    />\\n  </div>\\n</section>\\n\\n<style>\\n  .banner-background {\\n    width: 100%;\\n    background-image: url(\\"../../../assets/images/banner01.png\\");\\n    background-size: cover;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n  }\\n\\n  .content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 100%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyBE,gCAAmB,CACjB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,0CAA0C,CAC5D,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SACrB,CAEA,sBAAS,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IACV"}'
};
const LearnMoreSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="banner-background svelte-81kf01"><div class="content pt-32 pb-16 max-md:pt-12 max-md:pb-8 svelte-81kf01"><h1 class="text-white text-8xl font-cormorantSC max-lg:text-5xl max-sm:text-4xl max-xs:text-3xl" data-svelte-h="svelte-14cn0x1">Lorem ipsum</h1> <h2 class="text-white text-center text-xl pt-8 max-lg:text-lg max-md:text-sm" data-svelte-h="svelte-m8zcnj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2> ${validate_component(OutlinedButton, "OutlinedButton").$$render(
    $$result,
    {
      href: "/features",
      text: "Learn More",
      class: "mt-16 max-md:mt-5 py-6 px-8 max-lg:px-4 max-lg:py-4 max-md:py-2"
    },
    {},
    {}
  )}</div> </section>`;
});
const bgNewsImage = "/_app/immutable/assets/bgNews.y3P85nV_.png";
const css$1 = {
  code: '.banner-container.svelte-sr9mur{position:relative;width:100%;display:flex;justify-content:center;align-items:center;height:10%}.banner-content.svelte-sr9mur{position:relative;width:100%}.gradient.svelte-sr9mur::before{content:"";position:absolute;top:0;left:0;right:0;height:100px;width:100%;z-index:1;background:linear-gradient(\n      to bottom,\n      rgba(10, 19, 25, 1) 0%,\n      rgba(10, 19, 25, 0) 100%\n    )}.banner-content.svelte-sr9mur::after{content:"";position:absolute;bottom:0;left:0;right:0;height:100px;width:100%;z-index:1;background:linear-gradient(180deg, rgba(25, 13, 10, 0) 0%, #190d0a 39.32%)}@media(max-width: 768px){.banner-content.svelte-sr9mur::after{height:40px}}img.svelte-sr9mur{display:block;width:100%;height:auto;z-index:0}',
  map: '{"version":3,"file":"GradientBox.svelte","sources":["GradientBox.svelte"],"sourcesContent":["<script>\\n  export let src\\n  export let showGradientOnTop = false\\n<\/script>\\n\\n<section class=\\"banner-container\\">\\n  <div class=\\"banner-content\\" class:gradient={showGradientOnTop}>\\n    <img {src} alt=\\"banner\\" class=\\"w-full\\" />\\n  </div>\\n</section>\\n\\n<style>\\n  .banner-container {\\n    position: relative;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 10%;\\n  }\\n\\n  .banner-content {\\n    position: relative;\\n    width: 100%;\\n  }\\n\\n  .gradient::before {\\n    content: \\"\\";\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    height: 100px;\\n    width: 100%;\\n    z-index: 1;\\n    background: linear-gradient(\\n      to bottom,\\n      rgba(10, 19, 25, 1) 0%,\\n      rgba(10, 19, 25, 0) 100%\\n    );\\n  }\\n\\n  .banner-content::after {\\n    content: \\"\\";\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    height: 100px;\\n    width: 100%;\\n    z-index: 1;\\n    background: linear-gradient(180deg, rgba(25, 13, 10, 0) 0%, #190d0a 39.32%);\\n  }\\n\\n  @media (max-width: 768px) {\\n    .banner-content::after {\\n      height: 40px;\\n    }\\n  }\\n\\n  img {\\n    display: block;\\n    width: 100%;\\n    height: auto;\\n    z-index: 0;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAYE,+BAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GACV,CAEA,6BAAgB,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IACT,CAEA,uBAAS,QAAS,CAChB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,UAAU,CAAE;AAChB,MAAM,EAAE,CAAC,MAAM,CAAC;AAChB,MAAM,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;AAC7B,MAAM,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI;AAC9B,KACE,CAEA,6BAAe,OAAQ,CACrB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,MAAM,CAC5E,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAe,OAAQ,CACrB,MAAM,CAAE,IACV,CACF,CAEA,iBAAI,CACF,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CACX"}'
};
const GradientBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { showGradientOnTop = false } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.showGradientOnTop === void 0 && $$bindings.showGradientOnTop && showGradientOnTop !== void 0)
    $$bindings.showGradientOnTop(showGradientOnTop);
  $$result.css.add(css$1);
  return `<section class="banner-container svelte-sr9mur"><div class="${["banner-content svelte-sr9mur", showGradientOnTop ? "gradient" : ""].join(" ").trim()}"><img${add_attribute("src", src, 0)} alt="banner" class="w-full svelte-sr9mur"></div> </section>`;
});
const css = {
  code: ".news-grid.svelte-huxy7u{display:grid;justify-items:center;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1.5rem;justify-content:center;padding:2rem}@media(max-width: 768px){.news-grid.svelte-huxy7u{grid-template-columns:1fr}}",
  map: '{"version":3,"file":"NewsSection.svelte","sources":["NewsSection.svelte"],"sourcesContent":["<script>\\n  import bgNewsImage from \\"../../../assets/images/bgNews.png\\"\\n  import deco from \\"../../../assets/icons/deco.svg\\"\\n  import GradientBox from \\"../UI/GradientBox.svelte\\"\\n  import BgGradient from \\"../UI/BgGradient.svelte\\"\\n  import Deco from \\"../../components/UI/Deco/Deco.svelte\\"\\n  import NewsCard from \\"./NewsCard/NewsCard.svelte\\"\\n  import newsImage1 from \\"../../../assets/images/newsimage1.png\\"\\n  import newsImage2 from \\"../../../assets/images/newsimage2.png\\"\\n  import newsImage3 from \\"../../../assets/images/newsimage3.png\\"\\n  import logo from \\"../../../assets/images/logo.png\\"\\n  import OutlinedButton from \\"../UI/Buttons/OutlinedButton.svelte\\"\\n<\/script>\\n\\n<section\\n  class=\\"bg-background-primary pt-36 pb-12 max-lg:pt-16 max-lg:pb-0 max-sm:pt-10\\"\\n>\\n  <BgGradient\\n    src={bgNewsImage}\\n    showGradientOnTop\\n    class=\\"h-[800px] max-md:h-[1500px] max-sm:h-[1450px] max-xs:h-[1270px]\\"\\n  >\\n    <Deco title=\\"MEDIA ARTICLES\\" />\\n    <div class=\\"news-grid mt-14 max-sm:mt-0 2xl:mx-64\\">\\n      <NewsCard imageSrc={newsImage1} logoSrc={logo} />\\n      <NewsCard imageSrc={newsImage2} logoSrc={logo} />\\n      <NewsCard imageSrc={newsImage3} logoSrc={logo} />\\n    </div>\\n    <div class=\\"w-full flex justify-center pt-6 max-md:pt-0\\">\\n      <OutlinedButton\\n        href=\\"/news\\"\\n        text={\\"All News\\"}\\n        class=\\"py-6 px-12 max-lg:px-8 max-lg:py-4 max-md:py-2\\"\\n      />\\n    </div>\\n  </BgGradient>\\n</section>\\n\\n<style>\\n  .news-grid {\\n    display: grid;\\n    justify-items: center;\\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\\n    gap: 1.5rem;\\n    justify-content: center;\\n    padding: 2rem;\\n  }\\n\\n  @media (max-width: 768px) {\\n    .news-grid {\\n      grid-template-columns: 1fr;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuCE,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,MAAM,CACX,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,IACX,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,wBAAW,CACT,qBAAqB,CAAE,GACzB,CACF"}'
};
const NewsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="bg-background-primary pt-36 pb-12 max-lg:pt-16 max-lg:pb-0 max-sm:pt-10">${validate_component(BgGradient, "BgGradient").$$render(
    $$result,
    {
      src: bgNewsImage,
      showGradientOnTop: true,
      class: "h-[800px] max-md:h-[1500px] max-sm:h-[1450px] max-xs:h-[1270px]"
    },
    {},
    {
      default: () => {
        return `${validate_component(Deco, "Deco").$$render($$result, { title: "MEDIA ARTICLES" }, {}, {})} <div class="news-grid mt-14 max-sm:mt-0 2xl:mx-64 svelte-huxy7u">${validate_component(NewsCard, "NewsCard").$$render($$result, { imageSrc: newsImage1, logoSrc: logo }, {}, {})} ${validate_component(NewsCard, "NewsCard").$$render($$result, { imageSrc: newsImage2, logoSrc: logo }, {}, {})} ${validate_component(NewsCard, "NewsCard").$$render($$result, { imageSrc: newsImage3, logoSrc: logo }, {}, {})}</div> <div class="w-full flex justify-center pt-6 max-md:pt-0">${validate_component(OutlinedButton, "OutlinedButton").$$render(
          $$result,
          {
            href: "/news",
            text: "All News",
            class: "py-6 px-12 max-lg:px-8 max-lg:py-4 max-md:py-2"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )} </section>`;
});
const banner = "/_app/immutable/assets/BannerAOE.eNrH1jdL.png";
const subtract = "data:image/svg+xml,%3csvg%20width='196'%20height='196'%20viewBox='0%200%20196%20196'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M98%20196C152.124%20196%20196%20152.124%20196%2098C196%2043.8761%20152.124%200%2098%200C43.8761%200%200%2043.8761%200%2098C0%20152.124%2043.8761%20196%2098%20196ZM67.1161%2044.546L161.76%2097.1258C162.446%2097.5068%20162.446%2098.4931%20161.76%2098.8742L67.1161%20151.454C66.3163%20151.898%2065.3333%20151.32%2065.3333%20150.405V45.595C65.3333%2044.68%2066.3163%2044.1016%2067.1161%2044.546Z'%20fill='white'/%3e%3c/svg%3e";
const TrailerPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section data-svelte-h="svelte-2ia4x7"><div class="w-[900px] h-[500px] max-xl:w-[600px] max-xl:h-[400px] max-lg:w-[400px] max-lg:h-[300px] max-md:w-[300px] max-md:h-[200px] mt-20 flex justify-center items-center bg-[#838383] lg:-mb-44 md:-mb-24 sm:-mb-12"><img${add_attribute("src", subtract, 0)} alt="subtract" class="w-28 max-md:w-20"></div></section>`;
});
const TopSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="relative bg-background-primary flex justify-center items-center flex-col">${validate_component(GradientBox, "GradientBox").$$render($$result, { src: banner }, {}, {})} <div class="relative -top-60 max-xl:-top-44 max-lg:-top-24 max-sm:-top-10 left-0 right-0 flex justify-center items-center flex-col z-10"><p class="text-white px-4 text-center text-xl mt-[0px] max-md:text-sm" data-svelte-h="svelte-1gzvxxm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> ${validate_component(LightButton, "LightButton").$$render(
    $$result,
    {
      text: "Play Now",
      class: "mt-16 max-md:mt-5"
    },
    {},
    {}
  )} ${validate_component(TrailerPlaceholder, "TrailerPlaceholder").$$render($$result, {}, {}, {})}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section>${validate_component(TopSection, "TopSection").$$render($$result, {}, {}, {})} ${validate_component(LearnMoreSection, "LearnMoreSection").$$render($$result, {}, {}, {})} ${validate_component(NewsSection, "NewsSection").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
