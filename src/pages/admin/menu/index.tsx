import MainContent from "@/components/MainContent.tsx";
import MainTable from "@/components/MainTable.tsx";
import { FormProps, ItemData, MainTableColumn, MainTableOpts } from "@/components";
import { useEffect, useState } from "react";
import useAxios from "@/api";
import useUtils from "@/utils";
import MainDrawer from "@/components/MainDrawer.tsx";
import { SystemMenuModel } from "#/entity.ts";
import { App, RadioChangeEvent, Tag } from "antd";


const SystemMenuPage = () => {
    const [datasource, setDatasource] = useState<SystemMenuModel[]>([]);
    const [parentMenuData, setParentMenuData] = useState<ItemData[]>([]);
    const { sendPost, sendGet } = useAxios();
    const { createSearchModel } = useUtils();
    const [query] = useState("react");
    const [drawerShow, setDrawerShow] = useState(false);
    const { message } = App.useApp();

    const baseUrl = "/system/manage/menu";

    useEffect(() => {
      getData();
    }, [query]);

    /**
     * 菜单选择变更
     * @param e
     */
    const menuTypeChange = (e: RadioChangeEvent) => {
      const menuType = e.target.value;
      getCascaderData(menuType);
    };

    /**
     * 组装及联菜单数据
     */
    const getCascaderData = (level: "FIRST" | "CHILD" | "BUTTON"): ItemData[] => {
      if (level == "FIRST") {
        setParentMenuData([]);
        return [];
      }
      const itemDataList: ItemData[] = [];
      console.log(datasource);
      datasource.map(item => {
        const itemData: ItemData = {
          label: item.name,
          value: item.id,
        };

        if (level == "BUTTON") {
          const childItem: ItemData[] = [];
          item.children?.map(child => {
            childItem.push({
              label: child.name,
              value: child.id,
            });
          });
          itemData.children = childItem;
        }
        itemDataList.push(itemData);
      });
      console.log(itemDataList);
      setParentMenuData(itemDataList);
      return itemDataList;
    };

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
        label: "菜单类型",
        prop: "type",
        type: "radio",
        rules: [{
          required: true,
        }],
        onChange: menuTypeChange,
        itemData: [
          {
            value: "FIRST",
            label: "一级菜单",
          },
          {
            value: "CHILD",
            label: "子菜单",
          },
          {
            value: "BUTTON",
            label: "按钮",
          },
        ],
      },
      {
        label: "组件",
        prop: "component",
        type: "select",
        itemData: [
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
        label: "父菜单",
        prop: "parentId",
        type: "cascader",
        itemData: parentMenuData,
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
        render: (text: string,record) => {
          switch (record.type) {
            case "S_M_T_FIRST":
              return (
                <Tag color={"gold"}>{text}</Tag>
              )
            case "S_M_T_CHILD":
              return (
                <Tag color={"green"}>{text}</Tag>
              )
            case "S_M_T_BUTTON":
              return (
                <Tag color={"blue"}>{text}</Tag>
              )
          }
        }
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
    const addHandle = (values: any) => {
      values.parentId = values.parentId !== undefined ? values.parentId[values.parentId.length - 1] : "";
      console.log(values);

      sendPost(`${baseUrl}/add`, values).then(() => {
        message.success("操作成功");
        setDrawerShow(false);
        getData();
      });
    };


    /**
     * 取回数据
     */
    const getData = () => {
      sendGet(`${baseUrl}/list`, createSearchModel(null, 20, 1))
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

  }
;

export default SystemMenuPage;