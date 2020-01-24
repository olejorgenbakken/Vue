<template>
  <main>
    <Header></Header>
    <Hero></Hero>
    <Row></Row>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "./layout/TheHeader";
import Hero from "./components/heros/Hero";
import Row from "./components/games/GameList";
import Footer from "./layout/TheFooter";

export default {
  name: "Main",
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