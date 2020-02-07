<template>
  <main>
    <Home></Home>
  </main>
</template>

<script>
import Home from "../../lecture5/components/Home";

export default {
  name: "Lecture4",
  components: {
    Home
  }
};
</script>

<style scoped>
main {
  min-height: 100vh;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://media.wired.com/photos/5bb7d8ba0bba6f2d70ffcc41/master/w_2400,c_limit/PlanetBuilding.gif")
    #1a1a1a;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 800px;
}
</style>