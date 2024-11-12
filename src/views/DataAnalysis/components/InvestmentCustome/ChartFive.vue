<template>
  <div>
    <div>
      <Row :gutter="[100, 50]">
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>渠道小类成交客户占比</div>
              <div>
                <Select
                  v-model="selectedChannel"
                  class="selector"
                  style="width: 120px; margin-left: 16px"
                  @change="handleChannelChange"
                  placeholder="选择渠道"
                >
                  <Select-option value="渠道1">渠道1</Select-option>
                  <Select-option value="渠道2">渠道2</Select-option>
                  <!-- 根据需要添加更多选项 -->
                </Select>
              </div>
            </div>
          </div>
          <div ref="barChart" class="chart-container"></div>
        </Col>
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>客户成交周期占比</div>
            </div>
          </div>
          <div ref="pieChart" class="chart-container"></div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script setup>
  import { Col, Row, SelectOption, Select } from 'ant-design-vue';
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { PieChart } from 'echarts/charts';
  import { BarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  echarts.use([PieChart, BarChart, CanvasRenderer]);

  const pieChart = ref(null);
  const barChart = ref(null);

  const pieOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 35, name: '1月内', itemStyle: { color: '#009dff' } },
          { value: 57, name: '1-2月', itemStyle: { color: '#22e4ff' } },
          { value: 44, name: '2-3月', itemStyle: { color: '#ffc37b' } },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          show: true,
          formatter: '{c}',
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
        label: undefined, // 移除label配置
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
        label: undefined, // 移除label配置
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
        label: undefined, // 移除label配置
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
    const pieInstance = echarts.init(pieChart.value);
    pieInstance.setOption(pieOption);
    useEventListener(window, 'resize', pieInstance.resize);

    const barInstance = echarts.init(barChart.value);
    barInstance.setOption(barOption); // 使用不同的配置
    useEventListener(window, 'resize', barInstance.resize);
  });

  const selectedCustomer = ref('新增客户');
  const selectedChannel = ref('渠道1');

  function handleChannelChange(value) {
    selectedChannel.value = value; // 更新selectedChannel的值
    console.log(`Selected channel: ${value}`);
    // 这里可以添加更新图表的代码
  }

  function _handleCustomerChange(value) {
    selectedCustomer.value = value; // 更新selectedCustomer的值
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
