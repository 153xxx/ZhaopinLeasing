import { ref } from 'vue';
import { DataType, TableColumnType } from '/#/investment-data';
export const dataSource = ref<DataType[]>([
  {
    id: 1,
    name: '张三',
    phone: '123456789',
    waiter: '清晨',
    intention: 'B',
    customerCognitiveApproach: '行业协会',
    lastContactTime: '2022-01-01',
    dateNextFollowup: '2022-01-01',
    createTime: '2022-01-01',
    status: 1,
  },
  {
    id: 2,
    name: '李四',
    phone: '123456789',
    waiter: '清晨',
    intention: 'B',
    customerCognitiveApproach: '行业协会',
    lastContactTime: '2022-01-01',
    dateNextFollowup: '2022-01-01',
    createTime: '2022-01-01',
    status: 1,
  },
  {
    id: 3,
    name: '王五',
    phone: '123456789',
    waiter: '清晨',
    intention: 'B',
    customerCognitiveApproach: '行业协会',
    lastContactTime: '2022-01-01',
    dateNextFollowup: '2022-01-01',
    createTime: '2022-01-01',
    status: 2,
  },
]);
export const columns = ref<TableColumnType[]>([
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '招商人员',
    dataIndex: 'waiter',
    key: 'waiter',
  },
  {
    title: '意向类型',
    dataIndex: 'intention',
    key: 'intention',
  },
  {
    title: '客户认知途径',
    dataIndex: 'customerCognitiveApproach',
    key: 'customerCognitiveApproach',
  },
  {
    title: '最近一次联系时间',
    dataIndex: 'lastContactTime',
    key: 'lastContactTime',
  },
  {
    title: '下次跟进时间',
    dataIndex: 'dateNextFollowup',
    key: 'dateNextFollowup',
  },
  {
    title: '创建日期',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
]);
