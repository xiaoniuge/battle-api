import React from 'react';
import { Form, Input, Select, Tabs, Button, Tag, Divider, Row } from 'antd';
import styles from './index.css';

const { Option } = Select;
const { TabPane } = Tabs;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 12,
    },
};

const httpMethodSelector = () => {
    return (
        <Select>
            <Option value="GET">
                <Tag color="#13c2c2">GET</Tag>
            </Option>
            <Option value="POST">
                <Tag color="#1890ff">POST</Tag>
            </Option>
            <Option value="PUT">
                <Tag color="#2f54eb">PUT</Tag>
            </Option>
            <Option value="DELETE">
                <Tag color="#f5222d">DELETE</Tag>
            </Option>
        </Select>
    );
};

const ApiEdit = () => {
    const [form] = Form.useForm();
    return (
        <div style={{ padding: 16 }}>
            <Form
                {...layout}
                form={form}
                onFinish={values => console.log(values)}
                initialValues={{ httpMethod: 'GET' }}
            >
                <ApiBaseInfo />
                <ApiRequsetParam />
                <ApiResponse />
                <div className={styles.save_button_box}>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </div>
            </Form>
        </div>
    );
};

const ApiBaseInfo = () => {
    return (
        <div>
            <h3 style={{ fontWeight: '600' }}>基本信息</h3>
            <Divider />
            <div style={{ background: '#f5f5f5', padding: 16 }}>
                <Form.Item name="url" label="URL">
                    <Input />
                </Form.Item>
                <Form.Item name="httpMethod" label="HTTP-METHOD">
                    {httpMethodSelector()}
                </Form.Item>

                <Form.Item name="node" label="所属节点">
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="简介">
                    <Input />
                </Form.Item>
            </div>
        </div>
    );
};

const ApiRequsetParam = () => {
    return (
        <div style={{ marginTop: 16 }}>
            <h3 style={{ fontWeight: '600' }}>请求参数</h3>
            <Divider />
            <Tabs defaultActiveKey="1" className={styles.tabs_title_align}>
                <TabPane tab="Param" key="1">
                    <div style={{ background: '#f5f5f5', padding: 16 }}>param</div>
                </TabPane>
                <TabPane tab="Body" key="2">
                    <div style={{ background: '#f5f5f5', padding: 16 }}>Body</div>
                </TabPane>
                <TabPane tab="Headers" key="3">
                    <div style={{ background: '#f5f5f5', padding: 16 }}>Headers</div>
                </TabPane>
            </Tabs>
        </div>
    );
};

const ApiResponse = () => {
    return (
        <div style={{ marginTop: 16 }}>
            <h3 style={{ fontWeight: '600' }}>响应结果</h3>
            <Divider />
        </div>
    );
};

export default ApiEdit;
