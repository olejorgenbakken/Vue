<template>
  <section class="hero" :style="{'background-image': 'url(' + img + ')'}"></section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    img: {
      type: String,
      default:
        "https://wallpapercave.com/wp/wp8331675.gif"
    }
  }
};
</script>

<style scoped>
.hero {
  height: 80vh;
  min-height: 500px;
  background-size: cover;
  background-position: 35% 70%;
}

@media only screen and (min-width: 900px) {
  .hero {
    background-size: 110%;
    background-position: center;
  }
}
</style>