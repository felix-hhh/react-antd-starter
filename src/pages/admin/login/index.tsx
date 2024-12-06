import { Button, Form, FormProps, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import MD5 from "crypto-js/md5";
import { useEffect, useState } from "react";
import useAxios from "@/api";
import { useUserToken } from "@/store/userStore.ts";
import { useNavigate } from "react-router";

/**
 * 用户登录数据
 */
type LoginFormData = {
  /**
   * 用户名
   */
  username: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 验证码
   */
  verifyCode: string;
  /**
   * 验证识别码
   */
  identity: string;
}


const LoginPage = () => {
  const defImageUrlPrefix = import.meta.env.VITE_API_URL + `/system/manage/admin/info/image/`;
  const { sendPost } = useAxios();
  const { setUserToken } = useUserToken();
  const [loginForm] = Form.useForm<LoginFormData>();
  const navigate = useNavigate();


  const [identity, setIdentity] = useState<string>(() => {
    return Date.now().toString();
  });

  useEffect(() => {
    // sendPost("/system/manage/admin/info/login", value);
  }, []);

  /**
   * 取回验证码图片地址
   */
  const createIdentity = () => {
    const now = Date.now();
    setIdentity(now.toString());
  };

  /**
   * 登录处理器
   * @param value
   */
  const loginHandler: FormProps<LoginFormData>["onFinish"] = (value) => {
    value.password = MD5(value.password).toString().toLowerCase();
    value.identity = identity;
    console.log(value);
    sendPost("/system/manage/admin/info/login", value)
      .then(
        (res) => {
          console.log(res);
          setUserToken(res);
          navigate("/index");
        },
      )
      .catch(() => {
        createIdentity();
        loginForm.setFieldsValue({
          password: "",
          verifyCode: "",
        });
      });
    // axios.post("/system/manage/admin/info/login");

  };


  return (
    <div className={"login-view"}>
      <div className={"login-view-panel bg-white px-8 py-6 shadow rounded"}>
        <div className={"mt-2.5 mb-10"}>
          <Typography.Title level={2} className={"text-center m-0"}>
            登录
          </Typography.Title>
        </div>
        <div className={"login-form my-3"}>
          <Form
            name="login"
            form={loginForm}
            size={"large"}
            onFinish={loginHandler}>
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
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "请输入验证码",
                },
              ]}
            >
              <div className={"flex justify-between gap-2.5"}>
                <Form.Item
                  name="verifyCode"
                  rules={[
                    {
                      required: true,
                      message: "请输入验证码",
                    },
                  ]}>
                  <Input prefix={<LockOutlined className={"text-black/25"} />}
                         placeholder={"验证码"}
                         maxLength={4}
                  />
                </Form.Item>
                <Form.Item>
                  <img src={defImageUrlPrefix + identity} alt={"验证码"} className={"w-28 rounded-lg cursor-pointer"}
                       onClick={createIdentity} />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType={"submit"}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
