<template>
  <div class="bg-gradient-to-b from-blue-500 to-white w-[100%] h-[100%]" style="padding: 1vw">
    <div style="background-color: white; height: 100%; width: 100%; border-radius: 0.5vw">
      <div style="background-color: gainsboro; padding: 1vw; border-radius: 0.5vw">
        <Row :gutter="[5]">
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <AccountingLedger @click="toggleDialogone" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <LeaseLedger @click="toggleDialogfour" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <Outstanding @click="toggleDialogfive" />
          </Col>
        </Row>
        <Row :gutter="[5]" style="margin-top: 10px">
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <investmentPromotion @click="toggleDialogthree" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <InvestmentCustome @click="toggleDialogtwo" />
          </Col>
        </Row>
      </div>
    </div>
    <Modal
      :visible="isDialogOpenone"
      @update:visible="toggleDialogone"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContentone />
    </Modal>
    <Modal
      :visible="isDialogOpentwo"
      @update:visible="toggleDialogtwo"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContenttwo />
    </Modal>
    <Modal
      :visible="isDialogOpenthree"
      @update:visible="toggleDialogthree"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContentthree />
    </Modal>
    <Modal
      :visible="isDialogOpenfour"
      @update:visible="toggleDialogfour"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContentfour />
    </Modal>
    <Modal
      :visible="isDialogOpenfive"
      @update:visible="toggleDialogfive"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContentfive />
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
  import InvestmentPromotion from '/@/views/DataAnalysis/components/InvestmentPromotion/InvestmentPromotion.vue';
  import InvestmentCustome from '/@/views/DataAnalysis/components/InvestmentCustome/InvestmentCustome.vue';
  import DialogContentone from '/@/views/DataAnalysis/components/AccountingLedger/index.vue'; // 引入 DialogContent 组件
  import DialogContenttwo from '/@/views/DataAnalysis/components/InvestmentCustome/index.vue';
  import DialogContentthree from '/@/views/DataAnalysis/components/InvestmentPromotion/index.vue';
  import DialogContentfour from '/@/views/DataAnalysis/components/LeaseLedger/index.vue';
  import DialogContentfive from '/@/views/DataAnalysis/components/OutstandingComponent/index.vue';

  const isDialogOpenone = ref(false);
  const isDialogOpentwo = ref(false);
  const isDialogOpenthree = ref(false);
  const isDialogOpenfour = ref(false);
  const isDialogOpenfive = ref(false);

  const toggleDialogone = () => {
    isDialogOpenone.value = !isDialogOpenone.value;
  };

  const toggleDialogtwo = () => {
    isDialogOpentwo.value = !isDialogOpentwo.value;
  };

  const toggleDialogthree = () => {
    isDialogOpenthree.value = !isDialogOpenthree.value;
  };

  const toggleDialogfour = () => {
    isDialogOpenfour.value = !isDialogOpenfour.value;
  };

  const toggleDialogfive = () => {
    isDialogOpenfive.value = !isDialogOpenfive.value;
  };
</script>

<style></style>
