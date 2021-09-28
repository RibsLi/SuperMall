<template>
  <div class="goods">
    <div class="goods-item" v-for="item in goods">
      <img :src="item.show.img" alt="">
      <div class="goods-info">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <!-- <i class="cfav"></i> -->
        <span class="cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 5px;
  font-size: 12px;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

/* .goods-info .cfav {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  background: url("~assets/img/common/collect.png") no-repeat;
  background-size: cover;
	vertical-align: bottom;
} */
.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>