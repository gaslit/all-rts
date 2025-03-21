import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, d as null_to_empty, o as onDestroy } from "../../chunks/ssr.js";
import { L as LightButton } from "../../chunks/SocialsLogos.svelte_svelte_type_style_lang.js";
import { l as logo, O as OutlinedButton } from "../../chunks/OutlinedButton.js";
import { a as arrowDown } from "../../chunks/arrow-down-light.js";
import { B as BgGradient } from "../../chunks/BgGradient.js";
import { S as SmallerDeco } from "../../chunks/SmallerDeco.js";
const css$4 = {
  code: '.divider.svelte-w1sp76{position:relative;z-index:10;background:linear-gradient(268deg, #ad7636 -1.99%, #4b261a 102.16%)}.divider.svelte-w1sp76::before{content:"";position:absolute;top:0;left:0;width:100%;height:5px;background:#e3b26d;background:linear-gradient(\n      271deg,\n      rgba(177, 100, 76, 0) 12.88%,\n      #e39e6d 65.58%\n    )}.shadow.svelte-w1sp76{position:absolute;top:0;right:0;width:100%;height:100%;background:linear-gradient(450deg, rgba(0, 0, 0, 0) 0%, #190e0a 90%)}',
  map: '{"version":3,"file":"DownloadDivider.svelte","sources":["DownloadDivider.svelte"],"sourcesContent":["<script>\\n  import LightButton from \\"../UI/Buttons/LightButton.svelte\\"\\n<\/script>\\n\\n<section class=\\"bg-background-primary py-10 max-md:py-2\\">\\n  <div class=\\"divider\\">\\n    <div class=\\"shadow\\" />\\n    <div class=\\"flex items-center\\">\\n      <h1\\n        class=\\"relative flex-1 max-h-[200px] text-white max-sm:text-[16px] max-sm:py-6 max-md:pl-4 max-md:text-[20px] max-lg:pl-12 max-lg:text-[25px] max-lg:py-10 max-xl:text-[35px] max-xl:pl-20 text-[40px] pl-[220px] font-woodford py-16\\"\\n      >\\n        DOWNLOAD THE GAME NOW!\\n      </h1>\\n      <LightButton\\n        text=\\"Download\\"\\n        class=\\"py-6 px-7 max-lg:px-4 max-sm:py-2 max-sm:px-4 ml-8 max-md:mr-4 max-lg:mr-12 mr-40\\"\\n      />\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  .divider {\\n    position: relative;\\n    z-index: 10;\\n    background: linear-gradient(268deg, #ad7636 -1.99%, #4b261a 102.16%);\\n  }\\n  .divider::before {\\n    content: \\"\\";\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 5px;\\n    background: #e3b26d;\\n    background: linear-gradient(\\n      271deg,\\n      rgba(177, 100, 76, 0) 12.88%,\\n      #e39e6d 65.58%\\n    );\\n  }\\n  .shadow {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    width: 100%;\\n    height: 100%;\\n    background: linear-gradient(450deg, rgba(0, 0, 0, 0) 0%, #190e0a 90%);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsBE,sBAAS,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,OAAO,CACrE,CACA,sBAAQ,QAAS,CACf,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE;AAChB,MAAM,MAAM,CAAC;AACb,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC;AACnC,MAAM,OAAO,CAAC,MAAM;AACpB,KACE,CACA,qBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,GAAG,CACtE"}'
};
const DownloadDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="bg-background-primary py-10 max-md:py-2"><div class="divider svelte-w1sp76"><div class="shadow svelte-w1sp76"></div> <div class="flex items-center"><h1 class="relative flex-1 max-h-[200px] text-white max-sm:text-[16px] max-sm:py-6 max-md:pl-4 max-md:text-[20px] max-lg:pl-12 max-lg:text-[25px] max-lg:py-10 max-xl:text-[35px] max-xl:pl-20 text-[40px] pl-[220px] font-woodford py-16" data-svelte-h="svelte-d17abo">DOWNLOAD THE GAME NOW!</h1> ${validate_component(LightButton, "LightButton").$$render(
    $$result,
    {
      text: "Download",
      class: "py-6 px-7 max-lg:px-4 max-sm:py-2 max-sm:px-4 ml-8 max-md:mr-4 max-lg:mr-12 mr-40"
    },
    {},
    {}
  )}</div></div> </section>`;
});
const css$3 = {
  code: ".link.svelte-1mmfjkg{color:#9e9e9e;transition:color 0.3s ease}.link.svelte-1mmfjkg:hover{color:#ffffff}",
  map: '{"version":3,"file":"FooterLink.svelte","sources":["FooterLink.svelte"],"sourcesContent":["<script>\\n  export let text\\n  let className = \\"\\"\\n  export { className as class }\\n<\/script>\\n\\n<section class={\\"max-sm:pb-3\\"}>\\n  <a href=\\"/\\" class={`link hover:text-opacity-75 ${className}`}>{text}</a>\\n</section>\\n\\n<style>\\n  .link {\\n    color: #9e9e9e;\\n    transition: color 0.3s ease;\\n  }\\n\\n  .link:hover {\\n    color: #ffffff;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAWE,oBAAM,CACJ,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IACzB,CAEA,oBAAK,MAAO,CACV,KAAK,CAAE,OACT"}'
};
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$3);
  return `<section${add_attribute("class", "max-sm:pb-3", 0)}><a href="/" class="${escape(null_to_empty(`link hover:text-opacity-75 ${className}`), true) + " svelte-1mmfjkg"}">${escape(text)}</a> </section>`;
});
const FooterBottomSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-background-primary py-10"><div class="flex flex-col md:flex-row max-w-[1200px] mx-auto px-5 max-md:px-8"> <div class="flex items-start justify-center pl-4 md:pr-20 max-md:pb-12" data-svelte-h="svelte-1bafz6y"><a href="/"><img${add_attribute("src", logo, 0)} alt="logo" class="w-20"></a></div> <div class="flex flex-1 space-x-16 justify-start"> <div><div class="pb-7">${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "About", class: "text-lg" }, {}, {})}</div> <ul class="space-y-2">${validate_component(FooterLink, "FooterLink").$$render(
    $$result,
    {
      text: "Legal & Privacy",
      class: "text-sm"
    },
    {},
    {}
  )} ${validate_component(FooterLink, "FooterLink").$$render(
    $$result,
    {
      text: "Privacy & Cookie Policy (Your Privacy Rights)",
      class: "text-sm"
    },
    {},
    {}
  )} ${validate_component(FooterLink, "FooterLink").$$render(
    $$result,
    {
      text: "Cookie Preferences",
      class: "text-sm"
    },
    {},
    {}
  )}</ul></div>  <div><div class="pb-7">${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "Support", class: "text-lg" }, {}, {})}</div> <ul class="space-y-2">${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "User Agreement", class: "text-sm" }, {}, {})}</ul></div></div> <div class="text-[#9e9e9e] md:flex items-center text-sm px-4 max-md:text-center max-md:pt-7" data-svelte-h="svelte-1snj90b">© 2024 Autumn ( name here )</div></div></section>`;
});
const RedditLogo$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='45'%20height='45'%20viewBox='0,0,256,256'%20style='fill:%23EBEBEB;'%3e%3cg%20fill='%239e9e9e'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M29,3c-2.10547,0%20-4.56641,1.65234%20-4.9375,9.03125c0.3125,-0.00781%200.62109,-0.03125%200.9375,-0.03125c0.35156,0%200.71484,0.01953%201.0625,0.03125c0.23828,-4.43359%201.29297,-7.03125%202.9375,-7.03125c0.70313,0%201.10156,0.38281%201.84375,1.1875c0.86719,0.94141%202,2.16406%204.21875,2.625c-0.03516,-0.26172%20-0.0625,-0.54297%20-0.0625,-0.8125c0,-0.42187%200.04297,-0.82031%200.125,-1.21875c-1.375,-0.375%20-2.10156,-1.16797%20-2.8125,-1.9375c-0.79297,-0.85937%20-1.70312,-1.84375%20-3.3125,-1.84375zM41,4c-2.20703,0%20-4,1.79688%20-4,4c0,2.20313%201.79297,4%204,4c2.20703,0%204,-1.79687%204,-4c0,-2.20312%20-1.79297,-4%20-4,-4zM25,14c-12.13281,0%20-22,6.17969%20-22,15c0,8.82031%209.86719,16%2022,16c12.13281,0%2022,-7.17969%2022,-16c0,-8.82031%20-9.86719,-15%20-22,-15zM7.5,14.9375c-1.46094,0%20-2.84766,0.59766%20-3.90625,1.65625c-1.72266,1.72266%20-2.07812,4.19922%20-1.09375,6.25c1.51172,-2.92578%204.11328,-5.42187%207.46875,-7.28125c-0.76172,-0.38672%20-1.60547,-0.625%20-2.46875,-0.625zM42.5,14.9375c-0.86328,0%20-1.70703,0.23828%20-2.46875,0.625c3.35547,1.85938%205.95703,4.35547%207.46875,7.28125c0.98438,-2.05078%200.62891,-4.52734%20-1.09375,-6.25c-1.05859,-1.05859%20-2.44531,-1.65625%20-3.90625,-1.65625zM17,23c1.65625,0%203,1.34375%203,3c0,1.65625%20-1.34375,3%20-3,3c-1.65625,0%20-3,-1.34375%20-3,-3c0,-1.65625%201.34375,-3%203,-3zM33,23c1.65625,0%203,1.34375%203,3c0,1.65625%20-1.34375,3%20-3,3c-1.65625,0%20-3,-1.34375%20-3,-3c0,-1.65625%201.34375,-3%203,-3zM16.0625,34c0.25,0.04297%200.49609,0.18359%200.65625,0.40625c0.10547,0.14844%202.44922,3.28125%208.28125,3.28125c5.91016,0%208.25781,-3.21875%208.28125,-3.25c0.31641,-0.44922%200.95313,-0.57031%201.40625,-0.25c0.44922,0.31641%200.53516,0.92188%200.21875,1.375c-0.11719,0.16797%20-2.96875,4.125%20-9.90625,4.125c-6.94141,0%20-9.78906,-3.95703%20-9.90625,-4.125c-0.31641,-0.45312%20-0.23437,-1.05859%200.21875,-1.375c0.22656,-0.16016%200.5,-0.23047%200.75,-0.1875z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const FacebookLogo = "data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='facebook'%20d='M16.4997%200C7.38723%200%200%207.41452%200%2016.5606C0%2024.3269%205.32741%2030.8438%2012.514%2032.6337V21.6215H9.11178V16.5606H12.514V14.3799C12.514%208.74334%2015.0556%206.13074%2020.5691%206.13074C21.6146%206.13074%2023.4183%206.33675%2024.1562%206.5421V11.1294C23.7668%2011.0883%2023.0903%2011.0678%2022.2501%2011.0678C19.5448%2011.0678%2018.4994%2012.0965%2018.4994%2014.7707V16.5606H23.8889L22.9629%2021.6215H18.4994V33C26.6694%2032.0097%2033%2025.0277%2033%2016.5606C32.9993%207.41452%2025.6121%200%2016.4997%200Z'%20fill='%239E9E9E'/%3e%3c/svg%3e";
const DiscordLogo$1 = "data:image/svg+xml,%3csvg%20width='34'%20height='26'%20viewBox='0%200%2034%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='discord'%20d='M28.7824%202.15526C26.6154%201.15768%2024.2916%200.422713%2021.8619%200.00176582C21.8176%20-0.00635834%2021.7734%200.0139444%2021.7506%200.0545507C21.4517%200.587839%2021.1207%201.28356%2020.8889%201.83039C18.2756%201.43787%2015.6757%201.43787%2013.116%201.83039C12.8841%201.2714%2012.541%200.587839%2012.2408%200.0545507C12.218%200.0152992%2012.1738%20-0.00500351%2012.1296%200.00176582C9.70121%200.421368%207.37738%201.15634%205.20899%202.15526C5.19022%202.16338%205.17413%202.17693%205.16345%202.19451C0.755638%208.80116%20-0.451846%2015.2454%200.140505%2021.6098C0.143185%2021.6409%200.160607%2021.6707%200.184731%2021.6896C3.09288%2023.8323%205.90992%2025.1331%208.67465%2025.9953C8.71889%2026.0088%208.76577%2025.9926%208.79393%2025.956C9.44793%2025.06%2010.0309%2024.1152%2010.5308%2023.1217C10.5603%2023.0635%2010.5321%2022.9945%2010.4718%2022.9715C9.5471%2022.6195%208.6666%2022.1905%207.81962%2021.7032C7.75262%2021.6639%207.74726%2021.5678%207.80889%2021.5218C7.98713%2021.3878%208.16541%2021.2484%208.3356%2021.1076C8.36639%2021.0819%208.4093%2021.0765%208.4455%2021.0927C14.0098%2023.6415%2020.0339%2023.6415%2025.5325%2021.0927C25.5687%2021.0751%2025.6116%2021.0806%2025.6438%2021.1063C25.814%2021.247%2025.9922%2021.3878%2026.1718%2021.5218C26.2334%2021.5678%2026.2294%2021.6639%2026.1624%2021.7032C25.3154%2022.1999%2024.4349%2022.6195%2023.5089%2022.9701C23.4486%2022.9931%2023.4218%2023.0635%2023.4513%2023.1217C23.9619%2024.1138%2024.5448%2025.0586%2025.1868%2025.9547C25.2136%2025.9926%2025.2618%2026.0088%2025.3061%2025.9953C28.0842%2025.1331%2030.9012%2023.8323%2033.8094%2021.6896C33.8348%2021.6707%2033.8509%2021.6423%2033.8536%2021.6111C34.5625%2014.2532%2032.6662%207.86182%2028.8266%202.19585C28.8173%202.17693%2028.8012%202.16338%2028.7824%202.15526ZM11.3617%2017.7346C9.68646%2017.7346%208.3061%2016.1916%208.3061%2014.2966C8.3061%2012.4016%209.65969%2010.8586%2011.3617%2010.8586C13.0771%2010.8586%2014.4441%2012.4151%2014.4172%2014.2966C14.4172%2016.1916%2013.0637%2017.7346%2011.3617%2017.7346ZM22.6592%2017.7346C20.984%2017.7346%2019.6037%2016.1916%2019.6037%2014.2966C19.6037%2012.4016%2020.9572%2010.8586%2022.6592%2010.8586C24.3746%2010.8586%2025.7416%2012.4151%2025.7148%2014.2966C25.7148%2016.1916%2024.3746%2017.7346%2022.6592%2017.7346Z'%20fill='%239E9E9E'/%3e%3c/svg%3e";
const YoutubeLogo$1 = "data:image/svg+xml,%3csvg%20width='33'%20height='24'%20viewBox='0%200%2033%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='youtube'%20d='M32.6713%205.17856C32.6713%205.17856%2032.349%202.82588%2031.3564%201.79284C30.0996%200.433213%2028.6945%200.426548%2028.05%200.34657C23.4352%20-1.90682e-07%2016.5064%200%2016.5064%200H16.4936C16.4936%200%209.56484%20-1.90682e-07%204.95%200.34657C4.30547%200.426548%202.90039%200.433213%201.64355%201.79284C0.650977%202.82588%200.335156%205.17856%200.335156%205.17856C0.335156%205.17856%200%207.94446%200%2010.7037V13.2896C0%2016.0489%200.328711%2018.8148%200.328711%2018.8148C0.328711%2018.8148%200.650976%2021.1675%201.63711%2022.2005C2.89395%2023.5601%204.54395%2023.5135%205.27871%2023.6601C7.92129%2023.92%2016.5%2024%2016.5%2024C16.5%2024%2023.4352%2023.9867%2028.05%2023.6468C28.6945%2023.5668%2030.0996%2023.5601%2031.3564%2022.2005C32.349%2021.1675%2032.6713%2018.8148%2032.6713%2018.8148C32.6713%2018.8148%2033%2016.0555%2033%2013.2896V10.7037C33%207.94446%2032.6713%205.17856%2032.6713%205.17856ZM13.0904%2016.4288V6.8381L22.0043%2011.6501L13.0904%2016.4288Z'%20fill='%239E9E9E'/%3e%3c/svg%3e";
const FooterTopSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="flex flex-col md:flex-row items-center max-w-[1200px] mx-auto px-7 justify-between py-[80px] max-md:py-[60px]"> <div class="w-full max-w-[700px] min-w-[200px] max-sm:text-center"><h2 class="text-white text-lg font-gilroyBold pb-5" data-svelte-h="svelte-1y7tla6">All RTS</h2> <div class="sm:flex flex-wrap gap-x-24 gap-y-4">${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "Home" }, {}, {})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "Features" }, {}, {})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "Mobile Requirements" }, {}, {})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "News" }, {}, {})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { text: "Download" }, {}, {})}</div></div>  <div class="w-full max-w-[80px] pb-8 md:flex md:justify-center" data-svelte-h="svelte-1de0tpi"> <div class="text-center"><h2 class="text-white text-lg font-gilroyBold pt-8 pb-5">COMMUNITY</h2> <div class="grid grid-cols-2 gap-x-8 gap-y-6"><a href="https://sh.reddit.com/user/allrts/"><img${add_attribute("src", RedditLogo$1, 0)} alt="Reddit" class="w-6"></a> <a href="/"><img${add_attribute("src", FacebookLogo, 0)} alt="Facebook" class="w-6"></a> <a href="/allrts"><img${add_attribute("src", DiscordLogo$1, 0)} alt="Discord" class="w-6"></a> <a href="https://www.youtube.com/channel/UCRBili6TrgGvuxGWcHOxvrQ"><img${add_attribute("src", YoutubeLogo$1, 0)} alt="YouTube" class="w-6"></a></div></div></div></div></section>`;
});
const css$2 = {
  code: ".divider.svelte-avvrko{background:linear-gradient(\n      90deg,\n      rgba(202, 156, 95, 0) 0%,\n      #ca9c5f 50%,\n      rgba(202, 156, 95, 0) 100%\n    )}",
  map: '{"version":3,"file":"FooterSection.svelte","sources":["FooterSection.svelte"],"sourcesContent":["<script>\\n  import FooterBottomSection from \\"./FooterBottomSection/FooterBottomSection.svelte\\"\\n  import FooterTopSection from \\"./FooterTopSection/FooterTopSection.svelte\\"\\n<\/script>\\n\\n<section class=\\"relative bg-background-primary\\">\\n  <FooterTopSection />\\n  <div\\n    class=\\"divider w-[60%] h-[3px] absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2\\"\\n  />\\n  <FooterBottomSection />\\n</section>\\n\\n<style>\\n  .divider {\\n    background: linear-gradient(\\n      90deg,\\n      rgba(202, 156, 95, 0) 0%,\\n      #ca9c5f 50%,\\n      rgba(202, 156, 95, 0) 100%\\n    );\\n  }\\n</style>\\n"],"names":[],"mappings":"AAcE,sBAAS,CACP,UAAU,CAAE;AAChB,MAAM,KAAK,CAAC;AACZ,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;AAC/B,MAAM,OAAO,CAAC,GAAG,CAAC;AAClB,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI;AAChC,KACE"}'
};
const FooterSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="relative bg-background-primary">${validate_component(FooterTopSection, "FooterTopSection").$$render($$result, {}, {}, {})} <div class="divider w-[60%] h-[3px] absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 svelte-avvrko"></div> ${validate_component(FooterBottomSection, "FooterBottomSection").$$render($$result, {}, {}, {})} </section>`;
});
const HeaderDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="absolute top-full mt-16 w-60 bg-[#100909] opacity-95 text-white text-lg shadow-lg z-10">${slots.default ? slots.default({}) : ``}</div>`;
});
const HeaderDropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<a href="/" class="block px-4 py-4 hover:text-opacity-75 hover:bg-gray-500">${escape(text)}</a>`;
});
const arrowUpIcon = "data:image/svg+xml,%3csvg%20width='32'%20height='20'%20viewBox='0%200%2032%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%209'%20d='M30%2018L16%204L2%2018'%20stroke='%23A77D58'%20stroke-width='5'/%3e%3c/svg%3e";
const HeaderNavBarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { activeMenu } = $$props;
  let { menuId } = $$props;
  let { toggleMenu } = $$props;
  let dropdownElement = null;
  onDestroy(() => {
  });
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.activeMenu === void 0 && $$bindings.activeMenu && activeMenu !== void 0)
    $$bindings.activeMenu(activeMenu);
  if ($$props.menuId === void 0 && $$bindings.menuId && menuId !== void 0)
    $$bindings.menuId(menuId);
  if ($$props.toggleMenu === void 0 && $$bindings.toggleMenu && toggleMenu !== void 0)
    $$bindings.toggleMenu(toggleMenu);
  return `  <div class="relative"${add_attribute("this", dropdownElement, 0)}><button${add_attribute("class", `flex items-center ${activeMenu === menuId && "text-header-linkActive"}`, 0)}><span class="mr-2 text-lg">${escape(text)}</span> <img${add_attribute("src", activeMenu === menuId ? arrowUpIcon : arrowDown, 0)} alt="dropdown" class="w-4"></button> ${activeMenu === menuId ? `${validate_component(HeaderDropdown, "HeaderDropdown").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(HeaderDropdownItem, "HeaderDropdownItem").$$render($$result, { text: "Play on browser" }, {}, {})} ${validate_component(HeaderDropdownItem, "HeaderDropdownItem").$$render($$result, { text: "Download" }, {}, {})} ${validate_component(HeaderDropdownItem, "HeaderDropdownItem").$$render($$result, { text: "Extra button space" }, {}, {})}`;
    }
  })}` : ``}</div>`;
});
const HeaderNavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeMenu = "";
  const toggleMenu = (menu) => {
    activeMenu = activeMenu === menu ? "" : menu;
  };
  return `<nav class="text-white px-12 flex-1 space-x-10 hidden max-lg:justify-center md:flex">${validate_component(HeaderNavBarItem, "HeaderNavBarItem").$$render(
    $$result,
    {
      text: "Play",
      activeMenu,
      toggleMenu,
      menuId: "play"
    },
    {},
    {}
  )} ${validate_component(HeaderNavBarItem, "HeaderNavBarItem").$$render(
    $$result,
    {
      text: "News",
      activeMenu,
      toggleMenu,
      menuId: "news"
    },
    {},
    {}
  )}</nav>`;
});
const burgerMenuIcon = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2012%2012'%20enable-background='new%200%200%2012%2012'%20id='Слой_1'%20version='1.1'%20xml:space='preserve'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23FFFFFF'%20stroke='%23FFFFFF'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3crect%20fill='%231D1D1B'%20height='0.1'%20width='11'%20x='0.5'%20y='6'/%3e%3crect%20fill='%231D1D1B'%20height='0.1'%20width='11'%20x='0.5'%20y='3'/%3e%3crect%20fill='%231D1D1B'%20height='0.1'%20width='11'%20x='0.5'%20y='9'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const BurgerMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { href } = $$props;
  let { onClick } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `  <li><a${add_attribute("href", href, 0)} class="hover:text-gray-400">${escape(text)}</a></li>`;
});
const css$1 = {
  code: ".menu.svelte-7dmfp3{position:fixed;top:0;right:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:50;transform:translateX(100%);transition:transform 0.3s ease-in-out}.menu-enter.svelte-7dmfp3{transform:translateX(0)}.menu-exit.svelte-7dmfp3{transform:translateX(100%)}.close-button.svelte-7dmfp3{position:absolute;top:20px;right:20px;background:transparent;border:none;color:white;font-size:2.5rem;cursor:pointer}",
  map: '{"version":3,"file":"BurgerMenu.svelte","sources":["BurgerMenu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import burgerMenuIcon from \\"../../../../assets/icons/burger-menu.svg\\";\\nimport BurgerMenuItem from \\"./BurgerMenuItem.svelte\\";\\nlet isOpen = false;\\nconst toggleMenu = () => {\\n  isOpen = !isOpen;\\n  if (isOpen) {\\n    document.body.style.overflow = \\"hidden\\";\\n  } else {\\n    document.body.style.overflow = \\"\\";\\n  }\\n};\\n<\/script>\\n\\n<div class=\\"block\\">\\n  <button class=\\"hidden max-md:block text-white\\" on:click={toggleMenu}>\\n    <img src={burgerMenuIcon} alt=\\"burger-menu\\" class=\\"w-8 text-white\\" />\\n  </button>\\n</div>\\n\\n<!-- Menu -->\\n<div class={`menu ${isOpen ? \\"menu-enter\\" : \\"menu-exit\\"}`}>\\n  <button class=\\"close-button\\" on:click={toggleMenu}>&times;</button>\\n  <ul class=\\"text-white text-2xl space-y-6\\">\\n    <BurgerMenuItem text=\\"Play\\" href=\\"/\\" onClick={toggleMenu} />\\n    <BurgerMenuItem text=\\"News\\" href=\\"/\\" onClick={toggleMenu} />\\n    <BurgerMenuItem text=\\"Download\\" href=\\"/\\" onClick={toggleMenu} />\\n  </ul>\\n</div>\\n\\n<style>\\n  .menu {\\n    position: fixed;\\n    top: 0;\\n    right: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: rgba(0, 0, 0, 0.95);\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    z-index: 50;\\n    transform: translateX(100%);\\n    transition: transform 0.3s ease-in-out;\\n  }\\n\\n  .menu-enter {\\n    transform: translateX(0);\\n  }\\n\\n  .menu-exit {\\n    transform: translateX(100%);\\n  }\\n\\n  .close-button {\\n    position: absolute;\\n    top: 20px;\\n    right: 20px;\\n    background: transparent;\\n    border: none;\\n    color: white;\\n    font-size: 2.5rem;\\n    cursor: pointer;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8BE,mBAAM,CACJ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,WAC7B,CAEA,yBAAY,CACV,SAAS,CAAE,WAAW,CAAC,CACzB,CAEA,wBAAW,CACT,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,2BAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,OACV"}'
};
const BurgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  $$result.css.add(css$1);
  return `<div class="block"><button class="hidden max-md:block text-white" data-svelte-h="svelte-r9fuun"><img${add_attribute("src", burgerMenuIcon, 0)} alt="burger-menu" class="w-8 text-white"></button></div>  <div class="${escape(null_to_empty(`menu ${isOpen ? "menu-enter" : "menu-exit"}`), true) + " svelte-7dmfp3"}"><button class="close-button svelte-7dmfp3" data-svelte-h="svelte-ex3x7m">×</button> <ul class="text-white text-2xl space-y-6">${validate_component(BurgerMenuItem, "BurgerMenuItem").$$render(
    $$result,
    {
      text: "Play",
      href: "/",
      onClick: toggleMenu
    },
    {},
    {}
  )} ${validate_component(BurgerMenuItem, "BurgerMenuItem").$$render(
    $$result,
    {
      text: "News",
      href: "/",
      onClick: toggleMenu
    },
    {},
    {}
  )} ${validate_component(BurgerMenuItem, "BurgerMenuItem").$$render(
    $$result,
    {
      text: "Download",
      href: "/",
      onClick: toggleMenu
    },
    {},
    {}
  )}</ul> </div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="w-full p-10 max-md:px-4 max-md:py-4 max-lg:px-6 flex items-center justify-between relative bg-background-primary"><div class="flex w-full items-center"><a href="/" data-svelte-h="svelte-ampeim"><img${add_attribute("src", logo, 0)} alt="logo" class="w-36 max-md:w-20"></a> ${validate_component(HeaderNavBar, "HeaderNavBar").$$render($$result, {}, {}, {})} ${validate_component(OutlinedButton, "OutlinedButton").$$render(
    $$result,
    {
      text: "Download",
      class: "py-4 px-8 max-lg:px-4 max-md:mx-4 max-lg:py-2 max-md:py-1"
    },
    {},
    {}
  )}</div> ${validate_component(BurgerMenu, "BurgerMenu").$$render($$result, {}, {}, {})}</header>`;
});
const socialsImage = "/_app/immutable/assets/socialsimage.BTL-C-oy.png";
const DiscordLogo = "data:image/svg+xml,%3csvg%20width='69'%20height='53'%20viewBox='0%200%2069%2053'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='discord'%20d='M57.9695%204.67582C53.6095%202.67001%2048.9341%201.19223%2044.0457%200.345836C43.9567%200.329501%2043.8677%200.370323%2043.8219%200.451969C43.2206%201.52424%2042.5546%202.9231%2042.0881%204.02261C36.8303%203.23338%2031.5995%203.23338%2026.4495%204.02261C25.983%202.89866%2025.2928%201.52424%2024.6888%200.451969C24.6429%200.373047%2024.554%200.332225%2024.465%200.345836C19.5792%201.18952%2014.9038%202.66731%2010.5412%204.67582C10.5034%204.69214%2010.4711%204.71938%2010.4496%204.75474C1.58133%2018.0386%20-0.848051%2030.9959%200.343723%2043.7926C0.349115%2043.8552%200.384167%2043.9151%200.432701%2043.9532C6.28371%2048.2614%2011.9514%2050.8768%2017.5139%2052.6104C17.6029%2052.6376%2017.6972%2052.605%2017.7539%2052.5315C19.0697%2050.7299%2020.2426%2048.8302%2021.2483%2046.8325C21.3076%2046.7156%2021.2509%2046.5768%2021.1296%2046.5305C19.2692%2045.8229%2017.4977%2044.9601%2015.7936%2043.9804C15.6588%2043.9015%2015.648%2043.7082%2015.772%2043.6157C16.1306%2043.3462%2016.4893%2043.0659%2016.8317%2042.7829C16.8937%2042.7312%2016.98%2042.7203%2017.0529%2042.7529C28.2479%2047.8777%2040.3679%2047.8777%2051.4308%2042.7529C51.5037%2042.7176%2051.59%2042.7285%2051.6546%2042.7802C51.9972%2043.0632%2052.3558%2043.3462%2052.7171%2043.6157C52.8411%2043.7082%2052.833%2043.9015%2052.6982%2043.9804C50.9941%2044.9792%2049.2226%2045.8229%2047.3594%2046.5278C47.2381%2046.574%2047.1842%2046.7156%2047.2435%2046.8325C48.2708%2048.8274%2049.4437%2050.7271%2050.7352%2052.5288C50.7892%2052.605%2050.8862%2052.6376%2050.9752%2052.6104C56.5646%2050.8768%2062.2323%2048.2614%2068.0833%2043.9532C68.1346%2043.9151%2068.1669%2043.8579%2068.1723%2043.7953C69.5987%2029.001%2065.7833%2016.1499%2058.0584%204.75744C58.0395%204.71938%2058.0072%204.69214%2057.9695%204.67582ZM22.9201%2036.0008C19.5496%2036.0008%2016.7724%2032.8983%2016.7724%2029.0881C16.7724%2025.2779%2019.4957%2022.1754%2022.9201%2022.1754C26.3713%2022.1754%2029.1216%2025.3051%2029.0676%2029.0881C29.0676%2032.8983%2026.3443%2036.0008%2022.9201%2036.0008ZM45.65%2036.0008C42.2796%2036.0008%2039.5024%2032.8983%2039.5024%2029.0881C39.5024%2025.2779%2042.2256%2022.1754%2045.65%2022.1754C49.1013%2022.1754%2051.8515%2025.3051%2051.7976%2029.0881C51.7976%2032.8983%2049.1013%2036.0008%2045.65%2036.0008Z'%20fill='white'/%3e%3c/svg%3e";
const RedditLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0,0,256,256'%20style='fill:%23EBEBEB;'%3e%3cg%20fill='%23fff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M29,3c-2.10547,0%20-4.56641,1.65234%20-4.9375,9.03125c0.3125,-0.00781%200.62109,-0.03125%200.9375,-0.03125c0.35156,0%200.71484,0.01953%201.0625,0.03125c0.23828,-4.43359%201.29297,-7.03125%202.9375,-7.03125c0.70313,0%201.10156,0.38281%201.84375,1.1875c0.86719,0.94141%202,2.16406%204.21875,2.625c-0.03516,-0.26172%20-0.0625,-0.54297%20-0.0625,-0.8125c0,-0.42187%200.04297,-0.82031%200.125,-1.21875c-1.375,-0.375%20-2.10156,-1.16797%20-2.8125,-1.9375c-0.79297,-0.85937%20-1.70312,-1.84375%20-3.3125,-1.84375zM41,4c-2.20703,0%20-4,1.79688%20-4,4c0,2.20313%201.79297,4%204,4c2.20703,0%204,-1.79687%204,-4c0,-2.20312%20-1.79297,-4%20-4,-4zM25,14c-12.13281,0%20-22,6.17969%20-22,15c0,8.82031%209.86719,16%2022,16c12.13281,0%2022,-7.17969%2022,-16c0,-8.82031%20-9.86719,-15%20-22,-15zM7.5,14.9375c-1.46094,0%20-2.84766,0.59766%20-3.90625,1.65625c-1.72266,1.72266%20-2.07812,4.19922%20-1.09375,6.25c1.51172,-2.92578%204.11328,-5.42187%207.46875,-7.28125c-0.76172,-0.38672%20-1.60547,-0.625%20-2.46875,-0.625zM42.5,14.9375c-0.86328,0%20-1.70703,0.23828%20-2.46875,0.625c3.35547,1.85938%205.95703,4.35547%207.46875,7.28125c0.98438,-2.05078%200.62891,-4.52734%20-1.09375,-6.25c-1.05859,-1.05859%20-2.44531,-1.65625%20-3.90625,-1.65625zM17,23c1.65625,0%203,1.34375%203,3c0,1.65625%20-1.34375,3%20-3,3c-1.65625,0%20-3,-1.34375%20-3,-3c0,-1.65625%201.34375,-3%203,-3zM33,23c1.65625,0%203,1.34375%203,3c0,1.65625%20-1.34375,3%20-3,3c-1.65625,0%20-3,-1.34375%20-3,-3c0,-1.65625%201.34375,-3%203,-3zM16.0625,34c0.25,0.04297%200.49609,0.18359%200.65625,0.40625c0.10547,0.14844%202.44922,3.28125%208.28125,3.28125c5.91016,0%208.25781,-3.21875%208.28125,-3.25c0.31641,-0.44922%200.95313,-0.57031%201.40625,-0.25c0.44922,0.31641%200.53516,0.92188%200.21875,1.375c-0.11719,0.16797%20-2.96875,4.125%20-9.90625,4.125c-6.94141,0%20-9.78906,-3.95703%20-9.90625,-4.125c-0.31641,-0.45312%20-0.23437,-1.05859%200.21875,-1.375c0.22656,-0.16016%200.5,-0.23047%200.75,-0.1875z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const TwitterLogo = "data:image/svg+xml,%3csvg%20width='63'%20height='58'%20viewBox='0%200%2063%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='twitter'%20d='M49.0556%200.561523H58.6069L37.7402%2024.5904L62.2882%2057.2883H43.0673L28.0128%2037.4572L10.787%2057.2883H1.23L23.549%2031.5867L0%200.561523H19.7089L33.3168%2018.6879L49.0556%200.561523ZM45.7035%2051.5284H50.9959L16.8331%206.01893H11.1537L45.7035%2051.5284Z'%20fill='white'/%3e%3c/svg%3e";
const YoutubeLogo = "data:image/svg+xml,%3csvg%20width='68'%20height='49'%20viewBox='0%200%2068%2049'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='youtube'%20d='M67.3242%2010.5632C67.3242%2010.5632%2066.6616%205.8201%2064.6208%203.73745C62.0367%200.996416%2059.1478%200.982979%2057.8226%200.821741C48.3343%200.123046%2034.0885%200.123047%2034.0885%200.123047H34.062C34.062%200.123047%2019.8162%200.123046%2010.3278%200.821741C9.00266%200.982979%206.11374%200.996416%203.52962%203.73745C1.48883%205.8201%200.839489%2010.5632%200.839489%2010.5632C0.839489%2010.5632%200.150391%2016.1393%200.150391%2021.702V26.9153C0.150391%2032.478%200.826237%2038.0541%200.826237%2038.0541C0.826237%2038.0541%201.48883%2042.7972%203.51637%2044.8798C6.10049%2047.6209%209.49298%2047.5268%2011.0037%2047.8224C16.437%2048.3464%2034.0752%2048.5077%2034.0752%2048.5077C34.0752%2048.5077%2048.3343%2048.4808%2057.8226%2047.7955C59.1478%2047.6343%2062.0367%2047.6209%2064.6208%2044.8798C66.6616%2042.7972%2067.3242%2038.0541%2067.3242%2038.0541C67.3242%2038.0541%2068.0001%2032.4914%2068.0001%2026.9153V21.702C68.0001%2016.1393%2067.3242%2010.5632%2067.3242%2010.5632ZM27.065%2033.2439V13.9088L45.3923%2023.6099L27.065%2033.2439Z'%20fill='white'/%3e%3c/svg%3e";
const css = {
  code: ".divider.svelte-9symgf{background:linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0) 0%,\n      #fff 50%,\n      rgba(255, 255, 255, 0) 100%\n    )}",
  map: '{"version":3,"file":"SocialsLogos.svelte","sources":["SocialsLogos.svelte"],"sourcesContent":["<script>\\n  import DiscordLogo from \\"../../../../assets/icons/socialIcons/Discord.svg\\"\\n  import RedditLogo from \\"../../../../assets/icons/socialIcons/Reddit.svg\\"\\n  import TwitterLogo from \\"../../../../assets/icons/socialIcons/twitter.svg\\"\\n  import YoutubeLogo from \\"../../../../assets/icons/socialIcons/YouTube.svg\\"\\n<\/script>\\n\\n<section class=\\"flex justify-center gap-6 md:gap-12 pt-8 md:pt-16 items-center\\">\\n  <a href=\\"/\\"><img src={TwitterLogo} alt=\\"Twitter\\" class=\\"w-8 md:w-14\\" /></a>\\n  <div class=\\"h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider\\"></div>\\n  <a href=\\"https://sh.reddit.com/user/allrts/\\"><img src={RedditLogo} alt=\\"RedditLogo\\" class=\\"w-8 md:w-14\\" /></a>\\n  <div class=\\"h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider\\"></div>\\n  <a href=\\"/\\"><img src={DiscordLogo} alt=\\"Discord\\" class=\\"w-8 md:w-14\\" /></a>\\n  <div class=\\"h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider\\"></div>\\n  <a href=\\"/\\"><img src={YoutubeLogo} alt=\\"Youtube\\" class=\\"w-8 md:w-14\\" /></a>\\n</section>\\n\\n<style>\\n  .divider {\\n    background: linear-gradient(\\n      180deg,\\n      rgba(255, 255, 255, 0) 0%,\\n      #fff 50%,\\n      rgba(255, 255, 255, 0) 100%\\n    );\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkBE,sBAAS,CACP,UAAU,CAAE;AAChB,MAAM,MAAM,CAAC;AACb,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;AAChC,MAAM,IAAI,CAAC,GAAG,CAAC;AACf,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI;AACjC,KACE"}'
};
const SocialsLogos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="flex justify-center gap-6 md:gap-12 pt-8 md:pt-16 items-center" data-svelte-h="svelte-oj333m"><a href="/"><img${add_attribute("src", TwitterLogo, 0)} alt="Twitter" class="w-8 md:w-14"></a> <div class="h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider svelte-9symgf"></div> <a href="https://sh.reddit.com/user/allrts/"><img${add_attribute("src", RedditLogo, 0)} alt="RedditLogo" class="w-8 md:w-14"></a> <div class="h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider svelte-9symgf"></div> <a href="/"><img${add_attribute("src", DiscordLogo, 0)} alt="Discord" class="w-8 md:w-14"></a> <div class="h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider svelte-9symgf"></div> <a href="/"><img${add_attribute("src", YoutubeLogo, 0)} alt="Youtube" class="w-8 md:w-14"></a> </section>`;
});
const SocialsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-background-primary">${validate_component(BgGradient, "BgGradient").$$render(
    $$result,
    {
      class: "h-[450px] max-md:h-[200px]",
      src: socialsImage,
      showGradientOnTop: true
    },
    {},
    {
      default: () => {
        return `<div class="w-full h-full flex-col flex justify-center align-center">${validate_component(SmallerDeco, "SmallerDeco").$$render($$result, { title: "COMMUNITY" }, {}, {})} ${validate_component(SocialsLogos, "SocialsLogos").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}</section>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(DownloadDivider, "DownloadDivider").$$render($$result, {}, {}, {})} ${validate_component(SocialsSection, "SocialsSection").$$render($$result, {}, {}, {})} ${validate_component(FooterSection, "FooterSection").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
