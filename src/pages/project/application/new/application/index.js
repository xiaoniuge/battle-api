import React from 'react';
import { Form, Select, Input, Drawer, Button } from 'antd';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const NewApplication = ({ visible, cancel, ok }) => {
    const [form] = Form.useForm();
    const handlerSubmit = () => {
        let values = form.getFieldsValue();
        let application = {
            name: values.name,
            projectId: values.projectId,
            description: values.description,
        };
        console.log(application);
        ok();
    };
    return (
        <Drawer
            visible={visible}
            title="新建应用"
            width="700px"
            onClose={cancel}
            footer={
                <div style={{ textAlign: 'right' }}>
                    <Button onClick={cancel} style={{ marginRight: 8 }}>
                        取消
                    </Button>
                    <Button onClick={handlerSubmit} type="primary">
                        提交
                    </Button>
                </div>
            }
        >
            <Form form={form} {...layout}>
                <Form.Item label="名称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="所属项目" name="projectId">
                    <Select options={[]} />
                </Form.Item>
                <Form.Item label="描述" name="description">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default NewApplication;
