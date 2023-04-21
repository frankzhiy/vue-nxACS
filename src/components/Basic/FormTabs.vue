<template>
  <div>
    <el-tabs tab-position="left" v-model="activeTab" @tab-change="changeTab">
      <el-tab-pane label="病史问卷" name="history">
        <!-- 病史问卷表单内容 -->
        <medical-history-templates></medical-history-templates>
      </el-tab-pane>
      <el-tab-pane label="检验问卷" name="examination">
        <!-- 检验问卷表单内容 -->
        <test-templates></test-templates>
      </el-tab-pane>
      <el-tab-pane label="随访问卷" name="followup">
        <!-- 随访问卷表单内容 -->
        <follow-up-templates></follow-up-templates>
      </el-tab-pane>
      <el-tab-pane label="心超问卷" name="echocardiography">
        <!-- 心超问卷表单内容 -->
        <echocardiography-templates></echocardiography-templates>
      </el-tab-pane>
      <el-tab-pane label="造影问卷" name="angiography">
        <!-- 造影问卷表单内容 -->
        <angiography-templates></angiography-templates>
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
// import { useFormStore } from '@/store/formStore'
// const  formStore = useFormStore();
import {inject} from "vue";
export default {

  components: {
    MedicalHistoryTemplates,
    TestTemplates,
    FollowUpTemplates,
    EchocardiographyTemplates,
    AngiographyTemplates,
  },
  data() {
    return {
      activeTab: 'history',
    };
  },
  setup() {

    const changeTab = (tab) => {
      console.log(tab);
      // if (Object.values(formStore.formA).every(value => value === '')) {
      //   console.log('可以跳转')
      // } else {
      //   console.log('不可以跳转')
      //   // 至少有一个值为空
      // }
    };
    return {changeTab,};
  },
};
</script>
