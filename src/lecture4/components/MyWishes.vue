<template>
  <section id="my-wishes">
    <header>
      <h1>My apartment wishlist</h1>
      <p>Total wishes: {{wishes.length}}</p>
    </header>
    <section class="wishes">
      <ul>
        <li v-for="wish in wishes" :key="wish.name" :title="wish">{{wish}}</li>
      </ul>
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
      if (this.newWish != "" && this.newWish != null) {
        if (this.wishes.length < 36) {
          this.wishes.push(this.newWish);
        } else {
          alert("No more wishes for you my friend.");
        }
      } else {
        alert("Wishes can't be empty");
      }
    }
  }
};
</script>

<style scoped>
#my-wishes {
  width: 100%;
  max-width: 500px;
  height: calc(100vh - 40px);
}

#my-wishes header {
  max-width: 450px;
  margin: 0 auto;
}

.wishes {
  width: 100%;
  max-width: 450px;
  margin: 20px auto;
}

.wishes ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  margin-bottom: 5px;
}

.add-wish {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 550px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  padding: 30px 20px;
  background: rgb(5, 40, 71);
}

.add-wish label {
  font-size: 1.1em;
}

.add-wish input {
  border: none;
  border-radius: 3px;
}

.add-wish input[type="text"] {
  padding: 5px;
  color: black;
  background: white;
}

.add-wish input[type="button"] {
  padding: 10px;
  font-weight: 600;
  font-size: 1em;
  font-family: var(--sans-serif);
  background: white;
  color: black;
}

@media only screen and (min-width: 600px) {
  .add-wish {
    padding-left: 40px;
    padding-right: 40px;
    bottom: 50px;
    left: unset;
    box-shadow: none;
  }
}
</style>