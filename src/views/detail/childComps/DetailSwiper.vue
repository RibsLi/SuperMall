<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImg" :key="item">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSweiper",
  props: {
    topImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
.detail-swiper img {
  height: 100%;
  width: 100%;
}
</style>