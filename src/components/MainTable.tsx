import { Button, Form, Input, Space, Table, Tooltip } from "antd";
import {
  SearchOutlined,
  PrinterOutlined,
  DownloadOutlined,
  ExpandOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { MainTableProps } from "@/components";

/**
 * 全屏
 */
const fullscreen = () => {
  const baseGrids = document.getElementById("BaseGrids");
  baseGrids?.requestFullscreen();
};


const MainTable = (props: MainTableProps) => {
  return (
    <div id="BaseGrids" className={"main-table"}>
      <div className={"main-table-search"}>
        <Form
          name="basic"
          autoComplete="off"
          colon={false}
          layout={"inline"}
        >
          <Form.Item
            label="关键字"
            name="keyword">
            <Input
              placeholder="请输入关键字"
            />
          </Form.Item>
          <Form.Item>
            <Button icon={<SearchOutlined />} htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className={"main-table-opt"}>
        <div className={"main-table-opt-button"}>
          <Space>
          {
            props.options?.map((item, index) => (
              <Button variant="solid"
                      color={item.color || "primary"} key={index}
                      onClick={item.handle}>
                {item.label}
              </Button>
            ))
          }
          </Space>
        </div>
        <div className={"main-table-opt-def text-gray-400"}>
          <Tooltip placement="top" title={"刷新"}>
            <Button type="text" icon={<ReloadOutlined />} htmlType="submit" />
          </Tooltip>
          <Tooltip placement="top" title={"全屏"}>
            <Button onClick={fullscreen} type="text" icon={<ExpandOutlined />} htmlType="submit" />
          </Tooltip>
          <Tooltip placement="top" title={"下载"}>
            <Button type="text" icon={<DownloadOutlined />} htmlType="submit" />
          </Tooltip>
          <Tooltip placement="top" title={"打印"}>
            <Button type="text" icon={<PrinterOutlined />} htmlType="submit" />
          </Tooltip>
        </div>
      </div>
      <div className={"main-table-content"}>
        <Table
          dataSource={props.hidePage ? props.dataSourceList : props.dataSourcePage?.records}
          // columns={props.columns}
          rowKey={"id"}
          scroll={{ x: "max-content" }}
          pagination={props.hidePage ? false : {
            defaultPageSize: 20,
            total: props.dataSourcePage?.records.length,
          }}
        >
          {
            props.columns.map(column => {
              if (column.type === "handle") {
                return (
                  <Table.Column
                    title={column.title}
                    width={column.width}
                    fixed={column.fixed ? column.fixed : false}
                    key="handle"
                    render={() => (
                      <>
                        {
                          column.handles?.map((handle, index) => (
                            <Button color={handle.type ? handle.type : "primary"}
                                    variant={"link"}
                                    key={index}>
                              {handle.title}
                            </Button>
                          ))
                        }
                      </>
                    )}
                  />
                );
              } else {
                return (
                  <Table.Column title={column.title} dataIndex={column.dataIndex} key={column.key} width={column.width}
                                render={column.render} fixed={column.fixed ? column.fixed : false} />
                );
              }
            })
          }
        </Table>
      </div>
    </div>
  );
};
export default MainTable;