<template>
  <section
    class="hero"
    :style="{'background-image': 'url(' + require('../assets/gaming.jpg') + ')'}"
  >
    <h2>{{slogan}}</h2>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    slogan: String
  }
};
</script>

<style scoped>
.hero {
  background-position: center center;
  background-size: cover;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
}

h2 {
  font-size: 4em;
  color: white;
  text-align: center;
  text-shadow: 0 0 30px purple;
}

@media only screen and (min-width: 700px) {
  h2 {
    font-size: 6em;
  }
  .hero {
    background-position: center top;
  }
}
</style>