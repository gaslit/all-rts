<script>
  import FooterBottomSection from "./FooterBottomSection/FooterBottomSection.svelte"
  import FooterTopSection from "./FooterTopSection/FooterTopSection.svelte"
</script>

<section class="relative bg-background-primary">
  <FooterTopSection />
  <div
    class="divider w-[60%] h-[3px] absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2"
  />
  <FooterBottomSection />
</section>

<style>
  .divider {
    background: linear-gradient(
      90deg,
      rgba(202, 156, 95, 0) 0%,
      #ca9c5f 50%,
      rgba(202, 156, 95, 0) 100%
    );
  }
</style>
