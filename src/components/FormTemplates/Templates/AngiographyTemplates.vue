<template>
  <div class="scroll-container" :style="{ height: containerHeight }">
    <el-scrollbar class="scrollbar">
      <el-card>
        <admission-route ref="ar"></admission-route>
        <operate ref="op"></operate>
        <basic-information ref="bi"></basic-information>
        <discharge-instructions ref="di"></discharge-instructions>
      </el-card>
    </el-scrollbar>
    <div class="button-container">
      <el-button type="primary" @click="submitForm"  class="button">提交</el-button>
    </div>
  </div>
</template>

<script>
import useHeightMixin from "@/mixins/heightMixin";
import AdmissionRoute from "@/components/FormTemplates/AN/AdmissionRoute.vue";
import Operate from "@/components/FormTemplates/AN/Operate.vue";
import BasicInformation from "@/components/FormTemplates/AN/BasicInformation.vue";
import DischargeInstructions from "@/components/FormTemplates/AN/DischargeInstructions.vue";
export default {
  mixins: [useHeightMixin],
  name: "Angiography",
  components: {
    AdmissionRoute,
    Operate ,
    BasicInformation,
    DischargeInstructions
  },
  methods: {
    submitForm() {

      console.log(this.$refs.ar.form)
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
