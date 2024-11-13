<template>
  <div class="font-bold">项目信息</div>
  <div class="bg-gray-100 flex h-10 items-center mb-10">
    <el-form label-width="auto" status-icon style="max-width: 600px" class="ml-2">
      <el-form-item label="项目名称:">翻斗花园 </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" class="ml-5">
      <el-form-item label="项目分期:">1.1期 </el-form-item>
    </el-form>
  </div>
  <div class="flex">
    <div class="bg-gray-100">
      <div>
        <el-form label-width="auto" status-icon style="max-width: 600px" class="mt-5 ml-2">
          <el-form-item label="房型类型" class="font-bold"
            ><el-icon
              ><Icon
                icon="lets-icons:question-light"
                width="20"
                height="20"
                style="color: #ffd500" /></el-icon
          ></el-form-item>
        </el-form>
      </div>
      <div class="pl-5 w-45">
        <div
          v-for="(room, index) in rooms"
          :key="index"
          class="mb-2.5 flex items-center justify-between"
        >
          <div
            class="font-bold h-20 w-30 flex items-center pl-3 text-xl mx-auto"
            style="border: 2px solid gray"
            >{{ room }}</div
          >
          <button
            @click="editRoom(index)"
            style="border: 1px solid transparent; border-radius: 30px"
            class="relative bottom-10 right-14 bg-blue-50"
            ><Icon icon="iconamoon:edit-thin" width="20" height="20" style="color: #0011ff"
          /></button>
          <button
            @click="deleteRoom(index)"
            style="border: 1px solid transparent; border-radius: 30px"
            class="relative bottom-10 right-12 bg-red-50"
            ><Icon icon="mi:delete" width="20" height="20" style="color: #e30d23"
          /></button>
        </div>
        <div
          class="font-bold h-20 w-30 flex items-center justify-center"
          style="border: 2px dashed gray; border-radius: 10px"
        >
          <button @click="addRoom"
            ><Icon icon="fluent:add-32-filled" width="36" height="36" style="color: #919191"
          /></button>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 ml-5 w-1000 pr-5 pt-2 pl-5">
      <div class="flex justify-between">
        <el-form label-width="auto" status-icon style="max-width: 600px" class="ml-2">
          <el-form-item label="楼栋信息">
            <el-select v-model="floor" style="width: 100px">
              <el-option label="1栋1单元" value="1栋1单元" />
              <el-option label="1栋2单元" value="1栋2单元" />
              <el-option label="2栋1单元" value="2栋1单元" />
              <el-option label="2栋2单元" value="2栋2单元" /> </el-select
          ></el-form-item>
        </el-form>
        <el-breadcrumb separator="|">
          <el-breadcrumb-item>共1层,共5间</el-breadcrumb-item>
          <el-breadcrumb-item>禁用0间</el-breadcrumb-item>
          <el-breadcrumb-item>启用0间</el-breadcrumb-item>
          <el-breadcrumb-item
            >剩余<span class="text-red-500">{{ rooms.length }}</span
            >间未分配</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="bg-white">
        <div class="flex justify-between h-10" style="border-bottom: 2px solid gray">
          <div class="m-3">1F</div>
          <div class="mr-4"> <el-checkbox label="全选" size="large" /></div>
        </div>
        <div class="pl-5 w-45 flex mt-4">
          <div
            v-for="(room, index) in rooms"
            :key="index"
            class="mb-2.5 flex items-center justify-between"
          >
            <div
              class="font-bold h-20 w-30 flex items-center pl-3 text-xl mx-auto"
              style="border: 2px solid gray"
              >{{ room }}</div
            >
            <button
              @click="editRoom(index)"
              style="border: 1px solid transparent; border-radius: 30px"
              class="relative bottom-10 right-14 bg-blue-50"
              ><Icon icon="iconamoon:edit-thin" width="20" height="20" style="color: #0011ff"
            /></button>
            <button
              @click="deleteRoom(index)"
              style="border: 1px solid transparent; border-radius: 30px"
              class="relative bottom-10 right-12 bg-red-50"
              ><Icon icon="mi:delete" width="20" height="20" style="color: #e30d23"
            /></button>
          </div>
          <div
            class="font-bold h-20 w-30 flex items-center justify-center"
            style="border: 2px dashed gray; border-radius: 10px"
          >
            <button @click="addRoom"
              ><Icon icon="fluent:add-32-filled" width="36" height="36" style="color: #919191"
            /></button>
          </div>
        </div>
      </div>
      <div class="mt-5"> 对[]房间进行统一配置 </div>
      <div class="flex justify-between mt-5">
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input size="large" v-model="whichRoom.type" style="width: 150px" placeholder="请输入">
            <template #prepend>房型</template>
          </el-input>
        </el-form>
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input size="large" v-model="whichRoom.rant" style="width: 200px" placeholder="请输入">
            <template #prepend>出租价</template>
            <template #suffix>
              元|<Icon
                icon="solar:bill-check-bold-duotone"
                width="20"
                height="20"
                style="color: #0a95ff"
            /></template>
          </el-input>
        </el-form>
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input
            size="large"
            v-model="whichRoom.categories"
            style="width: 180px"
            placeholder="请输入"
          >
            <template #prepend>产品类型</template>
          </el-input>
        </el-form>
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input size="large" v-model="whichRoom.use" style="width: 150px" placeholder="请输入">
            <template #prepend>用途</template>
          </el-input>
        </el-form>
      </div>
      <div class="flex justify-between w-630px mt-5">
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input
            size="large"
            v-model="whichRoom.direction"
            style="width: 150px"
            placeholder="请输入"
          >
            <template #prepend>朝向</template>
          </el-input>
        </el-form>
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input
            size="large"
            v-model="whichRoom.people"
            style="width: 200px"
            placeholder="请输入"
          >
            <template #prepend>最多入住</template>
            <template #suffix>人</template>
          </el-input>
        </el-form>
        <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
          <el-input size="large" v-model="whichRoom.time" style="width: 250px" placeholder="请输入">
            <template #prepend>首次可租时间</template>
            <template #suffix>
              <Icon icon="quill:calendar" width="16" height="16" style="color: black"
            /></template>
          </el-input>
        </el-form>
      </div>
      <div class="flex justify-between my-5">
        <div class="flex border-2 border-slate-500 rounded-2xl bg-gray-100 h-80px p-2">
          <div class="w-20px text-center rounded-4xl leading-8">规划</div>
          <div>
            <div class="flex pb-2 pl-2" style="border-left: 2px solid black">
              <span>建筑面积:</span>
              <input
                type="text"
                v-model="whichRoom.planning.area"
                class="bg-gray-100 border-0 border-b-[2px] w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
            <div
              class="flex pt-2 pl-2"
              style="border-left: 2px solid black; border-top: 1px solid black"
            >
              <span>套内面积:</span>
              <input
                type="text"
                v-model="whichRoom.planning.design"
                class="bg-gray-100 border-0 border-b-2 w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
          </div>
        </div>
        <div class="flex border-2 border-slate-500 rounded-2xl bg-gray-100 h-80px p-2">
          <div class="w-20px text-center rounded-4xl leading-8">预测</div>
          <div>
            <div class="flex pb-2 pl-2" style="border-left: 2px solid black">
              <span>建筑面积:</span>
              <input
                type="text"
                v-model="whichRoom.forsee.area"
                class="bg-gray-100 border-0 border-b-[2px] w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
            <div
              class="flex pt-2 pl-2"
              style="border-left: 2px solid black; border-top: 1px solid black"
            >
              <span>套内面积:</span>
              <input
                type="text"
                v-model="whichRoom.forsee.design"
                class="bg-gray-100 border-0 border-b-2 w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
          </div>
        </div>
        <div class="flex border-2 border-slate-500 rounded-2xl bg-gray-100 h-80px p-2">
          <div class="w-20px text-center rounded-4xl leading-8">实测</div>
          <div>
            <div class="flex pb-2 pl-2" style="border-left: 2px solid black">
              <span>建筑面积:</span>
              <input
                type="text"
                v-model="whichRoom.measured.area"
                class="bg-gray-100 border-0 border-b-[2px] w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
            <div
              class="flex pt-2 pl-2"
              style="border-left: 2px solid black; border-top: 1px solid black"
            >
              <span>套内面积:</span>
              <input
                type="text"
                v-model="whichRoom.measured.design"
                class="bg-gray-100 border-0 border-b-2 w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
          </div>
        </div>
        <div class="flex border-2 border-slate-500 rounded-2xl bg-gray-100 h-80px p-2">
          <div class="w-20px text-center rounded-4xl leading-8">可租</div>
          <div>
            <div class="flex pb-2 pl-2" style="border-left: 2px solid black">
              <span>建筑面积:</span>
              <input
                type="text"
                v-model="whichRoom.rent.area"
                class="bg-gray-100 border-0 border-b-[2px] w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
            <div
              class="flex pt-2 pl-2"
              style="border-left: 2px solid black; border-top: 1px solid black"
            >
              <span>套内面积:</span>
              <input
                type="text"
                v-model="whichRoom.rent.design"
                class="bg-gray-100 border-0 border-b-2 w-40px"
                placeholder="请输入"
                style="border-bottom: 1px solid black"
              />
              <span><Icon icon="tabler:meter-square" width="20" height="20" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from '@iconify/vue';
  import { ref } from 'vue';

  const rooms = ref(['房型ML']); // 初始房型列表

  const whichRoom = ref({
    type: '', // 房型类型
    rant: '', // 出租价
    categories: '', // 产品类型
    use: '', // 用途
    direction: '', // 朝向
    people: '', // 最多入住
    time: '', // 首次可租时间
    planning: {
      area: '', // 建筑面积
      design: '', // 套内面积
    },
    forsee: {
      area: '', // 建筑面积
      design: '', // 套内面积
    },
    measured: {
      area: '', // 建筑面积
      design: '', // 套内面积
    },
    rent: {
      area: '', // 建筑面积
      design: '', // 套内面积
    },
  });

  const floor = ref('1栋1单元');

  // 编辑房型
  const editRoom = (index) => {
    console.log('编辑房型:', index);
  };

  // 删除房型
  const deleteRoom = (index) => {
    console.log('删除房型:', index);
    rooms.value.splice(index, 1); // 删除房型
  };

  // 添加房型
  const addRoom = () => {
    console.log('添加房型');
    rooms.value.push('新房型'); // 添加新房型
  };
</script>

<style scoped></style>
