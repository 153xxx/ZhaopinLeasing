<template>
  <div>
    <div>
      <Row :gutter="[100, 50]">
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>客户来源渠道大类占比</div>
              <div>
                <Select
                  v-model="selectedCustomer"
                  class="selector"
                  style="width: 120px"
                  @change="handleCustomerChange"
                  placeholder="新增客户"
                >
                  <Select-option value="客户1">客户1</Select-option>
                  <Select-option value="客户2">客户2</Select-option>
                </Select>
              </div>
            </div>
          </div>
          <div ref="lineChart" class="chart-container"></div>
        </Col>
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>客户来源渠道小类占比</div>
              <div>
                <Select
                  v-model="selectedCustomer"
                  class="selector"
                  style="width: 120px"
                  @change="handleCustomerChange"
                  placeholder="新增客户"
                >
                  <Select-option value="客户1">客户1</Select-option>
                  <Select-option value="客户2">客户2</Select-option>
                </Select>
              </div>
            </div>
          </div>
          <div ref="barChart" class="chart-container"></div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script setup>
  import { Col, Row, SelectOption, Select } from 'ant-design-vue';
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
      // 不设置 data 属性或将其设置为空数组，图例不会显示任何文本
      data: ['客户人数'], // 或者不添加 data 属性
      orient: 'horizontal', // 图例列表的布局朝向
      bottom: 0, // 图例组件离容器底部的距离
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
          color: '#47b8ff', // 折线颜色
        },
        itemStyle: {
          color: '#478bff', // 数据点颜色
          borderWidth: 1, // 数据点边框宽度
          borderColor: '#47b8ff', // 数据点边框颜色
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
      data: ['一月新增客户', '二月新增客户', '三月新增客户'],
      orient: 'horizontal', // 设置图例为水平方向
      bottom: 0, // 将图例放置在底部
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['渠道1', '渠道2', '渠道3', '渠道4', '渠道5', '渠道6', '渠道7', '渠道8', '渠道9'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '一月新增客户',
        type: 'bar',
        barGap: 0,

        emphasis: {
          focus: 'series',
        },
        data: [10, 20, 30, 40, 50, 60, 60, 60, 60],
        itemStyle: {
          color: '#47b8ff', // 一月新增客户的颜色
        },
      },
      {
        name: '二月新增客户',
        type: 'bar',

        emphasis: {
          focus: 'series',
        },
        data: [20, 25, 50, 45, 30, 40, 40, 40, 40],
        itemStyle: {
          color: '#22e4ff', // 二月新增客户的颜色
        },
      },
      {
        name: '三月新增客户',
        type: 'bar',

        emphasis: {
          focus: 'series',
        },
        data: [20, 25, 50, 45, 30, 75, 75, 75, 75],
        itemStyle: {
          color: '#3bffd0', // 三月新增客户的颜色
        },
      },
    ],
  };

  onMounted(() => {
    const lineInstance = echarts.init(lineChart.value);
    lineInstance.setOption(lineOption);
    useEventListener(window, 'resize', lineInstance.resize);

    const barInstance = echarts.init(barChart.value);
    barInstance.setOption(barOption); // 使用不同的配置
    useEventListener(window, 'resize', barInstance.resize);
  });

  const selectedCustomer = ref('新增客户');

  function handleCustomerChange(value) {
    selectedCustomer.value = value; // 更新selectedCustomer的值
    console.log(`Selected customer: ${value}`);
    // 这里可以添加更新图表的代码
  }
</script>

<style>
  .chart-container {
    box-shadow: none !important;
  }
</style>
