import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/workbench',
  name: 'Workbench',
  component: LAYOUT,
  redirect: '/workbench/index',
  meta: {
    hideChildrenInMenu: false,
    icon: 'eos-icons:content-lifecycle-management',
    title: '工作台',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'WorkPage',
      component: () => import('/@/views/workbench/index.vue'),
      meta: {
        title: '工作台页面',
        icon: 'eos-icons:content-lifecycle-management',
        hideMenu: false,
      },
    },
  ],
};

export default dashboard;
