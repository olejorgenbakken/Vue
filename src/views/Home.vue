<template>
  <main id="home">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FWs9ksgMH6nbGemB3Yh%2Fgiphy.gif&f=1&nofb=1"
      alt="welcome message"
    />
    <p class="welcome-msg">Scroll down to choose a lecture</p>
  </main>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
#home {
  height: 100vh;
  background: linear-gradient(245deg, rgb(6, 9, 20), rgb(12, 26, 41));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home img {
  width: 50%;
  max-width: 340px;
  margin-bottom: 40px;
}

#home .welcome-msg {
  font-size: 1.2em;
}
</style>