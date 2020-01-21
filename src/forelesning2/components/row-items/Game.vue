<template>
    <article class="game">
        <section class="game-pic">
            <section class="game-release" v-if="game.releaseDate > Date.now()">
                <p class="date">Releases: {{game.releaseDate.getDate()}}.{{game.releaseDate.getMonth()}}.{{game.releaseDate.getFullYear()}}</p>
            </section>
            <img v-bind:src="game.img" v-bind:alt="game.title + ' cover'">
        </section>
        <section class="game-info">
            <h3 class="title">{{game.title}}</h3>
            <h4 class="price">${{game.price}}</h4>
            <h5 class="genre">{{game.genre}}</h5>
        </section>
    </article>
</template>

<script>
export default {
    name: "Game",
    props: {
        game: {
            type: Object,
            default: null,
            required: true,
        },
    }
}
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
}

.game-pic {
    height: 100%;
    width: 100%;
    position: relative;
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
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    width: 100%;
    text-align: center;
    padding: 14px;
    color: white;
    background: rgba(0,0,0,0.8);
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