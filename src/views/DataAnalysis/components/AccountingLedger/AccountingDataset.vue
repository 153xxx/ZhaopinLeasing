<template>
  <Layout>
    <Layout-content style="padding: 20px">
      <div style="overflow-x: auto">
        <Table :dataSource="tableData" :pagination="pagination" rowKey="id" :scroll="{ x: 2500 }">
          >
          <Table-column title="序号" dataIndex="id" key="id" width="80" />
          <Table-column title="项目名称" dataIndex="name" key="name" width="150" />
          <Table-column title="分期" dataIndex="phase" key="phase" width="100" />
          <Table-column
            title="楼栋号"
            dataIndex="buildingNumber"
            key="buildingNumber"
            width="100"
          />
          <Table-column title="房间号" dataIndex="roomNumber" key="roomNumber" width="100" />
          <Table-column
            title="合同甲方名称"
            dataIndex="contractPartyA"
            key="contractPartyA"
            width="150"
          />
          <Table-column
            title="合同编号"
            dataIndex="contractNumber"
            key="contractNumber"
            width="150"
          />
          <Table-column title="客户名称" dataIndex="clientName" key="clientName" width="100" />
          <Table-column title="签约日期" dataIndex="signingDate" key="signingDate" width="180" />
          <Table-column
            title="合同面积（㎡）"
            dataIndex="contractArea"
            key="contractArea"
            width="120"
          />
          <Table-column
            title="租金单价（元/㎡/月）"
            dataIndex="rentUnitPrice"
            key="rentUnitPrice"
            width="150"
          />
          <Table-column title="租期（年）" dataIndex="leaseTerm" key="leaseTerm" width="100" />
          <Table-column
            title="合同起始日"
            dataIndex="contractStartDate"
            key="contractStartDate"
            width="180"
          />
          <Table-column
            title="合同到期日"
            dataIndex="contractEndDate"
            key="contractEndDate"
            width="180"
          />
          <Table-column
            title="应收履约保证金金额（元）"
            dataIndex="duePerformanceBond"
            key="duePerformanceBond"
            width="180"
          />
          <Table-column
            title="已收履约保证金金额（元）"
            dataIndex="receivedPerformanceBond"
            key="receivedPerformanceBond"
            width="180"
          />
          <Table-column
            title="已收履约保证金时间"
            dataIndex="receivedPerformanceBondDate"
            key="receivedPerformanceBondDate"
            width="180"
          />
          <Table-column
            title="装修免租期（天）"
            dataIndex="freeRentPeriod"
            key="freeRentPeriod"
            width="120"
          />
          <Table-column
            title="合同应收租金总额（元）"
            dataIndex="totalRentDue"
            key="totalRentDue"
            width="150"
          />
          <Table-column
            title="含税金额"
            dataIndex="taxIncludedAmount"
            key="taxIncludedAmount"
            width="120"
          />
        </Table>
      </div>
    </Layout-content>
  </Layout>
</template>

<script setup>
  import { ref } from 'vue';
  import { Table, Layout } from 'ant-design-vue';

  const generateRandomData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `项目${i}`,
        phase: `分期${i}`,
        buildingNumber: `楼栋${i}`,
        roomNumber: `房间${i}`,
        contractPartyA: `甲方${i}`,
        contractNumber: `合同编号${i}`,
        clientName: `客户${i}`,
        signingDate: `2023-${(i % 12) + 1}-01`,
        contractArea: Math.floor(Math.random() * 1000) + '㎡',
        rentUnitPrice: (Math.random() * 100).toFixed(2),
        leaseTerm: Math.floor(Math.random() * 5) + 1,
        contractStartDate: `2023-${(i % 12) + 1}-01`,
        contractEndDate: `2026-${(i % 12) + 1}-01`,
        duePerformanceBond: Math.floor(Math.random() * 10000),
        receivedPerformanceBond: Math.floor(Math.random() * 10000),
        receivedPerformanceBondDate: `2023-${(i % 12) + 1}-15`,
        freeRentPeriod: Math.floor(Math.random() * 30),
        totalRentDue: Math.floor(Math.random() * 1000000),
        taxIncludedAmount: Math.floor(Math.random() * 1000000),
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
</script>

<style>
  /* 添加一些基本样式 */
</style>
