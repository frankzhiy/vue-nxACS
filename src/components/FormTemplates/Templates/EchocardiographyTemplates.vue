<template>
  <div class="scroll-container" :style="{ height: containerHeight }">
    <el-scrollbar class="scrollbar">
      <el-card>
        <echocardiography ref="ec"></echocardiography>
      </el-card>
    </el-scrollbar>
    <div class="button-container">
      <el-button type="primary" @click="submitForm"  class="button">提交</el-button>
    </div>
  </div>
</template>

<script>
import Echocardiography from "@/components/FormTemplates/EC/Echocardiography.vue";
import useHeightMixin from "@/mixins/heightMixin";
export default {
  mixins: [useHeightMixin,],
  name: "EchocardiographyTemplates",
  components: {
    Echocardiography,
  },
  methods: {
    submitForm() {

      console.log(this.$refs.ec.form)
      //验证是否提交后离开

      // const mergedData = Object.assign({}, this.formData.formA, /* 其他表单组件的数据 */)
    },},
}
</script>

<style scoped>
.scroll-container {
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
}

.scrollbar {
  overflow-y: auto;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.button{
  margin-top: 10px;
}
</style>
