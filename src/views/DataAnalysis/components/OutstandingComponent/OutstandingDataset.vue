<template>
  <Layout>
    <Layout-content style="padding: 20px">
      <div>
        <!-- 表格 -->
        <Table :dataSource="tableData" :pagination="pagination" rowKey="id" :scroll="{ x: 2500 }">
          <Table-column title="序号" dataIndex="id" key="id" width="80" />
          <Table-column title="项目名称" dataIndex="name" key="name" width="150" />
          <Table-column title="房间号" dataIndex="roomNumber" key="roomNumber" width="100" />
          <Table-column title="客户名称" dataIndex="clientName" key="clientName" width="100" />
          <Table-column
            title="合同面积（㎡）"
            dataIndex="contractArea"
            key="contractArea"
            width="120"
          />
          <Table-column title="合同起始时间" dataIndex="startDate" key="startDate" width="180" />
          <Table-column title="合同到期日" dataIndex="endDate" key="endDate" width="180" />
          <Table-column title="押金（元）" dataIndex="deposit" key="deposit" width="100" />
          <Table-column title="应收租金（元）" dataIndex="dueRent" key="dueRent" width="120" />
          <Table-column
            title="实收租金（元）"
            dataIndex="receivedRent"
            key="receivedRent"
            width="120"
          />
          <Table-column
            title="拖欠租金（元）"
            dataIndex="outstandingRent"
            key="outstandingRent"
            width="120"
          />
          <Table-column title="逾期天数" dataIndex="overdueDays" key="overdueDays" width="100" />
          <Table-column title="借款进度" dataIndex="loanProgress" key="loanProgress" width="100" />
          <Table-column title="措施" dataIndex="measures" key="measures" width="100" />
          <Table-column title="备注" dataIndex="remarks" key="remarks" width="100" />
        </Table>
      </div>
    </Layout-content>
  </Layout>
</template>

<script setup>
  import { ref } from 'vue';
  import { Table, Layout } from 'ant-design-vue';
  import * as XLSX from 'xlsx';

  const generateRandomData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `项目${i}`,
        roomNumber: `房间${i}`,
        clientName: `客户${i}`,
        contractArea: Math.floor(Math.random() * 1000) + '㎡',
        startDate: '2023-01-01',
        endDate: '2026-12-31',
        deposit: Math.floor(Math.random() * 100000),
        dueRent: Math.floor(Math.random() * 100000),
        receivedRent: Math.floor(Math.random() * 100000),
        outstandingRent: Math.floor(Math.random() * 100000),
        overdueDays: Math.floor(Math.random() * 365),
        loanProgress: '此处三个字段为手动填写',
        measures: '此处三个字段为手动填写',
        remarks: '此处三个字段为手动填写',
      });
    }
    return data;
  };

  const tableData = ref(generateRandomData(20));
  const pagination = ref({
    total: tableData.value.length,
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条数据`,
  });

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(tableData.value);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'financial_report.xlsx';
    link.click();
  };

  defineExpose({
    downloadExcel,
  });
</script>

<style>
  /* 添加一些基本样式 */
</style>
