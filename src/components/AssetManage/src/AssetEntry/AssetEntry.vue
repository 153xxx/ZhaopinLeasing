<template>
  <div>
    <el-steps :active="active" align-center>
      <el-step title="项目信息" />
      <el-step title="配置楼栋" />
      <el-step title="配置房间" />
      <el-step title="推广描述" />
    </el-steps>
    <ProjectManage v-if="active == 1" />
    <WhichFloor v-if="active == 2" />
    <WhichRoom v-if="active == 3" />
    <Promotion v-if="active == 4" />
    <div class="flex">
      <el-button :type="stepStyle()" @click="whichPage" class="mb-15 mt-10 ml-140" size="large">{{
        whichStep[active - 1]
      }}</el-button>
      <el-button
        :type="!stepStyle()"
        @click="whichPage"
        class="mb-15 mt-10 ml-160"
        size="large"
        v-if="active != 1 && active != 4"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ProjectManage from './ProjectManage.vue';
  import WhichFloor from './WhichFloor.vue';
  import WhichRoom from './WhichRoom.vue';
  import Promotion from './Promotion.vue';

  const active = ref(1);

  const whichStep = ref([
    '保存并去配置分期信息',
    '保存并去配置房间信息',
    '保存并去完善推广信息',
    '保存',
  ]);

  const whichPage = () => {
    if (active.value === 4) {
      active.value = 1;
    } else {
      active.value += 1;
    }
  };

  const stepStyle = () => {
    return active.value != 1 ? 'default' : 'primary';
  };
</script>

<style scoped></style>
