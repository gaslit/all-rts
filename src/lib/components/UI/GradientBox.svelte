<script>
  export let src
  export let showGradientOnTop = false
</script>

<section class="banner-container">
  <div class="banner-content" class:gradient={showGradientOnTop}>
    <img {src} alt="banner" class="w-full" />
  </div>
</section>

<style>
  .banner-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
  }

  .banner-content {
    position: relative;
    width: 100%;
  }

  .gradient::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    width: 100%;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(10, 19, 25, 1) 0%,
      rgba(10, 19, 25, 0) 100%
    );
  }

  .banner-content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    width: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(25, 13, 10, 0) 0%, #190d0a 39.32%);
  }

  @media (max-width: 768px) {
    .banner-content::after {
      height: 40px;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    z-index: 0;
  }
</style>
