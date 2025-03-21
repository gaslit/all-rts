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
      <button
        class="hidden lg:flex absolute top-4 left-4 xl:top-20 xl:left-20 gap-2 justify-center items-center font-woodford text-2xl xl:text-3xl text-white xl:hover:scale-110 transition duration-300"
        on:click={() => window.history.back()}
      >
        <img src={leftArrowIcon} class="w-8" alt="left_arrow_icon" />
        <p class="pt-1">BACK</p>
      </button>
      <div class="flex flex-col xl:py-20 xl:px-40 h-full">
        <h1
          class="flex text-white font-cormorantSC text-2xl md:text-3xl pb-5 xl:text-6xl xl:pb-16"
        >
          <p class="max-w-[1000px]">
            Lorem ipsum dolo sit amet, consectetur adipiscing
          </p>
          <p
            class="xl:pt-20 text-gray-400 font-gilroy text-xs lg:text-xl ml-4 lg:ml-10"
          >
            18/10/2024
          </p>
        </h1>
        <p class="text-white text-xs lg:text-xl lg:pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p class="text-white text-xs lg:text-xl lg:pb-10">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p class="text-white text-xs lg:text-xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <img
          src={image}
          alt="card_details_image"
          class="py-2 xl:py-14 hidden lg:block 2xl: 3xl:w-[60%] 3xl:mx-auto"
        />

        <p class="text-white text-xs lg:text-xl">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </p>
        <p class="text-white lg:text-xl pt-2 xl:pt-20">Autumn Galaxy Team</p>
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
