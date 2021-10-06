<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        个人中心
      </template>
    </nav-bar>
    <user-info/>
    <account-info/>
    <normal-list-view/>
    <!-- <normal-list-view /> -->
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import UserInfo from "./childComponents/UserInfo";
  import AccountInfo from "./childComponents/AccountInfo";
  import NormalListView from "./childComponents/NormalListView";

  export default {
    name: "Profile",
    components: {
      NavBar,
      UserInfo,
      AccountInfo,
      NormalListView,
    }
  };
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
