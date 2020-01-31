<template>
  <section id="my-wishes">
    <h1>My apartment wishlist</h1>
    <section class="wishes">
      <ul>
        <li v-for="wish in wishes" :key="wish.name" :title="wish">{{wish}}</li>
      </ul>
      <p>Total wishes: {{wishes.length}}</p>
    </section>
    <section class="add-wish">
      <label>Add new wish</label>
      <input v-model="newWish" type="text" />
      <input type="button" value="Add wish" @click="submit" />
    </section>
  </section>
</template>

<script>
export default {
  name: "MyWishes",
  data() {
    return {
      newWish: "",
      wishes: []
    };
  },
  methods: {
    submit() {
      this.wishes.push(this.newWish);
    }
  }
};
</script>

<style scoped>
#my-wishes {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 30px;
}

#my-wishes h1 {
  font-size: 2em;
  grid-column: 1 / span 2;
}

.wishes {
  margin: 10px 0 30px 0;
}

.wishes ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  gap: 10px 20px;
  text-transform: capitalize;
}

.wishes p {
  margin-top: 20px;
}

.add-wish {
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  color: white;
  border: 1px solid white;
  gap: 10px;
  align-self: center;
}

.add-wish input[type="button"] {
  background: white;
  color: #000000;
  border: none;
  border-radius: 2px;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>