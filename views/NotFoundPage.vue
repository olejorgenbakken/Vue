<template>
  <section id="not-found-page">
    <h1>Not Found Page</h1>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>

<style scoped>
#not-found-page {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oEdvbRHem1psqd7a0%2Fgiphy.gif&f=1&nofb=1");
  background-position: center center;
  background-size: cover;
  color: white;
  position: relative;
}

#not-found-page h1 {
  position: absolute;
  top: 200px;
  font-size: 2em;
}
</style>