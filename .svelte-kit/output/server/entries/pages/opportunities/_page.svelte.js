import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { B as BgGradient } from "../../../chunks/BgGradient.js";
import { b as bgImage, i as image } from "../../../chunks/carddetailsimage.js";
import { l as leftArrowIcon } from "../../../chunks/Leftarrow.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-background-primary">${validate_component(BgGradient, "BgGradient").$$render(
    $$result,
    {
      src: bgImage,
      class: "h-[650px] xs:h-[400px] md:h-[310px] lg:h-[1000px] xl:h-[1470px] 2xl:h-[1600px]"
    },
    {},
    {
      default: () => {
        return `<div class="flex py-4 lg:py-14 px-5 lg:p-20 h-full relative"><div class="flex flex-col xl:py-20 xl:px-40 h-full" data-svelte-h="svelte-mnzyyp"><h1 class="flex text-white font-cormorantSC text-2xl md:text-3xl pb-5 xl:text-6xl xl:pb-16">Opportunities</h1> <p class="text-white text-xs lg:text-4xl lg:pb-10">We&#39;ve built an engine to resurrect old RTS titles, <br> especially those which have never gotten a remaster. <br>
         We can&#39;t bring them back exactly, but we can bring them back in spirit. <br>  If you&#39;re a game designer,
          or familiar with RTS games,  <br> reach out to us at <a href="#" class="underline">general@allrts.com</a>
          if you&#39;d like  <br>to work together to bring back your favourite obscure title from <br> the past,  or a new idea that you have!</p> <img${add_attribute("src", image, 0)} alt="card_details_image" class="py-2 xl:py-14 hidden lg:block 2xl: 3xl:w-[60%] 3xl:mx-auto"></div> <button class="hidden lg:flex absolute bottom-2 right-4 xl:bottom-20 xl:right-20 gap-2 justify-center items-center font-woodford text-2xl xl:text-3xl text-white xl:hover:scale-110 transition duration-300" data-svelte-h="svelte-5h0ew9"><img${add_attribute("src", leftArrowIcon, 0)} class="w-8 rotate-90" alt="left_arrow_icon"> <p class="pt-1">BACK TO TOP</p></button></div>`;
      }
    }
  )}</section>`;
});
export {
  Page as default
};
