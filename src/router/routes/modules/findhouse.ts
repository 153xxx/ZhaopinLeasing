import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const investmentManage: AppRouteModule = {
  path: '/findhouse',
  name: 'Findhouse',
  component: LAYOUT,
  redirect: '/findhouse/analysis/index.vue',
  meta: {
    orderNo: 11,
    icon: 'eos-icons:3d-print',
    title: t('巡房管理'),
  },
  children: [
    {
      path: 'analysis',
      name: 'analysis',
      component: () => import('/@/views/workbench/components/findhouse/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('巡房管理1'),
      },
    },
    {
      path: 'housemark',
      name: 'housemark',
      component: () => import('/@/views/workbench/components/findhouse/housemark/index.vue'),
      meta: {
        // affix: true,
        title: t('巡房管理2'),
      },
    },
    {
      path: 'seehouse',
      name: 'seehouse',
      component: () => import('/@/views/workbench/components/findhouse/seehouse/index.vue'),
      meta: {
        // affix: true,
        title: t('巡房管理3'),
      },
    },
  ],
};

export default investmentManage;
