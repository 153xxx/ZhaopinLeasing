<script setup lang="ts">
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col, Button, Modal } from 'ant-design-vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  import * as XLSX from 'xlsx';
  import tenantPage from './components/tenantPage.vue';
  import tenantSign from './components/tenantSign.vue';
  import tenantLease from './components/tenantLease.vue';
  import tenantMovingIn from './components/tenantMovingIn.vue';
  import tenantMovingOut from './components/tenantMovingOut.vue';
  import TenantExpired from './components/tenantExpired.vue';
  import TenantOffLease from './components/tenantOffLease.vue';
  import TeanantWaitAccount from './components/teanantWaitAccount.vue';
  import TenantConfirm from './components/tenantConfirm.vue';
  import TenantCancelled from './components/tenantCancelled.vue';
  import AddContract from './components/addContract.vue';

  const modalText = ref<string>('Content of the modal');
  const visible = ref<boolean>(false);
  const confirmLoading = ref<boolean>(false);

  const downloadTableBooking = () => {
    const table = document.querySelector(tenantPage.numberId); // 替换为你的表格ID
    if (table) {
      const sheet = XLSX.utils.table_to_sheet(table); // 将表格转换成工作表对象
      const workbook = XLSX.utils.book_new(); // 创建一个新的工作簿
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1'); // 将工作表添加到工作簿

      // 生成Excel文件并下载
      XLSX.writeFile(workbook, 'table-data.xlsx'); // 'table-data.xlsx'是下载文件的名称
    } else {
      console.error('表格元素未找到');
    }
  };

  defineExpose({
    downloadTableBooking,
  });
  const primaryOn = () => {
    visible.value = true;
  };
  const handleOk = () => {
    modalText.value = 'The modal will be closed after two seconds';
    confirmLoading.value = true;
    setTimeout(() => {
      visible.value = false;
      confirmLoading.value = false;
    }, 2000);
  };
</script>
<template>
  <PageWrapper>
    <div class="bookingTop">
      <div>
        <Button type="primary" @click="primaryOn">添加合同</Button>
        <Modal
          title="添加合同"
          v-model:visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          width="1000px"
        >
          <AddContract />
        </Modal>
      </div>
      <div class="bookingSearch">
        <div class="search">
          <input type="text" placeholder="房源编号/房源地址/房间号/预定人姓名/电话/编号" />
          <svg
            t="1730712421508"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10816"
            width="24"
            height="24"
          >
            <path
              d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
              p-id="10817"
              fill="#2c2c2c"
            />
          </svg>
        </div>
        <svg
          t="1730877251246"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7645"
          width="24"
          height="24"
        >
          <path
            d="M644.87866595 886.42622805c0-71.30375737-56.36701639-129.10635008-125.88707384-129.10635008-69.51074361 0-125.89755278 57.80259271-125.89755279 129.10635008 0 71.32238621 56.38797312 129.12381383 125.89755279 129.12381384C588.51281351 1015.55004189 644.87866595 957.74745031 644.87866595 886.42622805zM644.87866595 499.08971405c0-71.30259342-56.36701639-129.12381383-125.88707384-129.12381382-69.51074361 0-125.89755278 57.82238549-125.89755278 129.12381383 0 71.30375737 56.38797312 129.10635008 125.89755278 129.10635008C588.51281351 628.19606414 644.87866595 570.39347142 644.87866595 499.08971405zM644.87866595 137.57493589c0-71.32355015-56.36701639-129.12497891-125.88707384-129.12497891-69.51074361 0-125.89755278 57.80142762-125.89755279 129.12497891 0 71.30375737 56.38797312 129.10518499 125.89755279 129.105185C588.51281351 266.67895694 644.87866595 208.87752931 644.87866595 137.57493589z"
            p-id="7646"
            fill="#1296db"
          />
        </svg>
      </div>
    </div>
    <Row :gutter="[10, 10]">
      <Col
        :xs="{ span: 24 }"
        :lg="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :xl="{ span: 24 }"
        :xxl="{ span: 24 }"
      >
        <Tabs defaultActiveKey="1">
          <TabPane key="1" tab="全部" class="wordColor">
            <tenantPage />
          </TabPane>
          <TabPane key="2" tab="待签字" class="wordColor">
            <tenantSign />
          </TabPane>
          <TabPane key="3" tab="在租中" class="wordColor">
            <tenantLease />
          </TabPane>
          <TabPane key="4" tab="即将搬入" class="wordColor">
            <tenantMovingIn />
          </TabPane>
          <TabPane key="5" tab="即将搬出" class="wordColor">
            <tenantMovingOut />
          </TabPane>
          <TabPane key="6" tab="已到期" class="wordColor">
            <TenantExpired />
          </TabPane>
          <TabPane key="7" tab="已退租" class="wordColor">
            <TenantOffLease />
          </TabPane>
          <TabPane key="8" tab="待结账" class="wordColor">
            <TeanantWaitAccount />
          </TabPane>
          <TabPane key="9" tab="待确认" class="wordColor">
            <TenantConfirm />
          </TabPane>
          <TabPane key="10" tab="已作废" class="wordColor">
            <TenantCancelled />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </PageWrapper>
</template>
<style scoped>
  .wordColor {
    color: #fff;
  }
  .bookingTop {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .bookingSearch {
    width: 27vw;
    display: flex;
    margin-top: 5px;
  }
  .search {
    width: 25vw;
    height: 100%;
    background-color: #ccc;
    border-radius: 20px;
    display: flex;
    border: 1px solid #ccc; /* 灰色边框 */
    background-color: #fff; /* 背景颜色 */
  }
  input[type='text'] {
    width: 25vw;
    border-radius: 20px; /* 圆角边框 */
    padding: 4px 5px; /* 内部填充 */
    font-size: 8px; /* 字体大小 */
    color: #333; /* 文本颜色 */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* 内阴影 */
    transition: border-color 0.3s; /* 边框颜色变化的过渡效果 */
  }

  /* 输入框聚焦时的样式 */
  input[type='text']:focus {
    border-color: #66afe9; /* 聚焦时的边框颜色 */
    outline: none; /* 移除默认的聚焦轮廓 */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(102, 175, 233, 0.6); /* 聚焦时的外阴影 */
  }

  /* 输入框的占位符样式 */
  input[type='text']::placeholder {
    color: #999; /* 占位符文本颜色 */
    font-style: italic; /* 占位符字体风格 */
  }
</style>
