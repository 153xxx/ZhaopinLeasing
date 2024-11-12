<template>
  <div>
    <div>
      <Row :gutter="[100, 50]">
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>客户意向级别占比</div>
            </div>
          </div>
          <div ref="barChart" class="chart-container"></div>
        </Col>
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>科技园月度成交客户组数</div>
            </div>
          </div>
          <div ref="lineChart" class="chart-container"></div>
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

  const lineOption = {
    legend: {
      data: ['客户人数'],
      orient: 'horizontal',
      bottom: 0,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '客户人数',
        data: [10, 15, 5, 20, 40, 25, 31, 11, 18, 40, 38, 40],
        type: 'line',
        lineStyle: {
          color: '#47b8ff',
        },
        itemStyle: {
          color: '#478bff',
          borderWidth: 1,
          borderColor: '#47b8ff',
        },
      },
    ],
  };

  const barOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      bottom: 0,
      data: ['1月', '2月', '3月'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['E类', 'D类', 'C类', 'B类', 'A类'],
    },
    series: [
      {
        name: '1月',
        type: 'bar',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [10, 20, 30, 40, 50],
        itemStyle: {
          color: '#47b8ff',
        },
      },
      {
        name: '2月',
        type: 'bar',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [20, 25, 50, 45, 30],
        itemStyle: {
          color: '#22e4ff',
        },
      },
      {
        name: '3月',
        type: 'bar',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [20, 25, 50, 45, 30],
        itemStyle: {
          color: '#3bffd0',
        },
      },
    ],
  };

  onMounted(() => {
    const lineInstance = echarts.init(lineChart.value);
    lineInstance.setOption(lineOption);
    useEventListener(window, 'resize', lineInstance.resize);

    const barInstance = echarts.init(barChart.value);
    barInstance.setOption(barOption);
    useEventListener(window, 'resize', barInstance.resize);
  });

  const selectedCustomer = ref('新增客户');

  function _handleCustomerChange(value) {
    selectedCustomer.value = value;
    console.log(`Selected customer: ${value}`);
    // 这里可以添加更新图表的代码
  }
</script>

<style>
  .chart-container {
    box-shadow: none !important;
    height: 400px; /* 设置一个高度 */
  }
</style>
