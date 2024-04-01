<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getAgeRangeStatistics } from "@/utils/api";

export default {
  name: 'AgeChart',
  setup() {
    const chart = ref(null);

    onMounted(async () => {
      try {
        const response = await getAgeRangeStatistics();
        const myChart = echarts.init(chart.value);
        const option = {
          title: {
            text: '年龄段统计',
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
            data: ["青年", "老老年", "老年", "中年"],
            textStyle: {
              fontSize: 10
            },
            itemGap: 5
          },
          series: [
            {
              name: '年龄段',
              type: 'pie',
              radius: ['30%', '55%'],
              center: ['50%', '60%'],
              data: [
                { value: response["青年"], name: '青年' },
                { value: response["老老年"], name: '老老年' },
                { value: response["老年"], name: '老年' },
                { value: response["中年"], name: '中年' }
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
        console.error("Failed to fetch age range statistics:", error);
      }
    });

    return {
      chart
    };
  }
};
</script>

<style scoped>
/* 如果需要的话，你可以在这里添加样式 */
</style>
