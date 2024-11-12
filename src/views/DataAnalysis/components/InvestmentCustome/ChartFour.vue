<template>
  <div>
    <div>
      <Row :gutter="[100, 50]">
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>行业成交客户占比</div>
              <div>
                <Select
                  v-model="selectedCustomer"
                  class="selector"
                  style="width: 120px"
                  @change="handleCustomerChange"
                  placeholder="选择行业"
                >
                  <Select-option value="行业1">行业1</Select-option>
                  <Select-option value="行业2">行业2</Select-option>
                </Select>
              </div>
            </div>
          </div>
          <div ref="pieChart" class="chart-container"></div>
        </Col>
        <Col :span="12" style="background: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)">
          <div style="margin-top: 1vw">
            <div style="display: flex; justify-content: space-between">
              <div>渠道大类成交客户占比</div>
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
          <div ref="pieChart2" class="chart-container"></div>
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
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  echarts.use([PieChart, CanvasRenderer]);

  const pieChart = ref(null);
  const pieChart2 = ref(null);

  const pieOption1 = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',
    },
    series: [
      {
        name: '行业成交客户',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 35, name: '行业1' },
          { value: 57, name: '行业2' },
          { value: 44, name: '行业3' },
          { value: 36, name: '行业4' },
          { value: 29, name: '行业5' },
        ],
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: 'transparent',
        },
        label: {
          normal: {
            formatter: '{c}',
          },
        },
      },
    ],
  };

  const pieOption2 = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',
    },
    series: [
      {
        name: '渠道大类成交客户',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 35, name: '渠道1' },
          { value: 57, name: '渠道2' },
          { value: 44, name: '渠道3' },
          { value: 36, name: '渠道4' },
          { value: 29, name: '渠道5' },
        ],
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: 'transparent',
        },
        label: {
          normal: {
            formatter: '{c}',
          },
        },
      },
    ],
  };

  onMounted(() => {
    const pieInstance1 = echarts.init(pieChart.value);
    pieInstance1.setOption(pieOption1);
    useEventListener(window, 'resize', pieInstance1.resize);

    const pieInstance2 = echarts.init(pieChart2.value);
    pieInstance2.setOption(pieOption2); // 使用不同的配置
    useEventListener(window, 'resize', pieInstance2.resize);
  });

  const selectedCustomer = ref('新增客户');
  const selectedChannel = ref('渠道1');

  function handleChannelChange(value) {
    selectedChannel.value = value; // 更新selectedChannel的值
    console.log(`Selected channel: ${value}`);
    // 这里可以添加更新图表的代码
  }

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
