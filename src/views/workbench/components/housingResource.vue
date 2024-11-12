<script setup>
  import { ref } from 'vue';
  import { getWorkbenchData } from '/@/api/workbench/index';
  import { Row, Col, Card } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';

  const boxes = ref([
    { title: '公寓' },
    { title: '商办' },
    { title: '商铺' },
    { title: '厂房' },
    { title: '车位' },
    { title: '广告牌' },
    { title: '会议室' },
  ]);
  // 定义共同属性
  const commonProperties = ref({
    lettingRate: '出租率:',
    vacancy: '空置',
    disposition: '配置',
    leased: '已租',
    movingIn: '即将搬入(30天内)',
    expire: '即将到期(30天内)',
    expired: '已到期',
  });

  const setOf = ref(0);
  const between = ref(0);
  const rate = ref(0);
  const room = ref(0);
  const inIdle = ref(0);

  getWorkbenchData()
    .then((res) => {
      setOf.value = res.housingManagement.setOf;
      between.value = res.housingManagement.between;
      rate.value = res.housingManagement.rate;
      room.value = res.housingManagement.room;
      inIdle.value = res.housingManagement.inIdle;
    })
    .catch((err) => {
      console.log(err);
    });
</script>
<template>
  <div>
    <div class="workbenchFoot-title">房源管理</div>
    <Row :gutter="[10, 10]" :wrap="true" :justify="space - around">
      <Col
        :xs="{ span: 24 }"
        :lg="{ span: 8 }"
        :sm="{ span: 24 }"
        :md="{ span: 12 }"
        :xl="{ span: 8 }"
        :xxl="{ span: 8 }"
        class="workbenchFoot-content"
        v-for="box in boxes"
        :key="box"
      >
        <Card class="housingManagement-box" adStyle="{ borderBottom: 'unset' }" size="small">
          <div class="manageTitle">
            <span
              >{{ box.title }}:<p>{{ setOf }}套,{{ between }}间</p></span
            >
            <span
              >{{ commonProperties.lettingRate }}<p>{{ rate }}</p></span
            >
          </div>
          <div class="manageContent">
            <div class="manageContent-left">
              <div>
                <div class="num">{{ room }}</div>
                <div class="word">{{ commonProperties.vacancy }}</div></div
              ><div>
                <div class="num">{{ inIdle }}</div>
                <div class="word">{{ commonProperties.disposition }}</div> </div
              ><div>
                <div class="num">{{ inIdle }}</div>
                <div class="word">{{ commonProperties.leased }}</div>
              </div>
            </div>
            <div class="manageContent-right">
              <div>
                <div class="num">{{ room }}</div>
                <div class="word">{{ commonProperties.movingIn }}</div>
              </div>
              <div>
                <div class="num">{{ room }}</div>
                <div class="word">{{ commonProperties.expire }}</div>
              </div>
              <div>
                <div class="num">{{ inIdle }}</div>
                <div class="word">{{ commonProperties.expired }}</div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
    <!-- <div class="workbenchFoot-title">房源管理</div><br />
    <div class="workbenchFoot-content">
      <div v-for="box in boxes" :key="box" class="housingManagement-box">
        <div class="manageTitle">
          <span
            >{{ box.title }}:<p>{{ setOf }}套,{{ between }}间</p></span
          >
          <span
            >{{ commonProperties.lettingRate }}<p>{{ rate }}</p></span
          >
        </div>
        <div class="manageContent">
          <div class="manageContent-left">
            <div>
              <div class="num">{{ room }}</div>
              <div class="word">{{ commonProperties.vacancy }}</div></div
            ><div>
              <div class="num">{{ inIdle }}</div>
              <div class="word">{{ commonProperties.disposition }}</div> </div
            ><div>
              <div class="num">{{ inIdle }}</div>
              <div class="word">{{ commonProperties.leased }}</div>
            </div>
          </div>
          <div class="manageContent-right">
            <div>
              <div class="num">{{ room }}</div>
              <div class="word">{{ commonProperties.movingIn }}</div>
            </div>
            <div>
              <div class="num">{{ room }}</div>
              <div class="word">{{ commonProperties.expire }}</div>
            </div>
            <div>
              <div class="num">{{ inIdle }}</div>
              <div class="word">{{ commonProperties.expired }}</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style>
  .workbenchFoot-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .workbenchFoot-title {
    font-size: 1.3vw;
    font-weight: 700;
    margin: 10px;
  }
  .housingManagement-box {
    width: 100%; /* 设置每个盒子占据30%的宽度，这样一行可以放三个 */
    height: 220px;
    margin-bottom: 10px; /* 为盒子之间添加一些垂直间距 */
    box-sizing: border-box; /* 确保宽度包括padding和border */
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .manageTitle {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  .manageContent {
    width: 100%;
    height: 100px;
    background-color: ghostwhite;
    justify-content: center;
  }
  .manageContent-left,
  .manageContent-right {
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
  .num {
    display: flex;
    justify-content: center;
    color: skyblue;
  }
  P {
    font-weight: 700;
  }
</style>
