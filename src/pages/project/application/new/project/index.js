import React from 'react';
import { Form, Input, Drawer, Button } from 'antd';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const NewProject = ({ visible, cancel, ok }) => {
    const [form] = Form.useForm();
    const handlerSubmit = () => {
        let values = form.getFieldsValue();
        let project = {
            name: values.name,
            description: values.description,
        };
        console.log(project);
        ok();
    };
    return (
        <Drawer
            visible={visible}
            width="700px"
            title="新建项目"
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
            <Form {...layout} form={form}>
                <Form.Item label="名称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="描述" name="description">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default NewProject;
