<script>
  import OutlinedButton from "../UI/Buttons/OutlinedButton.svelte"
</script>

<section class="banner-background">
  <div class="content pt-32 pb-16 max-md:pt-12 max-md:pb-8">
    <h1
      class="text-white text-8xl font-cormorantSC max-lg:text-5xl max-sm:text-4xl max-xs:text-3xl"
    >
      Discover the Core Features
    </h1>
    <h2
      class="text-white text-center text-xl pt-8 max-lg:text-lg max-md:text-sm"
    >
      Explore what makes the game tick—from its unique design philosophy to the experience that keeps players coming back for more.
    </h2>
    <OutlinedButton
      href="/features"
      text="Learn More"
      class="mt-16 max-md:mt-5 py-6 px-8 max-lg:px-4 max-lg:py-4 max-md:py-2"
    />
  </div>
</section>

<style>
  .banner-background {
    width: 100%;
    background-image: url("../../../assets/images/banner01.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
