<template>
  <section class="row">
    <section class="row-items">
      <Person
        name="Stalin"
        ideology="Stalinism (Marxism–Leninism)"
        quote="Real liberty can exist only where exploitation has been abolished, where there is no oppression of some by others, where there is no unemployment and poverty, where a man is not haunted by the fear of being tomorrow deprived of work, of home and of bread. Only in such a society is real, and not paper, personal and every other liberty possible."
        source="Good Reads"
        img="https://1.bp.blogspot.com/-uMBKOQvp7KM/WJQgaqxtNTI/AAAAAAAAMOw/9WFKgBbxCJwnMMydncy82tfayoVF4PCmgCLcB/s1600/young_Stalin_1.jpg"
      ></Person>
      <Person
        name="Lenin"
        ideology="Leninism"
        quote="The progressive historical role of capitalism may be summed up in two brief propositions: increase in the productive forces of social labour, and the socialisation of that labour. But both these facts manifest themselves in extremely diverse processes in different branches of the national economy."
        source="Marxist.org"
        img="https://cdni.rbth.com/rbthmedia/images/2018.11/original/5bf7af2015e9f9064a78bc50.jpg"
      ></Person>
      <Person
        name="Helen Keller"
        ideology="Socialist"
        quote="The few own the many because they possess the means of livelihood of all ... The country is governed for the richest, for the corporations, the bankers, the land speculators, and for the exploiters of labor. The majority of mankind are working people. So long as their fair demands - the ownership and control of their livelihoods - are set at naught, we can have neither men's rights nor women's rights."
        source="Good Reads"
        img="https://cdn.britannica.com/08/19608-050-CCA3AE01/age-Helen-Keller.jpg"
      ></Person>
      <Person
        name="Stalin"
        ideology="Stalinism (Marxism–Leninism)"
        quote="Real liberty can exist only where exploitation has been abolished, where there is no oppression of some by others, where there is no unemployment and poverty, where a man is not haunted by the fear of being tomorrow deprived of work, of home and of bread. Only in such a society is real, and not paper, personal and every other liberty possible."
        source="Good Reads"
        img="https://1.bp.blogspot.com/-uMBKOQvp7KM/WJQgaqxtNTI/AAAAAAAAMOw/9WFKgBbxCJwnMMydncy82tfayoVF4PCmgCLcB/s1600/young_Stalin_1.jpg"
      ></Person>
      <Person
        name="Lenin"
        ideology="Leninism"
        quote="The progressive historical role of capitalism may be summed up in two brief propositions: increase in the productive forces of social labour, and the socialisation of that labour. But both these facts manifest themselves in extremely diverse processes in different branches of the national economy."
        source="Marxist.org"
        img="https://cdni.rbth.com/rbthmedia/images/2018.11/original/5bf7af2015e9f9064a78bc50.jpg"
      ></Person>
      <Person
        name="Helen Keller"
        ideology="Socialist"
        quote="The few own the many because they possess the means of livelihood of all ... The country is governed for the richest, for the corporations, the bankers, the land speculators, and for the exploiters of labor. The majority of mankind are working people. So long as their fair demands - the ownership and control of their livelihoods - are set at naught, we can have neither men's rights nor women's rights."
        source="Good Reads"
        img="https://cdn.britannica.com/08/19608-050-CCA3AE01/age-Helen-Keller.jpg"
      ></Person>
    </section>
  </section>
</template>

<script>
import Person from "./Rows/Person.vue";
export default {
  name: "Row",
  props: {
    title: String,
    backgroundImg: String
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
  background-attachment: fixed;
  background-size: cover;
  padding: 30px;
}
.row h2 {
  margin: 0;
}
.row-items {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
}
@media only screen and (min-width: 700px) {
  .row-items {
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 1100px) {
  .row {
    padding: 80px;
  }
  .row-items {
    gap: 50px 70px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>