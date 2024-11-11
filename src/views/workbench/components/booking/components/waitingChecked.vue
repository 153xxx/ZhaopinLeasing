<script setup>
  import { h, onMounted, reactive } from 'vue';
  import { Table, Dropdown, Menu } from 'ant-design-vue';
  import { getWorkbenchData } from '/@/api/workbench/index';

  let data = reactive([]);

  // #94d3ff
  function fetchData() {
    return new Promise((resolve, reject) => {
      getWorkbenchData()
        .then((res) => {
          const bookingDataArray = Array.from({ length: 5 }, (_, index) => ({
            numberId: `${index + 1}`,
            status: getRandomStatus(),
            address: `${getRandomName()}-${getRandomPhoneNumber()}-${randomStatus()}`,
            housingResource: `T005${randomBuilding()}${randomUnitAndRoom()}`,
            type: res.bookingTable.type || '类型',
            checkIn: getRandomDate(),
            lengthStay: getLengthStay(),
            money: getMoney(),
            id: getRandomNumberId(10),
            controls: '操作',
          }));
          const statusCounts = bookingDataArray.reduce((acc, curr) => {
            const status = curr.status;
            acc[status] = (acc[status] || 0) + 1; // 如果状态不存在则初始化为0，然后加1
            return acc;
          }, {});
          console.log(statusCounts);
          data.value = bookingDataArray;
          resolve();
        })
        .catch((error) => {
          console.error('Failed to fetch workbench data:', error);
          reject(error);
        });
    });
  }

  const statusCounts = reactive({});

  fetchData().then(() => {
    statusCounts.value = {
      全部: data.value.filter((item) => item.status === '全部').length,
      待生效: data.value.filter((item) => item.status === '待生效').length,
      待入住: data.value.filter((item) => item.status === '待入住').length,
      已入住: data.value.filter((item) => item.status === '已入住').length,
      已退定: data.value.filter((item) => item.status === '已退定').length,
      无效: data.value.filter((item) => item.status === '无效').length,
    };
  });

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
      title: '预定人信息',
      dataIndex: 'address',
    },
    {
      title: '房源信息',
      dataIndex: 'housingResource',
    },
    {
      title: '预定类型',
      dataIndex: 'type',
    },
    {
      title: '预计入住日期',
      dataIndex: 'checkIn',
    },
    {
      title: '预计入住时长',
      dataIndex: 'lengthStay',
    },
    {
      title: '定金(元)',
      dataIndex: 'money',
    },
    {
      title: '编号',
      dataIndex: 'id',
    },
    {
      title: '操作',
      dataIndex: 'controls',
      customRender: ({ text, record }) => renderControls({ text, record }),
    },
  ];

  // 辅助函数生成随机姓名
  function getRandomName() {
    const names = ['张', '李', '王', '赵', '周', '吴', '郑'];
    return names[Math.floor(Math.random() * names.length)];
  }

  // 辅助函数生成随机电话号码
  function getRandomPhoneNumber() {
    return `13${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10000000000)}`;
  }

  // 辅助函数生成随机状态
  function getRandomStatus() {
    const statusesOn = ['待入住'];
    return statusesOn[Math.floor(Math.random() * statusesOn.length)];
  }

  // 随机生成状态
  const randomStatus = () => {
    const statuses = ['', '待签字'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

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

  // 辅助函数生成随机日期
  function getRandomDate() {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month}-${day}`;
  }

  // 辅助函数生成随机入住时长
  function getLengthStay() {
    const stays = ['1年', '2年', '3年', '半年', '1季度', '2季度'];
    return stays[Math.floor(Math.random() * stays.length)];
  }

  // 辅助函数生成随机定金
  function getMoney() {
    return (Math.random() * 1000).toFixed(2);
  }

  // 辅助函数生成随机编号
  function getRandomNumberId(length) {
    return Math.floor(Math.random() * Math.pow(10, length)).toString();
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
  onMounted(() => {
    fetchData().then(() => {
      filteredData.value = data.value; // 初始加载所有数据
    });
  });
</script>

<template>
  <Table :columns="columns" :data-source="data.value" bordered />
</template>

<style scoped>
  ::v-deep .ant-table-thead > tr > th {
    background: #94d3ff;
    color: #333;
  }
</style>
