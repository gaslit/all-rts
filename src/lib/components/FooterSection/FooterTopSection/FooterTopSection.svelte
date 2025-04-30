<script>
  import FooterLink from "../FooterLink/FooterLink.svelte"
  import RedditLogo from "../../../../assets/icons/footerIcons/Reddit.svg"
  import FacebookLogo from "../../../../assets/icons/footerIcons/Facebook.svg"
  import DiscordLogo from "../../../../assets/icons/footerIcons/discord.svg"
  import YoutubeLogo from "../../../../assets/icons/footerIcons/youtube.svg"
</script>

<section>
  <div
    class="flex flex-col md:flex-row items-center max-w-[1200px] mx-auto px-7 justify-between py-[80px] max-md:py-[60px]"
  >
    <!-- Left Side (Links) -->
    <div class="w-full max-w-[700px] min-w-[200px] max-sm:text-center">
      <h2 class="text-white text-lg font-gilroyBold pb-5">All RTS</h2>
      <div class="sm:flex flex-wrap gap-x-24 gap-y-4">
        <FooterLink text="Home" href="/home"/>
       <FooterLink text="Features"  href="/features" /> 
       <!-- <FooterLink text="Mobile Requirements"  href="/" /> -->
        <FooterLink text="News"   href="/" />
    
        <FooterLink text="Download"  href="/"/>
      </div>
    </div>

    <!-- Right Side (Social Media) -->

  </div>
</section>
