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
      height="300px"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.4), rgba(25,32,72,.4)"
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
          <v-col class="mb-4 col-12" style="margin-top: 260px">
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
    loading: false,

    tab: 0,

    home: { top: 0, bottom: 0 },
    about: { top: 0, bottom: 0 },
    rarity: { top: 0, bottom: 0 },
    creator: { top: 0, bottom: 0 },

    offsetTop: 0,
  }),
  created() {},
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

.activeNav {
  color: #894bcc !important;
  box-shadow: 0 4px 2px -2px #9c40ff;
}
</style>
