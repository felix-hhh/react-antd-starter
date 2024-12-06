import MainContent from "@/components/MainContent.tsx";
import MainTable from "@/components/MainTable.tsx";
import { MainTableColumn, MainTableOpts } from "@/components";

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

const columns: MainTableColumn[] = [
  {
    title: "姓名",
    dataIndex: "name",
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
  {
    title: "操作",
    width: 150,
    fixed: "right",
    type: "handle",
    handles: [
      {
        title: "添加",
        type: "primary",
      },
      {
        title: "删除",
        type: "danger",
      },
    ],
  },
];

const options: MainTableOpts[] = [
  {
    label: "添加",
  },
  {
    label: "删除",
  },
];

const CluePage = () => {
  return (
    <MainContent>
      <MainTable dataSource={dataSource} columns={columns} options={options} />
    </MainContent>
  );
};
export default CluePage;