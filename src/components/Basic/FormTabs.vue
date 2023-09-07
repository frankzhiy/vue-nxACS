<template>
  <div>
    <el-tabs tab-position="left" v-model="activeTab" @tab-change="changeTab">
      <el-tab-pane label="基本信息" name="base">
        <!-- 基本信息表单内容 -->
        <base-info-templates ref="baseInfoTemplates"></base-info-templates>
      </el-tab-pane>
      <el-tab-pane label="病史问卷" name="history">
        <!-- 病史问卷表单内容 -->
        <medical-history-templates ref="medicalHistoryTemplates"></medical-history-templates>
      </el-tab-pane>
      <el-tab-pane label="检验问卷" name="examination">
        <!-- 检验问卷表单内容 -->
        <test-templates ref="testTemplates"></test-templates>
      </el-tab-pane>
      <el-tab-pane label="随访问卷" name="followup">
        <!-- 随访问卷表单内容 -->
        <follow-up-templates ref="followUpTemplates"></follow-up-templates>
      </el-tab-pane>
      <el-tab-pane label="心超问卷" name="echocardiography">
        <!-- 心超问卷表单内容 -->
        <echocardiography-templates ref="echocardiographyTemplates"></echocardiography-templates>
      </el-tab-pane>
      <el-tab-pane label="造影问卷" name="angiography">
        <!-- 造影问卷表单内容 -->
        <angiography-templates ref="angiographyTemplates"></angiography-templates>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MedicalHistoryTemplates from "@/components/FormTemplates/Templates/MedicalHistoryTemplates.vue";
import TestTemplates from "@/components/FormTemplates/Templates/TestTemplates.vue";
import FollowUpTemplates from "@/components/FormTemplates/Templates/FollowUpTemplates.vue";
import EchocardiographyTemplates from "@/components/FormTemplates/Templates/EchocardiographyTemplates.vue";
import AngiographyTemplates from "@/components/FormTemplates/Templates/AngiographyTemplates.vue";
import BaseInfoTemplates from "@/components/FormTemplates/Templates/BaseInfoTemplates.vue";
// import { useFormStore } from '@/store/formStore'
// const  formStore = useFormStore();
import {inject, ref} from "vue";
export default {

  components: {
    BaseInfoTemplates,
    MedicalHistoryTemplates,
    TestTemplates,
    FollowUpTemplates,
    EchocardiographyTemplates,
    AngiographyTemplates,
  },
  data() {
    return {
      activeTab: 'base',
    };
  },
  setup() {
    const baseInfoTemplates = ref(null);
    const medicalHistoryTemplates = ref(null);
    const angiographyTemplates = ref(null);
    const echocardiographyTemplates = ref(null);
    const followUpTemplates = ref(null);
    const testTemplates = ref(null);

    const changeTab = (tab) => {
      console.log(tab);
      // if (Object.values(formStore.formA).every(value => value === '')) {
      //   console.log('可以跳转')
      // } else {
      //   console.log('不可以跳转')
      //   // 至少有一个值为空
      // }
    };
    const collectAllFormData = () => {
      const baseInfo = baseInfoTemplates.value.getData();
      const medicalHistory= medicalHistoryTemplates.value.getData();
      const angiography= angiographyTemplates.value.getData();
      const echocardiography= echocardiographyTemplates.value.getData();
      const followUp= followUpTemplates.value.getData();
      const test= testTemplates.value.getData();
      return {
        baseInfo,
        medicalHistory,
        angiography,
        echocardiography,
        followUp,
        test
        // ... 其他表单数据
      };
    }

    return {
      changeTab,
      baseInfoTemplates,
      medicalHistoryTemplates,
      angiographyTemplates,
      echocardiographyTemplates,
      followUpTemplates,
      testTemplates,
      collectAllFormData,
    };
  },
};
</script>
