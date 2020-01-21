<template>
    <main>
        <Header :sitetitle="sitetitle"></Header>
        <Hero slogan="We build cool games in 2020"></Hero>
        <section class="row">
            <Game v-for="game in games" :key="game.name" :game="game"></Game>
        </section>
        <Footer :sitetitle="sitetitle"></Footer>
    </main>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Game from "./components/Game.vue";
import Footer from "./components/Footer.vue";
export default {
    name: "Main",
    data() {
        return {
            games: [
                {
                    title: "Call of Duty",
                    img: "https://gpstatic.com/acache/42/52/1/uk/packshot-fefc4634ec8d8fb1e141a00e187ea7f2.jpg",
                    genre: "Action",
                    price: 39.99,
                    inStock: true,
                }, {
                    title: "CyberPunk 2077",
                    img: "https://media.playstation.com/is/image/SCEA/cyberpunk-2077-box-art-01-ps4-06jun19-en-us?$native_nt$",
                    genre: "Action",
                    price: 59.99,
                    inStock: false,
                }
            ]
        }
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
    padding: 60px 40px;
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