import { ButtonType } from "antd/es/button/buttonHelpers";
import { ColumnType } from "antd/es/table/interface";
import { FixedType } from "rc-table/lib/interface";

/**
 * MainTable props
 */
export interface MainTableProps {
  dataSource: object[];
  columns: MainTableColumn[];
  rowSelection?: "checkbox" | "radio";
  /**
   * 是否展示分页
   */
  hidePage: boolean,
  options?: MainTableOpts[];
}

export interface MainTableOpts {
  /**
   * 标签
   */
  label: string,
  /**
   * 类型
   */
  type?: ButtonType,

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
  handle?: Function
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