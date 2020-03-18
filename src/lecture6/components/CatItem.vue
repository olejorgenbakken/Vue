<template>
  <article>
    <img :src="src" />
    <h2 class="title">{{ title }}</h2>
    <h3 class="type">{{ author }}</h3>
    <p>Average rating: {{ rating }}</p>
    <p>Rated by {{ ratings }} users</p>
    <p class="release">
      <small>Released: {{ releaseYear }}</small>
    </p>
  </article>
</template>

<script>
export default {
  name: "CatItem",
  props: {
    title: String,
    author: String,
    rating: String,
    ratings: String,
    releaseYear: String,
    src: String
  }
};
</script>

<style scoped>
a {
  width: 100%;
  color: inherit;
}
p {
  margin: 0;
}
.title {
  font-weight: 600;
  text-transform: capitalize;
}

.type {
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 10px;
}

article {
  padding: 20px;
  width: 100%;
  background: rgb(190, 229, 241);
  color: black;
  overflow: hidden;
}

img {
  height: 200px;
}

.release {
  margin-top: 10px;
}
</style>
