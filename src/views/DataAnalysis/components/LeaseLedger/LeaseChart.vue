<template>
  <div>
    <Row :gutter="[0, 20]">
      <Col :span="12">
        <div ref="pieChart" class="chart-container"></div>
      </Col>
      <Col :span="24">
        <div ref="lineChart" class="chart-container"></div>
      </Col>
    </Row>
  </div>
</template>

<script setup>
  import { Col, Row } from 'ant-design-vue';
  import { onMounted, ref, watch } from 'vue';
  import * as echarts from 'echarts/core';
  import { PieChart, LineChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([PieChart, LineChart, CanvasRenderer]);

  const pieChart = ref(null);
  const lineChart = ref(null);

  // 饼图配置
  const pieOption = {
    title: {
      text: '项目各自出租率对比',
      left: 'left',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 0.35, name: '项目1', itemStyle: { color: '#009dff' } },
          { value: 0.5, name: '项目2', itemStyle: { color: '#22e4ff' } },
          { value: 0.3, name: '项目3', itemStyle: { color: '#ffc73b' } },
          { value: 0.45, name: '项目4', itemStyle: { color: '#fc0101' } },
          { value: 0.6, name: '项目5', itemStyle: { color: '#ff9486' } },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // 折线图配置
  const lineOption = {
    title: {
      text: '选择的周期租赁情况',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['新签', '退租', '续签'],
      bottom: 'bottom',
    },
    grid: {
      left: '3%',
      right: '4%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '',
        '2023.03.01',
        '2023.03.02',
        '2023.03.03',
        '2023.03.04',
        '2023.03.05',
        '2023.03.06',
        '2023.03.07',
        '2023.03.08',
        '2023.03.09',
        '2023.03.10',
      ],
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 120,
      interval: 20,
    },
    series: [
      {
        name: '新签',
        type: 'line',
        data: [10, 20, 30, 40, 50, 60, 60, 60, 60, 60, 60, 60],
        lineStyle: {
          color: '#009dff',
        },
      },
      {
        name: '退租',
        type: 'line',
        data: [20, 25, 50, 45, 100, 100, 100, 100, 100, 100, 100],
        lineStyle: {
          color: '#22ff59',
        },
      },
      {
        name: '续签',
        type: 'line',
        data: [5, 5, 5, 10, 20, 30, 30, 30, 30, 30, 30, 40],
        lineStyle: {
          color: '#ffe2cd',
        },
      },
    ],
  };
  onMounted(() => {
    const pieInstance = echarts.init(pieChart.value);
    pieInstance.setOption(pieOption);
    useEventListener(window, 'resize', pieInstance.resize);

    const lineInstance = echarts.init(lineChart.value);
    lineInstance.setOption(lineOption);
    useEventListener(window, 'resize', lineInstance.resize);
  });
  watch(
    () => {
      // 监听数据变化
    },
    (newValue) => {
      chart.setOption({
        // 更新的配置
        series: newValue,
      });
    },
  );
</script>

<style>
  * {
    padding: 0;
  }

  .chart-container {
    width: 100%; /* 使图表填满列 */
    height: 30vw; /* 根据需要调整高度 */
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }
</style>
