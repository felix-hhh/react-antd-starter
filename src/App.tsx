import { App as AntdApp } from "antd";
import "./App.css";
import AntdConfig from "@/theme/antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {

  return (
      <AntdConfig>
          <AntdApp>
              <RouterProvider router={router} />
          </AntdApp>
      </AntdConfig>
  )
}

export default App
