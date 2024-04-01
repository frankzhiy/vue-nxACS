<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <SexChart/>
    </el-col>
    <el-col :span="8">
      <AgeChart/>
    </el-col>
    <el-col :span="8">
      <TimeChart/>
    </el-col>
    <el-col :span="8">
      <BMIChart/>
    </el-col>
    <el-col :span="8">
      <DiagnosisChart/>
    </el-col>
    <el-col :span="8">
      <OperateChart/>
    </el-col>
    <el-col :span="8">
      <SmokeChart/>
    </el-col>
    <el-col :span="8">
      <DiabetesChart/>
    </el-col>
    <el-col :span="8">
      <HypertensionChart/>
    </el-col>
  </el-row>
</template>

<script>
import SexChart from "@/components/Charts/SexChart.vue";
import AgeChart from "@/components/Charts/AgeChart.vue";
import BMIChart from "@/components/Charts/BmiChart.vue";
import TimeChart from "@/components/Charts/TimeChart.vue";
import DiagnosisChart from "@/components/Charts/DiagnosisChart.vue";
import OperateChart from "@/components/Charts/OperateChart.vue";
import SmokeChart from "@/components/Charts/SmokeChart.vue";
import DiabetesChart from "@/components/Charts/DiabetesChart.vue";
import HypertensionChart from "@/components/Charts/HypertensionChart.vue";

export default {
  components: {
    HypertensionChart,
    DiabetesChart,
    SmokeChart,
    OperateChart,
    DiagnosisChart,
    TimeChart,
    BMIChart,
    AgeChart,
    SexChart,
  }
}
</script>
