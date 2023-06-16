<template>
  <v-footer dark padless style="width: 100%">
    <div
      :class="{ 'mx-auto': GET_WINDOW_SIZE.x < 400 }"
      style="display: flex; width: 100%"
      :style="
        GET_WINDOW_SIZE.x >= 400
          ? 'justify-content: space-between'
          : 'flex-direction:column'
      "
    >
      <div
        :class="GET_WINDOW_SIZE.x < 400 ? 'mx-auto' : ''"
        :style="
          GET_WINDOW_SIZE.x < 400
            ? 'order: 1; display: block'
            : 'order: 0; display: inline-block'
        "
      >
        <v-row class="ma-0">
          <v-col class="pa-0 col-auto">
            <img
              height="50"
              :src="require('../assets/Purple.svg')"
              alt="Crypto_Deer"
            />
          </v-col>
          <v-col class="pa-0" style="align-self: center">
            <v-card-text class="pa-0 text-left" style="font-size: 1.2rem">
              <strong class="subheading white--text text-left"
                >Crypto_Deers</strong
              >
            </v-card-text>
            <v-card-text class="pa-0 text-left" style="font-size: 0.66rem">
              © Naya_N — 2022
            </v-card-text>
          </v-col>
        </v-row>
      </div>

      <div
        :class="GET_WINDOW_SIZE.x < 400 ? 'mx-auto mb-6' : ''"
        :style="
          GET_WINDOW_SIZE.x < 400
            ? 'display:flex; '
            : 'display: inline-flex; align-items: center;'
        "
      >
        <OpenSea /> <Twitter />
      </div>
    </div>
  </v-footer>
</template>
<script>
import { mapGetters } from 'vuex';
import Twitter from './social/Twitter.vue';
import OpenSea from './social/OpenSea.vue';
export default {
  name: 'FooterComponent',

  components: {
    OpenSea,
    Twitter,
  },

  data: () => ({
    loading: false,
  }),

  computed: {
    ...mapGetters(['GET_WINDOW_SIZE']),
  },
};
</script>

<style lang="scss" scoped>
.open-sea {
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 6px solid #1e1e1e;
  .open-sea__img {
    border-radius: 50%;
  }
  &:hover {
    background: #9466ff;
    border: 6px solid #9466ff;
  }
}
</style>
