import { Button, Form, Input, Table } from "antd";
import {
  SearchOutlined,
  PrinterOutlined,
  DownloadOutlined,
  ExpandOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const dataSource = [
  {
    id: 1,
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖111",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {

    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },


];

const MainTable = () => {
  return (
    <div className={"main-table bg-white m-2.5 "}>
      <div className={"search-bar"}>
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
            <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={"opt-bar flex"}>
        <div className={"opt-button flex gap-2.5 flex-1"}>
          <Button type="primary" htmlType="submit">添加</Button>
          <Button type="primary" htmlType="submit">添加</Button>
        </div>
        <div className={"opt-def text-gray-400"}>
          <Button type="text" icon={<ReloadOutlined />} htmlType="submit" />
          <Button type="text" icon={<ExpandOutlined />} htmlType="submit" />
          <Button type="text" icon={<SearchOutlined />} htmlType="submit" />
          <Button type="text" icon={<DownloadOutlined />} htmlType="submit" />
          <Button type="text" icon={<PrinterOutlined />} htmlType="submit" />
        </div>
      </div>
      <div className={"table-content"}>
        <Table dataSource={dataSource} columns={columns}
               rowKey={"id"}
               pagination={{
                 defaultPageSize: 20,
                 total: dataSource.length,
               }}
        />
      </div>
    </div>
  );
};
export default MainTable;