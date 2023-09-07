<template>
  <div class="scroll-container" >
    <el-scrollbar class="scrollbar" :height="tableHeight">
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

import AdmissionRoute from "@/components/FormTemplates/AN/AdmissionRoute.vue";
import Operate from "@/components/FormTemplates/AN/Operate.vue";
import BasicInformation from "@/components/FormTemplates/AN/BasicInformation.vue";
import DischargeInstructions from "@/components/FormTemplates/AN/DischargeInstructions.vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {computed} from "vue";
import {anFormStore} from "@/store/formStore";

export default {

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
  setup() {
    //自适应高度
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    const  formStore = anFormStore();
    const getData = () => {
      return formStore.form;
    }
    return {
      getData,
      tableHeight,
    };
  },
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
