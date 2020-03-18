<template>
  <nav id="navigation">
    <section>
      <h3 class="navigation-header">Project overview</h3>
      <nav>
        <h4 class="navigation-header">Lectures</h4>
        <router-link to="/lecture/1">Lecture 1: Basics</router-link>
        <router-link to="/lecture/2">Lecture 2: Components and props</router-link>
        <router-link to="/lecture/3">Lecture 3: Components and props (cont.)</router-link>
        <router-link to="/lecture/4">Lecture 4: Routing and methods</router-link>
        <router-link to="/lecture/5">Lecture 5: Vuetify</router-link>
        <router-link to="/lecture/6">Lecture 6: AJAX and Axios</router-link>
      </nav>

      <nav id="links">
        <h4 class="navigation-header">Links</h4>
        <a href="http://github.com/olejorgenbakken">GitHub</a>
      </nav>
    </section>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
#navigation {
  position: relative;
  z-index: 2;
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

#navigation nav a {
  color: white;
}

#links a {
  padding-bottom: 2px;
  border-bottom: 2px solid white;
}
</style>
