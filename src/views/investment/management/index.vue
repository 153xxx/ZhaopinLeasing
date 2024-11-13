<template>
  <div class="management">
    <div class="title">概况</div>
    <div class="flex justify-between w-[90%]">
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
      <a-button class="editable-add-btn" style="margin-bottom: 8px">Add</a-button>
    </div>
    <Tabs defaultActiveKey="1">
      <TabPane key="1" tab="私客">
        <Table border :dataSource="dataSource" :rowKey="(record) => record.id" :columns="columns" />
      </TabPane>
      <TabPane key="2" tab="公客">key="2" tab="公客"</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Table, Tabs, TabPane, Select, SelectOption } from 'ant-design-vue';
  import { columns, dataSource } from '../data';

  const selectRes = ref('不限');
  // 搜索框选择事件
  const selectResChange = (value: string) => {
    console.log(value);
    console.log(selectRes);
  };
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
</style>
