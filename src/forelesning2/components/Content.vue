<template>
  <section class="row">
    <h3 class="row-title">all our games</h3>
    <section class="row-items">
      <Game v-for="game in games" :key="game.title" :game="game"></Game>
    </section>
  </section>
</template>

<script>
import Game from "../components/row-items/Game.vue";
import games from "../assets/games.js";

export default {
  name: "Row",
  data() {
    return games;
  },
  components: {
    Game
  }
};
</script>

<style scoped>
.row {
  padding: 0 40px 50px 40px;
  background: linear-gradient(45deg, rgb(21, 59, 131), rgb(68, 0, 0));
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