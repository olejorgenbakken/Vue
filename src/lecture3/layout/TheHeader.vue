<template>
  <header class="header">
    <img :src="logo" :alt="sitetitle" class="logo" />
    <h1 class="sitetitle">{{ sitetitle }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    sitetitle: {
      type: String,
      default: "Microsoft Studios"
    },
    logo: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftechartninja.com%2Fwp-content%2Fuploads%2FMicrosoftStudiosLogo.png&f=1&nofb=1"
    }
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 40px 80px 40px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  background: transparent;
  color: white;
}

.logo {
  width: 160px;
  margin: 0 auto;
}

.sitetitle {
  display: none;
}
</style>
