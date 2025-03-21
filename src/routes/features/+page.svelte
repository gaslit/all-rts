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
    <FeaturesCard title="FEATURE 1" imageSrc={feature1} />
    <FeaturesCard title="FEATURE 2" imageSrc={feature2} />
    <FeaturesCard title="FEATURE 3" imageSrc={feature3} />
    <FeaturesCard title="FEATURE 1" imageSrc={feature1} />
    <FeaturesCard title="FEATURE 2" imageSrc={feature2} />
    <FeaturesCard title="FEATURE 3" imageSrc={feature3} />
    <FeaturesCard title="FEATURE 1" imageSrc={feature1} />
    <FeaturesCard title="FEATURE 2" imageSrc={feature2} />
    <FeaturesCard title="FeEATURE3" imageSrc={feature3} />
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
</style>
