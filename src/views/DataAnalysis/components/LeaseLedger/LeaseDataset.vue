<template>
  <Layout>
    <Layout-content style="padding: 20px">
      <div>
        <!-- 切换按钮 -->
        <Button @click="currentView = 'byProject'">按项目展示</Button>
        <Button @click="currentView = 'byRoom'">按房间展示</Button>

        <!-- 按项目展示的表格 -->
        <Table
          v-if="currentView === 'byProject'"
          :dataSource="tableDataByProject"
          :pagination="paginationByProject"
          rowKey="id"
        >
          <Table-column title="项目名称" dataIndex="name" key="name" />
          <Table-column title="项目地址" dataIndex="address" key="address" />
          <Table-column title="出租率" dataIndex="occupancyRate" key="occupancyRate" />
          <Table-column title="退租率" dataIndex="vacancyRate" key="vacancyRate" />
          <Table-column title="新增签约面积" dataIndex="newContractArea" key="newContractArea" />
          <Table-column
            title="新增续租面积"
            dataIndex="renewalContractArea"
            key="renewalContractArea"
          />
          <Table-column title="新增透租面积" dataIndex="subletArea" key="subletArea" />
        </Table>

        <!-- 按房间展示的表格 -->
        <Table
          v-if="currentView === 'byRoom'"
          :dataSource="tableDataByRoom"
          :pagination="paginationByRoom"
          rowKey="id"
          :scroll="{ x: 2500 }"
        >
          <Table-column title="序号" dataIndex="id" key="id" width="80" />
          <Table-column title="项目" dataIndex="project" key="project" width="100" />
          <Table-column title="分期" dataIndex="phase" key="phase" width="80" />
          <Table-column title="楼栋" dataIndex="building" key="building" width="80" />
          <Table-column title="房号" dataIndex="roomNumber" key="roomNumber" width="100" />
          <Table-column title="实测面积（㎡）" dataIndex="area" key="area" width="100" />
          <Table-column
            title="可租面积（㎡）"
            dataIndex="rentableArea"
            key="rentableArea"
            width="120"
          />
          <Table-column
            title="已租面积（㎡）"
            dataIndex="leasedArea"
            key="leasedArea"
            width="120"
          />
          <Table-column title="房源情况" dataIndex="status" key="status" width="100" />
          <Table-column title="客户名称" dataIndex="clientName" key="clientName" width="120" />
          <Table-column title="经营品牌" dataIndex="brand" key="brand" width="120" />
          <Table-column
            title="合同面积（㎡）"
            dataIndex="contractArea"
            key="contractArea"
            width="120"
          />
          <Table-column title="合同日期" dataIndex="contractDate" key="contractDate" width="180" />
          <Table-column title="合同起始日" dataIndex="startDate" key="startDate" width="120" />
          <Table-column title="合同到期日" dataIndex="endDate" key="endDate" width="120" />
          <Table-column title="租期（年）" dataIndex="leaseTerm" key="leaseTerm" width="80" />
          <Table-column title="免租期" dataIndex="gracePeriod" key="gracePeriod" width="80" />
          <Table-column title="押几付几" dataIndex="paymentTerms" key="paymentTerms" width="100" />
          <Table-column title="履约保证金" dataIndex="deposit" key="deposit" width="120" />
          <Table-column
            title="签约单价（元/㎡）"
            dataIndex="unitPrice"
            key="unitPrice"
            width="120"
          />
          <Table-column title="招商人员" dataIndex="recruiter" key="recruiter" width="100" />
          <Table-column title="认知途径" dataIndex="source" key="source" width="100" />
          <Table-column title="所属行业" dataIndex="industry" key="industry" width="100" />
          <Table-column title="备注" dataIndex="remarks" key="remarks" width="100" />
        </Table>
      </div>
    </Layout-content>
  </Layout>
</template>

<script setup>
  import { ref } from 'vue';
  import { Table, Button, Layout } from 'ant-design-vue';
  import * as XLSX from 'xlsx';

  const currentView = ref('byProject'); // 当前展示的视图

  // 生成随机数据的函数
  function generateRandomData(count, prefix) {
    const data = [];
    for (let i = 1; i <= count; i++) {
      const randomNumber = Math.random().toFixed(2);
      data.push({
        id: i,
        name: `${prefix}项目${i}`,
        address: `湖北省武汉市xx区xxxxxx${i}`,
        occupancyRate: randomNumber + '%',
        vacancyRate: randomNumber + '%',
        newContractArea: (15000 + Math.random() * 1000).toFixed(0) + '㎡',
        renewalContractArea: (1500 + Math.random() * 100).toFixed(0) + '㎡',
        subletArea: (1500 + Math.random() * 100).toFixed(0) + '㎡',
      });
    }
    return data;
  }

  // 生成房间数据的函数
  function generateRoomData(count, projectId) {
    const data = [];
    for (let i = 1; i <= count; i++) {
      const _randomNumber = Math.random().toFixed(2);
      data.push({
        id: i,
        project: `项目${projectId}`,
        phase: '1期',
        building: 'A栋',
        roomNumber: `101`,
        area: (500 + Math.random() * 100).toFixed(0),
        rentableArea: (450 + Math.random() * 50).toFixed(0),
        leasedArea: (450 + Math.random() * 50).toFixed(0),
        status: '已租赁',
        clientName: `客户${i}`,
        brand: '客户品牌',
        contractArea: (450 + Math.random() * 50).toFixed(0),
        contractDate: '2023.01.01',
        startDate: '2023.01.01',
        endDate: '2026.12.31',
        leaseTerm: 3,
        gracePeriod: 3,
        paymentTerms: '押三付三',
        deposit: 15000,
        unitPrice: (33.33 + Math.random() * 10).toFixed(2),
        recruiter: '员工1',
        source: '渠道1',
        industry: '行业1',
        remarks: '备注信息',
      });
    }
    return data;
  }

  const tableDataByProject = ref(generateRandomData(20, ''));
  const tableDataByRoom = ref(generateRoomData(20, 1)); // 假设所有房间都属于项目1

  // 分页配置
  const paginationByProject = ref({
    total: tableDataByProject.value.length,
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条数据`,
  });

  const paginationByRoom = ref({
    total: tableDataByRoom.value.length,
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条数据`,
  });

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(dataSource.value);
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
