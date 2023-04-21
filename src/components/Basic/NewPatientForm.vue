<template>
  <div class="container">
    <el-button type="danger" @click="$emit('close-form')" class="button">关闭录入</el-button>
    <form-tabs></form-tabs>
  </div>
</template>

<script>
import FormTabs from "@/components/Basic/FormTabs.vue";
import {inject} from 'vue';

export default {
  name: "NewPatientForm",
  components: {
    FormTabs,
  },

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
