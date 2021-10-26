<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <category-list :categories="categories" @categoryClick="categoryClick" />
    <scroll class="content1" :pull-up-load="true">
      <category-list-item :subcategoryList="subcategoryList" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import CategoryList from "./childComps/CategoryList";
import CategoryListItem from "./childComps/CategoryListItem";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      currentIndex: 0,
      subcategoryList: [],
    };
  },
  components: {
    NavBar,
    Scroll,
    CategoryList,
    CategoryListItem,
  },
  created() {
    this.getCategory();
    // this.getSubcategory()
  },
  methods: {
    // 请求分类列表数据
    getCategory() {
      getCategory().then((res) => {
        console.log(res);
        this.categories = res.data.data.category.list;
        this.$nextTick(() => {
          this.getSubcategory(this.categories[0].maitKey);
          // this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
        });
      });
    },
    // 请求分类详情数据
    categoryClick({ maitKey, index }) {
      this.currentIndex = index;
      this.getSubcategory(maitKey)
    },
    // 请求右侧分类菜单
    getSubcategory(key) {
      getSubcategory(key).then((res) => {
        console.log(res);
        this.subcategoryList = res.data.data.list;
      });
    },
  },
};
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
.content1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 20%;
  right: 0;
  overflow: hidden;
}
</style>