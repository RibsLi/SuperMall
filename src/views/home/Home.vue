<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    
  </div>
</template>

<script>
  // 导航
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  //商品
  import GoodsList from 'components/content/goods/GoodsList'

  //轮播
  import HomeSwiper from './childComps/HomeSwiper'
  //推荐
  import RecommendView from './childComps/RecommendView'
  // 本周流行
  import FeatureView from './childComps/FeatureView'

  //请求数据
  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop'
      }
    },
    created() {//created里面的方法都封装到了methods里面
      //请求banner数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      //请求banner数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        })
      },
      //请求商品数据
      getHomeGoods(type) {
        // [type]是因为他是变了所以不能写成.type
        const page = this.goods[type].page +1
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          // ...表示可变参数也是一种解构方式，把新拿到的数组一个一个加到原有的数组中，也可以使用for循环一个个加到原数组中，此处不能用=这样会覆盖原有的数组
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      },
      // TabControl点击切换商品类型
      tabClick(index) {
        console.log(index);
        switch (index) {
          case 0: 
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      }
      
    },
    computed: {
      //显示商品
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>