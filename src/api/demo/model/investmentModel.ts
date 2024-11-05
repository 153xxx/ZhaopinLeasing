/**
 * Request
 */
export interface dataType {
  createTime: string;
  /**
   * 客户认知途径
   */
  customerCognitiveApproach: string;
  /**
   * 下次跟进时间
   */
  dateNextFollowup: string;
  id: string;
  intention: string;
  lastContactTime: string;
  /**
   * 名称
   */
  name: string;
  phone: string;
  /**
   * 状态
   */
  status: string;
  waiter: string;
}

export interface investmentModel {
  data: dataType[];
  success: boolean;
  code: number;
}

// import { Channelas as DiagnosticsChannel } from 'diagnostics_channel';
// export interface ClientListParams {
//   type: 'private' | 'public';
//   baseId: string;
// }

// export enum Status {
//   '问询' = 0,
//   '看房' = 1,
//   '关闭' = 2,
// }

// export enum DiagnosticsChannel {
//   '广告' = 0,
//   '朋友推荐' = 1,
//   '行业协会' = 2,
// }

// export type ClientItem = {
//   name: string;
//   phone: string;
//   intention: string;
//   status: Status;
//   transactor: string;
//   channel: Channel;
//   remark: string;
//   create_time: string;
//   last_contact_date: string;
//   next_content_date: string;
// };
// export type ClientListResult = Array<ClientItem>;
