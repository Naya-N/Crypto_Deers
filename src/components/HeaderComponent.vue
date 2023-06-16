<template>
  <v-app-bar
    fixed
    dark
    shrink-on-scroll
    prominent
    :src="require('../assets/Baner2.png')"
    fade-img-on-scroll
    class="menu"
    height="250px"
    style="z-index: 150"
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
      :style="GET_WINDOW_SIZE.x < 600 ? 'height:60px' : ''"
    >
      <img
        height="50"
        :src="require('../assets/Purple.svg')"
        alt="Crypto_Deer"
      />
    </v-app-bar-title>
    <v-app-bar-title
      v-if="GET_WINDOW_SIZE.x > 600"
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
        <v-tab
          v-for="item in tabs"
          :key="item.id"
          @click="scrollToSection(item.id)"
          ><v-icon>{{ item.icon }}</v-icon>
          <span class="ml-3" v-if="GET_WINDOW_SIZE.x > 800">{{
            item.name
          }}</span>
        </v-tab>
      </v-tabs>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderComponent',

  props: {
    tab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tabs: [
        { id: 'section1', icon: 'mdi-home-flood', name: 'Home' },
        { id: 'section2', icon: 'mdi-lightbulb-variant', name: 'About' },
        { id: 'section3', icon: 'mdi-script-text-outline', name: 'Rarity' },
        { id: 'section4', icon: 'mdi-account-group-outline', name: 'Team' },
      ],
    };
  },
  computed: {
    ...mapGetters(['GET_WINDOW_SIZE']),
  },
  methods: {
    scrollToSection(name) {
      this.$emit('changeDisabled', +name.slice(-1) - 1);

      document.getElementById(name).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
};
</script>
