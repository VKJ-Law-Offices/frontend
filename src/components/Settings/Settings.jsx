import React, { useState } from "react";
import { message, Upload } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
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

const Settings = () => {
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
            <div
              style={{
                marginTop: "24px",
                paddingLeft: "0%",
                paddingRight: "0%",
              }}
            >
              <div className="site-card-wrapper">
                <div
                  style={{ display: "flex", flexWrap: "wrap", padding: "0 1%" }}
                >
                  <Row gutter={20} style={{ width: "100%" }}>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        title={
                          <Title
                            level={4}
                            style={{ textAlign: "center", color: "black" }}
                          >
                            Organization settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "25%", textAlign: "center" }}>
                            <Card bordered={false}>
                              <h3>Logo</h3>
                              <Upload {...props}>
                                <Button icon={<UploadOutlined />}>
                                  Select File
                                </Button>
                              </Upload>
                              <Button
                                type="primary"
                                onClick={handleUpload}
                                disabled={fileList.length === 0}
                                loading={uploading}
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                {uploading ? "Uploading" : "Upload"}
                              </Button>
                            </Card>
                          </Col>
                          <Col style={{ width: "25%", textAlign: "center" }}>
                            <Card bordered={false}>
                              <h3>Signature</h3>
                              <Upload {...props}>
                                <Button icon={<UploadOutlined />}>
                                  Select File
                                </Button>
                              </Upload>
                              <Button
                                type="primary"
                                onClick={handleUpload}
                                disabled={fileList.length === 0}
                                loading={uploading}
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                {uploading ? "Uploading" : "Upload"}
                              </Button>
                            </Card>
                          </Col>
                          <Col style={{ width: "25%", textAlign: "center" }}>
                            <Card bordered={false}>
                              <h3>Company Name</h3>
                              <Button
                                type="primary"
                                onClick={handleUpload}
                                loading={uploading}
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Update Details
                              </Button>
                            </Card>
                          </Col>
                          <Col style={{ width: "25%", textAlign: "center" }}>
                            <Card bordered={false}>
                              <h3>Company Email</h3>
                              <p>a94488@something.com</p>
                              <Button
                                onClick={handleUpload}
                                loading={uploading}
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Edit
                              </Button>
                            </Card>
                          </Col>
                        </div>
                      </Card>
                    </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        style={{textAlign:'center'}}
                        bordered={false}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Manage Bank Accounts
                          </Title>
                        }
                      >
                        <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Update Details
                              </Button>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        style={{textAlign:'center'}}
                        bordered={false}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Payment Settings
                          </Title>
                        }
                      >
                        <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Open Payment Settings
                              </Button>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        style={{textAlign:'center'}}
                        bordered={false}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Migrate Split Company Payment Settings
                          </Title>
                        }
                      >
                        <h3>No Similar Organizations Found!</h3>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        style={{textAlign:'center'}}
                        bordered={false}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Autoshare Time Settings
                          </Title>
                        }
                      >
                        <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Configure Timings
                              </Button>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black", textAlign:'center' }}
                          >
                            Credit Control Settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "33%" }}>
                            <Card bordered={false}>
                              <p>Credit Control Number Overdue of Days :</p>
                              <Input />
                              <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Update
                              </Button>
                            </Card>
                          </Col>
                          <Col style={{ width: "33%" }}>
                            <Card bordered={false}>
                              <p>Credit Control Outstanding Amount :</p>
                              <Input />
                              <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Update
                              </Button>
                            </Card>
                          </Col>
                          <Col style={{ width: "33%" }}>
                            <Card bordered={false}>
                              <h3>Code to be written</h3>
                              <Button
                                type="primary"
                                onClick={handleUpload}
                                loading={uploading}
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Update Details
                              </Button>
                            </Card>
                          </Col>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Reports to be shared with Debtors
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "33%" }}>
                            <p>Disable Invoice Autosharing</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "33%" }}>
                            <p>Enable Ledger Autosharing</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "33%" }}>
                            <p>Disable Receipt Autosharing</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "33%" }}>
                            <p>Disable PDC Autosharing</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Reminder Settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                            <div style={{ display: "flex", flexDirection:'column' }}>
                          <Col style={{ width: "100%" }}>
                            <p>Don't Send Reminder on Short Payment</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "100%" }}>
                            <p>Send Payment Reminder to Bad Debts</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "100%" }}>
                            <p>Show Ledger In Reminders</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          </div>
                          <div style={{ display: "flex", flexDirection:'column' }}>
                          <Col style={{ width: "100%" }}>
                            <p>No reminders if paid recently</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "100%" }}>
                            <p>No reminders if PDC Received</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                          <Col style={{ width: "100%" }}>
                            <p>Show referral promotion</p>
                          <Switch defaultChecked onChange={onChange} />
                          </Col>
                        </div>
                        <div style={{marginLeft:'5%', padding:'0 5%', display:'flex'}}>
                            <p>Number of days </p>
                            <Input style={{height:'30%'}} />
                            <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Update
                              </Button>
                        </div>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            User Reports
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Daily Report
                              </Button>
                          </Col>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Weekly Report
                              </Button>
                          </Col>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Collect Screen Settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Daily Report
                              </Button>
                          </Col>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Weekly Report
                              </Button>
                          </Col>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            IVR, SMS and Whatsapp Settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Daily Report
                              </Button>
                          </Col>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Weekly Report
                              </Button>
                          </Col>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Mail Settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Daily Report
                              </Button>
                          </Col>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Weekly Report
                              </Button>
                          </Col>
                        </div>
                      </Card>
                      </Col>
                    <Col span={24} style={{padding:'1%'}}>
                      <Card
                        bordered={false}
                        style={{ textAlign:'center'}}
                        title={
                          <Title
                            level={4}
                            style={{ color: "black" }}
                          >
                            Invoice Settings
                          </Title>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Daily Report
                              </Button>
                          </Col>
                          <Col style={{ width: "100%" }}>
                          <Button
                                type="primary"
                                style={{
                                  marginTop: 16,
                                }}
                              >
                                Weekly Report
                              </Button>
                          </Col>
                        </div>
                      </Card>
                      </Col>
                  </Row>
                </div>
              </div>

            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Settings;
