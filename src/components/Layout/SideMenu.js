import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  TeamOutlined,
  BookOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/usuarios">
          <TeamOutlined />
          <span>Usuarios</span>
          <Link to="/usuarios"></Link>
        </Menu.Item>

        <Menu.Item key="/materias">
          <BookOutlined />
          <span>Materias</span>
          <Link to="/materias"></Link>
        </Menu.Item>

        <Menu.Item key="/login">
          <FullscreenExitOutlined />
          <span>Login</span>
          <Link to="/login"></Link>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default App;
