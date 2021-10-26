<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 吸顶效果 -->
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <!-- 滚动条 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <!-- 推荐 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行 -->
      <feature-view />
      <!-- 小导航 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <!-- 商品列表 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 导航
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
//滚动条
import Scroll from "components/common/scroll/Scroll";
// 返回顶部
import BackTop from "components/content/backTop/BackTop";

//商品
import GoodsList from "components/content/goods/GoodsList";

//轮播
import HomeSwiper from "./childComps/HomeSwiper";
//推荐
import RecommendView from "./childComps/RecommendView";
// 本周流行
import FeatureView from "./childComps/FeatureView";
//请求数据
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },

  created() {
    //created里面的方法都封装到了methods里面
    //请求banner数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },

  deactivated() {
    //切换组件时保存当前位置
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.$refs.scroll.scroll.y);
  },

  methods: {
    //请求banner数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    //请求商品数据
    getHomeGoods(type) {
      // [type]是因为他是变量所以不能写成.type
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // ...表示可变参数也是一种解构方式，把新拿到的数组一个一个加到原有的数组中，也可以使用for循环一个个加到原数组中，此处不能用=这样会覆盖原有的数组
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    // TabControl点击切换商品类型
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 解决两个tabcontrol点击后不一致的问题
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      // 解决tabcontrol下拉后其他tabcontrol也有被下拉的问题
      this.saveY = this.$refs.scroll.getScrollY();
      if (-this.saveY > this.tabOffsetTop) {
        this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 0);
      }
    },
    // 返回顶部
    backTopClick() {
      // console.log('backtop');
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(createpositon) {
      // console.log(createpositon);
      //设置返回顶部按钮的显示隐藏
      this.isShowBackTop = -createpositon.y > 800;
      // 决定tabcontrol是否吸顶，给他一个positi:fixed
      this.isTabFixed = -createpositon.y > this.tabOffsetTop;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // TabControl的吸顶效果
    swiperImgLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },

  computed: {
    //显示商品
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
}
/* 使用better-scroll后sticky就失效，且改属性较新，兼容差 */
/* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .content {
    height: cale( 100% -93px);
    margin-top: 44px;
    overflow: hidden;
  } */
.tab-control {
  position: relative;
  z-index: 9;
}
</style>