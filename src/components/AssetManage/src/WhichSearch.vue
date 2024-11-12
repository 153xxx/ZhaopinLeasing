<template>
  <div>
    <div v-for="(item, index) in data" :key="index" class="m-2">
      <div class="flex">
        <el-icon class="mt-1"><Location /></el-icon>
        <div class="font-bold ml-2">
          {{ item.rentData.name }}<span class="ml-2 font-light">({{ item.rentData.city }})</span>
        </div>
        <el-button plain @click="open" type="primary" class="ml-170">管理项目</el-button>
      </div>
      <el-card>
        <template #header>
          <div class="card-header">
            <div class="bg-gray-300 mb-4">
              {{ item.rentData.address
              }}<span
                >(共{{ item.rentData.total }}套，{{ item.rentData.total }}间,出租率{{
                  item.rentData.rentPercent
                }})</span
              >
            </div>
            <div v-for="(hotelFloor, index2) in item.hotel[0]" :key="index2">
              <div>
                <div>{{ index2 }}层({{ hotelFloor.length }}间)</div>
                <div class="flex flex-wrap">
                  <el-card
                    v-for="(room, index3) in hotelFloor"
                    :key="index3"
                    class="m-5 relative w-300px h-150px"
                    :class="getCardClass(room)"
                  >
                    <div class="flex justify-between">
                      <div>{{ room.name }}</div>
                      <div class="mb-2">
                        <el-button type="primary" plain>{{ room.use }}</el-button>
                      </div>
                    </div>
                    <div class="text-blue-500" v-if="room.rentMoney">{{ room.rentMoney }}元/月</div>
                    <div v-if="room.vacant"
                      >空置<span>{{ room.vacant }}天</span></div
                    >
                    <div class="mt-2">
                      {{ room.rentTime
                      }}<span class="text-red-500" v-if="room.rentStatus"
                        >({{ room.rentStatus }})</span
                      >
                    </div>
                    <div class="flex mt-1">
                      <el-button v-if="room.status" circle color="rgb(7, 158, 182)" class="ml-10">{{
                        room.status
                      }}</el-button>
                      <el-button
                        v-if="room.status1"
                        circle
                        color="rgb(126, 236, 22)"
                        class="ml-10"
                        >{{ room.status1 }}</el-button
                      >
                      <el-button
                        v-if="room.status2"
                        circle
                        color="rgb(202, 51, 51)"
                        class="ml-10"
                        >{{ room.status2 }}</el-button
                      >
                      <el-button
                        v-if="room.status3"
                        circle
                        color="rgb(202, 51, 51)"
                        class="ml-10"
                        >{{ room.status3 }}</el-button
                      >
                      <el-button
                        v-if="room.status4"
                        circle
                        color="rgb(202, 51, 51)"
                        class="ml-10"
                        >{{ room.status4 }}</el-button
                      >
                    </div>
                    <div class="absolute top-0 right-0 opacity-30" v-if="room.lock">
                      <el-icon size="160"><Lock /></el-icon>
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { AssetManageAPI } from '/@/api/assetManage/index';
  import { Location, Lock } from '@element-plus/icons-vue';
  import { ElMessage, ElMessageBox } from 'element-plus';

  // 储存请求来的信息
  const data = ref([]);

  // 判断卡片样式的外发光样式
  const getCardClass = (room) => {
    return room.whetherRent ? 'fail' : 'success';
  };

  onMounted(async () => {
    try {
      const res = await AssetManageAPI();
      data.value = res || []; // 避免为空数组
    } catch (error) {
      console.error('获取数据失败:', error);
      ElMessage({
        type: 'error',
        message: '获取数据失败，请稍后重试。',
      });
    }
  });

  const open = () => {
    ElMessageBox.confirm('醉后不知天在水，满船清梦压星河。', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    })
      .then(() => {
        ElMessage({
          type: 'success',
          message: '操作已完成',
        });
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '操作已取消',
        });
      });
  };
</script>

<style scoped>
  .success {
    box-shadow: 0 0 5px 3px greenyellow;
  }
  .fail {
    box-shadow: 0 0 5px 3px #c72323;
  }
</style>
