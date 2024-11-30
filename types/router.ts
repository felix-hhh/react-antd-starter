import { ReactNode } from "react";

export interface RouteMeta {

  /**
   * path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
   */
  path: string;

  name: string;
  frame?: boolean;
  component?: ReactNode;
  icon?: ReactNode;
  hidden?: boolean;
  children?: RouteMeta[];
}
