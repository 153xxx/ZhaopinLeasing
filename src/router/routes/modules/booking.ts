import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/booking',
  name: 'Booking',
  component: LAYOUT,
  redirect: '/booking/index',
  meta: {
    hideChildrenInMenu: false,
    icon: 'eos-icons:content-lifecycle-management',
    title: '预定管理',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'Booking',
      component: () => import('/@/views/workbench/components/booking/index.vue'),
      meta: {
        title: '预定首页',
        icon: 'eos-icons:content-lifecycle-management',
        hideMenu: false,
      },
    },
  ],
};

export default dashboard;
