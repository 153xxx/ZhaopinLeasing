import { defHttp } from '/@/utils/http/axios';

export function AssetManageAPI() {
  return defHttp.get({
    url: '/assetmanage',
  });
}
