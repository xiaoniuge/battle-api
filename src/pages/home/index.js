import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './index.css';

const { Content, Header, Footer } = Layout;

const BambooApiLayout = props => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.header_left}>
          <span className={styles.logo}>logo</span>
          <Menu
            className={styles.menu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['/home/project/list']}
          >
            <Menu.Item key="/home/project/list">
              <Link to="/home/project/list">应用</Link>
            </Menu.Item>
            <Menu.Item key="2">分组</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className={styles.content}>
        <div className={styles.content_children}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
};

export default BambooApiLayout;
