<template>
  <main id="main">
    <Hero msg="Welcome comrade" brief="A showcase of icons" />
    <PersonList title="People"></PersonList>
  </main>
</template>

<script>
import Hero from "./components/Hero";
import PersonList from "./components/people/PersonList";
export default {
  name: "Lecture1",
  components: {
    Hero,
    PersonList
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,700,900&display=swap");
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

main {
  background: linear-gradient(0deg, rgb(0, 0, 0), rgb(61, 0, 0));
}
</style>