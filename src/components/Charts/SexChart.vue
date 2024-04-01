<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import {getSexStatistics} from "@/utils/api";

export default {
  name: 'SexChart',
  setup() {
    const chart = ref(null);

    onMounted(async () => {
      try {
        // 获取数据
        const response = await getSexStatistics();

        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(chart.value);

        // 设置图表的配置
        const option = {
          title: {
            text: '性别统计',
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
            data: ['女性', '男性'],
            textStyle: {
              fontSize: 10
            },
            itemGap: 5
          },
          series: [
            {
              name: '性别',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: response.female, name: '女性'},
                {value: response.male, name: '男性'}
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

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

      } catch (error) {
        console.error("Failed to fetch sex statistics:", error);
      }
    });

    return {
      chart
    };
  }
};
</script>

<style scoped>

</style>
