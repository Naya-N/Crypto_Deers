<template>
  <v-app>
    <!-- <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      :src="require('./assets/Baner2.png')"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
      class="menu"
      height="250px"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to bottom right, rgba(100,115,201,.25), rgba(25,32,72,.8)"
        >
        </v-img>
      </template>

      <!-- <template v-slot> -->
      <v-app-bar-title class="font-weight: 600" style="width: auto"
        >Crypto_Deers
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items style="height: 56px; max-height: 56px">
        <v-tabs
          v-model="tab"
          right
          color="#fff"
          height="56px"
          background-color="transparent"
        >
          <v-tab @click="scrollToSection('home')">Home</v-tab>
          <v-tab @click="scrollToSection('about')">About</v-tab>
          <v-tab @click="scrollToSection('rarity')">Rarity</v-tab>
          <v-tab @click="scrollToSection('creator')">Creator</v-tab>
        </v-tabs>
      </v-toolbar-items>
      <!-- </template> -->

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <!-- <div style="font-size: 40px; font-weight: bold">Crypto_Deers</div> -->
      <!-- <v-app-bar-title>Title</v-app-bar-title> -->

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container
        style="height: 10000px"
        ref="wrap"
        v-scroll:#scrolling-techniques-3="onScroll"
      >
        <v-row ref="home" id="home" class="text-center ma-0">
          <v-col class="mb-4 col-12" style="margin-top: 180px"> </v-col>

          <v-col
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
                class="pa-10 msg"
                style="
                  position: absolute;
                  top: 50%;
                  right: 0;
                  z-index: 6;
                  color: #fff;
                  border: 2px dashed #fff;
                  border-radius: 50%;
                "
              >
                Купи Олешку
              </a>

              <v-img min-height="250" :src="require(`./assets/first/${gl}`)">
                <v-img
                  style="position: absolute; top: 0; left: 0; z-index: 1"
                  min-height="250"
                  :src="require(`./assets/first/deer1.svg`)"
                ></v-img>
                <v-img
                  style="position: relative; z-index: 5"
                  min-height="250"
                  :src="require(`./assets/first/${img}.svg`)"
                ></v-img>
              </v-img>
            </v-card>
          </v-col>

          <v-col
            class="mb-5 pt-12 col-12 col-sm-6"
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
            "
          >
            <div style="max-width: 650px">
              <h1 class="display-2 font-weight-bold mb-3">
                Welcome to Crypto_Deers
              </h1>

              <p class="subheading font-weight-regular">
                Crypto_Deers is a collection of 10 000 unique deers
                <br />who live on the metaverse
                <!-- <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          > -->
              </p>
            </div>
            <div style="max-width: 650px">
              <p class="mt-12">
                But you can look at the information about the collection at
              </p>
              <a
                href="https://opensea.io/collection/crypto-deers"
                target="_blank"
              >
                <img
                  height="40"
                  :src="require('./assets/os2.svg')"
                  alt="OpenSea"
                />
              </a>
            </div>

            <div class="mt-5" style="max-width: 650px">
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
        <v-row ref="about" id="about" class="ma-0">
          <v-col
            class="mb-4 col-12"
            style="margin-bottom: 260px; margin-top: 100px"
          >
            <h2 class="display-2 font-weight-bold mb-3">About</h2>

            <p class="subheading font-weight-regular">
              Crypto_Deers is a collection of 10 000 unique deers
              <br />who live on the metaverse
              <!-- <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          > -->
            </p>
          </v-col>
        </v-row>
        <v-row ref="rarity" id="rarity" class="ma-0">
          <v-col
            class="mb-4 col-12"
            style="margin-bottom: 260px; margin-top: 100px"
          >
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
        <v-row ref="creator" id="creator" class="ma-0">
          <v-col
            class="mb-4 col-12"
            style="margin-bottom: 260px; margin-top: 100px"
          >
            <h2 class="display-2 font-weight-bold mb-3">Creator</h2>

            <p class="subheading font-weight-regular">
              Crypto_Deers is a collection of 10 000 unique deers
              <br />who live on the metaverse
              <!-- <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          > -->
            </p>
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

              <v-img min-height="250" :src="require('./assets/cd.gif')"></v-img>
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
                  :src="require('./assets/os2.svg')"
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

      <!-- <v-main>
        <HelloWorld />
      </v-main> -->
    </v-sheet>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld,
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
    isChangeDeer: false,

    loading: false,

    tab: 0,

    home: { top: 0, bottom: 0 },
    about: { top: 0, bottom: 0 },
    rarity: { top: 0, bottom: 0 },
    creator: { top: 0, bottom: 0 },

    offsetTop: 0,
  }),
  created() {
    this.changeDeer();
  },
  mounted() {
    this.home = this.positionSections("home");
    this.about = this.positionSections("about");
    this.rarity = this.positionSections("rarity");
    this.creator = this.positionSections("creator");
  },
  computed: {},
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;

      if (this.offsetTop < this.home.bottom) {
        this.tab = 0;
        if (!this.isChangeDeer) {
          this.changeDeer();
        }
      }
      if (
        this.offsetTop > this.about.top &&
        this.offsetTop < this.about.bottom
      ) {
        this.tab = 1;
      }
      if (
        this.offsetTop > this.rarity.top &&
        this.offsetTop < this.rarity.bottom
      ) {
        this.tab = 2;
      }
      if (this.offsetTop > this.rarity.bottom) {
        this.tab = 3;
      }
    },
    scrollToSection(name) {
      document.getElementById(name).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    positionSections(name) {
      return {
        top: document.getElementById(name).getBoundingClientRect().top,
        bottom: document.getElementById(name).getBoundingClientRect().bottom,
      };
    },
    changeDeer() {
      this.isChangeDeer = true;
      this.count++;
      this.images--;
      this.img = this.deers[this.images];
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

      if (this.tab == 0) {
        setTimeout(this.changeDeer, 200);
      } else {
        this.count = 0;
        this.images = 22;
        this.gl = "notGl.png";
        this.isChangeDeer = false;
      }
    },
  },
  watch: {},
};
</script>
<style lang="scss">
@import "~/src/sass/variables.scss";
.menu {
  .v-toolbar__content {
    padding: 0px 16px !important;
    align-items: flex-end !important;
  }
}
.rotate {
  -webkit-transition: -webkit-transform 1s ease-out;
  -moz-transition: -moz-transform 1s ease-out;
  -o-transition: -o-transform 1s ease-out;
  -ms-transition: -ms-transform 1s ease-out;
  transition: all 1s ease-out;
  .msg {
    opacity: 0;
    transition: all 1s ease-out;
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
