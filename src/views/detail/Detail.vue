<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-img="topImg"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'

import {getDetail, Goods} from 'network/detail'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {}
    }
  },
  created() {
    //保存传入的iid,此处因为keep-alive会一直保存iid需要在keep-alive里面排除Detail组件
    this.iid = this.$route.params.iid
    //根据iid获取数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.data.result
      this.topImg = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
    })
  },
  
}
</script>

<style scoped>

</style>