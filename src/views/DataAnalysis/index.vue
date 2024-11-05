<template>
  <div class="bg-gradient-to-b from-blue-500 to-white w-[100%] h-[100%]" style="padding: 1vw">
    <div style="background-color: white; height: 100%; width: 100%; border-radius: 0.5vw">
      <div style="background-color: gainsboro; padding: 1vw; border-radius: 0.5vw">
        <Row :gutter="[5]">
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <AccountingLedger @click="toggleDialog" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <LeaseLedger />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <Outstanding />
          </Col>
        </Row>
        <Row :gutter="[5]" style="margin-top: 10px">
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <investmentPromotion />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <InvestmentCustome />
          </Col>
        </Row>
      </div>
    </div>
    <Modal
      :visible="isDialogOpen"
      @update:visible="toggleDialog"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContent />
    </Modal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Col, Row, Modal } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  import AccountingLedger from '/@/views/DataAnalysis/components/AccountingLedger/AccountingLedger.vue';
  import Outstanding from '/@/views/DataAnalysis/components/OutstandingComponent/OutstandingComponent.vue';
  import LeaseLedger from '/@/views/DataAnalysis/components/LeaseLedger/LeaseLedger.vue';
  import InvestmentPromotion from './components/InvestmentPromotion/InvestmentPromotion.vue';
  import InvestmentCustome from '/@/views/DataAnalysis/components/InvestmentCustome/InvestmentCustome.vue';
  import DialogContent from '/@/views/DataAnalysis/components/AccountingLedger/index.vue'; // 引入 DialogContent 组件

  const isDialogOpen = ref(false);

  const toggleDialog = () => {
    isDialogOpen.value = !isDialogOpen.value;
  };
</script>

<style></style>
