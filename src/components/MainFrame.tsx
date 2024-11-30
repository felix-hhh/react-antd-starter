import { Outlet, useLocation } from "react-router-dom";
import {
  Avatar,
  Dropdown,
  Layout,
  Typography,
  MenuProps,
  Button,
  Badge,
  Divider,
  Menu,
} from "antd";
import { useEffect, useState } from "react";
import {
  BellOutlined,
  ExpandOutlined,
  KeyOutlined,
  LogoutOutlined,
  MessageOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import routerItem from "@/router";
import { ItemType } from "antd/es/menu/interface";

// 头像菜单
const avatarItems: MenuProps["items"] = [
  {
    label: "个人资料",
    key: "0",
    icon: <SolutionOutlined />,
  },
  {
    label: "修改密码",
    key: "1",
    icon: <KeyOutlined />,
  },
  {
    type: "divider",
  },
  {
    label: "退出",
    key: "2",
    icon: <LogoutOutlined />,
  },
];

const initSideMenu = (): MenuProps["items"] => {
  const sideMenu: MenuProps["items"] = [];
  for (let i = 0; i < routerItem.length; i++) {
    const item = routerItem[i];
    console.log(item.name);
    if (item.children != undefined) {
      if (item.children.length === 1) {
        sideMenu.push({
          label: item.children[0].name,
          key: i.toString(),
          icon: item.children[0].icon,
        });
      } else {
        let childrenIndex: number = 0;
        const menuChildren: ItemType[] = [];
        item.children.forEach(child => {
          menuChildren.push({
            label: child.name,
            key: i + "-" + childrenIndex,
            icon: child.icon,
          });
          childrenIndex++;
        });

        sideMenu.push({
          label: item.name,
          key: i,
          type: "group",
          children: menuChildren,
        });
      }
    }
  }
  return sideMenu;
};


const MainFrame = () => {
  const [show] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const sideMenu = initSideMenu();

  useEffect(() => {
    console.log(111);
  }, [location.pathname]);


  return (
    <Layout className={"h-dvh"}>
      <Layout.Header className={"border-black border-b border-opacity-10 flex items-center justify-between"}>
        <div className={"text-center w-48"}>
          <Typography.Title className={"text-white"} level={3}>后台管理</Typography.Title>
        </div>
        <div className="flex items-center">
          <Button type={"text"}>
            <ExpandOutlined />
          </Button>
          <Divider type="vertical" />
          <Button type={"text"}>
            <Badge dot={show}>
              <MessageOutlined />
            </Badge>
          </Button>
          <Divider type="vertical" />
          <Button type={"text"}>
            <Badge dot={show}>
              <BellOutlined />
            </Badge>
          </Button>
          <Dropdown menu={{ items: avatarItems }}>
            <Button type={"text"}>
              <Avatar
                size={28}
                src={
                  "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
                }
              />
              <Typography.Text type={"secondary"}>七妮妮</Typography.Text>
            </Button>
          </Dropdown>
        </div>
      </Layout.Header>
      <Layout>
        <Layout.Sider
          width={192}
          breakpoint={"md"}
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >

          <Menu
            defaultSelectedKeys={["0"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={sideMenu}
          />
        </Layout.Sider>

        <Layout.Content className={"overflow-auto"}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default MainFrame;
