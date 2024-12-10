/**
 * 用户token
 */
export interface UserToken {
  /**
   * 用户标签
   */
  userTag: string;

  /**
   * 创建时间
   */
  createDatetime: Date;
  /**
   * 超时时间
   */
  exp: Date;

  /**
   * 超时时间
   */
  expireSeconds: number;

  /**
   * token
   */
  token: string;
  /**
   * 角色
   */
  roles: string[];

  /**
   * 用户数据
   */
  userData: UserData;

}

export interface UserData {
  nickname: string;
  username: string;
}

/**
 * 查询对象
 */
export interface SearchModel {
  /**
   * 页大小
   */
  limit: number,
  /**
   * 当前页
   */
  page: number,
  /**
   * 检索数据
   */
  data: object,
  /**
   * 排序字段
   */
  sort?: string,
  /**
   * 排序方式
   */
  dir: "DESC" | "ASC",
}

/**
 * 系统菜单
 */
export interface SystemMenuModel {
  id: number;
  name: string;
  type: string;
  typeStr: string;
  orderNum: number;
  path: string;
  children?: SystemMenuModel[];
}
