<template>
  <article class="game" :class="releaseDate < Date.now() ? '' : 'upcoming'">
    <section class="game-pic">
      <section class="game-release">
        <p
          class="date"
        >Releases: {{releaseDate.getDate()}}.{{releaseDate.getMonth()}}.{{releaseDate.getFullYear()}}</p>
      </section>
      <img v-bind:src="img" v-bind:alt="title + ' cover'" />
    </section>
    <section class="game-info">
      <h3 class="title">{{title}}</h3>
      <h4 class="price">${{price}}</h4>
      <h5 class="genre">{{genre}}</h5>
    </section>
  </article>
</template>

<script>
export default {
  name: "GameItem",
  props: {
    releaseDate: {
      type: Date,
      default: Date.now(),
      required: false
    },
    title: {
      type: String,
      default: "No Title",
      required: false
    },
    img: {
      type: String,
      default: "placeholder",
      required: false
    },
    price: {
      type: Number,
      default: 0,
      required: false
    },
    genre: {
      type: String,
      default: "No genre yet",
      required: false
    }
  }
};
</script>

<style scoped>
.game {
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px black;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px auto;
  height: min-content;
  transition: 0.1s linear;
}

.game:not(.upcoming):hover {
  cursor: pointer;
  transform: scale3d(1.03, 1.03, 1.03);
}

.game-pic {
  height: 100%;
  width: 100%;
  position: relative;
}

.game.upcoming {
  opacity: 0.7;
}

.game-pic img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.game-info {
  padding: 20px;
  display: grid;
  grid-template-rows: auto 60px 30px;
}

.game-release {
  display: none;
}

.game.upcoming .game-release {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  width: 100%;
  padding: 14px;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  font-weight: 600;
}

.title {
  font-size: 1.4em;
  text-align: center;
}

.price {
  background: black;
  color: white;
  border-radius: 3px;
  width: min-content;
  height: 40px;
  padding: 0 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.genre {
  font-size: 1em;
  align-self: center;
  text-align: center;
}
</style>