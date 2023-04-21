<template>
  <div class="scroll-container" :style="{ height: containerHeight }">
    <el-scrollbar class="scrollbar">
      <el-card>
        <basic-follow ref="bf"></basic-follow>
        <death ref="d"></death>
        <adverse-cardiovascular ref="ac"></adverse-cardiovascular>
        <angina ref="a"></angina>
        <arrhythmia ref="ar"></arrhythmia>
        <oral-drug ref="od"></oral-drug>
      </el-card>
    </el-scrollbar>
    <div class="button-container">
      <el-button type="primary" @click="submitForm" class="button">提交</el-button>
    </div>
  </div>
</template>

<script>
import BasicFollow from "@/components/FormTemplates/FU/BasicFollow.vue";
import {ref} from "vue";
import useHeightMixin from "@/mixins/heightMixin";
import AdverseCardiovascular from "@/components/FormTemplates/FU/AdverseCardiovascular.vue";
import Angina from "@/components/FormTemplates/FU/Angina.vue";
import Arrhythmia from "@/components/FormTemplates/FU/Arrhythmia.vue";
import OralDrug from "@/components/FormTemplates/FU/OralDrug.vue";
import Death from "@/components/FormTemplates/FU/Death.vue";
import {fuFormStore,} from "@/store/formStore";
const  formStore = fuFormStore();
export default {
  mixins: [useHeightMixin],
  name: "FollowUpTemplates",
  components: {
    BasicFollow,
    Death,
    AdverseCardiovascular,
    Angina,
    Arrhythmia,
    OralDrug,
  },
  methods: {
    submitForm() {
      console.log(this.$refs.bf.form)
      console.log(formStore.form)
      // const mergedData = Object.assign({}, this.formData.formA, /* 其他表单组件的数据 */)
    }
  },
  setup() {


    return {};
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

.button {
  margin-top: 10px;
}
</style>
