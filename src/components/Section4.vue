<template>
  <v-row class="ma-0 container mx-auto" style="padding-top: 100px">
    <v-col order="0" class="mb-4 col-12 text-left">
      <div
        style="display: flex; justify-content: center; align-items: center padding-bottom: 50px"
      >
        <v-icon color="#9466ff" size="45" class="mb-0 mr-4"
          >mdi-account-group-outline</v-icon
        >
        <h3 class="display-2 mb-3" style="font-weight: 600">Team</h3>
      </div>
    </v-col>

    <v-col
      v-for="(person, index) in team"
      :key="index"
      class="mb-5 col-sm-6 col-12"
      style="display: flex"
      :class="[
        (index + 1) % 2 == 0 && GET_WINDOW_SIZE.x > 1050
          ? 'left'
          : (index + 1) % 2 == 1 && GET_WINDOW_SIZE.x > 1050
          ? 'right'
          : 'center',
      ]"
    >
      <v-card
        class="mb-10"
        :style="
          GET_WINDOW_SIZE.x > 1050
            ? 'padding-right: 100px; padding-left: 100px'
            : ''
        "
        color="#242424"
        flat
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 16 : 0"
            color="#242424"
            flat
            :loading="loading"
            style="border-radius: 50%; transition: all 0.8s ease"
            min-width="250px"
            max-width="450px"
            :style="
              hover
                ? 'border: 6px solid #9466ff;'
                : 'border: 6px solid #242424;'
            "
          >
            <v-avatar :size="$vuetify.breakpoint.name == 'xs' ? '238' : '238'">
              <v-img
                :src="require(`../assets/${person.img}`)"
                alt="person"
                :gradient="
                  person.name == 'Fess'
                    ? 'to top right, rgba(38,50,56,.45), rgba(38,50,56,.7)'
                    : ''
                "
              ></v-img>
            </v-avatar>
          </v-card>
        </v-hover>

        <v-card-text>
          <p
            style="font-weight: 600; font-size: 1.5rem"
            :style="person.social == 'tt' ? '' : 'padding-bottom:10px'"
          >
            {{ person.name }} <TikTok v-if="person.social == 'tt'" />
          </p>
          {{ person.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import TikTok from './social/TikTok.vue';
export default {
  name: 'Section4',
  components: {
    TikTok,
  },
  props: {
    tab: {
      type: Number,
      require: true,
    },
  },

  data: () => ({
    loading: false,
    team: [
      {
        name: 'Naya_N',
        description: 'Creator & Frontend developer',
        social: '',
        img: 'naya.png',
      },
      {
        name: 'Fess',
        description: 'Inspiring cat with character',
        social: 'tt',
        img: 'fess.png',
      },
    ],
  }),

  computed: {
    ...mapGetters(['GET_WINDOW_SIZE']),
  },
};
</script>

<style lang="scss" scoped>
.right {
  justify-content: flex-end;
}
.left {
  justify-content: flex-start;
}
.center {
  justify-content: center;
}
</style>
