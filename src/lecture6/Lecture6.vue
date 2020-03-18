<template>
  <main>
    <Header></Header>
    <section max class="get-button">
      <button @click="getCats">Get books</button>
    </section>
    <CatList v-if="$route.query.cats != null" max :cats="cats"></CatList>
  </main>
</template>

<script>
import Header from "./components/Header";
import CatList from "./components/CatList";
import axios from "axios";

export default {
  name: "Lecture6",
  data() {
    return {
      cats: null
    };
  },
  components: {
    Header,
    CatList
  },
  methods: {
    getCats() {
      axios(
        "https://openwhisk.ng.bluemix.net/api/v1/web/rcamden%40us.ibm.com_My%20Space/goodreads/search.json?search=cat"
      ).then(response => {
        this.cats = response.data.result;
        console.log(response.data);
      });
    }
  }
};
</script>

<style>
*[max] {
  width: 100%;
  max-width: 920px;
  padding: 0 20px;
  margin: 0 autO;
}

.get-button {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
}

.get-button button {
  position: relative;
  padding: 5px 15px;
  background: blue;
  color: white;
  border-radius: 4px;
}
</style>
