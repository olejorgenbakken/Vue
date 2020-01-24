<template>
  <footer>
    <img :src="company.logo" :alt="company.name" />
    <nav>
      <ul>
        <li>
          <h3>Our sponsors</h3>
        </li>
        <li v-for="(value, index) in company.sponsors" :key="index">{{value}}</li>
      </ul>
      <ul>
        <li>
          <h3>Contact</h3>
        </li>
        <li v-for="(value, index) in company.contact" :key="index">{{value}}</li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      company: {
        name: "Microsoft Studios",
        logo:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftechartninja.com%2Fwp-content%2Fuploads%2FMicrosoftStudiosLogo.png&f=1&nofb=1",
        sponsors: ["Accenture", "Microsoft", "IKEA", "Apple"],
        contact: ["Ole Jørgen Bakken", "github.com/olejorgenbakken"]
      }
    };
  }
};
</script>

<style scoped>
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  padding: 50px 40px;
  row-gap: 50px;
  color: white;
  background: rgb(17, 17, 17);
}

nav {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

ul {
  list-style-type: none;
}

li {
  line-height: 30px;
}

ul li:first-of-type {
  text-transform: uppercase;
}

img {
  margin: 0 auto;
  max-width: 160px;
}

@media only screen and (min-width: 550px) {
  nav {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }
}
</style>