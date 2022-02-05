<template>
<v-container>
  <v-row class="ma-0">
    <v-col class="mb-4 col-12" style="margin-bottom: 260px; margin-top: 100px">
      <h2 class="display-2 font-weight-bold mb-3">Rarity</h2>

      <p class="subheading font-weight-regular">
        Crypto_Deers is a collection of 10 000 unique deers
        <br />who live on the metaverse
        <!-- <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          > -->
      </p>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Section3",
  props: {
    tab: {
      type: Boolean,
      require: true,
      default: false,
    },
  },

  data: () => ({}),

  mounted() {
    if (this.tab) {
      this.changeDeer();
    }
  },
  computed: {
    ...mapGetters(["GET_ACTIVE_ANIMATE", "GET_WINDOW_SIZE"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_ACTIVE_ANIMATE"]),
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
//
</style>
