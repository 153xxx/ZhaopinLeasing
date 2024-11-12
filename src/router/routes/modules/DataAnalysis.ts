import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const investmentManage: AppRouteModule = {
  path: '/DataAnalysis',
  name: 'DataAnalysis',
  component: LAYOUT,
  redirect: '/DataAnalysis/index.vue',
  meta: {
    orderNo: 11,
    icon: 'eos-icons:3d-print',
    title: t('数据分析'),
  },
  children: [
    {
      path: 'dataanalysis',
      name: 'dataanalysis',
      component: () => import('/@/views/DataAnalysis/index.vue'),
      meta: {
        // affix: true,
        title: t('数据分析'),
      },
    },
  ],
};

export default investmentManage;
