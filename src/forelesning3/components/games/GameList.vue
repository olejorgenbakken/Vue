<template>
  <section class="row">
    <h3 class="row-title">all our games</h3>
    <section class="row-items">
      <GameItem
        v-for="game in games"
        :key="game.title"
        :title="game.title"
        :img="game.img"
        :price="game.price"
        :genre="game.genre"
        :releaseDate="game.releaseDate"
      ></GameItem>
    </section>
  </section>
</template>

<script>
import GameItem from "./GameItem.vue";
import games from "../../assets/games.js";

export default {
  name: "Row",
  data() {
    return games;
  },
  components: {
    GameItem
  }
};
</script>

<style scoped>
.row {
  padding: 0 40px 80px 40px;
  background: linear-gradient(
    0deg,
    rgb(17, 17, 17),
    rgb(131, 27, 27),
    rgb(41, 61, 173)
  );
}

.row-title {
  text-transform: uppercase;
  color: white;
  padding: 50px 0;
  margin-top: 80px;
  text-align: center;
  font-size: 1.6em;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.row-title:first-of-type {
  margin-top: 0;
}

.row-items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  width: 100%;
  max-width: 1410px;
  margin: 0 auto;
}

@media only screen and (min-width: 500px) {
  .row-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 800px) {
  .row-items {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1200px) {
  .row-items {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>