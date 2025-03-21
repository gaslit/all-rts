<script>
  import banner from "../../../assets/images/BannerAOE.png"
  import kingdoms from "../../../assets/images/AutumnKingdoms.png"
  import GradientBox from "../UI/GradientBox.svelte"
  import TrailerPlaceholder from "./TrailerPlaceholder.svelte"
  import LightButton from "../UI/Buttons/LightButton.svelte"
</script>

<section
  class="relative bg-background-primary flex justify-center items-center flex-col"
>
  <GradientBox src={banner} />
  <div
    class="relative -top-60 max-xl:-top-44 max-lg:-top-24 max-sm:-top-10 left-0 right-0 flex justify-center items-center flex-col z-10"
  >
  
    <p class="text-white px-4 text-center text-xl mt-[0px] max-md:text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <LightButton text="Play Now" class="mt-16 max-md:mt-5" />
    <TrailerPlaceholder />
  </div>
</section>
