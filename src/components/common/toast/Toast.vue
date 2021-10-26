<template>
  <div class="toast" v-show="isShow">{{ show() }}{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      if (this.message) {
        this.isShow = true;
        setTimeout(() => {}, 1000);
      }
    },
    // show(message, timer = 1500) {
    //   if (loadding == 'false') {
    //     this.isShow = true;

    //     setTimeout(() => {
    //       this.isShow = false;
    //     }, timer);
    //   } else {
    //     this.isShow = true;

    //     setTimeout(() => {
    //       this.isShow = false;
    //     }, timer);
    //   }
    // },
  },
};
</script>

<style>
.toast {
  position: fixed;
  z-index: 999999;
  left: 50%;
  top: 45%;
  transition: all 0.5s;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  border-radius: 8px;
  color: #fff;
  background: rgba(17, 17, 17, 0.5);
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  max-width: 200px;
}
</style>