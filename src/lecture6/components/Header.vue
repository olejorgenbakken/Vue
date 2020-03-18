<template>
  <header max>
    <nav>
      <h1>Home</h1>
      <section>
        <router-link :to="{ path: '6', query: { cats: 'all' } }">Cats</router-link>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-bottom: 50px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
