<template>
  <footer id="navigation">
    <section>
      <h3 class="navigation-header">Project overview</h3>
      <nav>
        <h4 class="navigation-header">Lectures</h4>
        <router-link to="/lecture1">Lecture 1: Basics</router-link>
        <router-link to="/lecture2">Lecture 2: Components and props</router-link>
        <router-link to="/lecture3">Lecture 3: Components and props (cont.)</router-link>
        <router-link to="/lecture4">Lecture 4: Routing and methods</router-link>
      </nav>

      <nav id="links">
        <h4 class="navigation-header">Links</h4>
        <a href="http://github.com/olejorgenbakken">GitHub</a>
      </nav>
    </section>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
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

#navigation nav a {
  color: white;
}

#links a {
  padding-bottom: 2px;
  border-bottom: 2px solid white;
}
</style>