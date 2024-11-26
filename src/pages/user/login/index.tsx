import { Button, Col, Form, Input, Row, Typography } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const { Title } = Typography;
  return (
    <Row className="bg-red">
      <Col
        xxl={{ span: 8, offset: 8 }}
        xl={{ span: 12, offset: 6 }}
        lg={{ span: 16, offset: 4 }}
        sm={{ span: 12, offset: 6 }}
        xs={24}
        className={"bg-white rounded-md shadow-md p-6"}
      >
        <div className={"mt-2.5 mb-10"}>
          <Title level={2} className={"text-center m-0"}>
            后台管理
          </Title>
        </div>
        <div className={"my-3"}>
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
                prefix={<LockOutlined className={"text-black/25"} />}
                placeholder={"密码"}
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType={"submit"}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
