import { App as AntdApp } from "antd";
import router from "@/router";
import "@/App.scss";
import AntdConfig from "@/theme/antd";
import { RouterProvider } from "react-router";


const App=()=> {

  return (
    <AntdConfig>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </AntdConfig>
  );
}

export default App;