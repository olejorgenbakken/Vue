<template>
  <section class="hero">
    <article>
      <h1>{{ msg }}</h1>
      <h2>This page serves as an overview over the differing leftist perspectives</h2>
    </article>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2em;
  font-weight: 900;
}
h2 {
  font-size: 1.5em;
  font-weight: 500;
}
article {
  width: 100%;
  max-width: 700px;
  color: white;
  padding: 40px;
}
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding-top: var(--headerHeight); 
  padding-left: 0;
  padding-bottom: 0;
  background: linear-gradient(45deg, blue, red);
}
@media only screen and (min-width: 600px) {
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }
  .hero {
    justify-content: flex-end;
    padding-left: 100px;
    padding-bottom: 260px;
  }
}
</style>