<script setup lang="ts">
  import { ref } from 'vue';
  import { getWorkbenchData } from '/@/api/workbench/index';

  const pendingApprovals = ref(0);
  const initiated = ref(0);
  const copied = ref(0);
  const roomTogether = ref(0);

  getWorkbenchData()
    .then((res) => {
      pendingApprovals.value = res.AuditManagement.Pending;
      initiated.value = res.AuditManagement.Initiated;
      copied.value = res.AuditManagement.Copied;
      roomTogether.value = res.contractManagement.roomTogether;
    })
    .catch((err) => {
      console.log(err);
    });
</script>
<template>
  <div class="workbenchCountLeft">
    <div class="contract-management-title">合约管理</div>
    <div class="contract-management-content">
      <div class="contract-title">租容合间</div>
      <div class="contract-titlenum">{{ roomTogether }}(份)</div>
    </div>
    <div class="contract-management-foot">
      <div>待签字({{ roomTogether }})</div>
      <div>在租中({{ roomTogether }})</div>
      <div>即将搬出({{ roomTogether }})</div>
      <div>已到期({{ roomTogether }})</div>
    </div>
  </div>
</template>
<style>
  .contract-management-content {
    display: flex;
  }
  .contract-management-foot {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
  }
  .contract-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  .contract-titlenum {
    font-size: 24px;
    color: skyblue;
    margin-left: 15px;
    font-weight: 700;
    display: flex;
    justify-content: center;
  }
  .contract-num {
    width: 7vw;
    display: flex;
    justify-content: center;
  }

  .workbenchCountLeft {
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
  }
  .contract-management-title {
    font-size: 1.3vw;
    font-weight: 700;
    margin: 10px;
  }
</style>
