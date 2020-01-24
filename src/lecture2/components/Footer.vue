<template>
  <footer>
    <h1>{{sitetitle}}</h1>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    sitetitle: String
  }
};
</script>

<style scoped>
footer {
  background: #111;
  text-align: center;
  padding: 70px 20px;
  color: white;
}
</style>