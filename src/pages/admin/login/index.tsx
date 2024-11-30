import { Button, Form, Input, Typography } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const { Title } = Typography;
  return (
    <div className={"login-view bg-zinc-700 h-screen flex justify-center items-center"}>
      <div className={"login-panel bg-white px-8 py-6 shadow rounded"}>
        <div className={"mt-2.5 mb-10"}>
          <Title level={2} className={"text-center m-0"}>
            登录
          </Title>
        </div>
        <div className={"login-form my-3"}>
          <Form name="login" size={"large"}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input prefix={<UserOutlined className={"text-black/25"} />} placeholder={"用户名"} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined className={"text-black/25"} />}
                placeholder={"密码"}
              />
            </Form.Item>
            <Form.Item>
              <Button className={"mt-5"} block type="primary" htmlType={"submit"}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
