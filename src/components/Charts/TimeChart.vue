<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getDuplicateAdmissionTimes } from "@/utils/api";

export default {
  name: 'TimeChart',
  setup() {
    const chart = ref(null);

    onMounted(async () => {
      try {
        const response = await getDuplicateAdmissionTimes();
        const dates = Object.keys(response).sort(); // 排序日期
        const patientCounts = dates.map(date => response[date]);

        // 计算平均值
        const average = patientCounts.reduce((acc, val) => acc + val, 0) / patientCounts.length;

        const myChart = echarts.init(chart.value);

        const option = {
          title: {
            text: '患者入院次数统计',
            x: 'center',
            padding: [5, 5, 0, 5]
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c}'
          },
          xAxis: {
            type: 'category',
            data: dates,
            boundaryGap: true,
            min: 'dataMin',
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '患者数量',
              type: 'bar',
              data: patientCounts,
              // 添加平均线
              markLine: {
                silent: true,
                data: [{
                  type: 'average',
                  name: '平均值',
                  label: {
                    formatter: '平均值\n{c}'
                  }
                }],
                lineStyle: {
                  color: 'red' // 你可以选择任何你喜欢的颜色
                }
              }
            }
          ]
        };

        myChart.setOption(option);

      } catch (error) {
        console.error("Failed to fetch admission times statistics:", error);
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
