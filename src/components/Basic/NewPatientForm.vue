<template>
  <div class="container">
    <el-button type="danger" @click="$emit('close-form')" class="button">关闭录入</el-button>
    <form-tabs ref="formTabsRef"></form-tabs>
    <el-button type="primary" @click="submitAllForm" class="button">提交所有表单</el-button>

  </div>
</template>

<script>
import FormTabs from "@/components/Basic/FormTabs.vue";
import  {mhtFormStore, baseFormStore, testFormStore, anFormStore, enFormStore, fuFormStore} from "@/store/formStore";
import {getCurrentInstance, inject} from 'vue';
import { ref } from 'vue'
import {ElMessage} from "element-plus";
import {submitPatientData} from "@/utils/api";
export default {
  name: "NewPatientForm",
  components: {
    FormTabs,
  },

  setup(){

    const formTabsRef = ref(null); // 初始化引用
    //提交患者数据
    const submitAllForm = async () => {
      const allFormData = formTabsRef.value.collectAllFormData();
      console.log(JSON.stringify(allFormData));
      try {
        const response = await submitPatientData(JSON.stringify(allFormData));
        await ElMessage.success({  // 使用ElMessage显示成功消息
          message: '提交成功!',
          duration: 3000
        });

      } catch (error) {
        await ElMessage.error({  // 使用ElMessage显示错误消息
          message: '提交错误!',
          duration: 5000,
          showClose: true,
        });
      }
    }
    const submitAllForms = () => {
      const allFormData = formTabsRef.value.collectAllFormData();
      console.log(allFormData);
    }
    return{
      formTabsRef,
      submitAllForms,
      submitAllForm,
    };
  }
};


</script>

<style scoped>
.container {
  text-align: right;
}

.button {

  margin-bottom: 10px;
}
</style>
