import { Outlet, useLocation } from "react-router-dom";
import {
  Avatar,
  Dropdown,
  Layout,
  Typography,
  MenuProps,
  Space,
  Button,
  Image,
  Badge,
  Divider,
} from "antd";
import { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  BellFilled,
  BellOutlined,
  ContainerOutlined,
  DownOutlined,
  ExpandOutlined,
  FullscreenOutlined,
  KeyOutlined,
  LogoutOutlined,
  MailOutlined,
  MessageOutlined,
  PieChartOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

const buttonStyle = {
  backgroundColor: "transparent",
  fontSize: "14px",
};

// 头像菜单
const items: MenuProps["items"] = [
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

const MainFrame = () => {
  const [show] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <Layout className={"h-dvh"}>
      <Layout.Header className={"border-black border-b border-opacity-10 flex items-center"}>
        <div>
          <Typography.Title level={2}>后台管理</Typography.Title>
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
          <Dropdown menu={{ items }}>
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
          breakpoint={"md"}
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          className={"border-black border-r border-opacity-10"}
        ></Layout.Sider>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainFrame;
