<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-img="topImg"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import {getDetail} from 'network/detail'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImg: []
    }
  },
  created() {
    //保存传入的iid,此处因为keep-alive会一直保存iid需要在keep-alive里面排除Detail组件
    this.iid = this.$route.params.iid
    //根据iid获取数据
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImg = res.data.result.itemInfo.topImages
    })
  },
  
}
</script>

<style scoped>

</style>