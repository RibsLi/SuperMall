<template>
  <div class="goods">
    <p v-show="isRecommend">推荐商品</p>
    <div class="goods-list">
      <goods-list-item
        :key="index"
        v-for="(item, index) in goods"
        :goods-item="item"
      />
    </div>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
    isRecommend: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.goods p {
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>