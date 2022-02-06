<template>
  <a
    href="https://www.tiktok.com/@naya__nya/video/7054186626762673410?is_copy_url=1&is_from_webapp=v1"
    title="tiktok"
    target="_blank"
  >
    <div class="twitter">
      <v-icon size="16">$tiktok</v-icon>
    </div>
  </a>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TikTok",

  data: () => ({
    loading: false,
  }),

  computed: {
    ...mapGetters(["GET_WINDOW_SIZE"]),
  },
};
</script>

<style lang="scss" scoped>
.twitter {
  background: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid #1e1e1e;
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
    border: 3px solid #9466ff;
    .v-icon {
      color: #9466ff;
    }
  }
}
</style>

