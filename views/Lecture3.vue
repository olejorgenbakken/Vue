<template>
  <main>
    <Header></Header>
    <Hero></Hero>
    <Row></Row>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "../src/lecture3/layout/TheHeader";
import Hero from "../src/lecture3/components/heros/Hero";
import Row from "../src/lecture3/components/games/GameList";
import Footer from "../src/lecture3/layout/TheFooter";

export default {
  name: "Lecture3",
  props: {
    sitetitle: {
      name: String,
      default: "A Gaming Studio 2.0"
    }
  },
  components: {
    Header,
    Hero,
    Row,
    Footer
  }
};
</script>