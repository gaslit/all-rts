<script>
  import BgGradient from "$lib/components/UI/BgGradient.svelte"
  import bgImage from "../../assets/images/carddetailsbg.png"
  import leftArrowIcon from "../../assets/icons/Leftarrow.svg"
  import image from "../../assets/images/carddetailsimage.png"
</script>

<section class="bg-background-primary">
  <BgGradient
    src={bgImage}
    class="h-[650px] xs:h-[400px] md:h-[310px] lg:h-[1000px] xl:h-[1470px] 2xl:h-[1600px]"
  >
    <div class="flex py-4 lg:py-14 px-5 lg:p-20 h-full relative">

      <div class="flex flex-col xl:py-20 xl:px-40 h-full">
        <h1
          class="flex text-white font-cormorantSC text-2xl md:text-3xl pb-5 xl:text-6xl xl:pb-16"
        >
          Opportunities
        </h1>
        <p class="text-white text-xs lg:text-4xl lg:pb-10">
         We've built an engine to resurrect old RTS titles, <br> especially those which have never gotten a remaster. <br>
         We can't bring them back exactly, but we can bring them back in spirit. <br>  If you're a game designer,
          or familiar with RTS games,  <br> reach out to us at <a href="#" class="underline">general@allrts.com</a>
          if you'd like  <br>to work together to bring back your favourite obscure title from <br> the past,  or a new idea that you have!
        </p>
      
        <img
          src={image}
          alt="card_details_image"
          class="py-2 xl:py-14 hidden lg:block 2xl: 3xl:w-[60%] 3xl:mx-auto"
        />

     
      </div>
      <button
        class="hidden lg:flex absolute bottom-2 right-4 xl:bottom-20 xl:right-20 gap-2 justify-center items-center font-woodford text-2xl xl:text-3xl text-white xl:hover:scale-110 transition duration-300"
        on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={leftArrowIcon} class="w-8 rotate-90" alt="left_arrow_icon" />
        <p class="pt-1">BACK TO TOP</p>
      </button>
    </div>
  </BgGradient>
</section>
