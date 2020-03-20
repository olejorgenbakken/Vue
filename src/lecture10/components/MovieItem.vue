<template>
  <article :id="'movie-' + id">
    <h2 class="title">{{title}}</h2>
    <h3 class="release">Released in {{releaseYear}}</h3>
  </article>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    title: String,
    id: Number,
    releaseYear: Number
  }
};
</script>

<style scoped>
article {
  border: 1px solid black;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
}

.title {
  font-size: 1.5em;
  font-weight: 600;
}

.release {
  font-size: 1em;
  font-weight: 500;
}

.title,
.release {
  color: white;
}
</style>