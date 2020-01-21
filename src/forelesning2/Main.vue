<template>
    <main>
        <Footer name="Hei"></Footer>
    </main>
</template>

<script>
import Footer from "./components/Footer.vue";
    export default {
        name: "Main",
        components: {
            Footer,
        }
    }
</script>
<style scoped>
main {
    height: 100%;
    background: linear-gradient(45deg, red, blue)
}
</style>