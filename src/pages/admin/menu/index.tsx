import MainContent from "@/components/MainContent.tsx";
import MainTable from "@/components/MainTable.tsx";
import { MainTableColumn } from "@/components";
import { useEffect, useState } from "react";
import useAxios from "@/api";
import useUtils from "@/utils";



const SystemMenuPage = () => {
  const [datasource, setDatasource] = useState<[]>([]);
  const { sendPost } = useAxios();
  const { createSearchModel } = useUtils();
  const [query] = useState("react");

  const baseUrl = "/system/manage/menu";


  const columns: MainTableColumn[] = [
    {
      title: "序号",
      dataIndex: "id",
      width:80
    },
    {
      title: "菜单名称",
      dataIndex: "username",
      width: 200,
    },
    {
      title: "菜单类型",
      dataIndex: "phone",
      width: 180,
    },
    {
      title: "排序",
      dataIndex: "nickname",
      width: 200,
    },
    {
      title: "组件",
      dataIndex: "remark",
    },
    {
      title: "路径",
      dataIndex: "createDatetime",
    },
    {
      title: "操作",
      width: 150,
      fixed: "right",
      type: "handle",
      key: "handler",
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

  const getData = () => {
    sendPost(`${baseUrl}/list`, createSearchModel(null, 20, 1))
      .then((res) => {
        setDatasource(res.records);
      });
  };

  useEffect(() => {
    getData();
  }, [query]);

  /**
   * 取回数据
   */


  return (
    <MainContent>
      <MainTable dataSource={datasource} columns={columns} hidePage={true} />
    </MainContent>
  );

};

export default SystemMenuPage;