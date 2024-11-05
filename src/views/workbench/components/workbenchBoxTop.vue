<!-- <script setup lang="ts">
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
  <div class="workbenchBoxTop">
    <div class="workbenchLeft">
      <div class="workbenchTop">
        <div class="workbenchTopLeft">
          <div class="feature">
            <div class="feature-word">常用功能</div>
            <div class="feature-icon">
              <svg
                t="1730294274609"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6116"
                width="24"
                height="24"
              >
                <path
                  d="M919.6 405.6l-57.2-8c-12.7-1.8-23-10.4-28-22.1-11.3-26.7-25.7-51.7-42.9-74.5-7.7-10.2-10-23.5-5.2-35.3l21.7-53.5c6.7-16.4 0.2-35.3-15.2-44.1L669.1 96.6c-15.4-8.9-34.9-5.1-45.8 8.9l-35.4 45.3c-7.9 10.2-20.7 14.9-33.5 13.3-14-1.8-28.3-2.8-42.8-2.8-14.5 0-28.8 1-42.8 2.8-12.8 1.6-25.6-3.1-33.5-13.3l-35.4-45.3c-10.9-14-30.4-17.8-45.8-8.9L230.4 168c-15.4 8.9-21.8 27.7-15.2 44.1l21.7 53.5c4.8 11.9 2.5 25.1-5.2 35.3-17.2 22.8-31.7 47.8-42.9 74.5-5 11.8-15.3 20.4-28 22.1l-57.2 8C86 408 72.9 423 72.9 440.8v142.9c0 17.7 13.1 32.7 30.6 35.2l57.2 8c12.7 1.8 23 10.4 28 22.1 11.3 26.7 25.7 51.7 42.9 74.5 7.7 10.2 10 23.5 5.2 35.3l-21.7 53.5c-6.7 16.4-0.2 35.3 15.2 44.1L354 927.8c15.4 8.9 34.9 5.1 45.8-8.9l35.4-45.3c7.9-10.2 20.7-14.9 33.5-13.3 14 1.8 28.3 2.8 42.8 2.8 14.5 0 28.8-1 42.8-2.8 12.8-1.6 25.6 3.1 33.5 13.3l35.4 45.3c10.9 14 30.4 17.8 45.8 8.9l123.7-71.4c15.4-8.9 21.8-27.7 15.2-44.1l-21.7-53.5c-4.8-11.8-2.5-25.1 5.2-35.3 17.2-22.8 31.7-47.8 42.9-74.5 5-11.8 15.3-20.4 28-22.1l57.2-8c17.6-2.5 30.6-17.5 30.6-35.2V440.8c0.2-17.8-12.9-32.8-30.5-35.2z m-408 245.5c-76.7 0-138.9-62.2-138.9-138.9s62.2-138.9 138.9-138.9 138.9 62.2 138.9 138.9-62.2 138.9-138.9 138.9z"
                  fill=""
                  p-id="6117"
                />
              </svg>
            </div>
          </div>
          <div class="featureContent">
            <div>
              <svg
                t="1730293687561"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5118"
                width="48"
                height="48"
              >
                <path
                  d="M588 855.4H436c-64.5 0-125.5 0-169.8-6.8-21.6-3.3-87.3-13.4-87.3-67.2v-14.9c0-139.7 115.4-253.3 257.2-253.3h152c141.8 0 257.2 113.6 257.2 253.3v14.9c0 52.6-65.7 63-87.2 66.5-44 7-103 7.5-170.1 7.5zM436 556.5c-117.9 0-213.9 94.2-213.9 210v14.9c0 13.7 27.5 20.8 50.6 24.4 41.1 6.3 100.4 6.3 163.2 6.3h152c65.2 0 122.5-0.5 163.1-7 15.3-2.4 50.7-9.6 50.7-23.7v-14.9c0-115.8-96-210-213.9-210H436z m75.4-83.9c-112.5 0-204-90.2-204-201s91.5-201 204-201 204 90.2 204 201-91.5 201-204 201z m0-358.7c-88.6 0-160.7 70.7-160.7 157.7 0 87 72.1 157.7 160.7 157.7s160.7-70.7 160.7-157.7c0-87-72.1-157.7-160.7-157.7z"
                  p-id="5119"
                />
              </svg>
              招商管理
            </div>
            <div>
              <svg
                t="1730293687561"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5118"
                width="48"
                height="48"
              >
                <path
                  d="M588 855.4H436c-64.5 0-125.5 0-169.8-6.8-21.6-3.3-87.3-13.4-87.3-67.2v-14.9c0-139.7 115.4-253.3 257.2-253.3h152c141.8 0 257.2 113.6 257.2 253.3v14.9c0 52.6-65.7 63-87.2 66.5-44 7-103 7.5-170.1 7.5zM436 556.5c-117.9 0-213.9 94.2-213.9 210v14.9c0 13.7 27.5 20.8 50.6 24.4 41.1 6.3 100.4 6.3 163.2 6.3h152c65.2 0 122.5-0.5 163.1-7 15.3-2.4 50.7-9.6 50.7-23.7v-14.9c0-115.8-96-210-213.9-210H436z m75.4-83.9c-112.5 0-204-90.2-204-201s91.5-201 204-201 204 90.2 204 201-91.5 201-204 201z m0-358.7c-88.6 0-160.7 70.7-160.7 157.7 0 87 72.1 157.7 160.7 157.7s160.7-70.7 160.7-157.7c0-87-72.1-157.7-160.7-157.7z"
                  p-id="5119"
                />
              </svg>
              资产管理
            </div>
            <div>
              <svg
                t="1730293687561"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5118"
                width="48"
                height="48"
              >
                <path
                  d="M588 855.4H436c-64.5 0-125.5 0-169.8-6.8-21.6-3.3-87.3-13.4-87.3-67.2v-14.9c0-139.7 115.4-253.3 257.2-253.3h152c141.8 0 257.2 113.6 257.2 253.3v14.9c0 52.6-65.7 63-87.2 66.5-44 7-103 7.5-170.1 7.5zM436 556.5c-117.9 0-213.9 94.2-213.9 210v14.9c0 13.7 27.5 20.8 50.6 24.4 41.1 6.3 100.4 6.3 163.2 6.3h152c65.2 0 122.5-0.5 163.1-7 15.3-2.4 50.7-9.6 50.7-23.7v-14.9c0-115.8-96-210-213.9-210H436z m75.4-83.9c-112.5 0-204-90.2-204-201s91.5-201 204-201 204 90.2 204 201-91.5 201-204 201z m0-358.7c-88.6 0-160.7 70.7-160.7 157.7 0 87 72.1 157.7 160.7 157.7s160.7-70.7 160.7-157.7c0-87-72.1-157.7-160.7-157.7z"
                  p-id="5119"
                />
              </svg>
              财务管理
            </div>
            <div>
              <svg
                t="1730293687561"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5118"
                width="48"
                height="48"
              >
                <path
                  d="M588 855.4H436c-64.5 0-125.5 0-169.8-6.8-21.6-3.3-87.3-13.4-87.3-67.2v-14.9c0-139.7 115.4-253.3 257.2-253.3h152c141.8 0 257.2 113.6 257.2 253.3v14.9c0 52.6-65.7 63-87.2 66.5-44 7-103 7.5-170.1 7.5zM436 556.5c-117.9 0-213.9 94.2-213.9 210v14.9c0 13.7 27.5 20.8 50.6 24.4 41.1 6.3 100.4 6.3 163.2 6.3h152c65.2 0 122.5-0.5 163.1-7 15.3-2.4 50.7-9.6 50.7-23.7v-14.9c0-115.8-96-210-213.9-210H436z m75.4-83.9c-112.5 0-204-90.2-204-201s91.5-201 204-201 204 90.2 204 201-91.5 201-204 201z m0-358.7c-88.6 0-160.7 70.7-160.7 157.7 0 87 72.1 157.7 160.7 157.7s160.7-70.7 160.7-157.7c0-87-72.1-157.7-160.7-157.7z"
                  p-id="5119"
                />
              </svg>
              审批管理
            </div>
          </div>
        </div>
        <div class="workbenchTopRight">
          <div class="workbenchTopRight-title">审批管理</div>
          <div class="workbenchTopRight-content">
            <div class="content-id">
              <div class="content-num">{{ pendingApprovals }}</div>
              <div>待我审批</div>
            </div>
            <div class="content-id">
              <div class="content-num">{{ initiated }}</div>
              <div>我发起的</div>
            </div>
            <div class="content-id">
              <div class="content-num">{{ copied }}</div>
              <div>抄送我的</div>
            </div>
          </div>
        </div>
      </div>
      <div class="workbenchCount">
        <div class="workbenchCountLeft">
          <div class="contract-management-title">合约管理</div>
          <div class="contract-management-content">
            <div class="contract-title">租容合间</div>
            <div class="contract-titlenum">{{ roomTogether }}(份)</div>
          </div>
          <div class="contract-management-foot">
            <div>待签字({{ roomTogether }})</div>
            <div>在租中({{ roomTogether }})</div>
            <div>即将搬出({{ roomTogether }})</div>
            <div>已到期({{ roomTogether }})</div>
          </div>
        </div>
        <div class="workbenchCountRight">
          <div class="pre-tenancy-title">租前</div>
          <div class="pre-tenancy-content">
            <div class="pre-tenancy-content-top">
              <div class="pre-tenancy-word"
                ><div class="pre-tenancy-num">{{ roomTogether }}</div> <div>待入住</div></div
              >
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
      </div>
    </div>
    <div class="workbenchRight">
      <div class="workbenchRightTop">
        <div class="workbenchRightTop-title">待办事项</div>
        <div><a href="#">更多></a> | +</div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style>
  .workbenchBox {
    width: 100%;
    height: 100%;
  }
  .workbenchBoxTop {
    width: 100%;
    display: flex;
  }
  .workbenchLeft {
    width: 100%;
  }

  .workbenchTop {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .icon {
    display: flex;
    justify-content: center;
  }
  /* .workbenchFoot-title {
    font-size: 16px;
    font-weight: 700;
    margin: 10px;
  }
  .workbenchCount {
    width: 100%;
    display: flex;
    justify-content: space-around;
  } */
</style> -->
