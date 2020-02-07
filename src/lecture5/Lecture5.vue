<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>U.S. presidential candidates</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="{ path: '/lecture5'}">All</v-tab>
          <v-tab :to="{ path: '/lecture5', query: { party: 'democrats' }}">Democratic</v-tab>
          <v-tab :to="{ path: '/lecture5', query: { party: 'republicans' }}">Republican</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" height="100vh">
      <v-container>
        <div style="padding-top: 220px;"></div>
        <CandidateList></CandidateList>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import CandidateList from "./components/CandidateList";

export default {
  components: {
    CandidateList
  }
};
</script>