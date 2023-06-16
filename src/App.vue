<template>
  <v-app v-resize="onResize">
    <HeaderComponent :tab="tab" @changeDisabled="changeDisabled" />
    <v-main style="background: #1e1e1e">
      <v-container
        style="height: 100%"
        fluid
        class="px-0 pb-0"
        ref="wrap"
        @wheel="onWheel"
        v-touch="{
          left: () => swipe('Left'),
          right: () => swipe('Right'),
          up: () => swipe('Up'),
          down: () => swipe('Down'),
        }"
      >
        <section
          v-for="num in 4"
          :key="num"
          v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0.25, 0.5, 1.0],
            },
          }"
          :ref="num"
          :id="`section${num}`"
          class="text-center ma-0"
          :style="
            num % 2 === 0
              ? `background: #242424; flex-direction: column; ${calculateStyle}`
              : calculateStyle
          "
        >
          <component :is="`Section${num}`" :tab="tab" />
          <FooterComponent v-if="num === 4" />
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

import Twitter from './components/social/Twitter.vue';
import OpenSea from './components/social/OpenSea.vue';

import { META_DATA } from './plugins/meta';

export default {
  name: 'App',
  metaInfo() {
    return META_DATA;
  },

  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    FooterComponent,
    HeaderComponent,
    OpenSea,
    Twitter,
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
    tab: 0,
    arr: [],
    disabledCalculateTab: false,
  }),
  mounted() {
    this.onResize();
  },
  computed: {
    ...mapGetters(['GET_ACTIVE_ANIMATE']),

    calculateStyle() {
      return this.windowSize.x > 1020 && this.windowSize.y > 750
        ? 'min-height: 100dvh; display: flex; align-items: center;'
        : 'min-height: 100dvh;';
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_ACTIVE_ANIMATE', 'SET_WINDOW_SIZE']),

    notDisabled() {
      this.disabledCalculateTab = false;
    },
    onWheel() {
      this.notDisabled();
    },
    swipe() {
      this.notDisabled();
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      this.SET_WINDOW_SIZE(this.windowSize);
    },

    onIntersect(entries) {
      if (!this.disabledCalculateTab) {
        let elem = {
          id: entries[0].target.id.slice(-1),
          isIntersecting: entries[0].isIntersecting,
          intersectionRatio: entries[0].intersectionRatio,
        };

        if (this.arr.length) {
          if (this.arr.some((el) => el.id === elem.id)) {
            this.arr.forEach((el) => {
              if (el.id === elem.id) {
                el.isIntersecting = elem.isIntersecting;
                el.intersectionRatio = elem.intersectionRatio;
              }
            });
          } else {
            this.arr.push(elem);
          }
        } else {
          this.arr.push(elem);
        }

        this.changeTab();
      }
    },

    changeTab() {
      if (this.arr.length && !this.disabledCalculateTab) {
        let val = this.arr.filter((el) => el.isIntersecting);

        if (val.length === 1) {
          this.tab = +val[0].id - 1;
        }
      }
    },
    changeDisabled(val) {
      this.disabledCalculateTab = true
      this.tab = val
    },
  },
};
</script>

<style lang="scss">
.menu {
  .v-toolbar__content {
    padding: 0px !important;
    align-items: flex-end !important;
  }
}
.v-tab {
  min-width: 70px !important;
}
</style>
