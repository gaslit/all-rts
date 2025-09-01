<script>
  import NewsCard from "$lib/components/NewsSection/NewsCard/NewsCard.svelte"
  import NewsSection from "$lib/components/NewsSection/NewsSection.svelte"
  import SwiperNavigation from "$lib/components/SwiperSection/SwiperNavigation/SwiperNavigation.svelte"
  import SwiperPagination from "$lib/components/SwiperSection/SwiperPagination/SwiperPagination.svelte"
  import SwiperSection from "$lib/components/SwiperSection/SwiperSection.svelte"
  import BgGradient from "$lib/components/UI/BgGradient.svelte"
  import Deco from "$lib/components/UI/Deco/Deco.svelte"
  import bgImage from "../../assets/images/bgnewspage.png"
  import "swiper/swiper-bundle.css"
  import newsImage1 from "../../assets/images/newsimage1.png"
  import newsImage2 from "../../assets/images/newsimage2.png"
  import newsImage3 from "../../assets/images/newsimage3.png"
  import logo from "../../assets/images/logo.png"
  import OutlinedButton from "$lib/components/UI/Buttons/OutlinedButton.svelte"
  import Dropdown from "$lib/components/UI/Dropdown/Dropdown.svelte"
</script>

<section class="relative bg-background-primary">
  <div
    class=" h-[2200px] max-xl:h-[2050px] max-lg:h-[2200px] max-md:h-[3200px] max-xs:h-[2870px]"
  >

    <Deco title="Frequently Asked Questions" class="py-28 max-xl:py-20 max-lg:py-10" />
<div class="">
    <div class="max-w-3xl mx-auto px-6 space-y-4">

         <details class="group border border-gray-200 rounded-md bg-white/5 p-4">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          <span>What is ALL RTS?</span>
         
          <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-white">
          ALL RTS is a reimagined blend of Age of Empires, StarCraft, and Red Alert—
          combining the best elements of each into one epic real-time strategy (RTS) experience.
        </p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          Which factions or civilizations are available?
           <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">-</p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          Will specific units/buildings be included?
          <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">-</p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          Are you looking for developers?
          <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">
          Yes! ALL RTS is actively offering opportunities for developers. 
          Visit our <a href="/opportunities" class="">Opportunities page</a> for more details.
        </p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          How can I join the Alpha or Beta testing?
           <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">
          Participation is currently by invitation only and managed directly by the developers.
        </p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          Which devices and platforms are supported?
          <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">-</p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          Will ALL RTS be available on Steam?
         <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">
          No. We plan to publish and distribute exclusively through our own website, the Google Play Store, and the App Store. Additional details will be provided on our website.
        </p>
      </details>

      <details class="group border border-gray-200 rounded-xl p-4 bg-white/5">
        <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg text-white">
          What are the recommended computer specifications?
          <span class="ml-4 text-white">
            <span class="group-open:hidden">+</span>
            <span class="hidden group-open:inline">-</span>
          </span>
        </summary>
        <p class="mt-2 text-gray-300">
          Specs haven’t been finalized yet. We’ll share the minimum and recommended requirements once we have a clearer understanding of the game’s full scope and graphical fidelity. Since ALL RTS will be available on any device, details will be provided for each platform.
        </p>
      </details>
    </div>
  </div>
  </div>
</section>

<style>
  details[open] p {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
