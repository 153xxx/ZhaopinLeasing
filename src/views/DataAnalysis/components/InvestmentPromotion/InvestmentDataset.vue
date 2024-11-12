<template>
  <Layout>
    <Layout-content style="padding: 20px">
      <div>
        <!-- 切换按钮 -->
        <Button @click="currentView = 'byProject'">招商数据统计</Button>
        <Button @click="currentView = 'byRoom'">自持出租率</Button>

        <!-- 招商数据统计表格 -->
        <Table
          v-if="currentView === 'byProject'"
          :dataSource="tableDataByProject"
          :pagination="paginationByProject"
          rowKey="id"
          :scroll="{ x: 1500 }"
        >
          <Table-column title="序号" dataIndex="id" key="id" width="80" />
          <Table-column title="项目名称" dataIndex="name" key="name" width="150" />
          <Table-column title="年度任务" dataIndex="annualTask" key="annualTask" width="120" />
          <Table-column
            title="年度完成情况/占比"
            dataIndex="annualCompletion"
            key="annualCompletion"
            width="150"
          />
          <Table-column
            title="一季度目标"
            dataIndex="firstQuarterGoal"
            key="firstQuarterGoal"
            width="120"
          />
          <Table-column
            title="一季度完成情况/占比"
            dataIndex="firstQuarterCompletion"
            key="firstQuarterCompletion"
            width="150"
          />
          <Table-column
            title="二季度目标"
            dataIndex="secondQuarterGoal"
            key="secondQuarterGoal"
            width="120"
          />
          <Table-column
            title="二季度完成情况/占比"
            dataIndex="secondQuarterCompletion"
            key="secondQuarterCompletion"
            width="150"
          />
          <Table-column
            title="三季度目标"
            dataIndex="thirdQuarterGoal"
            key="thirdQuarterGoal"
            width="120"
          />
          <Table-column
            title="三季度完成情况/占比"
            dataIndex="thirdQuarterCompletion"
            key="thirdQuarterCompletion"
            width="150"
          />
          <Table-column
            title="四季度目标"
            dataIndex="fourthQuarterGoal"
            key="fourthQuarterGoal"
            width="120"
          />
        </Table>

        <!-- 自持出租率表格 -->
        <Table
          v-if="currentView === 'byRoom'"
          :dataSource="tableDataByRoom"
          :pagination="paginationByRoom"
          rowKey="id"
          :scroll="{ x: 1500 }"
        >
          <Table-column title="序号" dataIndex="id" key="id" width="80" />
          <Table-column title="项目名称" dataIndex="name" key="name" width="150" />
          <Table-column
            title="可租面积 (㎡)"
            dataIndex="rentableArea"
            key="rentableArea"
            width="120"
          />
          <Table-column
            title="出租率目标 (%)"
            dataIndex="targetOccupancyRate"
            key="targetOccupancyRate"
            width="150"
          />
          <Table-column
            title="出租面积目标 (㎡)"
            dataIndex="targetLeasableArea"
            key="targetLeasableArea"
            width="150"
          />
          <Table-column
            title="累计已出租面积 (㎡)"
            dataIndex="leasedArea"
            key="leasedArea"
            width="150"
          />
          <Table-column
            title="出租率 (%)"
            dataIndex="occupancyRate"
            key="occupancyRate"
            width="120"
          />
          <Table-column
            title="比较上月净增面积 (㎡)"
            dataIndex="increaseFromLastMonth"
            key="increaseFromLastMonth"
            width="180"
          />
          <Table-column
            title="出租面积缺口 (㎡)"
            dataIndex="areaShortage"
            key="areaShortage"
            width="120"
          />
        </Table>
      </div>
    </Layout-content>
  </Layout>
</template>

<script setup>
  import { ref } from 'vue';
  import { Table, Button, Layout } from 'ant-design-vue';

  const currentView = ref('byProject'); // 当前展示的视图

  // 生成随机数据的函数
  function generateRandomData(count) {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `项目${i}`,
        rentableArea: Math.floor(Math.random() * 100000), // 随机生成可租面积
        targetOccupancyRate: (Math.random() * 100).toFixed(2) + '%', // 随机生成出租率目标
        targetLeasableArea: Math.floor(Math.random() * 10000), // 随机生成出租面积目标
        leasedArea: Math.floor(Math.random() * 10000), // 随机生成累计已出租面积
        occupancyRate: (Math.random() * 100).toFixed(2) + '%', // 随机生成出租率
        increaseFromLastMonth: Math.floor(Math.random() * 1000), // 随机生成比较上月净增面积
        areaShortage: Math.floor(Math.random() * 1000), // 随机生成出租面积缺口
        annualTask: Math.floor(Math.random() * 100000), // 随机生成年度任务
        annualCompletion: (Math.random() * 10000).toFixed(2), // 随机生成年度完成情况
        firstQuarterGoal: Math.floor(Math.random() * 10000),
        firstQuarterCompletion: (Math.random() * 1000).toFixed(2),
        secondQuarterGoal: Math.floor(Math.random() * 10000),
        secondQuarterCompletion: '-',
        thirdQuarterGoal: Math.floor(Math.random() * 10000),
        thirdQuarterCompletion: '-',
        fourthQuarterGoal: Math.floor(Math.random() * 10000),
      });
    }
    return data;
  }

  const tableDataByProject = ref(generateRandomData(20)); // 生成20条随机数据
  const tableDataByRoom = ref(generateRandomData(20)); // 生成20条随机数据

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
</script>

<style>
  /* 添加一些基本样式 */
</style>
