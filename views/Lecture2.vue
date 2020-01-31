<template>
  <main>
    <Hero :slogan="sitetitle"></Hero>
    <Content></Content>
    <Footer :sitetitle="sitetitle"></Footer>
  </main>
</template>

<script>
import Hero from "../src/lecture2/components/Hero.vue";
import Content from "../src/lecture2/components/Content.vue";
import Footer from "../src/lecture2/components/Footer.vue";

export default {
  name: "Lecture2",
  props: {
    sitetitle: {
      name: String,
      default: "A Gaming Studio"
    }
  },
  components: {
    Hero,
    Content,
    Footer
  }
};
</script>