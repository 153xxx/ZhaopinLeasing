<template>
  <div class="font-bold">项目信息</div>
  <div class="flex justify-between">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="门店电话" prop="number" :rules="{ required: 'true', tigger: 'blur' }">
        <el-input
          v-model="promotion.number"
          placeholder="请输入门店电话"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="用水" prop="water" :rules="{ required: 'true', tigger: 'blur' }">
        <el-select v-model="promotion.water" size="large" style="width: 200px">
          <el-option label="民水" value="民水" />
          <el-option label="行政用水" value="行政用水" />
          <el-option label="工业用水" value="工业用水" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="用电" prop="electricity" :rules="{ required: 'true', tigger: 'blur' }">
        <el-select v-model="promotion.electricity" size="large" style="width: 200px">
          <el-option label="民电" value="民电" />
          <el-option label="行政用电" value="行政用电" />
          <el-option label="工业用电" value="工业用电" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="供暖信息" prop="heating" :rules="{ required: 'true', tigger: 'blur' }">
        <el-select v-model="promotion.heating" size="large" style="width: 200px">
          <el-option label="自采暖" value="自采暖" />
          <el-option label="行政采暖" value="行政采暖" />
          <el-option label="工业采暖" value="工业采暖" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
  <div class="flex">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="燃气" prop="gas" :rules="{ required: 'true', tigger: 'blur' }">
        <el-select v-model="promotion.gas" size="large" style="width: 200px">
          <el-option label="有" value="有" />
          <el-option label="没有" value="没有" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="门店核验码" prop="code" :rules="{ required: 'true', tigger: 'blur' }">
        <el-input
          v-model="promotion.code"
          placeholder="请输入门店核验码"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
  </div>
  <div class="flex">
    <span class="font-bold">项目配置</span>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from '@iconify/vue';
  import { ref } from 'vue';

  const promotion = ref({
    number: '', // 门店电话
    water: '民水', // 用水
    electricity: '民电', // 用电
    heating: '自采暖', // 供暖信息
    gas: '有', // 燃气
    code: '', // 门店核验码
  });
</script>

<style scoped></style>
