import { ReactNode } from "react";
import { Breadcrumb, Typography } from "antd";

const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div id={"content-header"} className={"content-header bg-white items-center justify-between p-2.5 flex h-16"}>
        <div className={"content-header-title"}>
          <Typography.Title level={4}>首页</Typography.Title>
        </div>
        <div className={"content-header-breadcrumb"}>
          <Breadcrumb
            items={[
              {
                title: '首页',
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: 'An Application',
              },
            ]}
          />
        </div>
      </div>
      <section className={"content-body"}>
        {children}
      </section>

    </>
  );
};

export default MainContent;