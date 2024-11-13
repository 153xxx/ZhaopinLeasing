import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/workbench',
  name: 'workbench',
  component: LAYOUT,
  redirect: '/workbench/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'pajamas:work',
    title: '工作台',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('/@/views/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
        icon: 'simple-icons:workbench-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
