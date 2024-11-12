import { defHttp } from '/@/utils/http/axios';

export const InvestmentManagementAPI = () =>
  defHttp.get({
    baseURL: '/investment',
  });
