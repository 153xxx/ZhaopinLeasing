export interface DataType {
  id: number;
  name: string;
  phone: string;
  /**
   * 意向类型 A B C
   */
  intention: string; // 意向类型 A B C
  /**
   * 问询 看房 关闭
   */
  status: number;
  waiter: string; // 招商人员
  createTime: string;
  lastContactTime: string;
  /**
   * 下次跟进日期
   */
  dateNextFollowup: string;
  /**
   * 客户认知途径
   */
  customerCognitiveApproach?: string;
<<<<<<< HEAD
  operation?: any; // 营销操作
=======
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
}

// 表格列
export interface TableColumnType {
  title: string;
  dataIndex: string;
  key: string;
}
