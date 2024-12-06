import MainContent from "@/components/MainContent.tsx";
import MainTable from "@/components/MainTable.tsx";
import { MainTableColumn, MainTableDataSource } from "@/components";
import { useEffect, useState } from "react";
import useAxios from "@/api";
import useUtils from "@/utils";



const AdminInfoPage = () => {
  const [datasource, setDatasource] = useState<MainTableDataSource>();
  const { sendPost } = useAxios();
  const { createSearchModel,datetimeFormat } = useUtils();
  const [query] = useState("react");

  const baseUrl = "/system/manage/admin/info";


  const columns: MainTableColumn[] = [
    {
      title: "序号",
      dataIndex: "id",
      width:80
    },
    {
      title: "用户名",
      dataIndex: "username",
      width: 200,
    },
    {
      title: "手机",
      dataIndex: "phone",
      width: 180,
    },
    {
      title: "昵称",
      dataIndex: "nickname",
      width: 200,
    },
    {
      title: "备注",
      dataIndex: "remark",
    },
    {
      title: "创建时间",
      dataIndex: "createDatetime",
      width: 180,
      render:datetimeFormat
    },
    {
      title: "最后登录时间",
      dataIndex: "lastLoginDatetime",
      width: 180,
      render:datetimeFormat
    },
    {
      title: "状态",
      dataIndex: "statusStr",
      width: 80,
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
    sendPost(`${baseUrl}/page`, createSearchModel(null, 20, 1))
      .then((res) => {
        setDatasource(res);
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
      <MainTable dataSourcePage={datasource} columns={columns} />
    </MainContent>
  );

};

export default AdminInfoPage;