<template>
  <div ref="diabetesChart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getDiabetesStatistics } from "@/utils/api";

export default {
  name: 'DiabetesChart',
  setup() {
    const diabetesChart = ref(null);

    onMounted(async () => {
      try {
        const response = await getDiabetesStatistics();
        const myChart = echarts.init(diabetesChart.value);
        const option = {
          title: {
            text: '糖尿病统计',
            x: 'center',
            padding: [5, 5, 0, 5]
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c}'
          },
          xAxis: {
            type: 'category',
            data: ['患有糖尿病s', '未患有糖尿病']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '人数',
            type: 'bar',
            data: [response.diabetes, response.noDiabetes],
            itemStyle: {
              color: function(params) {
                const colors = ['#bc6c25', '#606c38']; // 定义的颜色数组
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
        console.error("Failed to fetch diabetes statistics:", error);
      }
    });

    return {
      diabetesChart
    };
  }
};
</script>

<style scoped>
/* 根据需要，您可以在这里添加更多的样式 */
</style>
