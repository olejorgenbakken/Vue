<template>
    <article class="person">
        <aside class="person-name">
            <img v-bind:alt='name' v-bind:src='img'>
            <h1 class="name">{{name}}</h1>
        </aside>
        <section class="quote">
            <p>{{quote}}<span>{{source}}</span></p>
        </section>
        <section class="person-info">
            <h2 class="ideology">Ideology: <span>{{ideology}}</span></h2>
        </section>
    </article>
</template>

<script>
export default {
    name: "Person",
    props: {
        name: String,
        img: String,
        ideology: {
            title: String,
            default: "Communism",
        },
        quote: String,
        source: String,
    }
}
</script>

<style>
.person {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 55px;
    align-items: center;
    background: white;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    height: fit-content;
}
.person-name {
    height: 100%;
    padding: 10px 20px;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    background: #111;
    color: white;
}
.person-name img {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
}
.name {
    font-size: 1.3em;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
}
.quote {
    position: relative;
    padding: 10px 20px;
    align-self: flex-start;
}
.quote p {
    font-weight: 400;
    line-height: 27px;
    display: flex;
    flex-direction: column;
}
.quote p span {
    font-weight: 500;
    margin-top: 2px;
}
.quote p span::before {
    content: '- ';
}
.person-info {
    line-height: 21px;
    padding: 0 20px;
}
.ideology {
    font-size: .95em;
}
.ideology span{
    font-weight: 700;
}
@media only screen and (min-width: 110px) {
    .quote {
        padding: 15px 30px;
    }
}
</style>