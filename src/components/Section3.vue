<template>
  <v-container>
    <v-row class="ma-0" style="padding-bottom: 100px; padding-top: 100px">
      <v-col
        order="0"
        order-sm="0"
        class="mb-5 pt-12 col-12 col-sm-6 px-0"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div style="max-width: 650px" class="mx-auto px-4">
          <!-- <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-bottom: 50px;
            "
          >
            <v-icon color="#9466ff" size="40" class="mb-2 mr-4"
              >mdi-script-text-outline</v-icon
            >
            <h3 class="display-2 mb-3">Rarity</h3>
          </div> -->

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
        </div>
      </v-col>

      <v-col
        order="1"
        order-sm="1"
        class="mb-5 pt-12 col-12 col-sm-6 px-0"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div style="max-width: 650px" class="mx-auto px-4">
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-bottom: 50px;
            "
          >
            <v-icon color="#9466ff" size="45" class="mb-2 mr-4"
              >mdi-script-text-outline</v-icon
            >
            <h3 class="display-2 mb-3" style="font-weight: 600">Rarity</h3>
          </div>

          <p class="subheading font-weight-regular text-left">
            Sacred Skulls is a collection of 8,888 randomly generated Skull NFTs
            (Non- Fungible Token to live on the Ethereum blockchain as ERC-721
            and hosted by IPFS). Our collection of Skulls are hand drawn by an
            incredibly talented, female artist, @HelenaEliasArt. The Skulls are
            uniquely generated with ~180-200 (TBD) traits, including Skull Skin,
            Tattoos, Teeth, Frames, Backgrounds, Nose traits, Sacred Geometry,
            Eyes, and Mouth.
          </p>

          <p class="subheading font-weight-regular text-left">
            Sacred Skulls is a collection of 8,888 randomly generated Skull NFTs
            (Non- Fungible Token to live on the Ethereum blockchain as ERC-721
            and hosted by IPFS). Our collection of Skulls are hand drawn by an
            incredibly talented, female artist, @HelenaEliasArt. The Skulls are
            uniquely generated with ~180-200 (TBD) traits, including Skull Skin,
            Tattoos, Teeth, Frames, Backgrounds, Nose traits, Sacred Geometry,
            Eyes, and Mouth.
          </p>
        </div>
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
