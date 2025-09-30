<script>
  import BgGradient from "../UI/BgGradient.svelte"
  import SmallerDeco from "../UI/Deco/SmallerDeco.svelte"
  import bgImage from "../../../assets/images/featurespagebg.png"
</script>

<BgGradient src={bgImage} class="max-md:h-[500px]">
  ><SmallerDeco title="FEATURES" class="pt-28 max-xl:py-20 max-lg:py-10" />
  <div class="flex flex-row bg">
    <div
      class="w-full md:w-[400px] lg:w-[520px] 2xl:w-[600px] flex flex-col justify-center mx-4 md:ml-10 xl:ml-40"
    >
      <h1
        class="font-cormorantSC text-white w-[300px] text-xl md:text-3xl lg:text-5xl lg:w-[500px]"
      >
      A streamlined, modern take on real-time strategy—built from the ground up for mobile
      </h1>
      <br />
      <p class="text-white lg:text-xl">
       Dive into fast-paced, competitive battles with intuitive controls, smart pacing, and a focus on fair, skill-based gameplay.
      </p>
      <br />
      <p class="text-white lg:text-xl">
     Outsmart opponents in real time, climb the ranks, and prove your dominance in a battlefield where strategy, speed, and precision decide it all.
      </p>
    </div>
  </div>
</BgGradient>

<style>
  .bg {
    background-image: url("../../../assets/images/featurespagesoldier.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    height: 55%;
    margin-right: 50px;
  }
  @media (max-width: 768px) {
    .bg {
      background-image: none;
      margin-right: 0px;
    }
  }
</style>
