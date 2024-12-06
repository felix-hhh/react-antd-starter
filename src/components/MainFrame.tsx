import { Outlet, useLocation, useNavigate } from "react-router";
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
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { routerItem } from "@/router";
import { ItemType } from "antd/es/menu/interface";
import { useUserToken } from "@/store/userStore.ts";

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

/**
 * 初始化菜单
 */
const initSideMenu = (): MenuProps["items"] => {
  const sideMenu: MenuProps["items"] = [];
  routerItem.map(menu => {
    const menuChildren = menu.children;
    if (menuChildren !== undefined) {
      if (menuChildren.length === 1) {
        const itemMenu = menuChildren[0];
        sideMenu.push({
          label: itemMenu.name,
          title: itemMenu.name,
          key: itemMenu.path,
          icon: itemMenu.icon,
        });
      } else {
        const menuChildrenObj: ItemType[] = [];
        menuChildren.map(childrenMenu => {
          menuChildrenObj.push({
            label: childrenMenu.name,
            title: childrenMenu.name,
            key: childrenMenu.path,
            icon: childrenMenu.icon,
          });
        });
        sideMenu.push({
          label: menu.name,
          key: menu.path,
          type: "group",
          children: menuChildrenObj,
        });
      }
    }
  });

  return sideMenu;
};


const MainFrame = () => {
  const [show] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const sideMenu = initSideMenu();
  const { userToken } = useUserToken();

  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const menuClick = ({ key }: { key: string }) => {
    console.log(key);
    navigate(key);
  };


  return (
    <Layout className={"main-frame"}>
      <Layout.Header
        className={"main-frame-header border-black border-b border-opacity-10 flex items-center justify-between"}>
        <div className={"main-frame-header-title"}>
          Kelaker Manages
        </div>
        <div className={"main-frame-header-options"}>
          <div className={"flex items-center"}>
            <Button type={"text"} onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
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
                <Typography.Text type={"secondary"}>{userToken?.userData.nickname}</Typography.Text>
              </Button>
            </Dropdown>
          </div>
        </div>
      </Layout.Header>

      <Layout>
        <Layout.Sider
          breakpoint={"md"}
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <Menu
            defaultSelectedKeys={["0"]}
            defaultOpenKeys={["0"]}
            mode="inline"
            items={sideMenu}
            onClick={menuClick}
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
