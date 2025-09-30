<script>
  import banner from "../../../assets/images/banner.png"
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
    class="relative -top-40  max-lg:-top-[8rem] max-sm:-top-10 left-0 right-0 flex justify-center items-center flex-col z-10"
  >
  <h1 class="flex text-white font-cormorantSC font-bold text-2xl md:text-3xl pt-44 pb-2 xl:text-6xl xl:"> </h1>

   <h1  class="flex font-bold text-white font-cormorantSC text-2xl md:text-3xl xl:text-4xl pb-8 lg:pb-16">Classic RTS for Mobile</h1>
    <p class=" text-white text-xs lg:text-xl lg:pb-10 px-8 lg:px-28 lg:w-2/3 text-center lg:mx-auto mb-[4rem]">

    <span class="text-2xl mb-4">Welcome back, commander! </span>

<br><br>

Real time strategy once defined a generation of desktop gamers: we're diehard fans who've never forgotten. Our dream is to bring that spirit back for everyone, everywhere-- with fast, 10 minute matches that can be played on mobile or web.

<br><br>

All RTS is our passion project—a completely free, fan-made tribute to the classics we grew up with. It has all the gameplay we love: base-building, resource-gathering and epic battles; redesigned for touch controls and connected with modern multiplayer matchmaking-- no in-app purchases, no ads and no pay to win.

<br><br>
We built this for ourselves, our friends and for you: to relive the magic of those days and to share that same excitement with a new generation of players. Will you join us on the battlefield?
<br>
    </p>
    <LightButton  target="_blank"  href="https://g.autumninteractive.com/rts-online/" text="Play Now" class="mt-16 max-md:mt-5 cursor-pointer" />
    <TrailerPlaceholder />
  </div>
  </section>
