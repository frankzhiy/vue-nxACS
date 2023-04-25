<template>
  <div class="scroll-container" >
      <el-scrollbar class="scrollbar" :height="tableHeight">
        <el-card >
          <medication-history ref="mh"></medication-history>
          <personal-history ref="ph"></personal-history>
          <first-medical-contact ref="fmc"></first-medical-contact>
          <diagnostic-evaluation ref="de"></diagnostic-evaluation>
          <treatment-options ref="to"></treatment-options>
          <preoperative-medication ref="pom"></preoperative-medication>
          <discharge ref="d"></discharge>
          <discharge-diagnosis ref="dd"></discharge-diagnosis>
        </el-card>
      </el-scrollbar>
    <div class="button-container">
      <el-button type="primary" @click="submitForm" class="button">提交</el-button>
    </div>

  </div>
</template>

<script>
import MedicationHistory from "@/components/FormTemplates/MHT/MedicationHistory.vue";
import PersonalHistory from "@/components/FormTemplates/MHT/PersonalHistory.vue";
import FirstMedicalContact from "@/components/FormTemplates/MHT/FirstMedicalContact.vue";
import DiagnosticEvaluation from "@/components/FormTemplates/MHT/DiagnosticEvaluation.vue";
import TreatmentOptions from "@/components/FormTemplates/MHT/TreatmentOptions.vue";
import PreoperativeMedication from "@/components/FormTemplates/MHT/PreoperativeMedication.vue";
import Discharge from "@/components/FormTemplates/MHT/Discharge.vue";
import DischargeDiagnosis from "@/components/FormTemplates/MHT/DischargeDiagnosis.vue";
import {mhtFormStore} from "@/store/formStore";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {computed} from "vue";
const  formStore = mhtFormStore();
export default {

  name: "MedicalHistoryTemplates",
  components: {
    MedicationHistory, PersonalHistory, FirstMedicalContact, DiagnosticEvaluation, TreatmentOptions
    , PreoperativeMedication, Discharge, DischargeDiagnosis
  },
  methods: {
    submitForm() {
      console.log(this.$refs.d.form)
      console.log(formStore.form)
      // const mergedData = Object.assign({}, this.formData.formA, /* 其他表单组件的数据 */)
    }
  },
  setup() {
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    return {
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
