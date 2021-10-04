<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-img="topImg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: []
    }
  },
  created() {
    //保存传入的iid,此处因为keep-alive会一直保存iid需要在keep-alive里面排除Detail组件
    this.iid = this.$route.params.iid
    //根据iid获取数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result
      this.topImg = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
      //商家信息
      this.shop = new Shop(data.shopInfo)
      //保存商品详情数据
      this.detailInfo = data.detailInfo
      //商品参数
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //评论信息
      if( data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      //详情页导航点击事件
      this.$nextTick(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
  
        // console.log(this.themeTopYs);
      })
    })
    // 详情页推荐商品
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.data.list
    })
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    }
  },
  
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>