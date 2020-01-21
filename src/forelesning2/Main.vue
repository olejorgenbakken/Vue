<template>
    <main>
        <Header :sitetitle="sitetitle"></Header>
        <Hero slogan="We build cool games in 2020"></Hero>
        <section class="row">
            <Game v-for="game in games" :key="game.title" :game="game"></Game>
        </section>
        <Footer :sitetitle="sitetitle"></Footer>
    </main>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Game from "./components/Game.vue";
import Footer from "./components/Footer.vue";
import games from "./assets/games.js";

export default {
    name: "Main",
    data() {
        return games
    },
    props: {
        sitetitle: {
            name: String,
            default: "CoolGames2020"
        },
    },
    components: {
        Header, Hero, Game, Footer,
    }
}
</script>

<style scoped>
.row {
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    background: linear-gradient(45deg, black, rgb(27, 27, 27))
}

@media only screen and (min-width: 500px) {
    .row {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (min-width: 800px) {
    .row {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (min-width: 1200px) {
    .row {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media only screen and (min-width: 1500px) {
    .row {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>