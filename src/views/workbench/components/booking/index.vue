<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col } from 'ant-design-vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  import * as XLSX from 'xlsx';
  import bookingPage from './components/bookingPage.vue';

  const downloadTableBooking = () => {
    const table = document.querySelector(bookingPage.numberId); // 替换为你的表格ID
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

  function primaryOn() {}
</script>
<template>
  <PageWrapper>
    <div class="bookingTop">
      <div>
        <a-button type="primary" @click="primaryOn">添加预定</a-button>
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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          @click="downloadTableBooking"
        >
          <path
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
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
            <bookingPage />
          </TabPane>
          <TabPane key="2" tab="待生效" class="wordColor">待生效</TabPane>
          <TabPane key="3" tab="待入住" class="wordColor">待入住</TabPane>
          <TabPane key="4" tab="待入住" class="wordColor">已退定</TabPane>
          <TabPane key="5" tab="无效" class="wordColor"> 无效</TabPane>
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
