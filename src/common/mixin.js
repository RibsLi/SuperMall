import BackTop from 'components/content/backTop/BackTop'

// BackTop混入封装
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick() {
      // 通过 ref 直接访问scroll组件里的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
}