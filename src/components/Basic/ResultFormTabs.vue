<template>
  <div class="tabs-container">
    <el-tabs tab-position="top" v-model="activeTab" @tab-change="changeTab">
      <el-tab-pane label="病史详情" name="medicalHistoryResult">
        <!-- 病史问卷表单内容 -->
        <medical-history-result-templates></medical-history-result-templates>
      </el-tab-pane>
      <el-tab-pane label="检验详情" name="testResult">
        <!-- 检验问卷表单内容 -->
        <test-result-templates :active-tab="activeTab"></test-result-templates>
      </el-tab-pane>
      <el-tab-pane label="随访详情" name="followUpResult">
        <!-- 随访问卷表单内容 -->
        <follow-up-result-templates></follow-up-result-templates>
      </el-tab-pane>
      <el-tab-pane label="心超详情" name="echocardiographyResult">
        <!-- 心超问卷表单内容 -->
        <echocardiography-result-templates></echocardiography-result-templates>
      </el-tab-pane>
      <el-tab-pane label="造影详情" name="angiographyResult">
        <!-- 造影问卷表单内容 -->
        <angiography-result-templates></angiography-result-templates>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {onMounted, ref, watch} from "vue";
import {getCaseDetails} from "@/utils/api";
import {
  testResultAttributeDataStore,
  followUpResultAttributeDataStore,
  angiographyResultAttributeDataStore,
  medicalHistoryResultAttributeDataStore,
  echocardiographyResultAttributeDataStore,

} from "@/store/resultFormStore";

import TestResultTemplates from "@/components/ResultFormTemplates/TestResultTemplates.vue";
import MedicalHistoryResultTemplates from "@/components/ResultFormTemplates/MedicalHistoryResultTemplates.vue";
import FollowUpResultTemplates from "@/components/ResultFormTemplates/FollowUpResultTemplates.vue";
import EchocardiographyResultTemplates from "@/components/ResultFormTemplates/EchocardiographyResultTemplates.vue";
import AngiographyResultTemplates from "@/components/ResultFormTemplates/AngiographyResultTemplates.vue";
import { useWindowHeightWatcher } from "@/utils/windowHeightWatcher";
export default {
  name: "ResultFormTabs",
  components: {
    TestResultTemplates,
    MedicalHistoryResultTemplates,
    FollowUpResultTemplates,
    EchocardiographyResultTemplates,
    AngiographyResultTemplates,
  },
  props: {
    caseNumber: String,
  },
  setup(props) {
    const activeTab = ref();
    // 在 setup 方法中，获取所有存储实例
    const testResultAttribute = testResultAttributeDataStore();
    const angiographyResultAttribute = angiographyResultAttributeDataStore();
    const medicalHistoryResultAttribute = medicalHistoryResultAttributeDataStore();
    const followUpResultAttribute = followUpResultAttributeDataStore();
    const echocardiographyResultAttribute = echocardiographyResultAttributeDataStore();
    const changeTab = (tab) => {
      console.log(tab);
      // if (Object.values(formStore.formA).every(value => value === '')) {
      //   console.log('可以跳转')
      // } else {
      //   console.log('不可以跳转')
      //   // 至少有一个值为空
      // }
    };
    // 请求数据的方法


// 修改 fetchTabData 方法
    const fetchTabData = async (tabName) => {
      const url = `/basic/${tabName}`; // 根据实际情况修改 API 路径
      const response = await getCaseDetails(props.caseNumber, url);
      // 将 attribute 字符串转换为对象
      if (response.length > 0) {
        const responseObject = response[0];
        // 保存 attribute 到对应的 store
        switch (tabName) {
          case 'testResult':
            testResultAttribute.saveAttributeData(props.caseNumber, responseObject.attribute);
            break;
          case 'angiographyResult':
            angiographyResultAttribute.saveAttributeData(props.caseNumber, responseObject.attribute);
            break;
          case 'medicalHistoryResult':
            medicalHistoryResultAttribute.saveAttributeData(props.caseNumber, responseObject.attribute);
            break;
          case 'followUpResult':
            followUpResultAttribute.saveAttributeData(props.caseNumber, responseObject.attribute);
            break;
          case 'echocardiographyResult':
            echocardiographyResultAttribute.saveAttributeData(props.caseNumber, responseObject.attribute);
            break;
          default:
            console.error("无法识别的 tabName:", tabName);
        }
      } else {
        console.error("响应数据为空数组");
      }
    };
    // 监听 activeTab 变化
    watch(activeTab, (newValue) => {
      fetchTabData(newValue);
    });
    return {
      changeTab,
      activeTab,
    };


  },
}
</script>

<style scoped>
.tabs-container {
  height: 100%;
}
</style>
