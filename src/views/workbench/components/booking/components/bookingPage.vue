<script lang="ts" setup>
  import { h, reactive } from 'vue';
  import { Table, Dropdown, Menu } from 'ant-design-vue';
  import { getWorkbenchData } from '/@/api/workbench/index';

  // 假设您已经在其他地方定义了 BookingData 接口
  interface BookingData {
    numberId: string;
    status: string;
    address: string;
    housingResource: string;
    type: string;
    checkIn: string;
    lengthStay: string;
    money: string;
    id: string;
    controls: string;
  }

  const data = reactive<BookingData[]>([]);

  async function fetchData() {
    try {
      const res = await getWorkbenchData();
      const bookingDataArray: BookingData[] = Array.from({ length: 20 }, (_, index) => ({
        numberId: `${index + 1}`,
        status: getRandomStatus(),
        address: `${getRandomName()}-${getRandomPhoneNumber()}-${randomStatus()}`,
        housingResource: `T005${randomBuilding()}${randomUnitAndRoom()}`,
        type: res.bookingTable.type || '类型' + (index + 1),
        checkIn: getRandomDate(),
        lengthStay: getLengthStay(),
        money: getMoney(),
        id: getRandomNumberId(10),
        controls: '操作',
      }));
      data.value = bookingDataArray; // 使用 reactive 属性的 value 属性更新数据
    } catch (error) {
      console.error('Failed to fetch workbench data:', error);
    }
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
      customRender: ({ text, record }: { text: string; record: BookingData }) =>
        renderControls({ text, record }),
    },
  ];

  // 辅助函数生成随机姓名
  function getRandomName(): string {
    const names = ['张', '李', '王', '赵', '周', '吴', '郑'];
    return names[Math.floor(Math.random() * names.length)];
  }

  // 辅助函数生成随机电话号码
  function getRandomPhoneNumber(): string {
    return `13${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10000000000)}`;
  }

  // 辅助函数生成随机状态
  function getRandomStatus(): string {
    const statusesOn = ['已入住', '待生效', '待入住', '已退定'];
    return statusesOn[Math.floor(Math.random() * statusesOn.length)];
  }

  // 随机生成状态
  const randomStatus = () => {
    const statuses = ['', '待签字']; // 状态列表，有些可能有状态，有些可能没有
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  // 随机生成楼栋信息
  const randomBuilding = () => {
    const buildings = ['测试楼栋B1栋']; // 楼栋列表
    return buildings[Math.floor(Math.random() * buildings.length)];
  };

  // 随机生成单元和房间号
  const randomUnitAndRoom = () => {
    const unit = '1单元'; // 单元列表
    const roomNumber = Math.floor(Math.random() * 1000) + 8100; // 随机生成房间号，确保在8100以上
    return `${unit}-${roomNumber}室`;
  };

  // 辅助函数生成随机日期
  function getRandomDate(): string {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // 假设每个月至少有28天
    return `${year}-${month}-${day}`;
  }

  // 辅助函数生成随机入住时长
  function getLengthStay(): string {
    const stays = ['1年', '2年', '3年', '半年', '1季度', '2季度'];
    return stays[Math.floor(Math.random() * stays.length)];
  }

  // 辅助函数生成随机定金
  function getMoney(): string {
    return (Math.random() * 1000).toFixed(2);
  }

  // 辅助函数生成随机编号
  function getRandomNumberId(length) {
    return Math.floor(Math.random() * Math.pow(10, length)).toString();
  }
  // 辅助函数操作列的渲染
  const renderControls = ({ text, record }: { text: string; record: BookingData }) => {
    // 使用 record 参数
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
            // 可以添加更多的操作项
          ],
        }),
      },
      () => text,
    );
  };

  fetchData();
</script>
<template>
  <Table :columns="columns" :data-source="data.value" bordered />
</template>
<style scoped>
  ::v-deep .ant-table-thead > tr > th {
    background: rgb(177, 221, 238);
    color: #333;
  }
</style>
