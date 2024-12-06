import { type ButtonColorType } from "antd/es/button/buttonHelpers";
import { ColumnType } from "antd/es/table/interface";
import { FixedType } from "rc-table/lib/interface";
import { MouseEventHandler } from "react";
import type { Rule } from "rc-field-form/lib/interface";

/**
 * MainTable props
 */
export interface MainTableProps {
  dataSourcePage?: MainTableDataSource;
  dataSourceList?: object[];
  columns: MainTableColumn[];
  rowSelection?: "checkbox" | "radio";
  /**
   * 是否展示分页
   */
  hidePage?: boolean,
  options?: MainTableOpts[];
}

export interface MainTableDataSource {
  /**
   * 当前页的数据
   */
  records: object[];
  /**
   * 总页数
   */
  pages: number;
  /**
   * 当前页数
   */
  current: number;
  /**
   * 分页大小
   */
  size: number;
  /**
   * 数据总数
   */
  total: number;
}

export interface MainTableOpts {
  /**
   * 标签
   */
  label: string,
  /**
   * 类型
   */
  color?: ButtonColorType,

  /**
   * 是否多选
   */
  selectHandler?: boolean,
  /**
   * 子项
   */
  children?: MainTableOpts[],
  /**
   * 操作句柄
   */
  handle?: MouseEventHandler | undefined
}

/**
 * 列内容
 */
export interface MainTableColumn extends ColumnType {
  type?: "handle";
  fixed?: FixedType;
  handles?: MainTableColumnHandler[];
}

export interface MainTableColumnHandler {
  title: string;
  type?: "primary" | "default" | "danger";
  handle?: Function;
}

/**
 * 提交表单
 */
export interface MainDrawerProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 尺寸
   */
  size: number;
  /**
   * 是否显示
   */
  show: boolean;
  /**
   * 显示类型
   */
  type: "form" | "view";

  /**
   * 内容
   */
  content: FormContent;

  /**
   * 关闭事件
   */
  closeHandler?: MouseEventHandler | undefined;
}

export interface FormProps {
  label: string;
  prop: string;
  type?: "input" | "switch" | "number" | "textarea" | "select";
  placeholder?: string;
  /**
   * 初始化数据
   */
  initialValue?: string | number;
  /**
   * 验证规则
   */
  rules?: Rule[];
  /**
   * 下拉框数据
   */
  selectData?: SelectData[];
}

export interface SelectData {
  value: string | number;
  label: string;
}

/**
 * 表单内容
 */
export interface FormContent {
  /**
   * 表单内容
   */
  formContent: FormProps[];
  /**
   * 处理器
   */
  handle?: ((values: any) => void) | undefined;
}