<template>
  <div class="scroll-container" >
      <el-scrollbar class="scrollbar" :height="tableHeight">
        <el-card >
<!--          <el-form :model="baseForm" label-width="280px" :size="'small'" label-position="left">-->
<!--            <el-form-item label="病例号">-->
<!--              <el-input v-model="baseForm.caseNumber" placeholder="请输入病例号"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="录入时间">-->
<!--              <el-date-picker v-model="baseForm.timeOfAdmission" type="date" placeholder="选择日期" format="YYYY-MM-DD"  value-format="DD/MM/YYYY" ></el-date-picker>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="主管医生">-->
<!--              <el-input v-model="baseForm.manageDoctors" placeholder="请输入主管医生"></el-input>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
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
import {mhtFormStore, baseFormStore} from "@/store/formStore";
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
      console.log("diyige" + this.$refs.d.form)
      console.log(formStore.form)
      // const mergedData = Object.assign({}, this.formData.formA, /* 其他表单组件的数据 */)
    }
  },
  setup() {
    const baseForm = baseFormStore().baseForm
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    const getData = () => {
      return formStore.form;
    }
    return {
      getData,
      baseForm,
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
