<template>
  <div class="font-bold">项目分期信息</div>
  <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
    <el-form-item
      label="项目分期"
      prop="periodization"
      :rules="{ required: 'true', tigger: 'blur' }"
    >
      <el-select
        v-model="floorMessage.periodization"
        placeholder="请选择项目分期"
        style="width: 150px"
      >
        <el-option label="1期" value="1期" />
        <el-option label="2期" value="2期" />
        <el-option label="3期" value="3期" />
        <el-option label="4期" value="4期" />
      </el-select>
    </el-form-item>
  </el-form>
  <div class="font-bold">楼栋信息</div>
  <div class="border border-gray-200 rounded-xl my-5" style="box-shadow: 0 5px 10px gainsboro">
    <div class="flex justify-between p-2 px-5">
      <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
        <el-form-item label="归属区域" prop="area" :rules="{ required: 'true', tigger: 'blur' }">
          <el-input
            v-model="floorMessage.area"
            placeholder="输入楼栋归属区"
            size="large"
            style="width: 150px"
          />
        </el-form-item>
      </el-form>
      <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
        <el-form-item label="楼栋信息" prop="msg" :rules="{ required: 'true', tigger: 'blur' }">
          <el-input
            v-model="floorMessage.message.number"
            placeholder="请输入"
            size="large"
            style="width: 150px"
            ><template #append>号/栋</template>
          </el-input>
          <el-input
            v-model="floorMessage.message.unity"
            placeholder="请输入"
            size="large"
            style="width: 150px"
            ><template #append>单元</template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
        <el-form-item label="楼层" prop="floor" :rules="{ required: 'true', tigger: 'blur' }">
          <div class="flex">
            <span>共</span>
            <input
              type="text"
              v-model="floorMessage.floor.number"
              class="border-0 w-40px"
              placeholder="请输入"
              style="border-bottom: 1px solid black"
            />
          </div>
          <span>层,每层</span>
          <input
            type="text"
            v-model="floorMessage.floor.room"
            class="border-0 w-40px"
            placeholder="请输入"
            style="border-bottom: 1px solid black"
          />
          <span>间</span>
        </el-form-item>
      </el-form>
      <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
        <el-form-item label="产品类型" prop="type" size="large">
          <el-select v-model="floorMessage.type" style="width: 150px" size="large">
            <el-option label="办公楼" value="办公楼" />
            <el-option label="厂房" value="厂房" />
            <el-option label="商铺" value="商铺" />
            <el-option label="公寓" value="公寓" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="flex justify-between p-2 px-5 h-20 items-end w-650px">
      <div class="mb-5">
        <el-checkbox v-model="floorMessage.filter.filter1" label='房间去"4"' size="large" />
        <el-checkbox v-model="floorMessage.filter.filter2" label="增加房间号前缀" size="large" />
      </div>
      <el-form label-width="auto" status-icon style="max-width: 600px">
        <el-form-item prop="roomNumber">
          <el-input v-model="floorMessage.roomNumber" size="large" style="width: 150px">
            <template #append>房间号前缀</template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
        <el-form-item label="房间数量" prop="room">
          <el-input v-model="floorMessage.room" size="large" style="width: 150px">
            <template #append>间</template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="flex justify-between m-2 mx-5 pb-10">
      <div class="flex border-2 border-slate-500 rounded-2xl bg-gray-100 h-80px p-2">
        <div class="w-20px text-center rounded-4xl leading-8">规划</div>
        <div>
          <div class="flex pb-2 pl-2" style="border-left: 2px solid black">
            <span>建筑面积:</span>
            <input
              type="text"
              v-model="floorMessage.planning.area"
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
              v-model="floorMessage.planning.design"
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
              v-model="floorMessage.forsee.area"
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
              v-model="floorMessage.forsee.design"
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
              v-model="floorMessage.measured.area"
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
              v-model="floorMessage.measured.design"
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
              v-model="floorMessage.rent.area"
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
              v-model="floorMessage.rent.design"
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
  <div class="w-500px mx-auto mt-20">
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <div class="el-upload__text"> 已添加<em>1</em>期，<em>继续添加</em> </div>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // 引入图标
  import { Icon } from '@iconify/vue';

  const floorMessage = ref({
    periodization: '', // 项目分期
    area: '', // 归属区域
    message: {
      number: '', // 楼栋号
      unity: '', // 楼栋单元
    },
    floor: {
      number: '', // 楼层数
      room: '', // 每层间数
    },
    type: '办公楼', // 产品类型
    filter: {
      filter1: false, // 筛选条件1
      filter2: false, // 筛选条件2
    },
    roomNumber: '', // 房间号前缀
    room: '', // 房间数量
    planning: {
      area: '', // 规划用地面积
      design: '', // 规划套内面积
    },
    forsee: {
      area: '', // 预测用地面积
      design: '', // 预测套内面积
    },
    measured: {
      area: '', // 实测用地面积
      design: '', // 实测套内面积
    },
    rent: {
      area: '', // 可租用地面积
      design: '', // 可租套内面积
    },
  });
</script>

<style scoped></style>
