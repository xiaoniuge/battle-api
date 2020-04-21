import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu, Tabs } from 'antd';
import { FolderOpenOutlined, ApiOutlined } from '@ant-design/icons';
import styles from './index.css';
import ApiProfile from './profile';
import ApiTest from './test';
import ApiEdit from './edit';

const { Content, Sider } = Layout;
const { TabPane } = Tabs;

const ApiList = props => {
    const [nodes, setNodes] = useState([]);
    useEffect(() => {
        setNodes([{ name: '用户', apis: [{ description: '登录', api: '/login' }] }]);
    }, []);
    return (
        <>
            <Layout className={styles.api_layout}>
                <Sider theme="light">
                    <div style={{ padding: 16 }}>
                        <span style={{ color: '#000', fontSize: 16 }}>节点菜单</span>
                    </div>
                    <Menu defaultOpenKeys={['0']} defaultSelectedKeys={['0']} mode="inline">
                        {nodes.map((node, index) => (
                            <Menu.SubMenu
                                key={index}
                                title={
                                    <span>
                                        <FolderOpenOutlined />
                                        <span>{node.name}</span>
                                    </span>
                                }
                            >
                                {!node.apis
                                    ? null
                                    : node.apis.map((api, index) => (
                                          <Menu.Item key={index}>
                                              <ApiOutlined />
                                              <span>{api.description}</span>
                                          </Menu.Item>
                                      ))}
                            </Menu.SubMenu>
                        ))}
                    </Menu>
                </Sider>
                <Content className={styles.content}>
                    <div className={styles.api_top}>
                        <div>
                            <span className={styles.api_title}>接口详情</span>
                        </div>
                        <div className={styles.write_area}>
                            <Button type="primary" className={styles.new_api_button}>
                                新建
                            </Button>
                            <Button type="primary" className={styles.import_api_button}>
                                导入
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Tabs defaultActiveKey="2">
                            <TabPane tab="详情" key="1">
                                <ApiProfile
                                    api={{
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
                                    }}
                                />
                            </TabPane>
                            <TabPane tab="测试" key="2">
                                <ApiTest
                                    api={{
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
                                    }}
                                />
                            </TabPane>
                            <TabPane tab="Mock" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="编辑" key="4">
                                <ApiEdit />
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
            </Layout>
        </>
    );
};

export default ApiList;
