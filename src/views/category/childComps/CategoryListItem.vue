<template>
  <div class="list-right">
    <!-- <div class="list-item">
      <img src="~assets/img/category/qunzitaozhuang.webp" alt="">
      <div>裙子套装</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/duanxiu.webp" alt="">
      <div>短袖</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/lianyiqun.webp" alt="">
      <div>连衣裙</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/shishangtaozhuang.webp" alt="">
      <div>时尚套装</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/banshenqun.webp" alt="">
      <div>半身裙</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/fangshaiyi.webp" alt="">
      <div>防晒衣</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/beixin.webp" alt="">
      <div>背心</div>
    </div>
    <div class="list-item">
      <img src="~assets/img/category/duanku.webp" alt="">
      <div>短裤</div>
    </div> -->

    <div class="list-item" v-for="item in category">
      <img :src="item.imgURL" alt="">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryListItem",
    props: {
      category: Object,
      default() {
        return {}
      },
    },
    computed: {
      showImg() {
      }
    }
  }
</script>

<style scoped>
  .list-right {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    position: fixed;
    right: 0;
    text-align: center;
  }
  .list-item {
    /* margin: 15px; */
  }
  .list-item img {
    width: 55px;
    height: 55px;
    margin: 15px;
  }
  .list-item div {
    font-size: 14px;
  }
</style>