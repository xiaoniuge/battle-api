import React from 'react';
import { Descriptions, Tag, Divider, Empty, Checkbox } from 'antd';
import styles from './index.css';

const ApiProfile = props => {
    const { api } = props;
    return (
        <div style={{ padding: 16 }}>
            <div>
                <h3 style={{ fontWeight: '600' }}>基本信息</h3>
                <Divider />
                <Descriptions layout="horizontal" column={1}>
                    <Descriptions.Item label={<Label label="URL" />}>{api.url}</Descriptions.Item>
                    <Descriptions.Item label={<Label label="HTTP-METHOD" />}>
                        <Tag color="#1890ff">{api.httpMethod}</Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label={<Label label="简介" />}>
                        {api.description}
                    </Descriptions.Item>
                    <Descriptions.Item label={<Label label="MOCK-URL" />}>
                        <span style={{ color: '#1890ff', cursor: 'pointer' }}>
                            {'http://mock.cn' + api.url}
                        </span>
                        <Tag color="#1890ff" style={{ marginLeft: 10, cursor: 'pointer' }}>
                            复制
                        </Tag>
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <div>
                <h3 style={{ fontWeight: '600' }}>请求参数</h3>
                <Divider />
                <div className={styles.api_paramters_top}>
                    <span>Name</span>
                    <span>Java-type</span>
                    <span>必选</span>
                    <span>Description</span>
                </div>
                <hr color="#e6fffb" />
                {!api.paramters || api.paramters.length === 0 ? (
                    <Empty />
                ) : (
                    api.paramters.map((item, index) => (
                        <div className={styles.api_paramters_content} key={index}>
                            <span style={{ color: '#1d39c4' }}>{item.name}</span>
                            <span>{item.javaType}</span>
                            <span>
                                <Checkbox checked={item.isNecessary} />
                            </span>
                            <span>{item.description}</span>
                        </div>
                    ))
                )}
            </div>
            <div style={{ paddingTop: 20 }}>
                <h3 style={{ fontWeight: '600' }}>响应结果</h3>
                <Divider />
                <pre style={{ background: '#262626', padding: 10, color: '#87e8de' }}>
                    {JSON.stringify(api.response, null, 4)}
                </pre>
            </div>
        </div>
    );
};

const Label = ({ label }) => {
    return <span style={{ color: '#000', fontWeight: '500' }}>{label}</span>;
};

export default ApiProfile;
