<template>
  <main>
    <MyWishes></MyWishes>
  </main>
</template>

<script>
import MyWishes from "../../lecture4/components/MyWishes";

export default {
  name: "Lecture4",
  components: {
    MyWishes
  }
};
</script>

<style scoped>
main {
  min-height: 100vh;
  background: black;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Feditorial.designtaxi.com%2Fnews-gif180215%2F2.gif&f=1&nofb=1")
    #a2485b;
  background-repeat: no-repeat;
  background-position: 40px center;
  background-size: 460px;
}
</style>