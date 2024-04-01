<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getBMIStats } from "@/utils/api";

export default {
  name: 'BMIChart',
  setup() {
    const chart = ref(null);

    onMounted(async () => {
      try {
        const response = await getBMIStats();
        const myChart = echarts.init(chart.value);
        const option = {
          title: {
            text: 'BMI 统计',
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
            data: ["肥胖", "消瘦", "正常", "超重"],
            textStyle: {
              fontSize: 10
            },
            itemGap: 5
          },
          series: [
            {
              name: 'BMI',
              type: 'pie',
              radius: ['30%', '55%'],
              center: ['50%', '60%'],

              data: [
                { value: response["肥胖"], name: '肥胖' },
                { value: response["消瘦"], name: '消瘦' },
                { value: response["正常"], name: '正常' },
                { value: response["超重"], name: '超重' }
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
        console.error("Failed to fetch BMI statistics:", error);
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
