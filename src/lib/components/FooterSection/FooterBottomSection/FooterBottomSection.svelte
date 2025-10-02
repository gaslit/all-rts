<script>
  import logo from "../../../../assets/images/logo.png"

  import FooterLink from "../FooterLink/FooterLink.svelte"
  import RedditLogo from "../../../../assets/icons/footerIcons/Reddit.svg"
  import FacebookLogo from "../../../../assets/icons/footerIcons/Facebook.svg"
  import DiscordLogo from "../../../../assets/icons/footerIcons/discord.svg"
  import YoutubeLogo from "../../../../assets/icons/footerIcons/youtube.svg"
  import Tiktok from "../../../../assets/icons/footerIcons/tik-tok(1).png"
  
</script>

<section class="bg-background-primary py-10">
  <div
    class="flex flex-col md:flex-row max-w-[1200px] mx-auto px-5 max-md:px-8"
  >
    <!-- Logo Section -->
    <div class="flex items-start justify-center pl-4 md:pr-20 max-md:pb-12">
      <a href="/"><img src={logo} alt="logo" class="w-20" /></a>
    </div>
    <div class="flex flex-1 space-x-16 justify-start">
      <!-- About Section -->
      <div>
        <div class="pb-7">
          <FooterLink text="About" class="text-lg" />
        </div>
        <ul class="space-y-2">
        <!--  <FooterLink text="Legal & Privacy" class="text-sm" /> -->
       <!--   <FooterLink
            text="Privacy & Cookie Policy"
            class="text-sm"
          /> -->
                   <a  href="/privacy-policy" class="link hover:text-opacity-75 text-sm text-[#9e9e9e]"
     >
      Privacy & Cookie Policy
    </a>
        <!--  <FooterLink text="Cookie Preferences" class="text-sm" /> -->
        </ul>
      </div>

      <!-- Support Section -->
      <div>
        <div class="pb-7">
          <FooterLink text="Support" class="text-lg" />
        </div>
        <ul class="space-y-2 flex flex-col">
         <a class="link hover:text-opacity-75 text-sm text-[#9e9e9e]"
      href="javascript:void(
        window.open(
          'https://form.jotform.com/251023432733446',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
       Contact Us
    </a>
   <a  href="/faq" class="link hover:text-opacity-75 text-sm text-[#9e9e9e]"
     >
     FAQ
    </a>
        </ul>
      </div>
      
    </div>
<div class="">
    <div
      class="text-[#9e9e9e] md:flex items-center text-sm px-4 max-md:text-center max-md:pt-7 pb-7"
    >
      © 2024 Autumn ( name here )
    </div>
 
  <div class="pb-8 flex justify-center">
    <div class="text-center">
      <div class="flex justify-center gap-6 md:gap-12 items-center">
        <a href="https://sh.reddit.com/user/allrts/" target="_blank">
          <img src={RedditLogo} alt="Reddit" class="w-6 " />
        </a>
        <a href="https://discord.gg/JBxPK375" target="_blank">
          <img src={DiscordLogo} alt="Discord" class="w-6 " />
        </a>
        <a href="https://www.youtube.com/channel/UCRBili6TrgGvuxGWcHOxvrQ" target="_blank">
          <img src={YoutubeLogo} alt="YouTube" class="w-6 n" />
        </a>
        <a href="https://www.tiktok.com/@all_rts?_t=ZS-8zwaF0C0vNI&_r=1" target="_blank">
          <img src={Tiktok} alt="YouTube" class="w-6 n" />
        </a>
      </div>
    </div>
  </div> </div>

  </div>
</section>
