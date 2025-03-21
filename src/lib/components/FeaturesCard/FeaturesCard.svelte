<script>
  export let imageSrc
  export let title
</script>

<section class="features-card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="image-wrapper">
    <img src={imageSrc} alt="image" class="image" />
  </div>
  <div class="content">
    <h2 class="title font-cormorantSC">{title}</h2>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
  </div>
</section>

<style>
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
