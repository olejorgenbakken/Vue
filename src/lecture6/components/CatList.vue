<template>
  <section class="cat-list">
    <CatItem
      v-for="cat in cats"
      :key="cat.id"
      :title="cat.title"
      :author="cat.author"
      :src="cat.image_url"
      :releaseYear="cat.original_publication_year"
      :rating="cat.average_rating"
      :ratings="cat.ratings_count"
    ></CatItem>
  </section>
</template>

<script>
import CatItem from "./CatItem";
export default {
  name: "CatList",
  props: {
    cats: Array
  },
  components: {
    CatItem
  }
};
</script>

<style scoped>
/* test */
.cat-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  padding-bottom: 100px;
}

@media only screen and (min-width: 600px) {
  .cat-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>