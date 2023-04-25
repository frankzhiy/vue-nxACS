<template>
  <div class="scroll-container" >
    <el-scrollbar class="scrollbar" :height="tableHeight">
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
import {computed, ref} from "vue";
import AdverseCardiovascular from "@/components/FormTemplates/FU/AdverseCardiovascular.vue";
import Angina from "@/components/FormTemplates/FU/Angina.vue";
import Arrhythmia from "@/components/FormTemplates/FU/Arrhythmia.vue";
import OralDrug from "@/components/FormTemplates/FU/OralDrug.vue";
import Death from "@/components/FormTemplates/FU/Death.vue";
import {fuFormStore,} from "@/store/formStore";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
const  formStore = fuFormStore();
export default {

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

.button {
  margin-top: 10px;
}
</style>
