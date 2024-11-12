<template>
  <div class="dialog-content">
    <!-- 标题区域 -->
    <div
      style="
        color: #169ffe;
        background-color: #f2f2f2;
        height: 56px;
        line-height: 56px;
        font-size: 15px;
        padding-left: 15px;
      "
    >
      租赁台账
    </div>
    <!-- 导航栏和选择器 -->
    <div class="nav-bar-with-selectors">
      <div class="nav-bar">
        <div
          v-for="item in navItems"
          :key="item.id"
          class="nav-item"
          @click="selectContent(item.id)"
          :class="{ active: currentId === item.id }"
        >
          <i :class="item.icon"></i> {{ item.name }}
        </div>
      </div>
      <!-- 统计周期选择器 -->
      <Select
        class="selector"
        v-model="selectedPeriod"
        style="width: 120px"
        @change="handlePeriodChange"
        placeholder="本周"
      >
        <Select-option value="本周">本周</Select-option>
        <Select-option value="本月">本月</Select-option>
        <Select-option value="本年">本年</Select-option>
      </Select>
      <!-- 开始日期选择器 -->
      <DatePicker
        class="selector"
        v-model="startDate"
        style="width: 200px"
        format="YYYY-MM-DD"
        placeholder="开始日期"
        @change="handleDateChange"
      />
      <!-- 过渡箭头 -->
      <div class="arrow">→</div>
      <!-- 结束日期选择器 -->
      <DatePicker
        class="selector"
        v-model="endDate"
        style="width: 200px"
        format="YYYY-MM-DD"
        placeholder="结束日期"
        @change="handleDateChange"
      />
      <!-- 项目选择器 -->
      <Select
        class="selector"
        v-model="selectedProject"
        style="width: 120px"
        placeholder="项目1"
        @change="handleProjectChange"
      >
        <Select-option value="项目1">项目1</Select-option>
        <Select-option value="项目2">项目2</Select-option>
        <Select-option value="项目3">项目3</Select-option>
      </Select>
      <!-- 下载按钮 -->
      <Button @click="downloadExcel">下载</Button>
    </div>
    <!-- 内容显示区域 -->
    <div class="content-area">
      <!-- 默认显示id为1的内容 -->
      <div v-if="currentId === 1"><Chart /></div>
      <div v-if="currentId === 2"><Dataset ref="datasetComponent" /></div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Chart from '/@/views/DataAnalysis/components/LeaseLedger/LeaseChart.vue';
  import Dataset from '/@/views/DataAnalysis/components/LeaseLedger/LeaseDataset.vue';
  import { Select, SelectOption, DatePicker, Button } from 'ant-design-vue';

  const navItems = [
    { id: 1, name: '图表', icon: 'icon-class-1' },
    { id: 2, name: '数据', icon: 'icon-class-2' },
  ];

  const currentId = ref(1);

  function selectContent(id) {
    currentId.value = id;
  }

  const selectedPeriod = ref('请选择统计周期');
  const startDate = ref(null); // 初始化开始日期选择器
  const endDate = ref(null); // 初始化结束日期选择器
  const selectedProject = ref('请选择项目');

  function handlePeriodChange(value) {
    console.log(`Selected period: ${value}`);
  }

  function handleDateChange(value, dateString) {
    console.log(`Selected date: ${dateString}`);
  }

  function handleProjectChange(value) {
    console.log(`Selected project: ${value}`);
  }

  const datasetComponent = ref(null);

  function downloadExcel() {
    if (currentId.value === 2 && datasetComponent.value) {
      datasetComponent.value.downloadExcel(startDate.value, endDate.value, selectedProject.value);
    }
  }
</script>

<style scoped>
  .dialog-content {
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }

  /* 标题区域样式 */
  .dialog-content > div:first-child {
    color: #169ffe;
    background-color: #f2f2f2;
    height: 56px;
    line-height: 56px;
    font-size: 15px;
    padding-left: 15px;
  }

  .nav-bar-with-selectors {
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: #f2f2f2;
  }

  .nav-bar {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .nav-item {
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid transparent;
  }

  .nav-item:hover,
  .nav-item.active {
    border-bottom: #169ffe 2px solid;
  }

  .selector {
    margin-left: 10px; /* 为选择器添加间隔 */
  }

  .arrow {
    margin: 0 10px;
    font-size: 16px;
  }

  .content-area {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
  }
</style>
