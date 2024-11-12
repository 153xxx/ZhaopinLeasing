<template>
  <div>
    <div>
      <Row :gutter="[100, 50]">
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>新增客户转化比（项目）</div>
            </div>
          </div>
          <div ref="lineChart" class="chart-container"></div>
        </Col>
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>新增客户转化比（渠道）</div>
              <div> </div>
            </div>
          </div>
          <div ref="barChart" class="chart-container"></div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script setup>
  import { Col, Row } from 'ant-design-vue';
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { LineChart } from 'echarts/charts';
  import { BarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  echarts.use([LineChart, BarChart, CanvasRenderer]);

  const lineChart = ref(null);
  const barChart = ref(null);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    legend: {
      data: ['成交量', '接洽量'],
      orient: 'horizontal',
      bottom: 0, // 图例组件离容器底部的距离
    },
    xAxis: {
      type: 'category',
      data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9'],
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        min: 0,
        max: 50,
        interval: 10,
        axisLabel: {
          formatter: '{value} ',
        },
      },
      {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    series: [
      {
        name: '成交量',
        type: 'bar',
        data: [10, 20, 30, 40, 25, 25, 25, 25, 25],
        itemStyle: {
          color: '#009dff', // 设置柱状图颜色
        },
      },
      {
        name: '接洽量',
        type: 'bar',
        data: [20, 25, 50, 45, 30, 40, 40, 40, 40],
        itemStyle: {
          color: '#22e4ff', // 设置柱状图颜色
        },
      },
      {
        name: '转化率',
        type: 'line',
        yAxisIndex: 1, // 使用第二个 y 轴
        data: [50, 80, 60, 88, 83, 62, 62, 62, 62],
        lineStyle: {
          color: '#fc0101', // 设置折线颜色为绿色
        },
        itemStyle: {
          color: '#fc0101', // 设置数据点颜色为绿色
        },
        label: {
          show: true,
          position: 'top', // 将标签显示在点的上方
          formatter: '{c} %', // 显示百分比
        },
      },
    ],
  };

  onMounted(() => {
    const lineInstance = echarts.init(lineChart.value);
    lineInstance.setOption(option);
    useEventListener(window, 'resize', lineInstance.resize);

    const barInstance = echarts.init(barChart.value);
    barInstance.setOption(option); // 使用相同的配置
    useEventListener(window, 'resize', barInstance.resize);
  });

  const selectedCustomer = ref('新增客户');

  function _handleCustomerChange(value) {
    selectedCustomer.value = value; // 更新selectedCustomer的值
    console.log(`Selected customer: ${value}`);
    // 在这里添加更新图表的代码
  }
</script>

<style>
  .chart-container {
    box-shadow: none !important;
  }
</style>
