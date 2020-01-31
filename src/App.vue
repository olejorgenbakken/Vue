<template>
  <main>
    <router-view />
    <TheFooter></TheFooter>
  </main>
</template>

<script>
import TheFooter from "./layout/TheFooter";

export default {
  name: "App",
  components: { TheFooter }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Gelasio:400,700i|Roboto:400,700,900&display=swap");
:root {
  --serif: "Gelasio", serif;
  --sans-serif: "Roboto", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--sans-serif);
  margin: 0 auto;
}

img {
  max-width: 100%;
}

a {
  width: max-content;
  text-decoration: none;
}
</style>
