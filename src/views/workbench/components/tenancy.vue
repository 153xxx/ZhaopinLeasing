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
  <div class="workbenchCountRight">
    <div class="pre-tenancy-title">租前</div>
    <div class="pre-tenancy-content">
      <div class="pre-tenancy-content-top">
        <div class="pre-tenancy-word">
          <div class="pre-tenancy-num">{{ roomTogether }}</div>
          <div>待定入住</div>
        </div>
        <div class="pre-tenancy-word"
          ><div class="pre-tenancy-num">{{ roomTogether }}</div> <div>今日预定</div></div
        >
      </div>
      <div class="pre-tenancy-content-foot">
        <div class="pre-tenancy-word"
          ><div class="pre-tenancy-num">{{ roomTogether }}</div> <div>本周预定</div></div
        >
        <div class="pre-tenancy-word"
          ><div class="pre-tenancy-num">{{ roomTogether }}</div> <div>本月预定</div></div
        >
      </div>
    </div>
  </div>
</template>
<style>
  .workbenchCountRight {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 57px;
  }
  .pre-tenancy-title {
    font-size: 1.3vw;
    font-weight: 700;
    margin: 10px;
  }
  .pre-tenancy-content {
    font-size: 13px;
    margin-top: 35px;
  }
  .pre-tenancy-num {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pre-tenancy-content-top,
  .pre-tenancy-content-foot {
    display: flex;
    justify-content: space-around;
  }
</style>
