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
              <div style="padding-left: 445px">
                <input class="topinput" placeholder="项目编号/项目名称/房源地址/房间号" />
              </div>
            </div>

            <div style="padding-top: 5px">
              <Tabs default-active-key="1">
                <TabPane tab="全部" key="1">
                  <div>
                    <Table :columns="columns" :data-source="dataSource" bordered>
                      <template #bodyCell="{ column, text, record }">
                        <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
                          <div>
                            <Input
                              v-if="editableData[record.key]"
                              v-model:value="editableData[record.key][column.dataIndex]"
                              style="margin: -5px 0"
                            />
                            <template v-else>
                              {{ text }}
                            </template>
                          </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'operation'">
                          <div class="editable-row-operations">
                            <span v-if="editableData[record.key]">
                              <Typography-link @click="save(record.key)">Save</Typography-link>
                              <Popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                                <a>Cancel</a>
                              </Popconfirm>
                            </span>
                            <span v-else>
                              <a @click="edit(record.key)">Edit</a>
                            </span>
                          </div>
                        </template>
                      </template>
                    </Table>
                  </div>
                </TabPane>
                <TabPane tab="正常" key="2"> 正常 (3) </TabPane>
                <TabPane tab="无效" key="3"> 无效 (1) </TabPane>
              </Tabs>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import {
    Table,
    Input,
    Popconfirm,
    Tabs,
    TabPane,
    Select,
    SelectOption,
    Row,
    Col,
    Card,
  } from 'ant-design-vue';
  import { InvestmentManagementAPI } from '/@/api/demo/investment';
  import { investmentModel } from '/@/api/demo/model/investmentModel';
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

  import { cloneDeep } from 'lodash-es';
  const columns = [
    {
      title: '序号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '巡房地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '检查项目(正常数量)',
      key: 'normal',
      dataIndex: 'normal',
    },
    {
      title: '检查项目(异常数量)',
      key: 'unusual',
      dataIndex: 'unusual',
    },
    {
      title: '检查时间',
      key: 'checktime',
      dataIndex: 'checktime',
    },
    {
      title: '检查人',
      key: 'checker',
      dataIndex: 'checker',
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
    },
  ];
  const data: {
    number: string;
    state: string;
    address: string;
    normal: string;
    unusual: string;
    checktime: string;
    checker: string;
    action: string;
  }[] = [];

  for (let i = 1; i < 100; i++) {
    data.push({
      number: i.toString(),
      state: '正常',
      address: '测试楼栋(测试数据)B1栋1单元-8101室',
      normal: '1',
      unusual: '0',
      checktime: '2023.01.10 10:43',
      checker: '刘三-13237158815',
      action: '',
    });
  }
  const dataSource = ref(data);
  const editableData = reactive({});
  const edit = (key) => {
    editableData[key] = cloneDeep(dataSource.value.filter((item) => key === item)[0]);
  };
  const save = (key) => {
    Object.assign(dataSource.value.filter((item) => key === item)[0], editableData[key]);
    delete editableData[key];
  };
  const cancel = (key) => {
    delete editableData[key];
  };
</script>

<style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
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
