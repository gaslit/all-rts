<script>
  import FeaturesCard from "$lib/components/FeaturesCard/FeaturesCard.svelte"
  import FeaturesTopSection from "$lib/components/FeaturesTopSection/FeaturesTopSection.svelte"
  import Dropdown from "$lib/components/UI/Dropdown/Dropdown.svelte"
  import feature1 from "../../assets/images/feature1.png"
  import feature2 from "../../assets/images/feature2.png"
  import feature3 from "../../assets/images/feature3.png"
</script>

<section class="bg-background-primary">
  <FeaturesTopSection />
  <div
    class="features-grid mt-10 max-sm:mt-8 max-xl:mt-10 justify-items-center px-10"
  >
    <div class="col-span-1 w-full">
      <Dropdown />
    </div>
    <div class="col-span-2 max-md:hidden"></div>
<!--   <FeaturesCard title="Full Real-Time Strategy experience:" description="train units, construct buildings, research upgrades
"  imageSrc={feature1} />
    <FeaturesCard title="Full Real-Time Strategy experience:" description="sdsd"  imageSrc={feature2} />
    <FeaturesCard title="Full Real-Time Strategy experience:" description="sdsd"  imageSrc={feature3} />
    <FeaturesCard title="Full Real-Time Strategy experience:" description="sdsd"  imageSrc={feature1} /> -->
    <section class="features-card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="image-wrapper">
    <img src={feature1} alt="image" class="image" />
  </div>
  <div class="content">
    <h2 class="title font-cormorantSC">Full Real-Time Strategy experience:</h2>
    <p class="description">
       train units, construct buildings, research upgrades
    </p>
  </div>
</section>

<section class="features-card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="image-wrapper">
    <img src={feature3} alt="image" class="image" />
  </div>
  <div class="content">
    <h2 class="title font-cormorantSC">Reimagined for phone & tablets</h2>
    <p class="description">
      designed from the ground up for touch control

    </p>
  </div>
</section>

<section class="features-card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="image-wrapper">
    <img src={feature2} alt="image" class="image" />
  </div>
  <div class="content">
    <h2 class="title font-cormorantSC"> Robust Multiplayer:</h2>
    <p class="description">
     balanced matchmaking, competitive or cooperative play
    </p>
  </div>
</section>

<section class="features-card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="image-wrapper">
    <img src={feature1} alt="image" class="image" />
  </div>
  <div class="content">
    <h2 class="title font-cormorantSC">Quick 10 min matches:</h2>
    <p class="description">
      rush right into epic late game battles

    </p>
  </div>
</section>

<section class="features-card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="image-wrapper">
    <img src={feature3} alt="image" class="image" />
  </div>
  <div class="content">
    <h2 class="title font-cormorantSC">Free to Play</h2>
    <p class="description">
      No Ads, No IAP, No P2W
     
    </p>
  </div>
</section>



  </div>
  <div class="w-full flex justify-center pt-16 max-md:pt-7"></div>
</section>

<style>
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 0.2fr);
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1915px) {
    .features-grid {
      grid-template-columns: repeat(3, 0.5fr);
    }
  }
  @media (max-width: 992px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

    .features-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    max-width: 420px;
    transition: transform 0.3s ease;
  }

  .image-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    padding: 15px;
    background: #040709;
    color: white;
  }

  .title {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 3.85px;
    margin-bottom: 10px;
    color: white;
  }

  .description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
  }

  /* Hover effect */
  @media (hover: hover) {
    .features-card:hover {
      transform: scale(1.05);
    }
  }

  /* Адаптивные стили */
  @media (max-width: 1200px) {
    .title {
      font-size: 1.5rem;
      letter-spacing: 2.85px;
    }
    .description {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .features-card {
      max-width: 320px;
    }

    .title {
      font-size: 1.4rem;
      letter-spacing: 2.5px;
    }

    .content {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .features-card {
      max-width: 260px;
    }

    .title {
      font-size: 1.2rem;
      letter-spacing: 2.5px;
    }

    .description {
      font-size: 0.85rem;
    }
  }
</style>
