<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <scroll class="content" :pull-up-load="true">
      <category-list :list="list" @categoryClick="categoryClick"/>
    </scroll>
    <category-list-item :category="showCategory"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import CategoryList from './childComps/CategoryList'
  import CategoryListItem from './childComps/CategoryListItem'

  

  export default {
    name: "Category",
    data() {
      return {
        list: ['正在流行', '上衣', '裤子', '裙子', '内衣', '女鞋', '男友', '包包', '运动', '配饰', '美妆', '个护', '家居', '百货', '母婴'],
        currentType: 'fashion',
        category: {
          'fashion': [
            {name: '裙子套装', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: '短袖', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '连衣裙', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '时尚套装', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '半身裙', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '防晒衣', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '背心', imgURL: '~assets/img/category/beixin.webp'},
            {name: '短裤', imgURL: '~assets/img/category/duanku.webp'},
          ],
          'coat': [
            {name: 'T恤', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: '针织衫', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '衬衫', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '雪纺衫', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '打底背心', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '卫衣', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '西装外套', imgURL: '~assets/img/category/beixin.webp'},
            {name: '牛仔外套', imgURL: '~assets/img/category/duanku.webp'},
            {name: '其他外套', imgURL: '~assets/img/category/duanku.webp'},
          ],
          'trousers': [
            {name: '牛仔裤', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: '休闲裤', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '阔腿裤', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '工装裤', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '西装裤', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '打底裤', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '直筒裤', imgURL: '~assets/img/category/beixin.webp'},
            {name: '哈伦裤', imgURL: '~assets/img/category/duanku.webp'},
            {name: '格子裤', imgURL: '~assets/img/category/duanku.webp'},
            {name: '运动裤', imgURL: '~assets/img/category/duanku.webp'},
          ],
          'skirt': [
            {name: '连衣裙', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: '短款半裙', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '长款半裙', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '碎花裙', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '卫衣裙', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '衬衫裙', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '背带裙', imgURL: '~assets/img/category/beixin.webp'},
            {name: '格子裙', imgURL: '~assets/img/category/duanku.webp'},
          ],
          'underwear': [
            {name: '聚拢文胸', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: '文胸套装', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '美背吊带', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '运动内衣', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '睡衣套装', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '情侣睡衣', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '纯棉内裤', imgURL: '~assets/img/category/beixin.webp'},
            {name: '塑身美体', imgURL: '~assets/img/category/duanku.webp'},
          ],
          'shoes': [
            {name: '单鞋', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: '高跟鞋', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '老爹鞋', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '休闲鞋', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '运动鞋', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '小白鞋', imgURL: '~assets/img/category/fangshaiyi.webp'},
          ],
          'boyfriend': [
            {name: '卫衣', imgURL: '~assets/img/category/qunzitaozhuang.webp'},
            {name: 'T恤', imgURL: '~assets/img/category/duanxiu.webp'},
            {name: '衬衫', imgURL: '~assets/img/category/lianyiqun.webp'},
            {name: '夹克', imgURL: '~assets/img/category/shishangtaozhuang.webp'},
            {name: '休闲裤', imgURL: '~assets/img/category/banshenqun.webp'},
            {name: '牛仔裤', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '休闲鞋', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '时尚套装', imgURL: '~assets/img/category/fangshaiyi.webp'},
            {name: '贴身衣物', imgURL: '~assets/img/category/fangshaiyi.webp'},
          ],
        }
      }
    },
    components: {
      NavBar,
      Scroll,
      CategoryList,
      CategoryListItem
    },
    methods: {
      categoryClick(index) {
        switch (index) {
          case 0: 
            this.currentType = 'fashion'
            break
          case 1:
            this.currentType = 'coat'
            break
          case 2:
            this.currentType = 'trousers'
            break
          case 3:
            this.currentType = 'skirt'
            break
          case 4:
            this.currentType = 'underwear'
            break
          case 5:
            this.currentType = 'shoes'
            break
          case 6:
            this.currentType = 'boyfriend'
            break
        }
      }
    },
    computed: {
      showCategory() {
        return this.category[this.currentType]
      }
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