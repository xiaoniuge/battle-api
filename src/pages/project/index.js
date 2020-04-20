import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Avatar, Button, Empty } from 'antd';
import styles from './index.css';

const ProjectList = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let project = {
            name: 'Bamboo',
            description: 'description description description description description description',
        };
        let dataTmp = [];
        for (let i = 0; i < 20; i++) {
            dataTmp.push(project);
        }
        setData(dataTmp);
    }, []);

    const itemHandler = (item, index) => {
        props.history.push('/home/api/list');
    };
    return (
        <div className={styles.project_main}>
            <div className={styles.project_top}>
                <div>
                    <span className={styles.project_title}>应用列表</span>
                </div>
                <Button type="primary" className={styles.new_project_button}>
                    新建应用
                </Button>
            </div>
            {!data || data.length === 0 ? (
                <Empty />
            ) : (
                <div className={styles.project_list}>
                    <Row gutter={24} justify="start">
                        {data.map((item, index) => (
                            <Col
                                span={6}
                                key={index}
                                style={{ marginBottom: 15 }}
                                onClick={() => itemHandler(item, index)}
                            >
                                <Card hoverable bordered={false}>
                                    <div className={styles.project_list_item}>
                                        <Avatar>U</Avatar>
                                        <div className={styles.project_list_item_right}>
                                            <span className={styles.project_name}>{item.name}</span>
                                            <span className={styles.project_description}>
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
        </div>
    );
};

export default ProjectList;
