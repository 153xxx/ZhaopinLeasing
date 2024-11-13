/* eslint-disable prettier/prettier */
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

export default [
  {
    url: '/basic-api/investment',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess({
        // 添加 return 语句并使用对象包裹
        title: [
          '序号',
          '姓名',
          '客户电话',
          '客户类型',
          '意向类别',
          '客户状态',
          '招商人员',
          '创建日期',
          '最近一次联系时间',
          '下次跟进日期',
          '客户认知途径',
        ],
        data: [
          {
            id: 1,
            name: '太白',
            phone: '13800138000',
            type: 'A',
            status: '问询',
            people: '张三',
            date: '2021-08-01',
            contact: '2021-08-02',
            next: '2021-08-03',
            channel: '微信',
          },
          {
            id: 2,
            name: '润之',
            phone: '13800138000',
            type: 'A',
            status: '问询',
            people: '张三',
            date: '2021-08-01',
            contact: '2021-08-02',
            next: '2021-08-03',
            channel: '微信',
          },
          {
            id: 3,
            name: '少游',
            phone: '13800138000',
            type: 'A',
            status: '问询',
            people: '张三',
            date: '2021-08-01',
            contact: '2021-08-02',
            next: '2021-08-03',
            channel: '微信',
          },
        ],
      });
    },
  },
] as MockMethod[];
