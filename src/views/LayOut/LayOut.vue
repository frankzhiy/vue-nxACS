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
            default-active="/allUser"
        >
          <el-menu-item index="/allUser">患者列表</el-menu-item>
          <el-menu-item index="/fellow">随访患者/患者评估</el-menu-item>
          <el-menu-item index="/warning">预警患者</el-menu-item>
          <el-menu-item index="/statistic">统计分析</el-menu-item>
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

.header-img {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
.el-menu-item {
  font-weight: 600;
}

.el-menu-item {
  position: relative;
}

.el-menu-item::before,
.el-menu-item::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width:  1px;
  height: 40%;
  background-color: #fff;

}

.el-menu-item::before {
  left: 0;
}

.el-menu-item::after {
  right: 0;
}

.el-menu-item:first-child::before {
  display: none;
}

.el-menu-item:last-child::after {
  display: none;
}
</style>
