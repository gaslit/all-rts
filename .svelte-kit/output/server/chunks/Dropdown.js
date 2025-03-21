import { c as create_ssr_component, h as get_store_value, b as add_attribute } from "./ssr.js";
import { p as page } from "./stores.js";
import { a as arrowDown } from "./arrow-down-light.js";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dropdownRef;
  get_store_value(page).url.pathname;
  return `  <div class="relative w-full max-w-sm mx-auto z-10 opacity-85"${add_attribute("this", dropdownRef, 0)}><button class="flex justify-between items-center w-full py-2 px-4 bg-black text-white font-cormorantSC text-[32px] max-md:text-[16px] font-bold border border-white">All Features
    <img${add_attribute("src", arrowDown, 0)} alt="Arrow Icon" class="w-6"></button> ${``} </div>`;
});
export {
  Dropdown as D
};
