import { ref } from 'vue';
import { DataType, TableColumnType } from '/#/investment-data';
export const dataSource = ref<DataType[]>([
  {
    id: 1,
    name: '张三',
    phone: '123456789',
    waiter: '小丑',
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
    title: '意向类型',
    dataIndex: 'intention',
    key: 'intention',
  },
  {
    title: '客户状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '招商人员',
    dataIndex: 'waiter',
    key: 'waiter',
  },

  // {
  //   title: '客户认知途径',
  //   dataIndex: 'customerCognitiveApproach',
  //   key: 'customerCognitiveApproach',
  // },
  {
    title: '创建日期',
    dataIndex: 'createTime',
    key: 'createTime',
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
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
]);

// interface GroupItem {
//   title: string;
//   icon: string;
//   color: string;
//   desc: string;
//   date: string;
//   group: string;
// }

// interface NavItem {
//   title: string;
//   icon: string;
//   color: string;
// }

// interface DynamicInfoItem {
//   avatar: string;
//   name: string;
//   date: string;
//   desc: string;
// }

// export const navItems: NavItem[] = [
//   {
//     title: '首页',
//     icon: 'ion:home-outline',
//     color: '#1fdaca',
//   },
//   {
//     title: '仪表盘',
//     icon: 'ion:grid-outline',
//     color: '#bf0c2c',
//   },
//   {
//     title: '组件',
//     icon: 'ion:layers-outline',
//     color: '#e18525',
//   },
//   {
//     title: '系统管理',
//     icon: 'ion:settings-outline',
//     color: '#3fb27f',
//   },
//   {
//     title: '权限管理',
//     icon: 'ion:key-outline',
//     color: '#4daf1bc9',
//   },
//   {
//     title: '图表',
//     icon: 'ion:bar-chart-outline',
//     color: '#00d8ff',
//   },
// ];
