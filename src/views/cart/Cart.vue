<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>我的购物车({{ cartLength }})</template>
      <template v-slot:right>
        <div @click="modify">
          {{ operations }}
        </div>
      </template>
    </nav-bar>

    <cart-list />

    <cart-bottom-bar
      :operation="operation"
      @goShoping="goShoping"
      @showLoadding="showLoadding"
      v-show="$store.state.cartList.length ? true : false"
    />

    <div class="null-cart" v-show="$store.state.cartList.length ? false : true">
      <img src="~assets/img/cart/gouwu.png" alt="">
      <span>购物车还是空的，快去逛逛吧</span>
    </div>
    <div class="goShoping" v-show="isShoping">先去选购一些东西吧</div>
    <div class="loadding" v-show="loadding">
      <img src="~assets/img/cart/loadding.gif" alt="" />
      <div>请稍等···</div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
// import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  data() {
    return {
      operation: true,
      isShow: true,
      isShoping: false,
      loadding: false,
    };
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
      // return this.$store.getters.cartLength
    },
    // ...mapGetters(['cartLength', 'cartList'])
    operations() {
      return this.operation ? "管理" : "完成";
    },
  },
  methods: {
    modify() {
      this.operation = !this.operation;
    },
    goShoping() {
      this.isShoping = true;
      setTimeout(() => {
        this.isShoping = false;
      }, 1000);
    },
    showLoadding() {
      this.loadding = true;
      setTimeout(() => {
        this.loadding = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.null-cart {
  display: flex;
  text-align: center;
  flex-direction: column;
}
.null-cart img {
  width: 50%;
  height: 50%;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%);
  margin-bottom: 10px;
}
.goShoping {
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
.loadding {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -50px;
}
.loadding img {
  width: 50px;
  height: 50px;
  margin-bottom: 3px;
}
</style>