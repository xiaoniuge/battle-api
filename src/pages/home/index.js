import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.css';

const { Content, Header, Footer } = Layout;

const BambooApiLayout = props => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.header_left}>
          <span className={styles.logo}>logo</span>
          <Menu className={styles.menu} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">项目</Menu.Item>
            <Menu.Item key="2">分组</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className={styles.content}>
        <div className={styles.content_top}></div>
        <div className={styles.content_children}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
};

export default BambooApiLayout;
