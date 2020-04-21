import React from 'react';
import { Form, Select, Tag, Divider, Input } from 'antd';

const { Option } = Select;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 12,
    },
};

const ApiNew = props => {
    return (
        <>
            <Form {...layout}>
                <Base />
            </Form>
        </>
    );
};

const Base = () => {
    const httpMethodSelector = (
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

    const nodeSelector = (
        <Select>
            <Option value="user">
                <Tag color="#13c2c2">用户</Tag>
            </Option>
        </Select>
    );
    return (
        <div>
            <h3 style={{ fontWeight: '600' }}>基本信息</h3>
            <Divider />
            <div style={{ background: '#f5f5f5', padding: 16 }}>
                <Form.Item name="url" label="URL">
                    <Input />
                </Form.Item>
                <Form.Item name="httpMethod" label="HTTP-METHOD">
                    {httpMethodSelector}
                </Form.Item>

                <Form.Item name="node" label="所属节点">
                    {nodeSelector}
                </Form.Item>

                <Form.Item name="description" label="简介">
                    <Input />
                </Form.Item>
            </div>
        </div>
    );
};

export default ApiNew;
