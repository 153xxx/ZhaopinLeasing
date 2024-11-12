<template>
  <Layout>
    <Layout-content style="padding: 20px">
      <div>
        <!-- 切换按钮 -->
        <Button @click="switchView('newCustomersByProject')">项目新增客户</Button>
        <Button @click="switchView('customerSourceChannels')">客户来源渠道</Button>
        <Button @click="switchView('customerIntentionLevels')">客户意向级别</Button>
        <Button @click="switchView('industryDealCustomers')">行业成交客户数</Button>
        <Button @click="switchView('channelDealCustomers')">渠道成交客户数</Button>
        <Button @click="switchView('customerDealCycle')">客户成交周期</Button>
        <Button @click="switchView('newCustomersByChannel')">项目新增客户渠道</Button>

        <!-- 表格容器 -->
        <div v-if="currentView === 'newCustomersByProject'">
          <!-- 第一个表格 -->
          <Table :dataSource="tableData1" :columns="columns1" rowKey="key" bordered>
            <template #footer>
              <span
                >新增客户: {{ totalNewCustomers1 }}人, 来访客户:
                {{ totalVisitedCustomers1 }}人</span
              >
            </template>
          </Table>
        </div>

        <div v-if="currentView === 'customerSourceChannels'">
          <!-- 第二个表格 -->
          <Table :dataSource="tableData1" :columns="columns1" rowKey="key" bordered>
            <template #footer>
              <span
                >新增客户: {{ totalNewCustomers1 }}人, 来访客户:
                {{ totalVisitedCustomers1 }}人</span
              >
            </template>
          </Table>
        </div>

        <div v-if="currentView === 'customerIntentionLevels'">
          <!-- 第三个表格 -->
          <Table :dataSource="tableData3" :columns="columns3" rowKey="key" bordered>
            <template #footer> </template>
          </Table>
        </div>
      </div>
    </Layout-content>
  </Layout>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { Table, Layout, Button } from 'ant-design-vue';

  const currentView = ref('newCustomersByProject');

  // 切换视图的函数
  const switchView = (view) => {
    currentView.value = view;
  };

  // 第一个表格数据
  const tableData1 = ref(generateRandomData1());
  const columns1 = [
    {
      title: '项目',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '新增客户',
      dataIndex: 'newCustomers',
      key: 'newCustomers',
    },
    {
      title: '来访客户',
      dataIndex: 'visitedCustomers',
      key: 'visitedCustomers',
    },
  ];

  // 第一个表格计算总和
  const totalNewCustomers1 = computed(() => {
    return tableData1.value.reduce((sum, item) => sum + item.newCustomers, 0);
  });

  const totalVisitedCustomers1 = computed(() => {
    return tableData1.value.reduce((sum, item) => sum + item.visitedCustomers, 0);
  });

  // 第三个表格数据
  const tableData3 = ref(generateRandomData3());
  const columns3 = [
    {
      title: '月份',
      dataIndex: 'month',
      key: 'month',
    },
    ...['A类', 'B类', 'C类', 'D类', 'E类'].map((category) => ({
      title: category,
      dataIndex: category,
      key: category,
    })),
  ];

  // 生成第一个表格的随机数据
  function generateRandomData1() {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        key: i + 1,
        project: '项目' + (i + 1),
        newCustomers: Math.floor(Math.random() * 100),
        visitedCustomers: Math.floor(Math.random() * 100),
      });
    }
    return data;
  }

  // 生成第三个表格的随机数据
  function generateRandomData3() {
    const months = ['1月', '2月', '3月'];
    const categories = ['A类', 'B类', 'C类', 'D类', 'E类'];
    const data = [];
    let totals = { A类: 0, B类: 0, C类: 0, D类: 0, E类: 0 };

    for (let month of months) {
      const row = {
        key: data.length + 1,
        month: month,
      };
      for (let category of categories) {
        const randomValue = Math.floor(Math.random() * 100); // 随机数值
        row[category] = randomValue;
        totals[category] += randomValue;
      }
      data.push(row);
    }

    // 添加总计行
    data.push({
      key: data.length + 1,
      month: '总计',
      ...totals,
    });

    console.log('Generated Data 3:', data); // 调试输出
    return data;
  }
</script>

<style>
  /* 您可以在这里添加自定义样式 */
</style>
