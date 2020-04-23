import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Avatar, Button, Empty, Layout, Menu } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import styles from './index.css';
import NewProject from './new/project';
import NewApplication from './new/application';

const { Header, Content, Sider } = Layout;

const ApplicationList = props => {
    const [data, setData] = useState([]);
    const [newApplicationVisible, setNewApplicationVisible] = useState(false);
    const [newProjectVisible, setNewProjectVisible] = useState(false);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        let application = {
            name: 'Bamboo',
            description: 'description description description description description description',
        };
        let dataTmp = [];
        for (let i = 0; i < 20; i++) {
            dataTmp.push(application);
        }
        setData(dataTmp);
        setProjectList([{ name: 'curry', description: 'hahah' }]);
    }, []);

    const itemHandler = (item, index) => {
        props.history.push('/home/project/appliction/api/list');
    };

    const openNewProject = () => {
        setNewProjectVisible(true);
    };
    return (
        <Layout className={styles.application_main}>
            <Header className={styles.application_top}>
                <div>
                    <span className={styles.application_title}>应用列表</span>
                </div>
                <Button
                    type="primary"
                    className={styles.new_application_button}
                    onClick={() => setNewApplicationVisible(true)}
                >
                    新建应用
                </Button>
            </Header>
            <Layout>
                <Sider theme="light">
                    <div className={styles.new_project_btn}>
                        <Button type="primary" onClick={openNewProject}>
                            新建项目
                        </Button>
                    </div>
                    <Menu defaultSelectedKeys={['0']}>
                        {projectList.map((item, index) => (
                            <Menu.Item key={index}>
                                <ProjectOutlined />
                                <span>{item.name}</span>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Content className={styles.application_content}>
                    {!data || data.length === 0 ? (
                        <Empty />
                    ) : (
                        <div className={styles.application_list}>
                            <Row gutter={24} justify="start">
                                {data.map((item, index) => (
                                    <Col
                                        span={6}
                                        key={index}
                                        style={{ marginBottom: 15 }}
                                        onClick={() => itemHandler(item, index)}
                                    >
                                        <Card hoverable bordered={false}>
                                            <div className={styles.application_list_item}>
                                                <Avatar>U</Avatar>
                                                <div className={styles.application_list_item_right}>
                                                    <span className={styles.application_name}>
                                                        {item.name}
                                                    </span>
                                                    <span
                                                        className={styles.application_description}
                                                    >
                                                        {item.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                </Content>
            </Layout>

            <NewApplication
                visible={newApplicationVisible}
                cancel={() => setNewApplicationVisible(false)}
                ok={() => setNewApplicationVisible(false)}
            />

            <NewProject
                visible={newProjectVisible}
                cancel={() => setNewProjectVisible(false)}
                ok={() => setNewProjectVisible(false)}
            />
        </Layout>
    );
};

export default ApplicationList;
