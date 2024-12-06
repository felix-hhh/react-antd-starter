import LoginPage from "@/pages/admin/login";
import MainFrame from "@/components/MainFrame.tsx";
import Dashboard from "@/pages/dashboard";
import CluePage from "@/pages/sell/clue";
import {
  SolutionOutlined,
  UserOutlined,
  PhoneOutlined,
  ContainerOutlined,
  SwitcherOutlined,
  HomeOutlined,
  TeamOutlined,
  SkinOutlined,
  BarsOutlined
} from "@ant-design/icons";
import { createBrowserRouter } from "react-router";
import AdminInfoPage from "@/pages/admin/info";
import SystemMenuPage from "@/pages/admin/menu";

export const routerItem = [
  {
    path: "/index",
    Component: MainFrame,
    id: "0",
    children: [
      {
        path: "/index/dashboard",
        Component: Dashboard,
        name: "首页",
        id: "0-0",
        icon: <HomeOutlined />,
      },
    ],
  },
  {
    path: "/sell",
    Component: MainFrame,
    name: "销售",
    children: [
      {
        path: "/sell/clue",
        Component: CluePage,
        name: "线索",
        icon: <SolutionOutlined />,
      },
      {
        path: "/sell/business",
        Component: Dashboard,
        name: "商机",
        icon: <SwitcherOutlined />,
      },
      {
        path: "/sell/customer",
        Component: Dashboard,
        name: "客户",
        icon: <UserOutlined />,
      },
      {
        path: "/sell/contact",
        Component: Dashboard,
        name: "联系人",
        icon: <PhoneOutlined />,
      },
      {
        path: "/sell/contract",
        Component: Dashboard,
        name: "合同",
        icon: <ContainerOutlined />,
      },
      {
        path: "/sell/follow",
        Component: Dashboard,
        name: "跟进",
        icon: <SolutionOutlined />,
      },
    ],
  },
  {
    path: "/system",
    Component: MainFrame,
    name: "系统",
    children: [
      {
        path: "/system/admin/info",
        Component: AdminInfoPage,
        name: "管理员",
        icon: <TeamOutlined />,
      },
      {
        path: "/system/admin/role",
        Component: AdminInfoPage,
        name: "角色",
        icon: <SkinOutlined />,
      },
      {
        path: "/system/menu",
        Component: SystemMenuPage,
        name: "菜单",
        icon: <BarsOutlined />,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
    name: "登录",
    hide: true,
  },
  {
    path: "/",
    Component: LoginPage,
    name: "登录",
    hide: true,
  },
];

const router = createBrowserRouter(routerItem);

export default router;