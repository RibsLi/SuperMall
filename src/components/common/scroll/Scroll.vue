<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//滚动条插件
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //probeType：侦测，probeType作用：决定是否派发 scroll 事件；probeType 为 0，在任何时候都不派发 scroll 事件；probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件；probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件；probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
      probeType: this.probeType,
      //控制里面的元素是否可以点击
      click: true,
      //控制上拉加载更多
      pullUpLoad: this.pullUpLoad,
      mouseWheel: false,
      observeDOM: true,
      observeImage: true
    })
    //监听滚动位置，默认情况下是不监听的
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (createpositon) => {
        // console.log(createpositon);
        this.$emit('scroll', createpositon)
      })
    }
    //上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  //返回顶部
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    //结束上拉加载
    finishPullUp() {
      this.scroll.finishPullUp()
    },
  },
}
</script>

<style scoped>

</style>