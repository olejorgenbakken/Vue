<template>
  <section class="hero">
    <article>
      <h1>{{ msg }}</h1>
      <h2>{{brief}}</h2>
    </article>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String,
    brief: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2.2em;
  font-weight: 900;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.6em;
}

article {
  width: 100%;
  color: white;
}

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 70vh;
  min-height: 400px;
  padding: 0 80px;
}

article {
  max-width: 800px;
}
</style>