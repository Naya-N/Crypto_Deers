<template>
  <a
    class="mr-5 open-sea"
    href="https://opensea.io/collection/crypto-deers"
    target="_blank"
    style="height: 52px"
  >
    <img
      class="open-sea__img"
      height="40"
      :src="require('../../assets/os.svg')"
      alt="OpenSea"
    />
  </a>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "OpenSea",

  data: () => ({
    loading: false,
  }),

  computed: {
    ...mapGetters(["GET_WINDOW_SIZE"]),
  },
};
</script>

<style lang="scss" scoped>
.open-sea {
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 6px solid #1e1e1e;
  .open-sea__img {
    border-radius: 50%;
  }
  &:hover {
    background: #9466ff;
    border: 6px solid #9466ff;
  }
}
</style>

