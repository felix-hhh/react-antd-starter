import Login from "@/pages/admin/login";
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
} from "@ant-design/icons";



const routerItem = [
  {
    path: "/index",
    Component: MainFrame,
    children: [
      {
        path: "/index/dashboard",
        Component: Dashboard,
        name: "首页",
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
    path: "/login",
    Component: Login,
    name: "登录",
    hide: true,
  },
];

export default routerItem;