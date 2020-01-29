<template>
  <article class="person">
    <section class="info">
      <h2 class="name">{{name}}</h2>
      <img v-bind:alt="name" v-bind:src="img" />
      <h3 class="ideology">
        Ideology:
        <span>{{ideology}}</span>
      </h3>
    </section>
    <section class="quote">
      <p>{{quote}}</p>
      <p class="source">{{source}}</p>
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
      default: "Communism"
    },
    quote: String,
    source: String
  }
};
</script>

<style>
.person {
  max-width: 700px;
  margin: 0 auto;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  background: white;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 40px rgb(167, 0, 0);
}

.info {
  background: #101010;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  color: white;
}

.info h3 {
  font-size: 1em;
  line-height: 27px;
}

.info h3 span {
  font-weight: normal;
}

.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  line-height: 30px;
  font-size: 1em;
}

.source {
  margin-top: 10px;
  font-weight: bolder;
}

.source::before {
  content: "- ";
  display: inline;
}

@media only screen and (min-width: 650px) {
  .person {
    grid-template-columns: 270px 1fr;
  }
}
</style>