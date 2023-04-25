<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
          <img class="header-img" src="../../assets/logo.png">
          <span>急性冠脉综合症患者管理平台</span>
        </div>
        <userAvatar></userAvatar>
      </el-header>
      <div class="elm">
        <el-menu
            mode="horizontal"
            :router="true"
            background-color="#01497c"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
          <el-menu-item index="/allUser">患者列表</el-menu-item>
          <el-menu-item index="/user">患者管理</el-menu-item>
          <el-menu-item index="/fellow">随访患者</el-menu-item>
          <el-menu-item index="/warning">预警患者</el-menu-item>
        </el-menu>
      </div>
      <el-main>
        <router-view></router-view>
      </el-main>
<!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>


<script>
import UserAvatar from "@/components/Basic/userAvatar.vue";

export default {
  name: 'LayOut',
  components: {UserAvatar},
  setup() {
    return {}
  }
}
</script>

<style scoped>
.el-container {
  height: 100vh;
}


.common-header {
  background-color: #2a6f97;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  /*line-height: 60px;*/
  display: flex;
}

/*.common-menu {*/
/*  background-color: #b3c0d1;*/
/*  !*display: flex;*!*/
/*  !*flex-direction: column;*!*/
/*}*/

.header-img {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}

</style>
