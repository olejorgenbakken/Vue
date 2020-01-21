<template>
    <main>
        <Hero :slogan="sitetitle"></Hero>
        <Content></Content>
        <Footer :sitetitle="sitetitle"></Footer>
    </main>
</template>

<script>
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "Main",
    props: {
        sitetitle: {
            name: String,
            default: "A Gaming Studio"
        },
    },
    components: {
        Hero, Content, Footer,
    }
}
</script>