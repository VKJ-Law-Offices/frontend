import React, { useState } from "react";
import { message, Upload } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  EditOutlined
} from "@ant-design/icons";
import { Card, Button, Col, Row, Input } from "antd";
import { Switch, Layout, Menu, Typography } from "antd";
import Icon, { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import "antd/dist/antd.css";
import "../DashboardLayout/dashboard-layout.css";
import { NavLink } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const menu = (
  <Menu
    items={[
      {
        label: (
          <a href="/dashboard">A TO Z MONEY RECOVERY AND CREDIT PVT LTD</a>
        ),
        key: "0",
      },
    ]}
  />
);
const menu2 = (
  <Menu
    items={[
      {
        label: <a href="/dashboard">15 Days</a>,
        key: "0",
      },
      {
        label: <a href="/dashboard">30 Days</a>,
        key: "1",
      },
      {
        label: <a href="/dashboard">45 Days</a>,
        key: "2",
      },
      {
        label: <a href="/dashboard">60 Days</a>,
        key: "3",
      },
      {
        label: <a href="/dashboard">75 Days</a>,
        key: "4",
      },
      {
        label: <a href="/dashboard">90 Days</a>,
        key: "5",
      },
      {
        label: <a href="/dashboard">120 Days</a>,
        key: "6",
      },
    ]}
  />
);

const menu3 = (
  <Menu
    items={[
      {
        label: <a href="/dashboard">Past 6 Months</a>,
        key: "0",
      },
      {
        label: <a href="/dashboard">Past 12 Months</a>,
        key: "1",
      },
    ]}
  />
);

const menu4 = (
  <Menu
    items={[
      {
        label: <a href="/dashboard">Past 6 Months</a>,
        key: "0",
      },
      {
        label: <a href="/dashboard">Past 12 Months</a>,
        key: "1",
      },
    ]}
  />
);

const menu5 = (
  <Menu
    items={[
      {
        label: <a href="/dashboard">Past 6 Months</a>,
        key: "0",
      },
      {
        label: <a href="/dashboard">Past 12 Months</a>,
        key: "1",
      },
    ]}
  />
);

const menu6 = (
  <Menu
    items={[
      {
        label: <a href="/dashboard">Past 6 Months</a>,
        key: "0",
      },
      {
        label: <a href="/dashboard">Past 12 Months</a>,
        key: "1",
      },
    ]}
  />
);

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

const Profile = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [droppeddown2, setDroppeddown2] = useState(false);
  const [droppeddown3, setDroppeddown3] = useState(false);
  const [droppeddown4, setDroppeddown4] = useState(false);
  const [droppeddown5, setDroppeddown5] = useState(false);
  const [droppeddown6, setDroppeddown6] = useState(false);

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true); // You can use any AJAX library you like

    fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <div>
      <div class="components-layout-demo-custom-trigger">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "rgb(55, 58, 148)",
            }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100vh" }}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "Collect",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "Receipt",
                },
                {
                  key: "4",
                  icon: <UploadOutlined />,
                  label: "Receipt",
                },
                {
                  key: "5",
                  icon: <VideoCameraOutlined />,
                  label: "Actions",
                },
                {
                  key: "6",
                  icon: <UploadOutlined />,
                  label: "Incentives",
                },
                {
                  key: "7",
                  icon: <UploadOutlined />,
                  label: "Communication",
                },
                {
                  key: "8",
                  icon: <UploadOutlined />,
                  label: "Pay",
                },
                {
                  key: "11",
                  icon: <UploadOutlined />,
                  label: "Stock Items",
                },
                {
                  key: "12",
                  icon: <UploadOutlined />,
                  label: "unknown",
                },
              ]}
            />
          </Sider>

          <Layout
            className="site-layout"
            style={{
              marginLeft: collapsed ? 80 : 200,
            }}
          >
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
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <span>
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
              </span>

              <span>
                <NavLink className="nav-link" to="/settings" variant="body2">
                  <SettingOutlined
                    style={{ padding: "0 5px", fontSize: "175%" }}
                  />
                </NavLink>
                <UserOutlined style={{ padding: "0 5px", fontSize: "175%" }} />
              </span>
            </Header>
            <div
              style={{
                margin:"1% 5% 0 5%",
                paddingLeft: "0%",
                paddingRight: "0%",
                minHeight: "100vh",
                fontSize: "18px"
              }}
            >
                <h1 style={{ fontSize: "180%", color: "grey", marginBottom:"3%" }}>
                    <b>
                        Profile
                    </b>
                </h1>

                <div style={{display: "flex", flexDirection:"row"}}>
                <div style={{paddingRight: "15%"}}>
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Name:
                            </h1>
                            <p style={{width:"400px"}}>
                                A to Z Money Recovery And Credit Pvt Ltd
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Email:
                            </h1>
                            <p style={{width:"400px"}}>
                                accounts@vkjlaw.com
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Phone Number:
                            </h1>
                            <p style={{width:"400px"}}>
                                9589303384
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Whatsapp Number:
                            </h1>
                            <p style={{width:"400px"}}>
                                9589303384
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>

                    <Button
                      type="primary"
                      style={{ marginTop: "5%" }}
                    >
                        Change Password
                    </Button>
                    
                </div>

                <div>
                    <h1 style={{ textAlign: "center", color: "grey"}}>
                        Referrals
                    </h1>
                    <p>
                        Referral Code: <b>7MGVE4</b>
                    </p>
                </div>
                </div>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Profile;