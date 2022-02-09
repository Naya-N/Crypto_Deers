<template>
  <v-container
    :fluid="
      $vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'md'
    "
  >
    <v-row class="ma-0" style="padding-bottom: 100px; padding-top: 100px">
      <v-col
        order="1"
        order-md="0"
        class="mb-5 px-0"
        style="display: flex; flex-direction: column"
        :style="
          GET_WINDOW_SIZE.x >= 1200
            ? 'justify-content: center'
            : 'justify-content: flex-end'
        "
        :class="
          GET_WINDOW_SIZE.x >= 1200
            ? 'col-12 col-md-6 pt-12'
            : GET_WINDOW_SIZE.x < 1200 && GET_WINDOW_SIZE.x >= 550
            ? 'col-auto pt-12'
            : 'col-12 pt-0'
        "
      >
        <div style="max-width: 650px" class="mx-auto px-4">
          <v-card
            id="cardImage"
            flat
            style="border-radius: 0; position: relative"
            min-width="250px"
            :max-width="
              GET_WINDOW_SIZE.x >= 1200
                ? '450px'
                : GET_WINDOW_SIZE.x < 1200 && GET_WINDOW_SIZE.x >= 900
                ? '400px'
                : '270px'
            "
            :class="{ 'mr-md-12': GET_WINDOW_SIZE.x >= 1200 }"
            max-height="450px"
            @mouseover="activeAll = true"
            @mouseleave="activeAll = false"
          >
            <img
              :style="
                GET_WINDOW_SIZE.x >= 1200
                  ? 'width: 450px'
                  : GET_WINDOW_SIZE.x < 1200 && GET_WINDOW_SIZE.x >= 900
                  ? 'width:400px'
                  : 'width:270px'
              "
              :src="require(`../assets/rarity/bgCard.png`)"
            />
            <div
              v-if="GET_WINDOW_SIZE.x >= 1200"
              style="
                position: absolute;
                z-index: 0;
                border: 3px solid #242121;
                top: -40px;
                left: -40px;
              "
              :style="`width: calc(${size}px + 80px); height: calc(${size}px + 80px)`"
            ></div>

            <div
              class="layer-img"
              v-for="img in images"
              :key="`${img.id}-${tab}`"
              :style="
                activeAll
                  ? img.style
                  : !activeAll && active === img.id
                  ? `position: absolute; top: -15px; left: -15px; z-index: ${img.id}`
                  : `position: absolute; top: 0; left: 0; z-index: ${img.id}`
              "
            >
              <v-img
                :width="size"
                max-width="450px"
                max-height="450px"
                :src="require(`../assets/rarity/${img.img}.svg`)"
              ></v-img>
            </div>
          </v-card>
        </div>
      </v-col>

      <v-col
        order="0"
        order-md="1"
        class="mb-5 pt-12 px-0"
        style="display: flex; justify-content: center; flex-direction: column"
        :class="[GET_WINDOW_SIZE.x >= 1200 ? 'col-12 col-md-6' : 'col']"
      >
        <div style="max-width: 880px" class="mx-auto px-4">
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-bottom: 50px;
            "
          >
            <v-icon color="#9466ff" size="45" class="mb-2 mr-4"
              >mdi-script-text-outline</v-icon
            >
            <h3 class="display-2 mb-3" style="font-weight: 600">Rarity</h3>
          </div>

          <p v-if="GET_WINDOW_SIZE.x <= 710" class="ml-3 text-left">
            {{ activeName }}
          </p>

          <v-row class="ma-0">
            <v-col
              :class="GET_WINDOW_SIZE.x < 550 ? 'col-auto' : 'col-6'"
              v-for="layer in layers"
              :key="layer.id"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 16 : 2"
                  color="#272727"
                  @mouseover="
                    (active = layer.id),
                      (activeName = `${layer.id}. ${layer.name}`)
                  "
                  @mouseleave="(active = null), (activeName = 'Layers')"
                >
                  <v-card-text
                    v-if="GET_WINDOW_SIZE.x > 710"
                    class="d-flex justify-space-between align-center"
                    :style="
                      GET_WINDOW_SIZE.x >= 1200
                        ? 'font-size: 1.6rem'
                        : GET_WINDOW_SIZE.x < 1200 && GET_WINDOW_SIZE.x >= 750
                        ? 'font-size: 1.2rem'
                        : 'font-size: 1rem'
                    "
                  >
                    {{ layer.name }}
                    <div
                      class="d-flex align-center justify-center"
                      style="
                        border-radius: 50%;

                        font-weight: 600;
                        font-size: 1.4rem;
                      "
                      :style="
                        GET_WINDOW_SIZE.x >= 1200
                          ? 'font-size: 1.4rem; border: 6px solid #9466ff; width: 50px; height: 50px;'
                          : GET_WINDOW_SIZE.x < 1200 && GET_WINDOW_SIZE.x >= 750
                          ? 'font-size: 1rem; border: 3px solid #9466ff; width: 40px; height: 40px;'
                          : 'font-size: 0.8rem; border: 1px solid #9466ff; width: 30px; height: 30px;'
                      "
                    >
                      {{ layer.count }}
                    </div>
                  </v-card-text>
                  <v-card-text
                    v-else
                    class="d-flex justify-space-between align-center py-1 px-2"
                    :style="'font-size: 1rem'"
                  >
                    {{ layer.id }}
                    <v-icon class="ml-2">mdi-star</v-icon>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col
        v-if="GET_WINDOW_SIZE.x <= 710"
        order="2"
        order-md="2"
        class="mb-5 px-0 col-12"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div style="max-width: 880px" class="mx-auto pl-4">
          <v-row class="ma-0">
            <v-col
              class="col-12 col-sm-6"
              v-for="(layer, i) in layers"
              :key="i"
            >
              <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 16 : 2" color="#272727">
                  <v-card-text
                    class="d-flex justify-space-between align-center"
                    :style="'font-size: 1rem'"
                  >
                    {{ layer.name }}
                    <div
                      class="d-flex align-center justify-center"
                      style="
                        border-radius: 50%;

                        font-weight: 600;
                        font-size: 1.4rem;
                      "
                      :style="'font-size: 0.8rem; border: 1px solid #9466ff; width: 30px; height: 30px;'"
                    >
                      {{ layer.count }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Section3",
  props: {
    tab: {
      type: Number,
      require: true,
    },
  },

  data: () => ({
    active: null,
    activeName: "Layers",
    activeAll: false,

    layers: [
      { id: 1, name: "Background", count: 17 },
      { id: 2, name: "Figure", count: 24 },
      { id: 3, name: "Glassy", count: 2 },
      { id: 4, name: "Base Color", count: 19 },
      { id: 5, name: "Eyes Color", count: 25 },
      { id: 6, name: "Flare", count: 9 },
      { id: 7, name: "Base", count: 9 },
      { id: 8, name: "Forehead", count: 42 },
    ],
    images: [
      {
        id: 1,
        img: "bg",
        style: "position: absolute; top: -15px; left: -15px; z-index: 1",
      },
      {
        id: 2,
        img: "figure",
        style: "position: absolute; top: 30; left: 30px; z-index: 2",
      },
      {
        id: 3,
        img: "glassy2",
        style: "position: absolute; top: 15px; left: 15px; z-index: 3",
      },
      {
        id: 4,
        img: "baseColor",
        style: "position: absolute; top: 0; left: -5px; z-index: 4",
      },
      {
        id: 5,
        img: "eyesColor",
        style: "position: absolute; top: 0; left: 0; z-index: 5",
      },
      {
        id: 6,
        img: "flare",
        style: "position: absolute; top: 0; left: 0; z-index: 6",
      },
      {
        id: 7,
        img: "base",
        style: "position: absolute; top: 0px; left: 5px; z-index: 7",
      },
      {
        id: 8,
        img: "forehead",
        style: "position: absolute; top: -25px; left:0; z-index: 8",
      },
    ],
  }),

  // mounted() {
  //   this.getSize();
  // },
  // updated() {
  //   // this.getSize();
  // },
  // beforeUpdate() {
  //   this.getSize();
  // },
  computed: {
    ...mapGetters(["GET_ACTIVE_ANIMATE", "GET_WINDOW_SIZE"]),

    size() {
      if (this.tab) {
        return this.getSize();
      } else {
        return this.getSize();
      }
    },
  },
  methods: {
    ...mapMutations(["TOGGLE_ACTIVE_ANIMATE"]),
    getSize() {
      if (document.getElementById("cardImage")) {
        return document.getElementById("cardImage").offsetWidth;
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.v-card {
  transition: all 0.2s ease;
}
.layer-img {
  transition: all 0.4s ease;
}
</style>
