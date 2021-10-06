<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车({{cartLength}})</template>
      <template v-slot:right>
        <div @click="modify">
          {{operations}}
        </div>
      </template>
    </nav-bar>

    <cart-list/>

    <cart-bottom-bar :operation="operation"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  // import {mapGetters} from 'vuex'


  export default {
    name: "Cart",
    data() {
      return {
        operation: true
      }
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      cartLength() {
        return this.$store.state.cartList.length
        // return this.$store.getters.cartLength
      },
      // ...mapGetters(['cartLength', 'cartList'])
      operations() {
        return this.operation ? '管理' : '完成'
      }
    },
    methods: {
      modify() {
        this.operation = !this.operation
      }
    },
  }
</script>

<style scoped>
  .cart {
    /* height: 100vh; */
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>