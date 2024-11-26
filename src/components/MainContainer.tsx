import { ReactNode } from "react";
import { Breadcrumb, Layout } from "antd";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <div className={"flex p-5 bg-white items-center"}>
        <div className={"text-2xl grow font-bold"}>后台管理</div>
        <div>
          <Breadcrumb
            items={[
              { title: "首页", href: "/index" },
              { title: "首页", href: "/index" },
              { title: "首页", href: "/index" },
            ]}
          />
        </div>
      </div>
      <Layout.Content className={"m-3 p-3"}>{children}</Layout.Content>
    </Layout>
  );
};

export default MainContainer;
