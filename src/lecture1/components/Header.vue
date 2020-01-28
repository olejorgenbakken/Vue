<template>
  <header class="header">
    <a href="index.html">
      <h1>{{sitetitle}}</h1>
    </a>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    sitetitle: String
  }
};
</script>
<style scoped>
header {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  height: var(--headerHeight);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
h1 {
  color: var(--links);
  font-size: 1.3em;
  position: relative;
}
@media only screen and (min-width: 600px) {
  header {
    padding: 0 40px;
  }
}
</style>