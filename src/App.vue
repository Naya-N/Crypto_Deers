<template>
  <v-app v-resize="onResize">
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

      <!-- {{ windowSize.y }}/ -->
      <!-- {{ offsetTop }} -->
      <!-- / 1 {{ positionSection1 }} -->
      <!-- / 2 {{ positionSection2 }} -->
      <!-- / 3
      {{ positionSection3 }} -->
      <!-- / 4
      {{ positionSection4 }} -->

      <v-spacer></v-spacer>

      <v-toolbar-items style="height: 56px; max-height: 56px">
        <v-tabs
          :value="tab"
          right
          color="#fff"
          height="56px"
          background-color="transparent"
          scroll-target="#scrolling-techniques-3"
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
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container
        fluid
        class="px-0 pb-0"
        ref="wrap"
        v-scroll:#scrolling-techniques-3="onScroll"
      >
        <div
          @wheel="onWheel"
          v-touch="{
            left: () => swipe('Left'),
            right: () => swipe('Right'),
            up: () => swipe('Up'),
            down: () => swipe('Down'),
          }"
        >
          <section
            v-resize="onResize1"
            :key="`1-${windowSize.x}-${windowSize.y}`"
            ref="section1"
            id="section1"
            class="text-center ma-0"
            style="padding-top: 220px"
            :class="`1-${windowSize.x}-${windowSize.y}`"
            :style="
              windowSize.x > 1020 && windowSize.y > 750
                ? `min-height: 100vh; display: flex; align-items: center`
                : ''
            "
          >
            <Section1 :tab="tab == 0 ? true : false" />
          </section>
          <section
            :key="`2-${windowSize.x}-${windowSize.y}`"
            ref="section2"
            id="section2"
            style="background: #242424"
            :style="
              windowSize.x > 1020 && windowSize.y > 750
                ? 'min-height: 100vh; display: flex; align-items: center'
                : ''
            "
          >
            <Section2 />
          </section>
          <section
            :key="`3-${windowSize.x}-${windowSize.y}`"
            ref="section3"
            id="section3"
            :style="
              windowSize.x > 1020 && windowSize.y > 750
                ? 'min-height: 100vh; display: flex; align-items: center'
                : ''
            "
          >
            <Section3 />
          </section>
          <section
            :key="`4-${windowSize.x}-${windowSize.y}`"
            ref="section4"
            id="section4"
            style="background: #242424; position: relative"
            :style="
              windowSize.x > 1020 && windowSize.y > 750
                ? 'min-height: 100vh; display: flex; align-items: center; flex-direction: column'
                : ''
            "
          >
            <Section4 />
            <v-footer absolute dark padless>
              <v-card class="flex" flat tile>
                <Footer />
              </v-card>
            </v-footer>
          </section>
        </div>
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
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Footer,
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
    tab: 0,

    positionSection1: { top: 0, bottom: 0 },
    positionSection2: { top: 0, bottom: 0 },
    positionSection3: { top: 0, bottom: 0 },
    positionSection4: { top: 0, bottom: 0 },
    isUpdate: false,

    offsetTop: 0,
  }),
  created() {},
  mounted() {
    this.onResize();
    this.onResize1();
  },

  computed: {
    ...mapGetters(["GET_ACTIVE_ANIMATE"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_ACTIVE_ANIMATE", "SET_WINDOW_SIZE"]),

    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
    scrollToSection(name) {
      document.getElementById(name).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    onWheel() {
      this.changeActiveTab();
    },
    swipe() {
      this.changeActiveTab();
    },
    changeActiveTab() {
      if (
        this.offsetTop >= 0 &&
        this.offsetTop < this.positionSection1.bottom - 20
      ) {
        this.tab = 0;
      }
      if (
        this.tab != 1 &&
        this.offsetTop >= this.positionSection2.top - 10 &&
        this.offsetTop < this.positionSection2.bottom - 20
      ) {
        this.tab = 1;
      }
      if (
        this.tab != 2 &&
        this.offsetTop >= this.positionSection3.top - 10 &&
        this.offsetTop < this.positionSection3.bottom - 20
      ) {
        this.tab = 2;
      }
      if (
        this.tab != 3 &&
        this.offsetTop >= this.positionSection3.bottom - 10
      ) {
        this.tab = 3;
      }
    },

    positionSections(name) {
      console.log(name);
      return {
        top: document.getElementById(name).getBoundingClientRect().top,
        bottom: document.getElementById(name).getBoundingClientRect().bottom,
      };
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      this.SET_WINDOW_SIZE(this.windowSize);
      this.positionSection1 = this.positionSections("section1");
      this.positionSection2 = this.positionSections("section2");
      this.positionSection3 = this.positionSections("section3");
      this.positionSection4 = this.positionSections("section4");
    },
    onResize1() {
      this.positionSection1 = this.positionSections("section1");
      this.positionSection2 = this.positionSections("section2");
      this.positionSection3 = this.positionSections("section3");
      this.positionSection4 = this.positionSections("section4");
    },
  },
  watch: {
    offsetTop() {
      // console.log(this.offsetTop);
    },
  },
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
