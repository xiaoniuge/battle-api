import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu, Tabs, Drawer, Form } from 'antd';
import { FolderOpenOutlined, ApiOutlined } from '@ant-design/icons';
import styles from './index.css';
import ApiProfile from './profile';
import ApiTest from './test';
import ApiEdit from './edit';
import ApiNew from './new';

const { Content, Sider, Header } = Layout;
const { TabPane } = Tabs;

const ApiList = props => {
    const [nodes, setNodes] = useState([]);
    const [drawerNewVisible, setDrawerNewVisible] = useState(false);
    const [currentApi, setCurrentApi] = useState(null);
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
    const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
    const [form] = Form.useForm();
    useEffect(() => {
        let nodesTmp = [
            {
                id: 1,
                name: '用户',
                apis: [
                    {
                        id: 1,
                        url: '/login',
                        httpMethod: 'POST',
                        description: '登录接口',
                        paramters: [
                            {
                                name: 'username',
                                javaType: 'String',
                                description: '用户名',
                                isNecessary: true,
                            },
                            {
                                name: 'password',
                                javaType: 'String',
                                description: '密码',
                                isNecessary: true,
                            },
                        ],
                        response: {
                            success: true,
                            result: {
                                sid: '782d0sds20sds0ds0',
                                role: 'admin',
                            },
                            error: '',
                        },
                    },
                ],
            },
        ];
        setNodes(nodesTmp);
        setCurrentApi(nodesTmp[0].apis[0]);
        setDefaultOpenKeys([nodesTmp[0].id + '']);
        setDefaultSelectedKeys([nodesTmp[0].apis[0].id + '']);
    }, []);
    const menuItemClickHandler = key => {
        for (let i = 0; i < nodes.length; i++) {
            for (let k = 0; k < nodes[i].apis.length; k++) {
                if (nodes[i].apis[k].id === key) {
                    setCurrentApi(nodes[i].apis[k]);
                    return;
                }
            }
        }
    };
    return (
        <>
            <Layout className={styles.api_layout}>
                <Header className={styles.api_top}>
                    <div>
                        <span className={styles.api_title}>接口详情</span>
                    </div>
                    <div className={styles.write_area}>
                        <Button
                            type="primary"
                            className={styles.new_api_button}
                            onClick={() => setDrawerNewVisible(true)}
                        >
                            新建
                        </Button>
                        <Button type="primary" className={styles.import_api_button}>
                            导入
                        </Button>
                    </div>
                </Header>
                <Layout>
                    <Sider theme="light">
                        {!nodes || nodes.length === 0 ? null : (
                            <Menu
                                defaultOpenKeys={defaultOpenKeys}
                                defaultSelectedKeys={defaultSelectedKeys}
                                mode="inline"
                                onClick={(item, key, keyPath) => menuItemClickHandler(item.key)}
                            >
                                {nodes.map(node => (
                                    <Menu.SubMenu
                                        key={node.id}
                                        title={
                                            <span>
                                                <FolderOpenOutlined />
                                                <span>{node.name}</span>
                                            </span>
                                        }
                                    >
                                        {!node.apis
                                            ? null
                                            : node.apis.map(api => (
                                                  <Menu.Item key={api.id}>
                                                      <ApiOutlined />
                                                      <span>{api.description}</span>
                                                  </Menu.Item>
                                              ))}
                                    </Menu.SubMenu>
                                ))}
                            </Menu>
                        )}
                    </Sider>
                    <Content className={styles.content}>
                        <div>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="详情" key="1">
                                    <ApiProfile api={currentApi} />
                                </TabPane>
                                <TabPane tab="编辑" key="3">
                                    <ApiEdit api={currentApi} />
                                </TabPane>
                                <TabPane tab="测试" key="2">
                                    <ApiTest api={currentApi} />
                                </TabPane>
                                <TabPane tab="Mock" key="4">
                                    Content of Tab Pane 3
                                </TabPane>
                            </Tabs>
                        </div>
                    </Content>
                </Layout>
                <Drawer
                    visible={drawerNewVisible}
                    title="新建接口"
                    width="700px"
                    onClose={() => setDrawerNewVisible(false)}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button
                                onClick={() => setDrawerNewVisible(false)}
                                style={{ marginRight: 8 }}
                            >
                                取消
                            </Button>
                            <Button onClick={() => setDrawerNewVisible(false)} type="primary">
                                提交
                            </Button>
                        </div>
                    }
                >
                    <ApiNew form={form} />
                </Drawer>
            </Layout>
        </>
    );
};

export default ApiList;
