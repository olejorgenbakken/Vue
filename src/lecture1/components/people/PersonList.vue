<template>
  <section class="row">
    <section class="row-items">
      <Person
        v-for="person in people"
        :key="person.name"
        :name="person.name"
        :img="person.img"
        :ideology="person.ideology"
        :quote="person.quote"
        :source="person.source"
      ></Person>
    </section>
  </section>
</template>

<script>
import Person from "./PersonItem.vue";
import people from "../../assets/people.js";
export default {
  name: "Row",
  data() {
    return people;
  },
  components: {
    Person
  }
};
</script>

<style scoped>
.row {
  width: 100%;
  position: relative;
  padding: 60px 20px;
  border-bottom: 1px solid red;
}
.row h2 {
  margin: 0;
}
.row-items {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
}

@media only screen and (min-width: 650px) {
  .row {
    padding-bottom: 120px;
  }
}
</style>