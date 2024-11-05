<script lang="ts" setup>
  import { reactive, ref, watch } from 'vue';
  import {
    Form,
    Input,
    Select,
    Checkbox,
    CheckboxGroup,
    FormItem,
    RadioGroup,
    RadioButton,
    Space,
    SelectOption,
    TimePicker,
    message,
    DatePicker,
    Upload,
    Textarea,
    UploadChangeParam,
  } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  // import { SmileOutlined } from '@ant-design/icons-vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import dayjs, { Dayjs } from 'dayjs';

  const value = ref<Dayjs>();

  const value1 = ref<Dayjs>();

  const value2 = ref<Dayjs>();

  const value3 = ref<string>('身份证');

  const value4 = ref<string>('填写后租客可见');

  const value5 = ref<Dayjs>(dayjs('08:00:00', 'HH:mm:ss'));

  const useForm = Form.useForm;

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
    <Form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <div>
        <FormItem label="房源信息" :name="['name']" :rules="validateInfos.name" class="interval" />
        <Input
          v-model="modelRef.name"
          placeholder="请输入房源编号/房源地址/项目名称/门牌号信息 检索房源"
        />
      </div>
      <div class="interval">
        <div>
          <FormItem
            label="定金"
            :name="['region']"
            :rules="validateInfos.region"
            style="width: 300px; margin-bottom: 0px"
          />
          <div style="display: flex; justify-content: space-around">
            <Input prefix="￥" suffix="元" placeholder="请输入定金" />
            <RadioGroup size="small" model:value="value1" button-style="solid">
              <RadioButton value="a" size="small">未收款</RadioButton>
              <RadioButton value="b" size="small">已收款</RadioButton>
            </RadioGroup>
          </div>
          <div class="interval">
            收款方式:
            <Select v-model="modelRef.region" placeholder="现金" size="small">
              <SelectOption value="微信" />
              <SelectOption value="支付宝" />
            </Select>
          </div>
        </div>
      </div>
      <div class="interval">
        <FormItem label="实收日期" :name="['name']" :rules="validateInfos.name" class="interval" />
        <Space direction="vertical" :size="12">
          <DatePicker v-model:value="value1" />
        </Space>
        <TimePicker v-model:value="value5" />
      </div>
      <div class="addressFromc" style="font-weight: 700">预定人信息</div>
      <FormItem label="姓名" :name="['address']" :rules="validateInfos.address">
        <Input v-model="modelRef.name" placeholder="请输入姓名" />
      </FormItem>
      <FormItem label="电话" :name="['phoneNumber']" :rules="validateInfos.phoneNumber">
        <Input v-model="modelRef.name" placeholder="请输入电话" />
      </FormItem>
      <Space direction="vertical">
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
      <div class="interval"><p style="font-weight: 700">预定信息:</p></div>
      <div style="display: flex; justify-content: space-around" class="interval">
        <div>
          <div>
            预定类型:
            <Select v-model="modelRef.region" placeholder="请选择类型">
              <SelectOption value="-" />
              <SelectOption value="--" />
            </Select>
          </div>
        </div>
        <div>
          <Space direction="vertical" :size="12">
            <DatePicker v-model:value="value4" />
          </Space>
        </div>
        <div></div>
      </div>
      <div class="interval"> 备注 </div>
      <Textarea v-model:value="value2" show-count :maxlength="200" />
      <div class="interval">
        <div>
          预定凭证
          <span style="color: orange">(附件支持格式:jpg、png、jpeg)</span>
        </div>
        <Upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploaderoth"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div class="ant-upload-text">上传图片</div>
          </div>
        </Upload>
      </div>
      <div class="interval">所属门店(部门)/维护人</div>
      <div style="display: flex; justify-content: space-around" class="interval">
        <div>
          <div>
            <p style="font-size: 10px; color: #999">所属门店(部门)</p>
            <Select v-model="modelRef.region" placeholder="E+SPACE">
              <SelectOption value="-" />
              <SelectOption value="--" />
            </Select>
          </div>
        </div>
        <div>
          <div>
            <p style="font-size: 10px; color: #999">维护人</p>
            <Select v-model="modelRef.region" placeholder="李江涛">
              <SelectOption value="万欣" />
              <SelectOption value="王家辉" />
            </Select>
          </div>
        </div>
      </div>
      <CheckboxGroup v-model="modelRef.type" style="margin-top: 30px">
        <Checkbox value="1" name="type">邀请租容签字</Checkbox>
      </CheckboxGroup>
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
    width: 90px;
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
