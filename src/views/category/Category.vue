<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <scroll class="content" :pull-up-load="true">
      <category-list/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import CategoryList from './childComps/CategoryList'

  

  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      CategoryList
    }
  }

</script>

<style scoped>
  .nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>