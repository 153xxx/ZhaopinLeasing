import { defHttp } from '/@/utils/http/axios';

export function workBenchData() {
  return defHttp.get({ url: '/workbench' });
}
