<template>
  <div>
    <div>
      <el-select v-model="whichSearch" class="ml-3 mt-4" style="width: 240px">
        <el-option label="全部" value="全部" />
        <el-option label="空置" value="空置" />
        <el-option label="已租" value="已租" />
        <el-option label="配置" value="配置" />
      </el-select>
      <div class="flex absolute left-230 top-4 justify-between"
        ><el-button @click="dialogTableVisible = true" type="primary" class="mr-3">
          资产录入</el-button
        >
        <el-dialog v-model="dialogTableVisible" width="1000">
          <template #header> <div class="text-cyan-600 text-lg">资产录入</div></template>
          <AssetEntry />
        </el-dialog>
        <el-button type="primary" :icon="Edit" circle plain
      /></div>
    </div>
    <div style="margin-top: 20px" class="relative">
      <el-tabs v-model="whichSearch" class="demo-tabs">
        <el-tab-pane label="全部()" name="全部"><WhichSearch /></el-tab-pane>
        <el-tab-pane label="空置()" name="空置"><WhichSearch /></el-tab-pane>
        <el-tab-pane label="已租()" name="已租"><WhichSearch /></el-tab-pane>
        <el-tab-pane label="配置()" name="配置"><WhichSearch /></el-tab-pane>
      </el-tabs>
      <div class="absolute top-1 left-70 border-r-2 px-2 border-black-700">
        <el-checkbox v-model="filter">有预定()</el-checkbox>
        <el-checkbox v-model="filter2">有锁房()</el-checkbox>
      </div>
      <div class="absolute top-2 left-120">
        <buttob class="border-0 bg-transparent">关闭()</buttob>
      </div>
      <div class="absolute top-1 left-135">
        <el-button type="primary" plain
          >出租率: 80%
          <el-tooltip placement="top">
            <template #content>
              合租:83.33%=5间(已租)/6间(空置)<br />整租:45.71%=565件(已租)/1236间<br />出租率:(45.77%=2套*83.33%+1236套*45.71%)/(2套+1236套)
            </template>
            <el-icon><InfoFilled /></el-icon>
          </el-tooltip>
        </el-button>
      </div>
      <div class="absolute top-1 left-180">
        <el-input v-model="search" style="width: 240px" placeholder="项目名称/房间号/租客" />
        <el-tooltip placement="top">
          <template #content>
            <div>项目管理</div>
            <br />
            <div>导出</div>
          </template>
          <el-icon><More /></el-icon>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import AssetEntry from '/@/components/AssetManage/src/AssetEntry/AssetEntry.vue';
  import WhichSearch from '/@/components/AssetManage/src/WhichSearch.vue';
  import { ref } from 'vue';
  import { Edit, InfoFilled, More } from '@element-plus/icons-vue';

  // 多选框搜索信息
  const whichSearch = ref('全部');

  // 储存筛选条件
  const filter = ref(false);
  const filter2 = ref(false);

  // 储存搜索信息
  const search = ref('');

  // 弹出框显影
  const dialogTableVisible = ref(false);
</script>

<style scoped></style>
