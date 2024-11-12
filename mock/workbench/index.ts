import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

let numberid = 0;
function getnumberId() {
  return ++numberid;
}

const randomInteger = Math.floor(Math.random() * 101);

const predeter = '-';

const percentageString = randomInteger + '%';

function createAuditList() {
  return {
    AuditManagement: {
      pending: '@integer(1,100)',
      Initiated: '@integer(1,100)',
      Copied: '@integer(1,100)',
    },
    contractManagement: {
      roomTogether: '@integer(1,1000)',
      beSigned: '@integer(1,1000)',
      underLease: '@integer(1,1000)',
      beMoving0ut: '@integer(1,1000)',
      haveExpired: '@integer(1,1000)',
    },
    preTenancy: {
      waitingChecked: '@integer(1,1000)',
      bookToday: '@integer(1,1000)',
      bookWeek: '@integer(1,1000)',
      bookMonth: '@integer(1,1000)',
    },
    housingManagement: {
      setOf: '@integer(1,1000)',
      between: '@integer(1,1000)',
      rate: percentageString,
      room: '@integer(1,1000)',
      inIdle: '@integer(1,100)',
    },
  };
}

function bookingPage() {
  const statusesOn = ['已入住', '待生效', '待入住', '已退定'];
  // 随机生成姓氏
  const randomSurname = () => {
    const surnames = ['黄', '王', '刘', '赵', '钱', '张']; // 姓氏列表
    return surnames[Math.floor(Math.random() * surnames.length)];
  };
  // 随机生成电话号码
  const randomPhoneNumber = () => {
    const prefix = ['135', '131', '132', '134', '136', '138']; // 电话号码前缀
    const suffix = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(8, '0'); // 随机生成后8位
    return `${prefix[Math.floor(Math.random() * prefix.length)]}${suffix}`;
  };

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
  return {
    bookingTable: {
      numberId: getnumberId(),
      status: statusesOn[Math.floor(Math.random() * statusesOn.length)],
      address: `${randomSurname()}-${randomPhoneNumber()}${randomStatus() || ''}`,
      housingResource: `T005${randomBuilding()}${randomUnitAndRoom()}`,
      type: predeter,
      checkIn: '@date("yyyy-MM-dd")',
      lengthStay: '@pick(["1年", "2年", "3年"])',
      money: '@float(100, 1000, 2, 2)',
      id: '@id()',
      controls: '',
    },
  };
}

export default [
  {
    url: '/basic-api/workbench',
    timeout: 1000,
    response: () => {
      return resultSuccess({
        ...createAuditList(),
        ...bookingPage(),
      });
    },
  },
  // mock user login
] as MockMethod[];
