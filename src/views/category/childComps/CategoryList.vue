<template>
  <div class="category-list">
    <div class="list-item" v-for="(item, index) in category" @click="itemClick(index)" :class="{active:currentIndex === index}">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryList",
    data() {
      return {
        category: ['正在流行', '男装', '女装', '裙子', '内衣', '男鞋', '女鞋', '包包', '数码', '电脑', '运动', '配饰', '美妆', '个护', '家居'],
        currentIndex: 0
      }
    },
    components: {
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    },
  }
</script>

<style scoped>
  .category-list {
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    width: 20%;
  }
  .list-item {
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
  .active {
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 2px solid var(--color-tint);
  }
</style>