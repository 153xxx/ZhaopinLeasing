<template>
  <div style="background-color: rgb(25, 137, 250); height: 300px; padding: 20px">
    <Row :gutter="16">
      <Col :span="24">
        <Card :bordered="false" style="border-radius: 10px">
          <div>
            <div class="title">巡房记录</div>
            <div class="topselect">
              <div>
                <Select
                  class="select-popup"
                  defaultActiveFirstOption
                  v-model:value="selectRes"
                  @change="selectResChange"
                >
                  <SelectOption value="0">不限</SelectOption>
                  <SelectOption value="1">测试楼栋</SelectOption>
                  <SelectOption value="2">东西湖新创基地</SelectOption>
                </Select>
              </div>
              <div
                style="
                  padding-left: 300px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <div
                  style="
                    background-color: rgb(225, 225, 225);
                    width: 97px;
                    height: 32px;
                    padding-top: 5px;
                    padding-left: 8px;
                  "
                  >指定统计周期</div
                >
                <div style="width: 225px">
                  <Range-picker v-model:value="value1" />
                </div>
              </div>
              <div style="display: flex">
                <div
                  style="
                    background-color: rgb(225, 225, 225);
                    width: 100px;
                    height: 32px;
                    padding-top: 5px;
                    padding-left: 8px;
                  "
                  >城市</div
                >
                <div>
                  <Cascader v-model:value="value2" :options="options" placeholder="请选择" />
                </div>
              </div>
              <div style="display: flex">
                <div
                  style="
                    background-color: rgb(225, 225, 225);
                    width: 60px;
                    height: 32px;
                    padding-top: 5px;
                    padding-left: 8px;
                  "
                  >维护人</div
                >
                <div>
                  <Select
                    v-model:value="value3"
                    style="width: 95px"
                    :options="options2"
                    placeholder="请选择"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style="padding-top: 10px">
            <Row :gutter="[10, 10]">
              <Col :span="24">
                <Card style="border-radius: 10px; background-color: rgb(163, 163, 163)">
                  <Row :gutter="[10, 10]">
                    <Col :span="12">
                      <Card style="border-radius: 10px" title="巡检通过率/异常率">
                        <PieChartComponent :chartData="chartOptions" />
                      </Card>
                    </Col>
                    <Col :span="12">
                      <Card style="border-radius: 10px" title="巡检通过率/异常率" />
                    </Col>
                  </Row>
                  <Row :gutter="[10, 10]">
                    <Col :span="24">
                      <Card style="border-radius: 10px" title="周期内巡检通过率/异常率" />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Select, SelectOption, Row, Col, Card, RangePicker, Cascader } from 'ant-design-vue';
  import { InvestmentManagementAPI } from '/@/api/demo/investment';
  import { investmentModel } from '/@/api/demo/model/investmentModel';

  const value1 = ref();
  const investmentManagementList = ref<investmentModel[]>([]);
  const getInvestmentManagement = async () => {
    const res = await InvestmentManagementAPI();
    investmentManagementList.value = res;
  };
  getInvestmentManagement();

  const selectRes = ref('东西湖新创基地');
  // 搜索框选择事件
  const selectResChange = (value: string) => {
    console.log(value);
    console.log(selectRes);
  };
  const value2 = ref();
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const value3 = ref();
  const options2 = [
    {
      value: '李先生',
      label: '李先生',
    },
    {
      value: '王女士',
      label: '王女士',
    },
  ];

  import PieChartComponent from './PieChartComponent.vue'; // 假设PieChartComponent在同一个目录下

  const chartOptions = ref({
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '通过率',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 5.36, name: '隐患率' },
          { value: 94.64, name: '通过率' },
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
  });
</script>

<style scoped>
  .topinput {
    width: 250px;
    height: 31px;
    border: 1px solid #d9d9d9;
  }
  .topselect {
    display: flex;
    border-radius: 4.5px;
    font-size: 14px;
    font-family: 'Microsoft YaHei', 微软雅黑;
    text-align: left;
    color: rgb(51, 51, 51);
    opacity: 1;
    width: 252px;
    height: 30px;
  }
  .title {
    margin: 5px;
    width: fit-content;
    border-left: 3px solid #1890ff;
    border-radius: 3px;
    padding-left: 5px;
  }
  .select-popup {
    width: 200px;
  }
</style>
