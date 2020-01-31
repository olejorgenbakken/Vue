<template>
  <Main>
    <router-view />
    <footer id="navigation">
      <section>
        <h3 class="navigation-header">Project overview</h3>
        <nav>
          <h4 class="navigation-header">Lectures</h4>
          <router-link to="lecture1">Lecture 1</router-link>
          <router-link to="lecture2">Lecture 2</router-link>
          <router-link to="lecture3">Lecture 3</router-link>
          <router-link to="lecture4">Lecture 4</router-link>
        </nav>

        <nav id="links">
          <h4 class="navigation-header">Links</h4>
          <a href="http://github.com/olejorgenbakken">GitHub</a>
        </nav>
      </section>
    </footer>
  </Main>
</template>

<script>
export default {
  name: "App"
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
}

#navigation {
  position: relative;
  width: 100%;
  background: black;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
}

#navigation h3 {
  font-size: 1.4em;
}

#navigation section {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
}

#navigation section nav {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
}

.navigation-header {
  font-size: 1.2em;
}

#links a {
  padding-bottom: 2px;
  border-bottom: 2px solid white;
}
</style>
