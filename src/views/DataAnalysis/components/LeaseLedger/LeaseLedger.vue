<template>
  <div class="LeaseLedger">
    <div style="width: 100%; height: 100%; margin-top: 5vw; display: flex; justify-content: center">
      <div ref="pieChart" style="width: 25vw; height: 25vw"></div>
    </div>
    <div class="LeaseLedgertitle-icon-container">
      <div class="font-light text">租赁台账</div>
      <div style="font-size: 1vw; color: gainsboro">暂时资产项目的周期租赁详情</div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { PieChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([PieChart, CanvasRenderer]);

  const pieChart = ref(null);

  // ECharts 配置项
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 484, name: 'One', itemStyle: { color: '#6395f9' } },
          { value: 580, name: 'Two', itemStyle: { color: '#62daab' } },
          { value: 735, name: 'Three', itemStyle: { color: '#657798' } },
          { value: 1048, name: 'Four', itemStyle: { color: '#f6c022' } },
        ],
      },
    ],
  };

  onMounted(() => {
    const chart = echarts.init(pieChart.value);
    chart.setOption(option);
    useEventListener(window, 'resize', chart.resize);
  });
</script>

<style>
  * {
    padding: 0;
  }
  .LeaseLedger {
    padding: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .LeaseLedgertitle-icon-container {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 2vw;
    font-weight: bold;
  }

  .chart-container {
    width: 100%;
    height: 500px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
</style>
