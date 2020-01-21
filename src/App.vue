<template>
    <Main></Main>
</template>

<script>
import Main from './forelesning2/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gelasio:400,700i|Roboto:400,700,900&display=swap');
:root {
  --serif: 'Gelasio', serif;
  --sans-serif: 'Roboto', sans-serif;
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
</style>
