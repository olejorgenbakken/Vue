<template>
  <v-container>
    <v-row>
      <CandidateItem
        v-for="candidate in candidates"
        :key="candidate.name"
        :name="candidate.name"
        :img="candidate.img"
        :birthPlace="candidate.birthPlace"
        :birthDate="candidate.birthDate"
        :partyName="candidate.partyName"
        :party="candidate.party"
      ></CandidateItem>
    </v-row>
  </v-container>
</template>

<script>
import candidates from "../assets/candidates";
import CandidateItem from "./CandidateItem";
export default {
  name: "Home",
  data() {
    return candidates;
  },
  components: {
    CandidateItem
  }
};
</script>