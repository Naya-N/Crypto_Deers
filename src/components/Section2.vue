<template>
  <v-row
    class="ma-0 container mx-auto"
    style="
      padding-bottom: 100px;
      padding-top: 100px;
      display: flex;
      align-items: center;
    "
  >
    <v-col
      order="0"
      order-sm="0"
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
            >mdi-lightbulb-variant</v-icon
          >
          <h3 class="display-2 mb-3" style="font-weight: 600">About</h3>
        </div>

        <p class="subheading font-weight-regular text-left">
          Crypto_Deers is a collection of 10,000 randomly generated CryptoDeer
          NFTs (Non- Fungible Token to live on the Polygon blockchain as ERC-721
          and hosted by IPFS). This collection is drawn in Figma and consists of
          8 types of layers.
        </p>

        <p class="subheading font-weight-regular text-left">
          All stages of the creation of this Crypto_Deers collection were
          implemented by one girl from St. Petersburg. And this is the author's
          first collection.
        </p>
      </div>
    </v-col>
    <v-col
      order="1"
      order-sm="1"
      class="mb-5 pt-12 col-12 col-sm-6"
      style="display: flex; justify-content: center"
    >
      <v-card
        color="#242424"
        flat
        :loading="loading"
        min-width="250px"
        max-width="450px"
        :style="
          GET_WINDOW_SIZE.x < 750 && $vuetify.breakpoint.name !== 'xs'
            ? 'margin-top: 120px'
            : ''
        "
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
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Section2',
  props: {
    tab: {
      type: Number,
      require: true,
    },
  },

  data: () => ({
    loading: false,
  }),

  computed: {
    ...mapGetters(['GET_WINDOW_SIZE']),
  },
};
</script>
