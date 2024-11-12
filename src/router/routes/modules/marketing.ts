import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
//import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/marketing',
  name: 'Marketing',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '营销模块',
  },
  children: [
    {
      path: 'mark',
      name: 'Mark',
      component: () => import('/@/views/marketing/availability/index.vue'),
      meta: {
        // affix: true,
        title: '房源推广',
      },
    },
    {
      path: 'marke',
      name: 'Marke',
      component: () => import('/@/views/marketing/promotion/index.vue'),
      meta: {
        title: '推广配置',
      },
    },
  ],
};

export default dashboard;