import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/assetManage',
  name: 'assetManage',
  component: LAYOUT,
  redirect: '/assetManage/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'fluent-mdl2:fixed-asset-management',
    title: t('资产管理'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'assetManagePage',
      component: () => import('/@/views/assetManage/index.vue'),
      meta: {
        title: t('首页'),
        icon: 'oui:index-edit',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
