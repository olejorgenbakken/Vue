<template>
  <section id="not-found-page">
    <nav>
      <h1 class="error-num">404</h1>
      <h2 class="error-msg">Scroll down to choose a lecture</h2>
    </nav>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>

<style scoped>
#not-found-page {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.buzzfeed.com%2Fbuzzfeed-static%2Fstatic%2F2016-06%2F2%2F9%2Fasset%2Fbuzzfeed-prod-fastlane01%2Fanigif_sub-buzz-13110-1464875690-13.gif&f=1&nofb=1")
    pink;
  background-position: center 270px;
  background-size: 700px;
  background-repeat: no-repeat;
  color: white;
  position: relative;
}

#not-found-page nav {
  text-align: center;
  position: absolute;
  top: 100px;
}

.error-num {
  color: red;
  text-shadow: 0 0 7px #ff000044;
  font-size: 3em;
  margin-bottom: 10px;
}

.error-msg {
  font-size: 1.4em;
}
</style>