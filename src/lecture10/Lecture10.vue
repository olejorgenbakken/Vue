<template>
  <main>
    <h1 class="site-title">A list of movies in the movie database</h1>
    <MovieList :movies="movies"></MovieList>
  </main>
</template>

<script>
import axios from "axios";
import MovieList from "./components/MovieList";

export default {
  name: "Lecture10",
  data() {
    return {
      movies: [
        {
          title: "Placeholder",
          id: 0,
          releaseYear: 2020
        }
      ]
    };
  },
  components: {
    MovieList
  },
  created() {
    const MoviesAPI = "https://localhost:5001/movies/";
    axios.get(MoviesAPI).then(response => {
      this.movies = response.data;
      console.log(response.data);
    });
  }
};
</script>

<style>
main {
  padding: 20px;
}

.site-title {
  margin-bottom: 20px;
}
</style>
