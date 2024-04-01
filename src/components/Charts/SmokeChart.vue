<template>
  <div ref="smokeChart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getSmokeStatistics } from "@/utils/api";

export default {
  name: 'SmokeChart',
  setup() {
    const smokeChart = ref(null);

    onMounted(async () => {
      try {
        const response = await getSmokeStatistics();
        const myChart = echarts.init(smokeChart.value);
        const option = {
          title: {
            text: '吸烟人数',
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
            data: ["不吸烟", "吸烟"],
            textStyle: {
              fontSize: 10
            },
            itemGap: 5
          },
          series: [
            {
              name: '吸烟史',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],

              data: [
                { value: response.noSmoke, name: '不吸烟', itemStyle: { color: '#2a9d8f' } },
                { value: response.smoke, name: '吸烟',  itemStyle: { color: '#f4a261' }  }
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
        console.error("Failed to fetch smoke statistics:", error);
      }
    });

    return {
      smokeChart
    };
  }
};
</script>

<style scoped>
/* 根据需要，您可以在这里添加更多的样式 */
</style>
