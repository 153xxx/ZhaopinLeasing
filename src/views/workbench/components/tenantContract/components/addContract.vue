<script lang="ts" setup>
  import { reactive, ref, watch, toRefs, computed } from 'vue';
  import {
    Form,
    Input,
    Select,
    FormItem,
    Space,
    SelectOption,
    message,
    DatePicker,
    Upload,
    Textarea,
    UploadChangeParam,
    Collapse,
    CollapsePanel,
    RangePicker,
    InputGroup,
  } from 'ant-design-vue';
  import { CaretRightOutlined } from '@ant-design/icons-vue';
  import { PageWrapper } from '/@/components/Page';
  import { Moment } from 'moment';
  // import { SmileOutlined } from '@ant-design/icons-vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { Dayjs } from 'dayjs';

  const value = ref<Dayjs>();

  const value1 = ref('请选择');

  const value2 = ref<string>('0');

  const value3 = ref<string>('身份证');

  const value4 = ref<string>('请输入');

  const value5 = ref<Moment[]>([]);

  const value6 = ref<Moment>();

  const value7 = ref<string>('父母');

  const value8 = ref<string>('银行');

  const value9 = ref<string>('付1');

  const value10 = ref<string>('押2');

  const value11 = ref<string>('不自定义');

  const value12 = ref<string>('不设置');

  const value13 = ref<string>('请输入内容');

  const value14 = ref<string>('请输入内容');

  const value15 = ref([]);

  const value16 = ref<string>('全民营销');

  const value17 = ref<string>('否');

  const value18 = ref<string>('清尘');

  const value19 = ref<Moment>();

  const useForm = Form.useForm;

  const options = [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }));

  const provinceData = ['湖北', '广东'] as const;
  const cityData = {
    湖北: ['汉川', '武汉', '黄石'],
    广东: ['深圳', '东莞'],
  } as const;

  const state = reactive({
    province: provinceData[0],
    provinceData,
    cityData,
    secondCity: cityData[provinceData[0]][0],
  });

  const cities = computed(() => {
    return state.cityData[state.province];
  });

  watch(
    () => state.province,
    (val) => {
      state.secondCity = state.cityData[val][0];
    },
  );

  const activeKey = ref(['1']);
  const customStyle =
    'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';

  // 使用toRefs将响应式对象的每个属性转换为单独的ref
  const { province, secondCity } = toRefs(state);

  const modelRef = reactive({
    name: '',
    region: undefined,
    type: [],
  });
  const rulesRef = reactive({
    name: [
      {
        required: true,
        message: '请输入房源编号/房源地址/项目名称/门牌号信息 检索房源',
      },
    ],
    region: [
      {
        required: true,
        message: '请输入定金',
      },
    ],
    address: [
      {
        required: true,
        message: '请输入姓名',
      },
    ],
    phoneNumber: [
      {
        required: true,
        message: '请输入电话',
      },
    ],
    type: [
      {
        required: true,
        message: 'Please select type',
        type: 'array',
      },
    ],
  });
  const { validateInfos } = useForm(modelRef, rulesRef);
  // const onSubmit = () => {
  //   validate()
  //     .then(() => {
  //       console.log(toRaw(modelRef));
  //     })
  //     .catch((err) => {
  //       console.log('error', err);
  //     });
  // };

  function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  }

  const fileList = ref([]);
  const loading = ref<boolean>(false);
  const imageUrl = ref<string>('');

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
      loading.value = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (base64Url: string) => {
        imageUrl.value = base64Url;
        loading.value = false;
      });
    }
    if (info.file.status === 'error') {
      loading.value = false;
      message.error('upload error');
    }
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG or PNG files!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!');
      return false;
    }
    return true;
  };

  watch(value, () => {
    console.log(value.value);
  });
</script>
<template>
  <PageWrapper>
    <Form :label-col="{ span: 5 }" :wrapper-col="{ span: 20 }">
      <div style="display: flex; justify-content: space-around">
        <div>
          <FormItem
            label="房源信息"
            :name="['name']"
            :rules="validateInfos.name"
            class="interval"
            style="display: flex; flex-direction: column"
          >
            <Input
              v-model="modelRef.name"
              placeholder="请输入房源编号/房源地址/项目名称/门牌号信息检索房源"
            />
          </FormItem>
        </div>
        <div>
          <FormItem
            label="品牌"
            :name="['name']"
            :rules="validateInfos.name"
            class="interval"
            style="display: flex; flex-direction: column"
          >
            <Input v-model="modelRef.name" placeholder="请输入品牌名" />
          </FormItem>
        </div>
      </div>
      <div class="interval">
        <div style="font-weight: 700">承租信息</div>
        <div style="display: flex; justify-content: space-around">
          <div style="display: flex">
            <div>
              <FormItem
                label="姓名"
                :name="['name']"
                :rules="validateInfos.name"
                style="flex-direction: column"
              >
                <Input placeholder="请输入姓名" />
              </FormItem>
            </div>
          </div>
          <div>
            <FormItem
              label="电话"
              :name="['phoneNumber']"
              :rules="validateInfos.phoneNumber"
              style="flex-direction: column"
            >
              <Input v-model="modelRef.name" placeholder="请输入电话" />
            </FormItem>
          </div>
          <div>
            <Space direction="vertical" style="flex-direction: column">
              身份信息
              <Input>
                <template #addonBefore>
                  <Select v-model:value="value3" style="width: 90px">
                    <SelectOption value="身份证">身份证</SelectOption>
                    <SelectOption value="驾驶证">驾驶证</SelectOption>
                  </Select>
                </template>
              </Input>
            </Space>
          </div>
        </div>
      </div>
      <div class="interval">
        <FormItem
          label="工作地点"
          :name="['address']"
          :rules="validateInfos.address"
          style="display: flex; justify-content: space-around"
        >
          <Input v-model="modelRef.name" placeholder="请输入工作地点" />
        </FormItem>
      </div>
      <div style="margin-top: 10px">
        证件信息
        <span style="color: orange">(附件支持格式:jpg、png、jpeg)</span>
      </div>
      <div style="display: flex; justify-content: space-around" class="interval">
        <Upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div class="ant-upload-text">身份证正面</div>
          </div>
        </Upload>
        <Upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div class="ant-upload-text">身份证反面</div>
          </div>
        </Upload>
        <Upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div class="ant-upload-text">手持身份证</div>
          </div>
        </Upload>
        <Upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div class="ant-upload-text">其他证件</div>
          </div>
        </Upload>
      </div>
      <div style="display: flex; justify-content: space-around" class="interval">
        <div style="flex-direction: column">
          <div>出生日期</div>
          <div>
            <Space direction="vertical">
              <DatePicker v-model:value="value6" />
            </Space>
          </div>
        </div>
        <div>
          <div>籍贯</div>
          <div>
            <Space>
              <Select
                v-model:value="province"
                style="width: 120px"
                :options="provinceData.map((pro) => ({ value: pro }))"
              />
              <Select
                v-model:value="secondCity"
                style="width: 120px"
                :options="cities.map((city) => ({ value: city }))"
              />
            </Space>
          </div>
        </div>
        <div>
          <div>联系地址</div>
          <div>
            <Input v-model="modelRef.name" placeholder="请输入联系地址" />
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-around" class="interval">
        <div>
          <div>邮箱</div>
          <div>
            <Input v-model="modelRef.name" placeholder="请输入邮箱" />
          </div>
        </div>
        <div>
          <div>学历</div>
          <div>
            <Select ref="select" v-model:value="value1" style="width: 120px" @change="handleChange">
              <SelectOption value="博士">博士</SelectOption>
              <SelectOption value="本科">本科</SelectOption>
              <SelectOption value="大专">大专</SelectOption>
            </Select>
          </div>
        </div>
        <div>
          <div>爱好</div>
          <div>
            <Select ref="select" v-model:value="value1" style="width: 120px" @change="handleChange">
              <SelectOption value="打游戏">打游戏</SelectOption>
              <SelectOption value="敲代码">敲代码</SelectOption>
            </Select>
          </div>
        </div>
        <div>
          <div>职业</div>
          <div>
            <Select ref="select" v-model:value="value1" style="width: 120px" @change="handleChange">
              <SelectOption value="web前端工程师">web前端工程师</SelectOption>
              <SelectOption value="软件开发">软件开发</SelectOption>
            </Select>
          </div>
        </div>
        <div>
          <div>工作单位</div>
          <div>
            <Input v-model="modelRef.name" placeholder="请输入工作单位" />
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-around" class="interval">
        <div>
          <div>紧急联系人姓名</div>
          <div>
            <Space direction="vertical" style="flex-direction: column">
              <Input>
                <template #addonBefore>
                  <Select v-model:value="value7" style="width: 90px">
                    <SelectOption value="父亲">父亲</SelectOption>
                    <SelectOption value="母亲">母亲</SelectOption>
                  </Select>
                </template>
              </Input>
            </Space>
          </div>
        </div>
        <div>
          <div>紧急联系人电话</div>
          <div>
            <Input v-model="modelRef.name" placeholder="请输入" />
          </div>
        </div>
        <div>
          <div>承租人收付款账号信息</div>
          <div>
            <Space direction="vertical" style="flex-direction: column">
              <Input>
                <template #addonBefore>
                  <Select v-model:value="value8" style="width: 90px">
                    <SelectOption value="银联">银联</SelectOption>
                    <SelectOption value="中国银行">中国银行</SelectOption>
                  </Select>
                </template>
              </Input>
            </Space>
          </div>
        </div>
      </div>
      <div class="interval">
        <Collapse v-model:activeKey="activeKey" :bordered="false">
          <template #expandIcon="{ isActive }">
            <caret-right-outlined :rotate="isActive ? 90 : 0" />
          </template>
          <CollapsePanel key="1" header="更多信息" :style="customStyle">
            <div>
              <div style="font-weight: 700">约租信息</div>
              <div style="display: flex; justify-content: space-around" class="interval">
                <div>
                  <div>签约类型</div>
                  <div>
                    <Select
                      ref="select"
                      v-model:value="value1"
                      style="width: 120px"
                      @change="handleChange"
                    >
                      <SelectOption value="新签">新签</SelectOption>
                      <SelectOption value="旧签">旧签</SelectOption>
                    </Select>
                  </div>
                </div>
                <div>
                  <div>合同编号</div>
                  <div>
                    <Input v-model="modelRef.name" placeholder="请输入" />
                  </div>
                </div>
                <div>
                  <div>合同周期</div>
                  <div>
                    <Space direction="vertical">
                      <RangePicker v-model:value="value5" />
                    </Space>
                  </div>
                </div>
              </div>
              <div style="display: flex; justify-content: space-around" class="interval">
                <div>
                  <div>收款方式</div>
                  <div>
                    <InputGroup compact>
                      <Select v-model:value="value9">
                        <SelectOption value="付2">付2</SelectOption>
                        <SelectOption value="付4">付4</SelectOption>
                      </Select>
                      <Select v-model:value="value10">
                        <SelectOption value="押6">押6</SelectOption>
                        <SelectOption value="押8">押8</SelectOption>
                      </Select>
                    </InputGroup>
                  </div>
                </div>
                <div>
                  <div>月租金</div>
                  <div>
                    <Input suffix="元/月" />
                  </div>
                </div>
                <div>
                  <div>押金</div>
                  <div>
                    <Input suffix="元/月" />
                  </div>
                </div>
              </div>
              <div style="display: flex; justify-content: space-around" class="interval">
                <div>
                  <div>收租日设置</div>
                  <div>
                    <InputGroup compact>
                      <Select v-model:value="value4">
                        <SelectOption value="提前收租">提前收租</SelectOption>
                        <SelectOption value="之后收租">之后收租</SelectOption>
                      </Select>
                      <Input
                        style="width: 50%"
                        v-model:value="value2"
                        suffix="天"
                        prefix="提前/之后"
                      />
                    </InputGroup>
                  </div>
                </div>
                <div>
                  <div>自定义付款周期设置</div>
                  <div>
                    <Select v-model:value="value11">
                      <SelectOption value="不自定义">不自定义</SelectOption>
                      <SelectOption value="自定义">自定义</SelectOption>
                    </Select>
                  </div>
                </div>
                <div>
                  <div>零散租期设置</div>
                  <div>
                    <Select v-model:value="value12">
                      <SelectOption value="不设置">不设置</SelectOption>
                      <SelectOption value="设置">设置</SelectOption>
                    </Select>
                  </div>
                </div>
              </div>
              <div class="interval">
                <div>合同补充说明</div>
                <div>
                  <Textarea v-model:value="value13" showCount :maxlength="100" />
                </div>
              </div>
              <div class="interval">
                <div>合同附件<span style="color: orange">(附件支持格式:jpg、png、jpeg)</span></div>
                <div>
                  <Upload
                    v-model:file-list="fileList"
                    name="avatar"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :show-upload-list="false"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :before-upload="beforeUpload"
                    @change="handleChange"
                  >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                    <div v-else style="width: 300px">
                      <LoadingOutlined v-if="loading" />
                      <PlusOutlined v-else />
                      <div class="ant-upload-text">合同附件</div>
                    </div>
                  </Upload>
                </div>
              </div>
              <div>
                <div style="font-size: 16px">物业交割单</div>
                <div>
                  <div>备注<span style="color: orange">(仅内部可见)</span></div>
                  <div>
                    <Textarea v-model:value="value14" showCount :maxlength="100" />
                  </div>
                </div>
              </div>
              <div class="interval">
                <div>标签<span style="color: orange">(仅内部可见)</span></div>
                <div>
                  <Select
                    v-model:value="value15"
                    mode="tags"
                    style="width: 100%"
                    placeholder="可输入补充标签,回车添加"
                    :options="options"
                    @change="handleChange"
                  />
                </div>
              </div>
              <div class="interval">
                <div style="font-size: 16px">租赁提成信息</div>
                <div style="display: flex; justify-content: space-around" class="interval">
                  <div>
                    <div>租赁提成标准</div>
                    <div>
                      <Select v-model:value="value16">
                        <SelectOption value="全民营销">全民营销</SelectOption>
                        <SelectOption value="私人营销">私人营销</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div>是否为行业内客户</div>
                    <div>
                      <Select v-model:value="value17">
                        <SelectOption value="否">否</SelectOption>
                        <SelectOption value="是">是</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div>全民营销推荐人姓名</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div>
                    <div>全民营销推荐人电话</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                </div>
              </div>
              <div class="interval">
                <div style="font-weight: 700" class="interval">签约信息</div>
                <div style="display: flex; justify-content: space-around" class="interval">
                  <div>
                    <div>签约人</div>
                    <div>
                      <Select v-model:value="value18">
                        <SelectOption value="清尘">清尘</SelectOption>
                        <SelectOption value="邦万">邦万</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div>签约时间</div>
                    <div>
                      <Space direction="vertical">
                        <DatePicker v-model:value="value19" />
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CollapsePanel>
        </Collapse>
      </div>
    </Form>
  </PageWrapper>
</template>
<style scoped>
  .moneyForm {
    display: flex;
  }
  .avatar-uploader > .ant-upload {
    width: 60px;
    height: 60px;
    margin: 10px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  .avatar-uploaderoth {
    width: 120px;
    height: 120px;
    margin: 10px;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .interval {
    margin: 10px;
  }
</style>
