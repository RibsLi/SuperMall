<template>
  <div class="category-list">
    <div class="list-item" v-for="(item, index) in list" @click="itemClick(index)" :class="{active:currentIndex === index}">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryList",
    props: {
      list: Array,
      default() {
        return []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('categoryClick', index)
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