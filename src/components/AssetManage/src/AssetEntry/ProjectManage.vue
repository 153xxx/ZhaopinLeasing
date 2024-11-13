<template>
  <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
    <el-form-item label="项目名称" prop="name" :rules="{ required: 'true', tigger: 'blur' }">
      <el-input
        v-model="projectMessage.name"
        placeholder="请输入项目名称"
        size="large"
        style="width: 200px"
      />
    </el-form-item>
  </el-form>
  <div class="font-bold">项目基本信息</div>
  <div class="flex justify-around">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目编号" prop="id">
        <el-input
          v-model="projectMessage.id"
          placeholder="请输入项目编号"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目推广名称" prop="promote">
        <el-input
          v-model="projectMessage.promote"
          placeholder="请输入项目推广名称"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="权益比例" prop="percent">
        <el-input
          v-model="projectMessage.percent"
          placeholder="请输入项目比例"
          size="large"
          style="width: 200px"
        >
          <template #suffix><Icon icon="bi:percent" width="16" height="16" /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目地址" prop="promote" :rules="{ required: 'true', tigger: 'blur' }">
        <el-input
          v-model="projectMessage.address"
          style="width: 200px"
          placeholder="请输入小区地址"
          size="large"
        >
          <template #prepend>
            <el-select
              v-model="projectMessage.province"
              style="width: 100px"
              filterable
              size="large"
            >
              <el-option-group label="湖北省">
                <el-option label="武汉市" value="武汉市" />
                <el-option lable="黄石市" value="黄石市" />
                <el-option label="十堰市" value="十堰市" />
                <el-option label="襄阳市" value="襄阳市" />
                <el-option label="荆州市" value="荆州市" />
              </el-option-group>
              <el-option-group label="广东省">
                <el-option label="广州市" value="广州市" />
                <el-option label="深圳市" value="深圳市" />
                <el-option label="佛山市" value="佛山市" />
                <el-option label="东莞市" value="东莞市" />
                <el-option label="中山市" value="中山市" />
              </el-option-group>
              <el-option-group label="浙江省">
                <el-option lable="苏州市" value="苏州市" />
                <el-option label="南京市" value="南京市" />
                <el-option label="无锡市" value="无锡市" />
                <el-option label="常州市" value="常州市" />
                <el-option label="扬州市" value="扬州市" />
              </el-option-group>
            </el-select>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
  <div class="flex justify-around w-720px">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目所属城市公司" prop="company">
        <el-input
          v-model="projectMessage.company"
          placeholder="请输入项目所属城市公司"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目所属法人公司" prop="corporation">
        <el-input
          v-model="projectMessage.corporation"
          placeholder="请输入项目所属法人公司"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目状态" prop="status">
        <el-select v-model="projectMessage.status" size="large" style="width: 200px">
          <el-option label="在售" value="在售" />
          <el-option label="售罄" value="售罄" />
          <el-option label="预售" value="预售" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
  <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
    <el-form-item label="项目描述" prop="description">
      <el-input
        v-model="projectMessage.description"
        style="width: 440px"
        :rows="2"
        placeholder="项目规划、引入行业、运营目标..."
        show-word-limit
        maxlength="2000"
        type="textarea"
      />
    </el-form-item>
  </el-form>
  <el-upload action="#" list-type="picture-card" :auto-upload="false">
    <el-icon><Plus /></el-icon>
    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
            v-show="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <el-icon><Download /></el-icon>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
  <div class="font-bold">项目规划指标</div>
  <div class="flex justify-around">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="用地面积" prop="area">
        <el-input
          v-model="projectMessage.area"
          placeholder="请输入用地面积"
          size="large"
          style="width: 200px"
          ><template #suffix
            ><Icon icon="tabler:meter-square" width="16" height="16" style="color: #8c8c8c"
          /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="总建筑面积" prop="totalArea">
        <el-input
          v-model="projectMessage.totalArea"
          placeholder="请输入总建筑面积"
          size="large"
          style="width: 200px"
          ><template #suffix
            ><Icon icon="tabler:meter-square" width="16" height="16" style="color: #8c8c8c"
          /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="计算建筑面积" prop="computeArea">
        <el-input
          v-model="projectMessage.computeArea"
          placeholder="请输入计算建筑面积"
          size="large"
          style="width: 200px"
          ><template #suffix
            ><Icon icon="tabler:meter-square" width="16" height="16" style="color: #8c8c8c"
          /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="容积率" prop="floorAreaRatio">
        <el-input
          v-model="projectMessage.floorAreaRatio"
          placeholder="请输入容积率"
          size="large"
          style="width: 200px"
        >
          <template #suffix><Icon icon="bi:percent" width="16" height="16" /></template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
  <div class="flex justify-around">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="建筑密度" prop="buildingDensity">
        <el-input
          v-model="projectMessage.buildingDensity"
          placeholder="请输入建筑密度"
          size="large"
          style="width: 200px"
        >
          <template #suffix><Icon icon="bi:percent" width="16" height="16" /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="绿化率" prop="greeningRate">
        <el-input
          v-model="projectMessage.greeningRate"
          placeholder="请输入绿化率"
          size="large"
          style="width: 200px"
        >
          <template #suffix><Icon icon="bi:percent" width="16" height="16" /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="可售面积" prop="saleArea">
        <el-input
          v-model="projectMessage.saleArea"
          placeholder="请输入可售面积"
          size="large"
          style="width: 200px"
          ><template #suffix
            ><Icon icon="tabler:meter-square" width="16" height="16" style="color: #8c8c8c"
          /></template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="可租面积" prop="rentArea">
        <el-input
          v-model="projectMessage.rentArea"
          placeholder="请输入可租面积"
          size="large"
          style="width: 200px"
          ><template #suffix
            ><Icon icon="tabler:meter-square" width="16" height="16" style="color: #8c8c8c"
          /></template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
  <div class="flex justify-around">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="车位配比" prop="parkingRatio">
        <el-input
          v-model="projectMessage.parkingRatio"
          placeholder="请输入车位配比"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="车位数量" prop="parkingSpace">
        <el-input
          v-model="projectMessage.parkingSpace"
          placeholder="请输入车位数量"
          size="large"
          style="width: 200px"
          ><template #suffix>个</template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="地上车位数量" prop="parkingLot">
        <el-input
          v-model="projectMessage.parkingLot"
          placeholder="请输入地上车位数量"
          size="large"
          style="width: 200px"
          ><template #suffix>个</template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="地下车位数量" prop="garage">
        <el-input
          v-model="projectMessage.garage"
          placeholder="请输入地下车位数量"
          size="large"
          style="width: 200px"
          ><template #suffix>个</template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
  <div class="font-bold">项目分期信息</div>
  <div class="flex justify-around">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item
        label="项目分期"
        prop="periodization"
        :rules="{ required: 'true', tigger: 'blur' }"
      >
        <el-input
          v-model="projectMessage.periodization"
          placeholder="请输入项目分期"
          size="large"
          style="width: 200px"
        />
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目开工时间" prop="openTime">
        <el-date-picker
          v-model="projectMessage.openTime"
          type="datetime"
          placeholder="请选择项目开工时间"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="MMM DD, YYYY"
          time-format="HH:mm"
          size="large"
          style="width: 200px"
        >
          <template #prev-month>
            <el-icon><CaretLeft /></el-icon>
          </template>
          <template #next-month>
            <el-icon><CaretRight /></el-icon>
          </template>
          <template #prev-year>
            <el-icon>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </el-icon>
          </template>
          <template #next-year>
            <el-icon>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </el-icon>
          </template>
        </el-date-picker>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目竣工时间" prop="finishTime">
        <el-date-picker
          v-model="projectMessage.finishTime"
          type="datetime"
          placeholder="请输入项目竣工时间"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="MMM DD, YYYY"
          time-format="HH:mm"
          size="large"
          style="width: 200px"
        >
          <template #prev-month>
            <el-icon><CaretLeft /></el-icon>
          </template>
          <template #next-month>
            <el-icon><CaretRight /></el-icon>
          </template>
          <template #prev-year>
            <el-icon>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </el-icon>
          </template>
          <template #next-year>
            <el-icon>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </el-icon>
          </template>
        </el-date-picker>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="项目交付时间" prop="delivery">
        <el-date-picker
          v-model="projectMessage.delivery"
          type="datetime"
          placeholder="请输入项目交付时间"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="MMM DD, YYYY"
          time-format="HH:mm"
          size="large"
          style="width: 200px"
        >
          <template #prev-month>
            <el-icon><CaretLeft /></el-icon>
          </template>
          <template #next-month>
            <el-icon><CaretRight /></el-icon>
          </template>
          <template #prev-year>
            <el-icon>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </el-icon>
          </template>
          <template #next-year>
            <el-icon>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </el-icon>
          </template>
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
  <div class="w-400px mx-auto">
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <div class="el-upload__text"> 已添加<em>1</em>期，<em>继续添加</em> </div>
    </el-upload>
  </div>
  <div class="font-bold">负责人信息</div>
  <div class="flex justify-around w-420px">
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item
        label="所属门店(部门)"
        prop="section"
        :rules="{ required: 'true', tigger: 'blur' }"
      >
        <el-select v-model="projectMessage.section" size="large" style="width: 200px">
          <el-option label="公寓测试门店" value="公寓测试门店" />
          <el-option label="写字楼测试门店" value="写字楼测试门店" />
          <el-option label="厂房测试门店" value="厂房测试门店" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form label-width="auto" status-icon style="max-width: 600px" label-position="top">
      <el-form-item label="负责人" prop="person">
        <el-select v-model="projectMessage.person" size="large" style="width: 200px">
          <el-option label="王子郭" value="王子郭" />
          <el-option label="马孟起" value="马孟起" />
          <el-option label="张牧之" value="张牧之" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // 引入图标
  import { Icon } from '@iconify/vue';
  import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue';

  import type { UploadFile } from 'element-plus';

  const dialogImageUrl = ref('');
  const dialogVisible = ref(false);
  const disabled = ref(false);

  const handleRemove = (file: UploadFile) => {
    console.log(file);
  };

  const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!;
    dialogVisible.value = true;
  };

  const handleDownload = (file: UploadFile) => {
    console.log(file);
  };

  const projectMessage = ref({
    name: '', // 项目名称
    id: '', // 项目编号
    promote: '', // 项目推广名称
    percent: '', // 权益比例
    province: '武汉市', // 项目地址
    address: '', //小区地址
    company: '', // 项目所属城市公司
    corporation: '', // 项目所属法人公司
    status: '在售', // 项目状态
    description: '', // 项目描述
    area: '', // 用地面积
    totalArea: '', // 总建筑面积
    computeArea: '', // 计算建筑面积
    floorAreaRatio: '', // 容积率
    buildingDensity: '', // 建筑密度
    greeningRate: '', // 绿化率
    saleArea: '', // 可售面积
    rentArea: '', // 可租面积
    parkingRatio: '', // 车位配比
    parkingSpace: '', // 车位数量
    parkingLot: '', // 地上车位数量
    garage: '', // 地下车位数量
    periodization: '', // 分期信息
    openTime: '', // 项目开工时间
    finishTime: '', // 项目竣工时间
    delivery: '', // 项目交付时间
    person: '王子郭', // 项目负责人
    section: '公寓测试门店', // 项目所属门店(部门)
  });
</script>

<style scoped></style>
