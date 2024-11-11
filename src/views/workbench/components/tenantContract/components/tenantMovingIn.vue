<script setup>
  import { h, onMounted, reactive } from 'vue';
  import { Table, Dropdown, Menu } from 'ant-design-vue';
  import { getWorkbenchData } from '/@/api/workbench/index';

  let data = reactive([]);

  function fetchData() {
    return new Promise((resolve, reject) => {
      getWorkbenchData()
        .then(() => {
          const bookingDataArray = Array.from({ length: 1 }, (_, index) => ({
            numberId: `${index + 1}`,
            status: getRandomStatus(),
            contractType: getcontractType(),
            housingResource: `T005${randomBuilding()}${randomUnitAndRoom()}`,
            address: `${getRandomName()}-${getRandomPhoneNumber()}`,
            rent: getrent(),
            securityDeposit: getsecurityDeposit(),
            contractCycle: `${getcontractCycle()}~${getRandomDate()}`,
            paymentMethod: getpaymentMethod(),
            checkIn: getRandomDate(),
            controls: '操作',
          }));
          console.log(bookingDataArray);
          data.value = bookingDataArray;
          resolve();
        })
        .catch((error) => {
          console.error('Failed to fetch workbench data:', error);
          reject(error);
        });
    });
  }

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

  // 辅助函数生成随机状态
  function getRandomStatus() {
    const statusesOn = ['即将搬入'];
    return statusesOn[Math.floor(Math.random() * statusesOn.length)];
  }

  // 辅助函数生成随机合同状态
  function getcontractType() {
    const contractTy = ['纸质合同', '电子合同'];
    return contractTy[Math.floor(Math.random() * contractTy.length)];
  }

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

  // 辅助函数生成随机姓名
  function getRandomName() {
    const names = ['张', '李', '王', '赵', '周', '吴', '郑'];
    return names[Math.floor(Math.random() * names.length)];
  }

  // 辅助函数生成随机电话号码
  function getRandomPhoneNumber() {
    return `13${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10000000000)}`;
  }

  // 辅助函数生成随机租金
  function getrent() {
    const statusesOn = ['3000元/月', '6000元/月', '3000元/时', '6000元/时'];
    return statusesOn[Math.floor(Math.random() * statusesOn.length)];
  }

  // 辅助函数生成随机押金
  function getsecurityDeposit() {
    const statusesOn = ['3000', '6000'];
    return statusesOn[Math.floor(Math.random() * statusesOn.length)];
  }

  // 辅助函数生成随机付款方式
  function getpaymentMethod() {
    const statusesOn = ['押一付一', '-'];
    return statusesOn[Math.floor(Math.random() * statusesOn.length)];
  }

  // 辅助函数生成随机合同周期
  function getcontractCycle() {
    const year = 2022;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}.${month}.${day}`;
  }

  // 辅助函数生成随机日期
  function getRandomDate() {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}.${month}.${day}`;
  }

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
