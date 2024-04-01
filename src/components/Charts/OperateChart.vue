<template>
  <div ref="operateChart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getOperateStatistics } from "@/utils/api";

export default {
  name: 'OperateChart',
  setup() {
    const operateChart = ref(null);

    onMounted(async () => {
      try {
        const response = await getOperateStatistics();
        const myChart = echarts.init(operateChart.value);
        const option = {
          title: {
            text: '手术人数',
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
            data: ["手术", "未手术"],
            textStyle: {
              fontSize: 10
            },
            itemGap: 5
          },
          series: [
            {
              name: '手术',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],

              data: [
                { value: response.operate, name: '手术', itemStyle: { color: '#fb8500' } },
                { value: response.noOperate, name: '未手术',itemStyle: { color: '#219ebc' } }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
              }
            }
          ]
        };
        myChart.setOption(option);
      } catch (error) {
        console.error("Failed to fetch operate statistics:", error);
      }
    });

    return {
      operateChart
    };
  }
};
</script>

<style scoped>
/* 根据需要，您可以在这里添加更多的样式 */
</style>
