<template>
    <article class="game">
        <section class="game-pic">
            <img v-bind:src="game.img" v-bind:alt="game.title + ' cover'">
        </section>
        <section class="game-info">
            <h3 class="title">{{game.title}}</h3>
            <h4 class="price">Price: ${{game.price}}</h4>
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
}

.game-pic {
    height: 400px;
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
    padding: 0 15px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 1.4em;
    padding: 20px;
}

.price, .genre {
    font-size: 1em;
}

.price {
    padding: 10px 20px;
    background: rgb(26, 26, 26);
    margin-bottom: 10px;
    color: white;
    border-radius: 2px;
}
</style>