<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col, Card } from 'ant-design-vue';
  import commonFunction from './components/commonFunction.vue';
  import approval from './components/approval.vue';
  import contract from './components/contract.vue';
  import tenancy from './components/tenancy.vue';
  import todoList from './components/todoList.vue';
  import noticeBoard from './components/noticeBoard.vue';
  import lettingRate from './components/lettingRate.vue';
  import housingResource from './components/housingResource.vue';
  import 'ant-design-vue/dist/antd.css';
</script>
<template>
  <PageWrapper class="bgc">
    <Row :gutter="[10, 10]">
      <!-- 左边 -->
      <Col
        :xs="{ span: 24 }"
        :lg="{ span: 18 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :xl="{ span: 18 }"
        :xxl="{ span: 18 }"
      >
        <Row :gutter="[10, 10]" class="RowRadio">
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card
              class="commonFunctionCard"
              adStyle="{ borderBottom: 'unset' }"
              size="small"
              style="border-radius: 10px"
            >
              <commonFunction />
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <approval />
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <contract />
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <tenancy />
            </Card>
          </Col>
          <Col :lg="{ span: 24 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <housingResource />
            </Card>
          </Col>
        </Row>
      </Col>
      <!-- 右边 -->
      <Col
        :xs="{ span: 24 }"
        :lg="{ span: 6 }"
        :sm="{ span: 24 }"
        :xl="{ span: 6 }"
        :xxl="{ span: 6 }"
      >
        <Row :gutter="[10, 10]">
          <Col :lg="{ span: 24 }" :md="{ span: 8 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <todoList />
            </Card>
          </Col>
          <Col :lg="{ span: 24 }" :md="{ span: 8 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <noticeBoard />
            </Card>
          </Col>
          <Col :lg="{ span: 24 }" :md="{ span: 8 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" style="border-radius: 10px">
              <lettingRate />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </PageWrapper>
</template>
<style scoped>
  .bgc {
    background: linear-gradient(to bottom, #1988f9, white);
  }
  .RowRadio {
    border-radius: 10px;
  }
</style>
