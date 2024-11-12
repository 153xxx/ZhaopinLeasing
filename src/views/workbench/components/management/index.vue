<template>
  <div class="management">
    <div class="title">招商管理</div>
    <div class="content">
      <Select
        class="select-popup"
        defaultActiveFirstOption
        v-model:value="selectRes"
        @change="selectResChange"
      >
        <SelectOption value="0">不限</SelectOption>
        <SelectOption value="1">测试楼栋</SelectOption>
        <SelectOption value="2">东西湖创新基地</SelectOption>
      </Select>
      <div
        style="
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
        "
      >
        <div>
          <a-button type="primary">添加招商线索</a-button>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end; margin-top: 5px">
      <input type="text" placeholder="客户姓名/客户电话" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        @click="downloadTable"
      >
        <path
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
        />
      </svg>
    </div>
    <Tabs defaultActiveKey="1">
      <TabPane key="1" tab="私客">
        <Table
          border
          :dataSource="investmentManagementList"
          :rowKey="(record:DataType) => record.id"
          :columns="columns"
          id="investId"
        />
      </TabPane>
      <TabPane key="2" tab="公客">公客</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Table, Tabs, TabPane, Select, SelectOption } from 'ant-design-vue';
  import { columns } from '../data';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  import { DataType } from '/#/investment-data.d';
  import { InvestmentManagementAPI } from '/@/api/demo/investment';
  import { investmentModel } from '/@/api/demo/model/investmentModel';
  import * as XLSX from 'xlsx';

  const investmentManagementList = ref<investmentModel[]>([]);

  const getInvestmentManagement = async () => {
    const res = await InvestmentManagementAPI();
    investmentManagementList.value = res;
  };
  getInvestmentManagement();

  const selectRes = ref('不限');
  // 搜索框选择事件
  const selectResChange = (value: string) => {
    console.log(value);
    console.log(selectRes);
  };

  const downloadTable = () => {
    const table = document.querySelector('#investId'); // 替换为你的表格ID
    if (table) {
      const sheet = XLSX.utils.table_to_sheet(table); // 将表格转换成工作表对象
      const workbook = XLSX.utils.book_new(); // 创建一个新的工作簿
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1'); // 将工作表添加到工作簿

      // 生成Excel文件并下载
      XLSX.writeFile(workbook, 'table-data.xlsx'); // 'table-data.xlsx'是下载文件的名称
    } else {
      console.error('表格元素未找到');
    }
  };

  defineExpose({
    downloadTable,
  });
</script>

<style scoped>
  .title {
    margin: 5px 20px;
    width: fit-content;
    border-left: 3px solid #1890ff;
    border-radius: 3px;
    padding-left: 5px;
  }
  .select-popup {
    width: 200px;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  input[type='text'] {
    background-color: #ffebee; /* 浅粉色背景 */
    border: 1px solid #ffcdd2; /* 边框颜色 */
    color: #333; /* 文本颜色 */
    font-family: Arial, sans-serif; /* 字体 */
    padding: 8px; /* 内边距 */
    width: 200px; /* 宽度 */
    height: 30px; /* 高度 */
    text-align: left; /* 文本左对齐 */
  }

  input[type='text']::placeholder {
    color: #b39ddb; /* 占位符文本颜色 */
  }
</style>
