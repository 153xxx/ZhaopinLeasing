<template>
  <div>
    <Row :gutter="[5, 5]">
      <Col :span="24">
        <ChartOne />
      </Col>
      <Col :span="24">
        <ChartTwo />
      </Col>
      <Col :span="24">
        <ChartThree />
      </Col>
      <Col :span="24">
        <ChartFour />
      </Col>
      <Col :span="24">
        <ChartFive />
      </Col>
      <Col :span="24">
        <ChartSix />
      </Col>
      <Col :span="24">
        <ChartSeven />
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
  import { Col, Row } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  import ChartFour from '/@/views/DataAnalysis/components/InvestmentCustome/ChartFour.vue';
  import ChartTwo from '/@/views/DataAnalysis/components/InvestmentCustome/ChartTwo.vue';
  import ChartOne from '/@/views/DataAnalysis/components/InvestmentCustome/ChartOne.vue';
  import ChartSeven from '/@/views/DataAnalysis/components/InvestmentCustome/ChartSeven.vue';
  import ChartThree from '/@/views/DataAnalysis/components/InvestmentCustome/ChartThree.vue';
  import ChartFive from '/@/views/DataAnalysis/components/InvestmentCustome/ChartFive.vue';
  import ChartSix from '/@/views/DataAnalysis/components/InvestmentCustome/ChartSix.vue';
</script>

<style></style>
./C
