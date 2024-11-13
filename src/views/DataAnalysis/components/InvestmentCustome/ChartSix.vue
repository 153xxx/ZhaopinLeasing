<template>
  <div>
    <div>
      <Row :gutter="[100, 50]">
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>客户成交面积占比</div>
            </div>
          </div>
          <div ref="pieChart" class="chart-container"></div>
        </Col>
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>各项目渠道新增客户对比</div>
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
          { value: 35, name: '500m²以下', itemStyle: { color: '#009dff' } },
          { value: 0, name: '500-1000m²', itemStyle: { color: '#22e4ff' } },
          { value: 44, name: '1000-1500m²', itemStyle: { color: '#ffc37b' } },
          { value: 44, name: '1500-2000m²', itemStyle: { color: '#04e38a' } },
          { value: 44, name: '2000-3000m²', itemStyle: { color: '#9dff86' } },
          { value: 44, name: '3000m²以上', itemStyle: { color: '#fee588' } },
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
    xAxis: {
      type: 'category',
      data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [10, 20, 30, 40, 25, 25, 25, 25, 25],
        type: 'bar',
        itemStyle: {
          color: '#009dff', // 设置统一的柱子颜色
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
