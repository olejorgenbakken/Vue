<template>
    <section class="hero" :style="{'background-image': 'url(' + require('../assets/gaming.jpg') + ')'}">
        <h2>{{slogan}}</h2>
    </section>
</template>

<script>
export default {
    name: "Hero",
    props: {
        slogan: String,
    }
}
</script>

<style scoped>
.hero {
    background-position: center center;
    background-size: cover;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 2em;
    color: white;
    text-shadow: 0 0 10px blue;
}
</style>