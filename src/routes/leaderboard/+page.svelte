<script>
  import BgGradient from "$lib/components/UI/BgGradient.svelte"
  import bgImage from "../../assets/images/BG.png"
  import leftArrowIcon from "../../assets/icons/Leftarrow.svg"
  import image from "../../assets/images/carddetailsimage.png"
  import line from "../../assets/images/line.png"
  import Deco from "$lib/components/UI/Deco/Deco.svelte"
  import SmallerDeco from "$lib/components/UI/Deco/SmallerDeco.svelte"
  import left from "../../assets/images/left.png"
  import right from "../../assets/images/right.png"
  import prev from "../../assets/images/prev.png"
  import back from "../../assets/images/back.png"
  // Filter states
  let selectedRegion = 'Global'
  let selectedGameMode = 'Random Map'
  let searchQuery = ''
  let showRegionDropdown = false
  let showGameModeDropdown = false

  // Mock data for demonstration
  const regions = ['Global', 'Europe', 'Asia', 'North America', 'Oceania']
  const gameModes = ['Random Map', 'Game Mode', 'Death Match', 'King of the Hill']
  
  // Sample leaderboard data
  const leaderboardData = [
    { rank: 1, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 2, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 3, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 4, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 5, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 6, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 7, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 8, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 9, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 10, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 11, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 12, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" },
    { rank: 13, rating: 1999, name: "Player's Name", wins: 999, losses: 999, totalGames: 99999, joinDate: "16/06/2025" }
  ]

  // Filter functions
  const toggleRegionDropdown = () => {
    showRegionDropdown = !showRegionDropdown
    showGameModeDropdown = false
  }

  const toggleGameModeDropdown = () => {
    showGameModeDropdown = !showGameModeDropdown
    showRegionDropdown = false
  }

  const selectRegion = (region) => {
    selectedRegion = region
    showRegionDropdown = false
  }

  const selectGameMode = (mode) => {
    selectedGameMode = mode
    showGameModeDropdown = false
  }

  // Close dropdowns when clicking outside
  const handleOutsideClick = () => {
    showRegionDropdown = false
    showGameModeDropdown = false
  }
</script>

<svelte:window on:click={handleOutsideClick} />

<section class="bg-background-primary">
  <BgGradient
    src={bgImage}
    class="h-auto min-h-[650px] xs:min-h-[400px] md:min-h-[310px] lg:min-h-[1000px] xl:min-h-[1470px] 2xl:min-h-[1600px]"
  >
<div class="w-full flex justify-center pt-28 max-xl:py-20 max-lg:py-10">
  <div class="decorated-header w-full max-w-4xl mx-auto">
    <h1 class="title font-cormorantSC">LEADERBOARD</h1>
  </div>
</div>
    
    
    <div class="flex flex-col py-4 lg:py-14 px-5 lg:px-20 h-full relative">
      <!-- Leaderboard Filters -->
      <div class="flex flex-col lg:flex-row gap-4 mb-8 ">
        <!-- Region Filter -->
        <div class="relative">
          <button
            class="bg-[#292424CC] border-[#DED1AD] border text-white px-4 py-3 min-w-[200px] text-left flex items-center justify-between font-cormorantSC font-semibold text-lg uppercase tracking-wider transition duration-300"
            on:click|stopPropagation={toggleRegionDropdown}
          >
            <span>{selectedRegion}</span>
            <svg class="w-4 h-4 transform {showRegionDropdown ? 'rotate-180' : 'rotate-0'} transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {#if showRegionDropdown}
            <div class="absolute top-full left-0 right-0 bg-black/90 z-50 max-h-60 overflow-y-auto">
              {#each regions as region}
                <button
                  class="w-full text-left px-4 py-3 text-white hover:bg-white/20 border-b border-[#DED1AD] last:border-b-0 transition duration-200 font-cormorantSC font-semibold uppercase tracking-wider {region === selectedRegion ? 'bg-white/10' : ''}"
                  on:click|stopPropagation={() => selectRegion(region)}
                >
                  {region}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Game Mode Filter -->
        <div class="relative">
          <button
            class="bg-[#292424CC] border-[#DED1AD]  border text-white px-4 py-3 min-w-[200px] text-left flex items-center justify-between font-cormorantSC font-semibold text-lg uppercase tracking-wider transition duration-300"
            on:click|stopPropagation={toggleGameModeDropdown}
          >
            <span>{selectedGameMode}</span>
            <svg class="w-4 h-4 transform {showGameModeDropdown ? 'rotate-180' : 'rotate-0'} transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {#if showGameModeDropdown}
            <div class="absolute top-full left-0 right-0 bg-black/90  z-50 max-h-60 overflow-y-auto">
              {#each gameModes as mode}
                <button
                  class="w-full text-left px-4 py-3 text-white hover:bg-white/20 border-b border-[#DED1AD] last:border-b-0 transition duration-200 font-cormorantSC font-semibold uppercase tracking-wider {mode === selectedGameMode ? 'bg-white/10' : ''}"
                  on:click|stopPropagation={() => selectGameMode(mode)}
                >
                  {mode}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Search Filter -->
        <div class="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="SEARCH BY PLAYER"
            bind:value={searchQuery}
           class="w-full bg-[#292424CC] border border-[#DED1AD] text-white px-4 py-3 font-cormorantSC font-semibold text-lg uppercase tracking-wider placeholder-white/70 focus:outline-none focus:border-[#DED1AD] transition duration-300"
          />
          <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <!-- Leaderboard Table -->
      <div class="flex-1 w-full">
        <div class=" overflow-hidden w-full">
          <!-- Table Header -->
          <div class="grid grid-cols-8  px-6 py-4">
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider">#</div>
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider">Elo</div>
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider col-span-2">Name</div>
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider text-center">Wins</div>
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider text-center">Losses</div>
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider text-center">Total Games</div>
            <div class="text-[#DED1AD] font- text-sm lg:text-lg capitalize tracking-wider text-center">Join Date</div>
          </div>
          <div class="pb-8">
            <img src="{line}" alt="">
          </div>
          <!-- Table Rows -->
          {#each leaderboardData as player, index}
            <div class="grid grid-cols-8 px-6 py-4 {index % 2 === 0 ? 'bg-[#120A07]' : 'bg-transparent'} hover:bg-white/5 transition duration-200">
              <div class="text-white  text-lg">{player.rank}</div>
              <div class="text-white text-lg">{player.rating}</div>
              <div class="flex items-center gap-3 col-span-2">
                <div class="w-8 h-8 bg-gray-600 border border-white/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1.5V2.5C15 3.33 14.33 4 13.5 4H10.5C9.67 4 9 3.33 9 2.5V1.5L3 7V9H21ZM12 8.5C13.38 8.5 14.5 9.62 14.5 11V20H9.5V11C9.5 9.62 10.62 8.5 12 8.5Z"/>
                  </svg>
                </div>
                <span class="text-white text-lg">{player.name}</span>
              </div>
              <div class="text-green-400  text-lg text-center">{player.wins}</div>
              <div class="text-red-400 text-lg text-center">{player.losses}</div>
              <div class="text-white text-lg text-center">{player.totalGames}</div>
              <div class="text-white  text-lg text-center">{player.joinDate}</div>
            </div>
          {/each}
        </div>
        <!-- Pagination Footer -->
        <div class=" px-6 py-4 flex items-center justify-between w-full mt-4">
          <div class="text-white  text-sm">
            Last Updated: 16/9/2025, 1:53pm
          </div>
          <div class="flex items-center gap-2">
            <!-- First Page -->
            <button class="w-6 h-6 flex items-center justify-center text-white">
               <img src="{left}" alt="">
            </button>
            <!-- Previous Page -->
            <button class="w-4 h-4 flex items-center justify-center text-white">
                <img src="{back}" alt="">
            </button>
            <!-- Page Info -->
            <div class="text-white  mx-6">1 of 5</div>
            <!-- Next Page -->
            <button class="w-4 h-4 flex items-center justify-center text-white">
                <img src="{prev}" alt="">
            </button>
            <!-- Last Page -->
            <button class="w-6 h-6 flex items-center justify-center text-white">
              <img src="{right}" alt="">
            </button>
          </div>
        </div>
 
      </div>

      <!-- Back to Top Button -->
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
<style>
.decorated-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/icons/deco2.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 120%; 
    max-width: 800px;
}
  .title {
    color: white;
    font-size: 5.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 640px) {
    .title {
      font-size: 2rem;
    }
  }
</style>