<template>
  <div ref="hypertensionChart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getHypertensionStatistics } from "@/utils/api";

export default {
  name: 'HypertensionChart',
  setup() {
    const hypertensionChart = ref(null);

    onMounted(async () => {
      try {
        const response = await getHypertensionStatistics();
        const myChart = echarts.init(hypertensionChart.value);
        const option = {
          title: {
            text: '高血压统计',
            x: 'center',
            padding: [5, 5, 0, 5]
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c}'
          },
          xAxis: {
            type: 'category',
            data: ['患有高血压', '未患有高血压']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '人数',
            type: 'bar',
            data: [response.hypertension, response.noHypertension],
            itemStyle: {
              color: function(params) {
                const colors = ['#dda15e', '#283618']; // 定义的颜色数组
                return colors[params.dataIndex];
              },
              emphasis: {
                color: 'rgba(0, 0, 0, 0.5)'
              }
            },
            barWidth: '40%',
            label: {
              show: true,
              position: 'top'
            }
          }]
        };
        myChart.setOption(option);
      } catch (error) {
        console.error("Failed to fetch hypertension statistics:", error);
      }
    });

    return {
      hypertensionChart
    };
  }
};
</script>

<style scoped>
/* 根据需要，您可以在这里添加更多的样式 */
</style>
