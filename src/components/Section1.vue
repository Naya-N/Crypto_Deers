<template>
  <v-container>
    <v-row class="text-center ma-0">
      <v-col
        order="1"
        order-sm="0"
        class="mb-5 pl-md-6 col-12 col-sm-6"
        style="display: flex; justify-content: flex-end"
      >
        <v-card
          flat
          :loading="loading"
          class="mr-md-12 rotate"
          style="border-radius: 10%; position: relative"
          min-width="250px"
          max-width="650px"
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

          <v-img min-height="250" :src="require(`../assets/first/${gl}`)">
            <v-img
              style="position: absolute; top: 0; left: 0; z-index: 1"
              min-height="250"
              :src="require(`../assets/first/deer1.svg`)"
            ></v-img>
            <v-img
              style="position: relative; z-index: 5"
              min-height="250"
              :src="require(`../assets/first/${img}.svg`)"
            ></v-img>
          </v-img>
        </v-card>
      </v-col>

      <v-col
        order="0"
        order-sm="1"
        class="mb-5 pt-12 col-12 col-sm-6 px-0"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div style="max-width: 650px">
          <h1 class="display-2 mb-10" style="font-weight: 600">
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
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Twitter from "../components/social/Twitter.vue";
import OpenSea from "../components/social/OpenSea.vue";
export default {
  name: "Section1",
  components: {
    OpenSea,
    Twitter,
  },
  props: {
    tab: {
      type: Boolean,
      require: true,
      default: false,
    },
  },

  data: () => ({
    img: "deer",
    gl: "notGl.png",
    glithes: ["gl3", "gl2", "gl", "gl1"],
    deers: [
      "deer",
      "deer1",
      "deer2",
      "deer3",
      "deer4",
      "deer5",
      "deer6",
      "deer7",
      "deer8",
      "deer9",
      "deer10",
      "deer",
      "deer1",
      "deer2",
      "deer3",
      "deer4",
      "deer5",
      "deer6",
      "deer7",
      "deer8",
      "deer9",
      "deer10",
    ],
    count: 0,
    images: 22,

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
    changeDeer() {
      this.count++;
      this.images--;
      this.img = this.deers[this.images];
      //   console.log(this.img);
      this.gl = "notGl.png";
      if (this.images == 0) {
        this.images = 22;
        this.gl = "gl2.svg";
      }
      if (this.images == 16) {
        this.gl = "gl3.svg";
      }
      if (this.images == 11) {
        this.gl = "gl.svg";
      }
      if (this.images == 5) {
        this.gl = "gl1.svg";
      }

      if (this.tab) {
        setTimeout(this.changeDeer, 200);
      } else {
        this.count = 0;
        this.images = 22;
        this.gl = "notGl.png";
        this.TOGGLE_ACTIVE_ANIMATE(false);
      }
    },
  },
  watch: {
    tab() {
      if (this.tab && !this.GET_ACTIVE_ANIMATE) {
        this.TOGGLE_ACTIVE_ANIMATE(true);
        this.changeDeer();
      }
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

