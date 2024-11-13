import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const investmentManage: AppRouteModule = {
  path: '/investment',
  name: 'Investment',
  component: LAYOUT,
  redirect: '/investment/management',
  meta: {
    orderNo: 11,
    icon: 'eos-icons:content-lifecycle-management',
    title: t('招商管理'),
  },
  children: [
    {
      path: 'management',
      name: 'management',
      component: () => import('/@/views/workbench/components/management/index.vue'),
      meta: {
        // affix: true,
        title: t('招商管理'),
      },
    },
  ],
};

export default investmentManage;
