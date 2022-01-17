<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4 col-12">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Crypto_Deers</h1>

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

          <v-img min-height="250" :src="require('../assets/cd.gif')"></v-img>
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
              :src="require('../assets/os2.svg')"
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
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>