<<<<<<< HEAD
<template>
  <PageWrapper>
    <Row :gutter="[10, 10]">
      <Col
        :lg="{ span: 18 }"
        :sm="{ span: 24 }"
        :xl="{ span: 18 }"
        :xs="{ span: 24 }"
        :xxl="{ span: 18 }"
      >
        <Row :gutter="[10, 10]">
          <Col :lg="{ span: 12 }">
            <Card title="常用功能" size="small" :headStyle="{ borderBottom: 'unset' }">
              <div class="flex mb-4">
                <div v-for="(item, index) in commonFunctionData" :key="index">
                  <div class="flex justify-center items-center mr-2">
                    <Icon
                      icon="material-symbols-light:person-book"
                      width="60"
                      height="50"
                      style="color: #539cea"
                    />
                  </div>
                  <div>{{ item }}</div></div
                >
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }">
            <Card title="审批管理" size="small" :headStyle="{ borderBottom: 'unset' }">
              <div class="flex justify-around mb-4">
                <div v-for="(item, index) in approvalManagementData" :key="index">
                  <div class="w-[100%] text-center font-weight-bold">{{ index + 1 }}</div>
                  <div>{{ item }}</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }">
            <Card title="合约管理" size="small" :headStyle="{ borderBottom: 'unset' }">
              <div class="font-weight-bold m-2">租客合同<span class="text ml-3">495</span>(份)</div>
              <div class="flex justify-between m-2">
                <div v-for="(item, index) in contractManagementData" :key="index">
                  {{ item }}({{ index }})
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }">
            <Card title="租前" size="small" :headStyle="{ borderBottom: 'unset' }">
              <div class="flex text-center flex-wrap">
                <div v-for="(item, index) in rentalData" :key="index" class="w-[50%] h-12">
                  <div class="font-weight-bold">{{ index }}</div>
                  <div>{{ item }}</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 24 }">
            <Card title="房源管理" size="small" :headStyle="{ borderBottom: 'unset' }">
              <div class="flex flex-wrap w-[100%]">
                <div v-for="(item, index) in houseManagementData" :key="index" class="w-[28%] m-5">
                  <div class="flex justify-around mb-2">
                    <div class="font-weight-bold">{{ item.apartment }}</div>
                    <div class="font-weight-bold">出租率:{{ item.parcent }}</div>
                  </div>
                  <div class="flex flex-wrap text-center w-[100%] p-5 bg-slate-100 rounded-sm">
                    <div class="w-[33%]">
                      <div class="font-weight-bold">{{ item.first }}</div>
                      <div>空置</div>
                    </div>
                    <div class="w-[33%]">
                      <div class="font-weight-bold">{{ item.second }}</div>
                      <div>配置</div>
                    </div>
                    <div class="w-[33%]">
                      <div class="font-weight-bold">{{ item.third }}</div>
                      <div>已出</div>
                    </div>
                    <div class="w-[33%]">
                      <div class="font-weight-bold">{{ index }}</div>
                      <div>{{ item.status }}</div>
                    </div>
                    <div class="w-[33%]">
                      <div class="font-weight-bold">{{ index }}</div>
                      <div>{{ item.status1 }}</div></div
                    >
                    <div class="w-[33%]">
                      <div class="font-weight-bold">{{ index }}</div>
                      <div>{{ item.status2 }}</div>
                    </div>
                  </div>
                </div>
              </div>
=======
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
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
            </Card>
          </Col>
        </Row>
      </Col>
<<<<<<< HEAD
      <Col
        :lg="{ span: 6 }"
        :sm="{ span: 24 }"
        :xl="{ span: 6 }"
        :xs="{ span: 24 }"
        :xxl="{ span: 6 }"
      >
        <Row :gutter="[10, 10]">
          <Col :lg="{ span: 24 }">
            <Card
              title="待办事项"
              size="small"
              :headStyle="{ borderBottom: 'unset' }"
              class="relative"
            >
              <div class="flex absolute right-4 top-3">
                <div class="bord text-blue-300 px-1">更多></div>
                <div class="text-blue-300">+</div>
              </div>
              <Empty />
            </Card>
          </Col>
          <Col :lg="{ span: 24 }">
            <Card
              title="最新公告"
              size="small"
              :headStyle="{ borderBottom: 'unset' }"
              class="relative"
            >
              <div class="flex absolute right-4 top-3">
                <div class="bord text-blue-300 px-1">更多></div>
                <div class="text-blue-300">+</div>
              </div>
              <Empty />
            </Card>
          </Col>
          <Col :lg="{ span: 24 }">
            <Card title="资产出租率" size="small" :headStyle="{ borderBottom: 'unset' }">
              <!-- <Doughnut :data="data" :options="options" /> -->
              <p>旧时王谢堂前燕</p>
              <p>飞入寻常百姓家</p>
=======
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
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </PageWrapper>
</template>
<<<<<<< HEAD

<script lang="ts" setup>
  import { ref } from 'vue';
  // 引入请求数据的api
  import { workBenchData } from '/@/api/workbench';
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col, Card, Empty } from 'ant-design-vue';
  import { Icon } from '@iconify/vue';

  // 储存常用功能数据
  const commonFunctionData = ref([]);

  // 储存审批管理数据
  const approvalManagementData = ref([]);

  // 储存合约管理数据
  const contractManagementData = ref([]);

  // 储存租房数据
  const rentalData = ref([]);

  // 储存房源管理信息
  const houseManagementData = ref([]);

  workBenchData().then((res) => {
    console.log(res);
    commonFunctionData.value = res.data;
    approvalManagementData.value = res.manage;
    contractManagementData.value = res.contract;
    rentalData.value = res.rental;
    houseManagementData.value = res.house;
  });
</script>

<style scoped>
  .contain {
    background-color: rgb(188, 188, 188);
    box-shadow: 0.1rem 0.1rem 0.7rem rgb(191, 191, 191);
    border-radius: 0.7rem;
  }
  .text {
    color: #2582e0;
    font-size: 24px;
  }
  .bord {
    border-right: 2px solid rgb(129, 129, 129);
=======
<style scoped>
  .bgc {
    background: linear-gradient(to bottom, #1988f9, white);
  }
  .RowRadio {
    border-radius: 10px;
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
  }
</style>
