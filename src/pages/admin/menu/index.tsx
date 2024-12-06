import MainContent from "@/components/MainContent.tsx";
import MainTable from "@/components/MainTable.tsx";
import { FormProps, MainTableColumn, MainTableOpts } from "@/components";
import { useEffect, useState } from "react";
import useAxios from "@/api";
import useUtils from "@/utils";
import MainDrawer from "@/components/MainDrawer.tsx";
import { FormInstance } from "antd";

const addForm: FormProps[] = [
  {
    label: "菜单名称",
    prop: "name",
    rules: [{
      required: true,
    }],
  },
  {
    label: "菜单路径",
    prop: "path",
    type: "textarea",
    rules: [{
      required: true,

    }],
  },
  {
    label: "组件",
    prop: "component",
    type: "select",
    rules: [{
      required: true,
    }],
    selectData: [
      {
        value: "DataList",
        label: "数据列表",
      },
      {
        value: "DataView",
        label: "资料展示",
      },
    ],
  },
  {
    label: "菜单图标",
    prop: "icon",
  },
  {
    label: "排序",
    prop: "orderNum",
    initialValue: 1,
    type: "number",
  },
  {
    label: "隐藏菜单",
    prop: "hide",
    type: "switch",
  },
];

const SystemMenuPage = () => {
  const [datasource, setDatasource] = useState<[]>([]);
  const { sendPost } = useAxios();
  const { createSearchModel } = useUtils();
  const [query] = useState("react");
  const [drawerShow, setDrawerShow] = useState(false);

  const baseUrl = "/system/manage/menu";

  useEffect(() => {
    getData();
  }, [query]);

  const columns: MainTableColumn[] = [
    {
      title: "菜单名称",
      dataIndex: "name",
      width: 150,
      fixed: "left",
    },
    {
      title: "菜单类型",
      dataIndex: "typeStr",
      width: 180,
    },
    {
      title: "排序",
      dataIndex: "orderNum",
      width: 80,
    },
    {
      title: "组件",
      dataIndex: "component",
      width: 200,
    },
    {
      title: "路径",
      dataIndex: "path",
      width: 200,
    },
    {
      title: "操作",
      width: 200,
      fixed: "right",
      type: "handle",
      key: "handler",
      handles: [
        {
          title: "编辑",
          type: "primary",
        },
        {
          title: "删除",
          type: "danger",
        },
        {
          title: "添加下级",
          type: "default",
        },
      ],
    },
  ];

  const options: MainTableOpts[] = [
    {
      label: "添加",
      handle: () => {
        setDrawerShow(true);
      },
    },
  ];

  /**
   * 添加处理器
   */
  const addHandle = (form: FormInstance) => {
    const value = form.getFieldsValue();
    console.log(value);
    form.submit();
  };

  /**
   * 取回数据
   */
  const getData = () => {
    sendPost(`${baseUrl}/list`, createSearchModel(null, 20, 1))
      .then((res) => {
        setDatasource(res);
      });
  };


  return (
    <MainContent>
      <MainTable dataSourceList={datasource} columns={columns} hidePage={true} options={options} />
      <MainDrawer title={"添加"} size={300} show={drawerShow} type={"form"}
                  closeHandler={() => setDrawerShow(false)}
                  content={{
                    formContent: addForm,
                    handle: addHandle,
                  }} />
    </MainContent>
  );

};

export default SystemMenuPage;