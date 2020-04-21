import React, { useState, useEffect } from 'react';
import { Tag, Tabs, Input, Button, Select, Divider, Empty } from 'antd';
import styles from './index.css';
import JSONEdit from '../../../../component/json/edit';

const { Option } = Select;
const { TabPane } = Tabs;

const localhost = 'http://127.0.0.1:8080';

const localHeaders = [
    {
        name: 'Cache-Control',
        value: 'no-cache',
        description: '',
    },
    {
        name: 'Accept',
        value: '*/*',
        description: '',
    },
    {
        name: 'Connection',
        value: 'keep-alive',
        description: '',
    },
    {
        name: 'Content-Type',
        value: 'application/json',
        description: '',
    },
];

const ApiTest = props => {
    const { api } = props;

    const [response, setResponse] = useState({});

    const [baseUrl, setBaseUrl] = useState('');

    const [headers, setHeaders] = useState([]);

    const [param, setParam] = useState({});

    const [httpMethod, setHttpMethod] = useState('GET');

    const [body, setBody] = useState({});

    useEffect(() => {
        setResponse({
            success: true,
            result: {
                sid: '782d0sds20sds0ds0',
                role: 'admin',
            },
            error: '',
        });
        setBaseUrl(localhost);
        setHeaders(localHeaders);
    }, []);

    const selecthandler = (value, option) => {
        setHttpMethod(value);
    };

    const httpMethodSelector = (
        <Select defaultValue={api.httpMethod} onChange={selecthandler}>
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

    const paramHandler = (e, item) => {
        let tmp = { ...param };
        tmp[item.name] = e.target.value;
        setParam(tmp);
    };

    const bodyHandler = (json, jsObject) => {
        console.log(json, jsObject);
    };

    const sendClick = () => {
        console.log('URL : ', baseUrl + api.url);
        console.log('parma : ', param);
        console.log('httpMethod : ', httpMethod);
        console.log('headers : ', headers);
    };

    return (
        <>
            <div className={styles.url_form}>
                <Input
                    style={{ flex: 1 }}
                    value={baseUrl}
                    onChange={e => setBaseUrl(e.target.value)}
                    addonBefore={httpMethodSelector}
                    addonAfter={<span>{api.url}</span>}
                />
                <div style={{ marginLeft: 20 }}>
                    <Button type="primary" onClick={sendClick}>
                        发送
                    </Button>
                </div>
            </div>
            <div>
                <Tabs defaultActiveKey="0">
                    <TabPane tab="paramters" key="0">
                        <QueryParam paramters={api.paramters} paramHandler={paramHandler} />
                    </TabPane>
                    <TabPane tab="headers" key="1">
                        <Headers headers={headers} />
                    </TabPane>
                    <TabPane tab="body" key="2">
                        <Body bodyHandler={bodyHandler} />
                    </TabPane>
                </Tabs>
            </div>
            <div style={{ marginTop: 10, padding: 16 }}>
                <h3 style={{ fontWeight: '600' }}>Response</h3>
                <Divider />
                {Object.keys(response).length === 0 ? (
                    <Empty />
                ) : (
                    <pre style={{ background: '#262626', padding: 10, color: '#87e8de' }}>
                        {JSON.stringify(response, null, 4)}
                    </pre>
                )}
            </div>
        </>
    );
};

const QueryParam = ({ paramters, paramHandler }) => {
    return (
        <div style={{ padding: 16 }}>
            <div className={styles.query_param_top}>
                <span>key</span>
                <span>value</span>
                <span>description</span>
            </div>
            <hr color="#fafafa" />
            {paramters.map((item, index) => (
                <div className={styles.query_param} key={index}>
                    <span>{item.name}</span>
                    <span>
                        <Input placeholder="value..." onChange={e => paramHandler(e, item)} />
                    </span>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    );
};

const Headers = ({ headers }) => {
    return (
        <div style={{ padding: 16 }}>
            <div className={styles.header_top}>
                <span>key</span>
                <span>value</span>
                <span>description</span>
            </div>
            <hr color="#fafafa" />
            {headers.map((item, index) => (
                <div className={styles.header} key={index}>
                    <span>{item.name}</span>
                    <span>
                        <Input placeholder="value..." value={item.value} />
                    </span>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    );
};

const Body = ({ bodyHandler }) => {
    return (
        <div style={{ padding: 16 }}>
            <JSONEdit bodyHandler={bodyHandler} />
        </div>
    );
};

export default ApiTest;
