<template>
  <v-container>
    <v-row class="ma-0" style="padding-top: 100px; padding-bottom: 100px">
      <v-col
        order="0"
        class="mb-4 col-12 text-left"
        style="display: flex; justify-content: center"
      >
        <v-icon color="#9466ff" size="45" class="mb-0 mr-4"
          >mdi-account-group-outline</v-icon
        >
        <h3 class="display-2 mb-3" style="font-weight: 600">Team</h3>

        <!-- <p class="subheading font-weight-regular">
          Crypto_Deers is a collection of 10 000 unique deers
          <br />who live on the metaverse
        </p> -->
      </v-col>

      <v-col
        class="mb-5 pl-md-6 col-12 col-sm-6"
        style="display: flex; justify-content: flex-end"
      >
        <v-card
          :loading="loading"
          class="mr-md-12"
          style="border-radius: 10%"
          min-width="250px"
          max-width="450px"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img min-height="250" :src="require('../assets/cd.gif')"></v-img>
        </v-card>
      </v-col>

      <v-col
        class="mb-5 pt-12 col-12 col-sm-6"
        style="
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
        "
      >
        <div style="max-width: 450px">
          <h2 class="headline font-weight-bold mb-3">
            Site under construction
          </h2>
          <p class="mt-12">
            But you can look at the information about the collection at
          </p>
          <a href="https://opensea.io/collection/crypto-deers">
            <img
              height="40"
              :src="require('../assets/os2.svg')"
              alt="OpenSea"
            />
          </a>
        </div>

        <div class="mt-16" style="max-width: 450px">
          <p>you can also follow all the news on Twitter</p>
          <a
            href="https://twitter.com/Naya_N__?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-size="large"
            data-show-screen-name="false"
            data-show-count="false"
            >Follow @Naya_N__</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Section4",
  props: {
    tab: {
      type: Boolean,
      require: true,
      default: false,
    },
  },

  data: () => ({
    loading: false,
  }),

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
