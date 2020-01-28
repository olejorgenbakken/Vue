<template>
  <main id="main">
    <Header sitetitle="Ole Jørgens overview" />
    <Hero
      msg="Welcome comrade"
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Stalin_1902.jpg/1200px-Stalin_1902.jpg"
    />
    <Row title="People"></Row>
  </main>
</template>

<script>
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Row from "./components/Row.vue";
export default {
  name: "Lecture1",
  components: {
    Header,
    Hero,
    Row
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,700,900&display=swap");
:root {
  --white: #ffffff;
  --links: #f6f6f6;
  --headerHeight: 80px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.4em;
}
h3 {
  font-size: 1.2em;
}
h4,
h5,
p,
a {
  font-size: 1em;
}
a {
  color: var(--links);
  text-decoration: none;
}
img {
  max-width: 100%;
}
</style>