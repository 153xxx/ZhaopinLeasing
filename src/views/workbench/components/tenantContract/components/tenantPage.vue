<script setup>
  import { h, onMounted, reactive } from 'vue';
  import { Table, Dropdown, Menu } from 'ant-design-vue';
  // import { getWorkbenchData } from '/@/api/workbench/index';
  import Mock from 'mockjs';

  let data = reactive([]);

  const fetchData = () => {
    const mockData = Mock.mock({
      'data|20': [
        {
          numberId: '@increment()', // 递增的ID
          status:
            '@pick(["在租中","即将搬入","待签字","已到期","即将搬出","已退租","待结账","待确认","已作废",])', // 随机选择状态
          contractType: '@pick(["纸质合同", "电子合同"])', // 随机选择合同类型
          housingResource: `T005${randomBuilding()}${randomUnitAndRoom()}`, // 随机选择房源
          address: "@cfirst()-@natural('10000000000', '99999999000')", // 随机生成姓氏和电话号码
          rent: '@pick(["3000元/月", "6000元/月", "3000元/时", "6000元/时"])', // 随机生成租金，范围1000到5000，两位小数
          securityDeposit: '@float(1000, 6000, 0, 2)', // 随机生成押金
          paymentMethod: '@pick(["押一付一", "-"])', // 随机选择支付方式
          contractCycle: '@date("2024.10.15")~@date("2025.10.15")', // 合同周期，从当前日期到一年后
          checkIn: '@date()', // 随机生成入住日期
          controls: '操作', // 固定值
        },
      ],
    });
    data.value = mockData.data;
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'numberId',
      slots: { customRender: 'id' },
    },
    {
      title: '状态',
      className: 'status',
      dataIndex: 'status',
    },
    {
      title: '合同类型',
      dataIndex: 'contractType',
    },
    {
      title: '房源地址',
      dataIndex: 'housingResource',
    },
    {
      title: '租客信息',
      dataIndex: 'address',
    },
    {
      title: '租金',
      dataIndex: 'rent',
    },
    {
      title: '押金(元)',
      dataIndex: 'securityDeposit',
    },
    {
      title: '付款方式',
      dataIndex: 'paymentMethod',
    },
    {
      title: '合同周期',
      dataIndex: 'contractCycle',
    },
    {
      title: '签约时间',
      dataIndex: 'checkIn',
    },
    {
      title: '操作',
      dataIndex: 'controls',
      customRender: ({ text, record }) => renderControls({ text, record }),
    },
  ];

  // 随机生成楼栋信息
  const randomBuilding = () => {
    const buildings = ['测试楼栋B1栋'];
    return buildings[Math.floor(Math.random() * buildings.length)];
  };

  // 随机生成单元和房间号
  const randomUnitAndRoom = () => {
    const unit = '1单元';
    const roomNumber = Math.floor(Math.random() * 1000) + 8100;
    return `${unit}-${roomNumber}室`;
  };

  // 辅助函数操作列的渲染
  const renderControls = ({ text, record }) => {
    const handleEdit = () => {
      console.log('编辑', record);
    };

    const handleDelete = () => {
      console.log('删除', record);
    };

    return h(
      Dropdown,
      {
        overlay: h(Menu, {
          items: [
            { label: '编辑', key: '1', onClick: handleEdit },
            { label: '删除', key: '2', onClick: handleDelete },
          ],
        }),
      },
      () => text || '操作',
    );
  };

  onMounted(fetchData);
</script>
<template>
  <Table :columns="columns" :data-source="data.value" bordered />
</template>

<style scoped>
  ::v-deep .ant-table-thead > tr > th {
    background: #94d3ff;
    color: #333;
  }
  ::v-deep .ant-table-tbody > tr > td {
    font-size: 10px;
  }
</style>
