<template>
  <v-app v-resize="onResize">
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
          gradient="to bottom right, rgba(0,0,0,.4), rgba(0,0,0,.95)"
        >
        </v-img>
      </template>

      <v-app-bar-title
        class="ml-3"
        style="width: auto; font-weight: 600"
        :style="windowSize.x < 600 ? 'height:60px' : ''"
      >
        <img
          class=""
          height="50"
          :src="require('./assets/Purple.svg')"
          alt="Crypto_Deer"
        />
      </v-app-bar-title>
      <v-app-bar-title
        v-if="windowSize.x > 600"
        class="ml-3 mb-3"
        style="width: auto; font-weight: 600"
      >
        Crypto_Deers
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items style="height: 56px; max-height: 56px">
        <v-tabs
          :value="tab"
          right
          color="#fff"
          height="56px"
          background-color="transparent"
        >
          <v-tab @click="scrollToSection('section1')"
            ><v-icon>mdi-home-flood</v-icon>
            <span class="ml-3" v-if="windowSize.x > 800">Home</span>
          </v-tab>
          <v-tab @click="scrollToSection('section2')">
            <v-icon>mdi-lightbulb-variant</v-icon>
            <span class="ml-3" v-if="windowSize.x > 800">About</span>
          </v-tab>
          <v-tab @click="scrollToSection('section3')">
            <v-icon>mdi-script-text-outline</v-icon>
            <span class="ml-3" v-if="windowSize.x > 800">Rarity</span>
          </v-tab>
          <v-tab @click="scrollToSection('section4')">
            <v-icon>mdi-account-group-outline</v-icon>
            <span class="ml-3" v-if="windowSize.x > 800">Team</span>
          </v-tab>
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
        fluid
        class="px-0"
        style="height: 10000px"
        ref="wrap"
        v-scroll:#scrolling-techniques-3="onScroll"
      >
        <section
          ref="section1"
          id="section1"
          class="text-center ma-0"
          style="padding-top: 220px"
        >
          <Section1 :tab="tab == 0 ? true : false" />
        </section>
        <section ref="section2" id="section2" style="background: #242424">
          <Section2 />
        </section>
        <section ref="section3" id="section3">
          <Section3 />
        </section>
        <section ref="section4" id="section4" style="background: #242424">
          <Section4 />
        </section>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default {
  name: "App",

  components: {
    Section1,
    Section2,
    Section3,
    Section4,
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
    tab: 0,
    section1: { top: 0, bottom: 0 },
    section2: { top: 0, bottom: 0 },
    section3: { top: 0, bottom: 0 },
    section4: { top: 0, bottom: 0 },
    offsetTop: 0,
  }),
  created() {},
  mounted() {
    this.onResize();
  },
  computed: {
    ...mapGetters(["GET_ACTIVE_ANIMATE"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_ACTIVE_ANIMATE", "SET_WINDOW_SIZE"]),
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;

      if (this.tab != 0 && this.offsetTop < this.section1.bottom) {
        this.tab = 0;
      }
      if (
        this.tab != 1 &&
        this.offsetTop > this.section2.top &&
        this.offsetTop < this.section2.bottom
      ) {
        this.tab = 1;
      }
      if (
        this.tab != 2 &&
        this.offsetTop > this.section3.top &&
        this.offsetTop < this.section3.bottom
      ) {
        this.tab = 2;
      }
      if (this.tab != 3 && this.offsetTop > this.section3.bottom) {
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
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      this.SET_WINDOW_SIZE(this.windowSize);
      this.section1 = this.positionSections("section1");
      this.section2 = this.positionSections("section2");
      this.section3 = this.positionSections("section3");
      this.section4 = this.positionSections("section4");
      if (document.getElementById("#scrolling-techniques-3")) {
        this.onScroll;
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
    padding: 0px !important;
    align-items: flex-end !important;
  }
}
.v-tab {
  min-width: 70px !important;
}
// .v-app-bar-title__content {
//   width: 210px !important;
//   min-width: 210px !important;
//   display: flex;
//   align-items: center;
// }
</style>
