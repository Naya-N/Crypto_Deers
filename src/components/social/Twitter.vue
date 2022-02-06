<template>
  <a
    href="https://twitter.com/intent/follow?original_referer=null&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ENaya_N__&amp;region=follow_link&amp;screen_name=Naya_N__"
  >
    <div class="twitter">
      <v-icon>mdi-twitter</v-icon>
    </div>
  </a>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Twitter",

  data: () => ({}),

  computed: {
    ...mapGetters(["GET_WINDOW_SIZE"]),
  },
};
</script>

<style lang="scss" scoped>
.twitter {
  background: #fff;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 6px solid #1e1e1e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  .v-icon {
    color: #1e1e1e;
  }

  &:hover {
    border: 6px solid #9466ff;
    .v-icon {
      color: #9466ff;
    }
  }
}
</style>

