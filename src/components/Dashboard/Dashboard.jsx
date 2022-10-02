import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Button, Col, Row, Statistic } from "antd";
import { Layout, Menu, Typography } from "antd";
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

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [droppeddown2, setDroppeddown2] = useState(false);
  const [droppeddown3, setDroppeddown3] = useState(false);
  const [droppeddown4, setDroppeddown4] = useState(false);
  const [droppeddown5, setDroppeddown5] = useState(false);
  const [droppeddown6, setDroppeddown6] = useState(false);

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
                marginTop: "24px",
                paddingLeft: "0%",
                paddingRight: "0%",
              }}
            >
              <Row>
                <div
                  style={{
                    float: "right",
                    marginBottom: "24px",
                    paddingLeft: "90%",
                  }}
                >
                  <Dropdown
                    overlay={menu2}
                    trigger={["click"]}
                    style={{ border: "2px black" }}
                    onClick={() => setDroppeddown2(!droppeddown2)}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <Button style={{ color: "rgb(22, 28, 75)" }}>
                          15 Days
                          {droppeddown2 ? <UpOutlined /> : <DownOutlined />}
                        </Button>
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </Row>

              <div className="site-card-wrapper">
                <div
                  style={{ display: "flex", flexWrap: "wrap", padding: "0 1%" }}
                >
                  <Row gutter={20} style={{ width: "100%" }}>
                    <Col style={{ width: "20%" }}>
                      <Card bordered={false}>
                        <Statistic
                          title={
                            <Title level={5} style={{ color: "grey" }}>
                              No Overdue
                            </Title>
                          }
                          value={0}
                          valueStyle={{ fontWeight: "bold" }}
                          prefix={"Rs "}
                        />
                      </Card>
                    </Col>
                    <Col style={{ width: "20%" }}>
                      <Card bordered={false}>
                        <Statistic
                          title={
                            <Title level={5} style={{ color: "grey" }}>
                              1-15 Days
                            </Title>
                          }
                          value={0}
                          valueStyle={{ fontWeight: "bold" }}
                          prefix={"Rs "}
                        />
                      </Card>
                    </Col>
                    <Col style={{ width: "20%" }}>
                      <Card bordered={false}>
                        <Statistic
                          title={
                            <Title level={5} style={{ color: "grey" }}>
                              16-30 Days
                            </Title>
                          }
                          value={0}
                          valueStyle={{ fontWeight: "bold" }}
                          prefix={"Rs "}
                        />
                      </Card>
                    </Col>
                    <Col style={{ width: "20%" }}>
                      <Card bordered={false}>
                        <Statistic
                          title={
                            <Title level={5} style={{ color: "grey" }}>
                              31-45 Days
                            </Title>
                          }
                          value={0}
                          valueStyle={{ fontWeight: "bold" }}
                          prefix={"Rs "}
                        />
                      </Card>
                    </Col>
                    <Col style={{ width: "20%" }}>
                      <Card bordered={false}>
                        <Statistic
                          title={
                            <Title level={5} style={{ color: "grey" }}>
                              &gt; 45 Days
                            </Title>
                          }
                          value={7692}
                          valueStyle={{ fontWeight: "bold" }}
                          prefix={"Rs "}
                        />
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="site-card-wrapper">
                <Row
                  gutter={20}
                  style={{ width: "100%", padding: "0 1%", marginTop: " 24px" }}
                >
                  <Col span={12}>
                    <Card
                      title={
                        <div style={{ margin: "0 auto" }}>
                          <Title
                            level={5}
                            style={{ color: "grey", float: "left" }}
                          >
                            Outstanding Amount
                          </Title>
                          <div style={{ float: "right" }}>
                            <Dropdown
                              overlay={menu3}
                              trigger={["click"]}
                              style={{ border: "2px black" }}
                              onClick={() => setDroppeddown3(!droppeddown3)}
                            >
                              <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                  <Button style={{ color: "rgb(22, 28, 75)" }}>
                                    Past 12 Months
                                    {droppeddown3 ? (
                                      <UpOutlined />
                                    ) : (
                                      <DownOutlined />
                                    )}
                                  </Button>
                                </Space>
                              </a>
                            </Dropdown>
                          </div>
                        </div>
                      }
                      bordered={false}
                    >
                      <Statistic
                        title={
                          <Title level={5} style={{ color: "grey" }}>
                            TOTAL OUTSTANDING AMOUNT
                          </Title>
                        }
                        value={7000}
                        valueStyle={{ fontWeight: "bold" }}
                        prefix={"Rs "}
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      title={
                        <div style={{ margin: "0 auto" }}>
                          <Title
                            level={5}
                            style={{ color: "grey", float: "left" }}
                          >
                            Average Collection Period
                          </Title>
                          <div style={{ float: "right" }}>
                            <Dropdown
                              overlay={menu4}
                              trigger={["click"]}
                              style={{ border: "2px black" }}
                              onClick={() => setDroppeddown4(!droppeddown4)}
                            >
                              <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                  <Button style={{ color: "rgb(22, 28, 75)" }}>
                                    Past 12 Months
                                    {droppeddown4 ? (
                                      <UpOutlined />
                                    ) : (
                                      <DownOutlined />
                                    )}
                                  </Button>
                                </Space>
                              </a>
                            </Dropdown>
                          </div>
                        </div>
                      }
                      bordered={false}
                    >
                      <Statistic
                        title={
                          <Title level={5} style={{ color: "grey" }}>
                            RECOVERY THIS MONTH
                          </Title>
                        }
                        value={0}
                        valueStyle={{ fontWeight: "bold" }}
                        suffix={" days"}
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="site-card-wrapper">
                <Row
                  gutter={20}
                  style={{
                    width: "100%",
                    padding: "0 1% 1% 1%",
                    marginTop: " 24px",
                  }}
                >
                  <Col span={12}>
                    <Card
                      title={
                        <div style={{ margin: "0 auto" }}>
                          <Title
                            level={5}
                            style={{ color: "grey", float: "left" }}
                          >
                            Sales Trend
                          </Title>
                          <div style={{ float: "right" }}>
                            <Dropdown
                              overlay={menu5}
                              trigger={["click"]}
                              style={{ border: "2px black" }}
                              onClick={() => setDroppeddown5(!droppeddown5)}
                            >
                              <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                  <Button style={{ color: "rgb(22, 28, 75)" }}>
                                    Past 12 Months
                                    {droppeddown5 ? (
                                      <UpOutlined />
                                    ) : (
                                      <DownOutlined />
                                    )}
                                  </Button>
                                </Space>
                              </a>
                            </Dropdown>
                          </div>
                        </div>
                      }
                      bordered={false}
                    >
                      <Statistic
                        title={
                          <Title level={5} style={{ color: "grey" }}>
                            SALES THIS MONTH
                          </Title>
                        }
                        value={7000}
                        valueStyle={{ fontWeight: "bold" }}
                        prefix={"Rs "}
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      title={
                        <div style={{ margin: "0 auto" }}>
                          <Title
                            level={5}
                            style={{ color: "grey", float: "left" }}
                          >
                            Average Collection Period
                          </Title>
                          <div style={{ float: "right" }}>
                            <Dropdown
                              overlay={menu6}
                              trigger={["click"]}
                              style={{ border: "2px black" }}
                              onClick={() => setDroppeddown6(!droppeddown6)}
                            >
                              <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                  <Button style={{ color: "rgb(22, 28, 75)" }}>
                                    Past 12 Months
                                    {droppeddown6 ? (
                                      <UpOutlined />
                                    ) : (
                                      <DownOutlined />
                                    )}
                                  </Button>
                                </Space>
                              </a>
                            </Dropdown>
                          </div>
                        </div>
                      }
                      bordered={false}
                    >
                      <Statistic
                        title={
                          <Title level={5} style={{ color: "grey" }}>
                            RECOVERY THIS MONTH
                          </Title>
                        }
                        value={0}
                        valueStyle={{ fontWeight: "bold" }}
                        prefix={"Rs "}
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;