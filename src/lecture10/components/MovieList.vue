<template>
  <section class="movie-list">
    <MovieItem
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :id="movie.id"
      :releaseYear="movie.releaseYear"
    ></MovieItem>
  </section>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  name: "MovieList",
  components: {
    MovieItem
  },
  props: {
    movies: Array
  }
};
</script>

<style>
.movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
</style>