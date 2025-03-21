import { c as create_ssr_component, e as escape, d as null_to_empty } from "./ssr.js";
/* empty css                                          */
const css = {
  code: ".decorated-header.svelte-vsgclo{position:relative;display:flex;justify-content:center;align-items:center;background-image:url(../../../../assets/icons/deco2.svg);background-repeat:no-repeat;background-position:center;background-size:contain}.title.svelte-vsgclo{color:white;font-size:5.3rem;font-style:normal;font-weight:400;line-height:normal;z-index:1}@media(max-width: 1024px){.title.svelte-vsgclo{font-size:2.5rem}}@media(max-width: 640px){.title.svelte-vsgclo{font-size:2rem}}",
  map: '{"version":3,"file":"SmallerDeco.svelte","sources":["SmallerDeco.svelte"],"sourcesContent":["<script>\\n  export let title = \\"\\"\\n  let className = \\"\\"\\n  export { className as class }\\n<\/script>\\n\\n<section class={`w-full flex justify-center ${className}`}>\\n  <div class=\\"decorated-header mx-2 xl:mx-52 w-full 2xl:w-1/2\\">\\n    <h1 class=\\"title font-cormorantSC\\">{title}</h1>\\n  </div>\\n</section>\\n\\n<style>\\n  .decorated-header {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-image: url(../../../../assets/icons/deco2.svg);\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: contain;\\n  }\\n\\n  .title {\\n    color: white;\\n    font-size: 5.3rem;\\n    font-style: normal;\\n    font-weight: 400;\\n    line-height: normal;\\n    z-index: 1;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .title {\\n      font-size: 2.5rem;\\n    }\\n  }\\n\\n  @media (max-width: 640px) {\\n    .title {\\n      font-size: 2rem;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAaE,+BAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,uCAAuC,CACzD,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,OACnB,CAEA,oBAAO,CACL,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CACX,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,oBAAO,CACL,SAAS,CAAE,MACb,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAO,CACL,SAAS,CAAE,IACb,CACF"}'
};
const SmallerDeco = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css);
  return `<section class="${escape(null_to_empty(`w-full flex justify-center ${className}`), true) + " svelte-vsgclo"}"><div class="decorated-header mx-2 xl:mx-52 w-full 2xl:w-1/2 svelte-vsgclo"><h1 class="title font-cormorantSC svelte-vsgclo">${escape(title)}</h1></div> </section>`;
});
export {
  SmallerDeco as S
};
