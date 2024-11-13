<script setup lang="ts">
  import { ref } from 'vue';
  import { getWorkbenchData } from '/@/api/workbench/index';

  const pendingApprovals = ref(0);
  const initiated = ref(0);
  const copied = ref(0);
  const roomTogether = ref(0);

  getWorkbenchData()
    .then((res) => {
      pendingApprovals.value = res.AuditManagement.pending;
      initiated.value = res.AuditManagement.Initiated;
      copied.value = res.AuditManagement.Copied;
      roomTogether.value = res.contractManagement.roomTogether;
    })
    .catch((err) => {
      console.log(err);
    });
</script>
<template>
  <div class="workbenchTopRight">
    <div class="workbenchTopRight-title">审批管理</div>
    <div class="workbenchTopRight-content">
      <div class="content-id">
        <div class="content-num">{{ pendingApprovals }}</div>
        <div>待我审批</div>
      </div>
      <div class="content-id">
        <div class="content-num">{{ initiated }}</div>
        <div>我发起的</div>
      </div>
      <div class="content-id">
        <div class="content-num">{{ copied }}</div>
        <div>抄送我的</div>
      </div>
    </div>
  </div>
</template>
<style>
  .workbenchTopRight-content {
    display: flex;
    margin-top: 30px;
  }
  .content-id {
    margin: 10px;
  }
  .content-num {
    display: flex;
    justify-content: center;
  }
  .workbenchTopRight {
    width: 100%;
    height: 150px;
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;
  }
  .workbenchTopRight-title {
    font-size: 1.3vw;
    font-weight: 700;
  }
</style>
