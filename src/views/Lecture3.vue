<template>
  <main>
    <Header></Header>
    <Hero></Hero>
    <Row></Row>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "../lecture3/layout/TheHeader";
import Hero from "../lecture3/components/heros/Hero";
import Row from "../lecture3/components/games/GameList";
import Footer from "../lecture3/layout/TheFooter";

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