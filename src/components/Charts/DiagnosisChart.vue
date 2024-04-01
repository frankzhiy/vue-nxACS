<template>
  <div ref="diagnosisChart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getDiagnosisStatistics } from "@/utils/api";

export default {
  name: 'DiagnosisChart',
  setup() {
    const diagnosisChart = ref(null);

    onMounted(async () => {
      try {
        const response = await getDiagnosisStatistics();
        const myChart = echarts.init(diagnosisChart.value);
        const option = {
          title: {
            text: '诊断统计',
            x: 'center',
            padding: [5, 5, 0, 5]
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            right: '0%',
            bottom: '10%',
            data: ["uaDiagnosis", "nonStemDiagnosis", "stemDiagnosis", "otherDiagnosis"],
            textStyle: {
              fontSize: 10
            },
            itemGap: 5
          },
          series: [
            {
              name: '诊断',
              type: 'pie',
              radius: ['30%', '55%'],
              center: ['50%', '60%'],

              data: [
                { value: response.uaDiagnosis, name: 'UA' },
                { value: response.nonStemDiagnosis, name: 'non-STEM' },
                { value: response.stemDiagnosis, name: 'STEM' },
                { value: response.otherDiagnosis, name: '其他' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        myChart.setOption(option);
      } catch (error) {
        console.error("Failed to fetch diagnosis statistics:", error);
      }
    });

    return {
      diagnosisChart
    };
  }
};
</script>

<style scoped>
/* 根据需要，您可以在这里添加更多的样式 */
</style>
