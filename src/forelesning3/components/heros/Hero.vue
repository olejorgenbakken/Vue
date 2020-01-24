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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsociorocketnewsen.files.wordpress.com%2F2016%2F05%2F10.gif%3Fw%3D640%26h%3D361&f=1&nofb=1"
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
    background-position: left 70%;
  }
}
</style>