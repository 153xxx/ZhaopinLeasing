<template>
  <div>
    <Row :gutter="[70, 20]">
      <Col :span="10">
        <div ref="pieChart" class="chart-container"></div>
      </Col>
      <Col :span="24">
        <div ref="barChart" class="chart-container"></div>
      </Col>
    </Row>
  </div>
</template>

<script setup>
  import { Col, Row } from 'ant-design-vue';
  import { onMounted, ref, watch } from 'vue';
  import * as echarts from 'echarts/core';
  import { PieChart, BarChart } from 'echarts/charts'; // 导入 BarChart
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([PieChart, BarChart, CanvasRenderer]);

  const pieChart = ref(null);
  const barChart = ref(null); // 用于柱状图的引用

  // 第一个饼图配置
  const pieOption = {
    title: {
      text: '项目招商租赁面积完成情况',
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
          { value: 100000, name: '项目1', itemStyle: { color: '#009dff' } },
          { value: 150000, name: '项目2', itemStyle: { color: '#22e4ff' } },
          { value: 200000, name: '项目3', itemStyle: { color: '#ffc73b' } },
          { value: 25000, name: '项目4', itemStyle: { color: '#fc0101' } },
          { value: 30000, name: '项目5', itemStyle: { color: '#ff9486' } },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          normal: {
            formatter: '{c}',
          },
        },
      },
    ],
  };

  // 柱状图配置
  const barOption = {
    title: {
      text: '招商租赁面积完成情况',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', // 显示为柱状图的阴影
      },
    },
    legend: {
      data: ['招商租赁面积完成情况'],
      bottom: 'bottom',
    },
    grid: {
      left: '3%',
      right: '4%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [
        '项目1',
        '项目2',
        '项目3',
        '项目4',
        '项目5',
        '项目6',
        '项目7',
        '项目8',
        '项目9',
        '项目10',
        '项目11',
        '项目12',
        '项目13',
        '项目14',
        '项目15',
        '项目16',
        '项目17',
        '项目18',
        '项目19',
      ],
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 300000, // 根据数据的最大值调整
      interval: 50000, // 根据需要调整间隔
    },
    series: [
      {
        name: '招商租赁面积完成情况',
        type: 'bar',
        data: [
          200000, 150000, 50000, 175000, 100000, 210000, 220000, 210000, 180000, 145000, 270000,
          270000, 270000, 270000, 270000, 270000, 270000, 270000, 270000,
        ], // 每个柱状图的数值
        itemStyle: {
          color: '#9dff86', // 统一设置柱状图的颜色
        },
      },
    ],
  };
  onMounted(() => {
    const pieInstance = echarts.init(pieChart.value);
    pieInstance.setOption(pieOption);
    useEventListener(window, 'resize', pieInstance.resize);

    const barInstance = echarts.init(barChart.value);
    barInstance.setOption(barOption);
    useEventListener(window, 'resize', barInstance.resize);
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
