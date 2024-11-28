import { App as AntdApp } from "antd";
import router from "./router";
import './App.css'
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <AntdApp>
      <RouterProvider router={router} />
    </AntdApp>
  )
}

export default App
