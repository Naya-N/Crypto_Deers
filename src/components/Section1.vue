<template>
  <div
    style="display: flex; align-items: center; align-self: end"
    class="mx-auto"
    :style="
      $vuetify.breakpoint.smAndUp
        ? `height: calc(100dvh - ${padding}px)`
        : `height: calc(100% + ${padding}px); padding-top: ${padding}px`
    "
  >
    <v-row
      class="text-center ma-0 container mx-auto"
      itemscope
      itemtype="https://schema.org/CreativeWork"
    >
      <v-col
        order="1"
        order-sm="0"
        class="pl-md-6 col-12 col-sm-6"
        style="display: flex; justify-content: flex-end"
      >
        <v-card
          :key="`${GET_WINDOW_SIZE.x}-${GET_WINDOW_SIZE.y}`"
          flat
          :loading="loading"
          class="mx-auto mx-md-0 mr-md-12 rotate"
          style="border-radius: 10%; position: relative"
          min-width="250px"
          :max-width="$vuetify.breakpoint.smAndUp ? '650px' : '250px'"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <a
            href="https://opensea.io/collection/crypto-deers"
            target="_blank"
            class="msg"
            style="
              position: absolute;
              top: 50%;
              right: 0;
              z-index: 6;
              color: #fff;
              border: 2px dashed #9466ff;
              border-radius: 50%;
            "
            :style="GET_WINDOW_SIZE.x < 1260 ? 'font-size: 0.85rem' : '1rem'"
            :class="GET_WINDOW_SIZE.x < 1260 ? 'px-3 py-6' : 'pa-10'"
          >
            Купи Олешку
          </a>

          <v-img
            itemprop="image"
            min-height="250"
            :src="require(`../assets/first/${activeGlitch}`)"
          >
            <v-img
              style="position: absolute; top: 0; left: 0; z-index: 1"
              min-height="250"
              :src="require(`../assets/first/deer1.svg`)"
            ></v-img>
            <template v-for="(deer, i) in deers">
              <v-img
                :key="i"
                v-show="active === i"
                style="position: relative; z-index: 5"
                min-height="250"
                :src="require(`../assets/first/${deer}.svg`)"
              ></v-img>
            </template>
          </v-img>
        </v-card>
      </v-col>

      <v-col
        order="0"
        order-sm="1"
        class="pt-12 col-12 col-sm-6 px-0"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div style="max-width: 650px">
          <h1 class="display-2 mb-10" style="font-weight: 600" itemprop="name">
            Welcome to Crypto_Deers
          </h1>

          <p class="subheading font-weight-regular">
            Crypto_Deers is a collection of 10 000 unique deers
            <br v-if="GET_WINDOW_SIZE.x > 800" />who live on the metaverse
          </p>
        </div>
        <div
          class="mt-10"
          style="
            max-width: 650px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <OpenSea />
          <Twitter />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Twitter from '../components/social/Twitter.vue';
import OpenSea from '../components/social/OpenSea.vue';
export default {
  name: 'Section1',
  components: {
    OpenSea,
    Twitter,
  },
  props: {
    tab: {
      type: Number,
      require: true,
    },
    padding: {
      type: Number,
      require: true,
    },
  },

  data: () => ({
    img: 'deer',
    gl: 'notGl.png',
    glitches: ['gl3', 'gl2', 'gl', 'gl1'],
    deers: [
      'deer',
      'deer1',
      'deer2',
      'deer3',
      'deer4',
      'deer5',
      'deer6',
      'deer7',
      'deer8',
      'deer9',
      'deer10',
      'deer',
      'deer1',
      'deer2',
      'deer3',
      'deer4',
      'deer5',
      'deer6',
      'deer7',
      'deer8',
      'deer9',
      'deer10',
    ],
    images: 22,

    loading: false,
  }),

  mounted() {
    this.changeActive();
  },
  computed: {
    ...mapGetters(['GET_WINDOW_SIZE']),
    active() {
      return this.images - 1;
    },
    activeGlitch() {
      let val;
      if (this.active === 21) {
        val = `${this.glitches[1]}.svg`;
      } else if (this.active === 15) {
        val = `${this.glitches[0]}.svg`;
      } else if (this.active === 10) {
        val = `${this.glitches[2]}.svg`;
      } else if (this.active === 4) {
        val = `${this.glitches[3]}.svg`;
      } else {
        val = this.gl;
      }
      return val;
    },
  },
  methods: {
    changeActive() {
      if (this.tab === 0) {
        this.images--;
        if (this.images == 0) {
          this.images = 22;
        }
        setTimeout(this.changeActive, 200);
      }
    },
  },
  watch: {
    tab() {
      this.changeActive();
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate {
  -webkit-transition: -webkit-transform 1s ease-out;
  -moz-transition: -moz-transform 1s ease-out;
  -o-transition: -o-transform 1s ease-out;
  -ms-transition: -ms-transform 1s ease-out;
  transition: all 0.5s ease-out;
  .msg {
    opacity: 0;
    transition: all 0.5s ease-out;
  }
}

.rotate:hover {
  -webkit-transform: rotateZ(-5deg);
  -ms-transform: rotateZ(-5deg);
  transform: translate(-30px, -20px) rotateZ(-5deg);
  .msg {
    opacity: 1;
  }
}
</style>
