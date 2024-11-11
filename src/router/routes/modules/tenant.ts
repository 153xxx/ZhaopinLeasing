import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/tenant',
  name: 'Tenant',
  component: LAYOUT,
  redirect: '/tenant/index',
  meta: {
    hideChildrenInMenu: false,
    icon: 'simple-icons:about-dot-me',
    title: '租客合同',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'Tenant',
      component: () => import('/@/views/workbench/components/tenantContract/index.vue'),
      meta: {
        title: '合同首页',
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
  ],
};

export default dashboard;
