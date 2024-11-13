import { defHttp } from '/@/utils/http/axios';
<<<<<<< HEAD

export const InvestmentManagementAPI = () =>
  defHttp.get({
    baseURL: '/investment',
=======
import { investmentModel } from '/@/api/demo/model/investmentModel';

enum Api {
  INVE_MANAGEMENT = '/investment/management',
}

export const InvestmentManagementAPI = () =>
  defHttp.get<investmentModel[]>({
    url: Api.INVE_MANAGEMENT,
    baseURL: 'https://apifoxmock.com/m1/4147612-0-default',
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
  });
