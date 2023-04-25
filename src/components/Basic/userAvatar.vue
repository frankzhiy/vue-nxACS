<template>
<!--  <el-avatar> user </el-avatar>-->
  <el-dropdown>
      <el-avatar> user </el-avatar>
<!--    <el-button type="primary">-->
<!--      Dropdown List<el-icon class="el-icon&#45;&#45;right"><arrow-down /></el-icon>-->
<!--    </el-button>-->
    <template #dropdown>
<!--      TODO： 添加链接、修改名称-->
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: "userAvatar"
}
</script>

<style scoped>

</style>
