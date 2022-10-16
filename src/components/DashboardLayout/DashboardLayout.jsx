import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import "./dashboard-layout.css";
import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;
const menu = (
  <Menu
    items={[
      {
        label: (
          <a href="/dashboard-layout">
            A TO Z MONEY RECOVERY AND CREDIT PVT LTD
          </a>
        ),
        key: "0",
      },
    ]}
  />
);

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [droppeddown, setDroppeddown] = useState(false);

  return (
    <div class="components-layout-demo-custom-trigger">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor: 'rgb(55, 58, 148)'}}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
        <Header
              className="site-layout-background-header"
              style={{
                position: "sticky",
                zIndex: 1,
                width: "100%",
                height: "auto",
                top: 0,
              }}
            >
            <div style={{display:"flex", flexDirection:"row"}}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <div>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  style={{ border: "2px black" }}
                  onClick={() => setDroppeddown(!droppeddown)}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <Button
                        style={{ color: "rgb(22, 28, 75)", fontWeight: "bold" }}
                      >
                        A TO Z MONEY RECOVERY AND CREDIT PVT LTD
                        {droppeddown ? <UpOutlined /> : <DownOutlined />}
                      </Button>
                    </Space>
                  </a>
                </Dropdown>

                <Button
                  type="primary"
                  shape="round"
                  style={{
                    margin: "0.5vw",
                    backgroundColor: "rgb(40, 52, 149)",
                    border: "none",
                  }}
                >
                  Set Contact Details
                </Button>

                <Button
                  type="primary"
                  shape="round"
                  style={{ margin: "0.5vw" }}
                >
                  Get Payment Link
                </Button>
              </div>

              <div style={{marginLeft: "auto",
                      marginRight: "2%"}}>
                <img src="https://app.credflow.in/imgs/userPermission.9e283aebf3c3255a5c0711a85d9ab00a.svg" alt=""
                style={{ width:"30px", height:"auto", margin: "0 5px 10px 5px", fontSize: "175%" }}
                />
                <NavLink className="nav-link" to="/settings" variant="body2">
                  <SettingOutlined
                    style={{ padding: "0 5px", fontSize: "175%" }}
                  />
                </NavLink>
                <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png" alt=""
                style={{ width:"30px", height:"auto", margin: "0 5px 10px 5px", fontSize: "175%" }}
                />
              </div>
              </div>
            </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
