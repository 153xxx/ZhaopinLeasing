<!-- <script setup>
  import { ref } from 'vue';
  import { getWorkbenchData } from '/@/api/workbench/index';

  const boxes = ref([
    { title: '公寓' },
    { title: '商办' },
    { title: '商铺' },
    { title: '厂房' },
    { title: '车位' },
    { title: '广告牌' },
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
  <div class="workbenchBoxTop">
    <div class="workbenchFoot">
      <div>
        <div class="workbenchFoot-title">房源管理</div><br />
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
        </div>
      </div>
    </div>
    <div>
      <div class="workbenchRight2">
        <div class="workbenchRightTop">
          <div class="workbenchRightTop-title">最新公告</div>
          <div><a href="#">更多></a> | +</div>
        </div>
        <div></div>
      </div>
      <div class="workbenchRight3">
        <div class="pic">
          <div ref="chartDom" style="width: 300px; height: 300px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .workbenchFoot {
    width: 78%;
    background-color: #fff;
    margin: 20px;
    border-radius: 10px;
  }
  .pre-tenancy-word {
    width: 60px;
    height: 70px;
  }

  .workbenchRight2 {
    width: 100%;
    height: 340px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-top: 20px;
  }
</style> -->
