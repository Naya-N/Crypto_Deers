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
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.4), rgba(25,32,72,.4)"
        ></v-img>
      </template>

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

      <template v-slot:extension>
        <v-tabs right color="#fff">
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab>Rarity</v-tab>
          <v-tab>Creator</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
      min-height="100vh"
    >
      <v-main>
        <HelloWorld />
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  methods: {},
};
</script>
