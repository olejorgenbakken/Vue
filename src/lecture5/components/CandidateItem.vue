<template>
  <v-col cols="12" lg="4" md="6" sm="12">
    <v-card v-if="$route.query.party == party">
      <v-img height="300" :src="img"></v-img>

      <v-card-title>{{name}}</v-card-title>

      <v-card-text>
        <div class="my-4 subtitle-1 black--text">Born in: {{birthPlace}}</div>

        <div>Birth date: {{birthDate.getDate()}}.{{birthDate.getMonth()}}.{{birthDate.getFullYear()}}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>{{partyName}}</v-card-title>
    </v-card>
    <v-card v-else-if="$route.query.party == null">
      <v-img height="300" :src="img"></v-img>

      <v-card-title>{{name}}</v-card-title>

      <v-card-text>
        <div class="my-4 subtitle-1 black--text">Born in: {{birthPlace}}</div>

        <div>Birth date: {{birthDate.getDate()}}.{{birthDate.getMonth()}}.{{birthDate.getFullYear()}}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>{{partyName}}</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Home",
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    partyName: {
      type: String,
      required: true
    },
    birthPlace: {
      type: String,
      required: true
    },
    party: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  font-weight: 700;
  text-shadow: 0 0 3px black;
}
</style>