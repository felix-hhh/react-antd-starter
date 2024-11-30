import { App as AntdApp } from "antd";
import routerItem from "@/router";
import "@/App.scss";
import AntdConfig from "@/theme/antd";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes(routerItem);

  return (
    <AntdConfig>
      <AntdApp>
        {routes}
      </AntdApp>
    </AntdConfig>
  );
}

export default App;
