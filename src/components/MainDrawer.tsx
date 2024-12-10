import { Button, Cascader, Drawer, Form, Input, InputNumber, Radio, Select, Space, Switch } from "antd";
import { MainDrawerProps } from "@/components/index.ts";

const MainDrawer = (props: MainDrawerProps) => {
  const [form] = Form.useForm();

  /**
   * 提交事件
   */
  const onSubmit = () => {
    if(props.content.handle) {
      form.submit();
    }
  };

  return (
    <Drawer
      title={props.title}
      open={props.show}
      destroyOnClose
      closable={false}
      extra={
        <Space>
          <Button onClick={props.closeHandler}>关闭</Button>
          <Button onClick={onSubmit} type="primary">
            确定
          </Button>
        </Space>
      }
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={props.content.handle}
      >
        {
          props.content.formContent.map((item, index) => {
            switch (item.type) {
              case "switch":
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    rules={item.rules}
                  >
                    <Switch />
                  </Form.Item>
                );
              case "number":
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    initialValue={item.initialValue}
                    rules={item.rules}
                  >
                    <InputNumber />
                  </Form.Item>
                );
              case "textarea":
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    initialValue={item.initialValue}
                    rules={item.rules}
                  >
                    <Input.TextArea
                      placeholder={item.placeholder || `请输入${item.label}`}
                    />
                  </Form.Item>
                );
              case "radio":
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    initialValue={item.initialValue}
                    rules={item.rules}
                  >
                    <Radio.Group buttonStyle="solid" onChange={item.onChange}>
                      {
                        item.itemData?.map((itemData,index) =>(
                          <Radio.Button value={itemData.value} key={index}>
                            {itemData.label}
                          </Radio.Button>
                        ))
                      }
                    </Radio.Group>
                  </Form.Item>
                )
              case "select":
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    rules={item.rules}
                  >
                    <Select options={item.itemData} />
                  </Form.Item>
                );
              case "cascader":
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    rules={item.rules}
                  >
                    <Cascader options={item.itemData} placeholder={item.placeholder || `请输入${item.label}`} />
                  </Form.Item>
                );
              default:
                return (
                  <Form.Item
                    label={item.label}
                    name={item.prop}
                    key={"item" + index}
                    initialValue={item.initialValue}
                    rules={item.rules}
                  >
                    <Input
                      placeholder={item.placeholder || `请输入${item.label}`} />
                  </Form.Item>
                );
            }
          })
        }
      </Form>
    </Drawer>
  );
};

export default MainDrawer;