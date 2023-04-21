<template>
  <div>
    <el-button type="primary" @click="fetchUsers">获取所有用户</el-button>
  </div>
</template>

<script>
import {getAllUser} from "@/utils/api";
export default {
  name: "httpts",
  methods: {
    async fetchUsers() {
      try {
        const manageDoctors = 1001; // 设置为你想要的 manageDoctors 值
        const response = await getAllUser(manageDoctors);
        console.log(response);
      } catch (error) {
        throw error
        // console.error('Error fetching user data:', error);
      }
    },
  },
}
</script>

<style scoped>

</style>
