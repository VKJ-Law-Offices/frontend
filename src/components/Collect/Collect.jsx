import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input, Radio, Pagination, Table } from "antd";
import { Card, Button, Col, Row, Statistic } from "antd";
import { Layout, Menu, Typography } from "antd";
import Icon, { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import "antd/dist/antd.css";
import "../DashboardLayout/dashboard-layout.css";
import background from "../../resources/search-icon-SBI-300266455-preview.jpg";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const columns = [
  {
    title: "COMPANY NAME",
    dataIndex: "company_name",
    sorter: {
      compare: (a, b) => a.company_name - b.company_name,
      multiple: 3,
    },
  },
  {
    title: "TOTAL DUE",
    dataIndex: "total_due",
    sorter: {
      compare: (a, b) => a.total_due - b.total_due,
      multiple: 3,
    },
  },
  {
    title: "TOTAL OVERDUE",
    dataIndex: "total_overdue",
  },
  {
    title: "LAST PAYMENT",
    dataIndex: "last_payment",
  },
  {
    title: "AVG COLLECTION",
    dataIndex: "avg_collection",
  },
  {
    title: "OLDEST DUE",
    dataIndex: "oldest_due",
  },
  {
    title: "NEXT FOLLOW-UP",
    dataIndex: "next_follow_up",
  },
  {
    title: "PROMISES TO PAY",
    dataIndex: "promises_to_pay",
  },
  {
    title: "REMARK",
    dataIndex: "remark",
  },
  {
    title: "ACTION",
    dataIndex: "action",
  },
];

const data = [
  {
    key: "1",
    company_name: "John Brown",
    total_due: 1,
    total_overdue: 60,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "2",
    company_name: "Jim Green",
    total_due: 2,
    total_overdue: 66,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "3",
    company_name: "Joe Black",
    total_due: 3,
    total_overdue: 90,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "4",
    company_name: "Jim Red",
    total_due: 4,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "5",
    company_name: "Jim Red",
    total_due: 5,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "6",
    company_name: "Jim Red",
    total_due: 6,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "7",
    company_name: "Jim Red",
    total_due: 7,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "8",
    company_name: "Jim Red",
    total_due: 8,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "9",
    company_name: "Jim Red",
    total_due: 9,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "10",
    company_name: "Jim Red",
    total_due: 10,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
  {
    key: "11",
    company_name: "Jim Red",
    total_due: 11,
    total_overdue: 99,
    last_payment: 70,
    avg_collection: 70,
    oldest_due: 70,
    next_follow_up: 70,
    promises_to_pay: 70,
    remark: 70,
    action: 70,
  },
];

const onChangeTableValues = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const plainOptions = ["Detailed Summary", "Ageing Summary"];
const options = [
  {
    label: "Detailed Summary",
    value: "Detailed Summary",
  },
  {
    label: "Ageing Summary",
    value: "Ageing Summary",
  },
];

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
        label: <a href="/dashboard">PDF</a>,
        key: "0",
      },
      {
        label: <a href="/dashboard">Excel</a>,
        key: "1",
      },
    ]}
  />
);

const userMenu = (
  <Menu
    items={[
      {
        label: <a href="/profile">A TO Z MONEY RECOVERY AND CREDIT PVT LTD</a>,
        key: "0",
      },
      {
        label: <a href="/signout">Sign Out</a>,
        key: "1",
      },
    ]}
  />
);

const onSearch = (value) => console.log(value);

const Collect = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [droppeddown2, setDroppeddown2] = useState(false);
  const [droppeddown3, setDroppeddown3] = useState(false);
  const [droppeddown4, setDroppeddown4] = useState(false);
  const [droppeddown5, setDroppeddown5] = useState(false);
  const [droppeddown6, setDroppeddown6] = useState(false);
  const [summaryValue, setSummaryValue] = useState("Detailed Summary");

  const onChangeSummaryValue = ({ target: { value } }) => {
    console.log("radio4 checked", value);
    setSummaryValue(value);
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
                  label: <NavLink className="nav-link" to="/dashboard" variant="body2">Dashboard</NavLink>
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <NavLink className="nav-link" to="/collect" variant="body2">Collect</NavLink>
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/e-invoice" variant="body2">E-Invoice</NavLink>
                },
                {
                  key: "4",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/invoices" variant="body2">Invoices</NavLink>
                },
                {
                  key: "5",
                  icon: <VideoCameraOutlined />,
                  label: <NavLink className="nav-link" to="/receipt" variant="body2">Receipt</NavLink>
                },
                {
                  key: "6",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/parties" variant="body2">Parties</NavLink>
                },
                {
                  key: "7",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/reports" variant="body2">Reports</NavLink>
                },
                {
                  key: "8",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/roi-calculator" variant="body2">ROI Calculator</NavLink>
                },
                {
                  key: "9",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/instant-invoice-loans" variant="body2">Instant Invoice Loans</NavLink>
                },
                {
                  key: "10",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/start-recovery-proceedings" variant="body2">Start Recovery Proceedings</NavLink>
                },
                {
                  key: "11",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/credit-ratings" variant="body2">Credit Ratings</NavLink>
                },
                {
                  key: "12",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/refer-a-friend" variant="body2">Refer A Friend</NavLink>
                },
              ]}
            />
          </Sider>

          <Layout
            className="site-layout"
            style={{
              marginLeft: collapsed ? 80 : 200,
              minHeight: "100vh",
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
              <div style={{ display: "flex", flexDirection: "row" }}>
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
                          style={{
                            color: "rgb(22, 28, 75)",
                            fontWeight: "bold",
                          }}
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

                <div style={{ marginLeft: "auto", marginRight: "5%" }}>
                  <img
                    src="https://app.credflow.in/imgs/userPermission.9e283aebf3c3255a5c0711a85d9ab00a.svg"
                    alt=""
                    style={{
                      width: "30px",
                      height: "auto",
                      margin: "0 5px 10px 5px",
                      fontSize: "175%",
                    }}
                  />
                  <NavLink className="nav-link" to="/settings" variant="body2">
                    <SettingOutlined
                      style={{ padding: "0 5px", fontSize: "175%" }}
                    />
                  </NavLink>
                  <Dropdown overlay={userMenu}>
                    <a onClick={(e) => e.preventDefault()}>
                      <img
                        src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png"
                        alt=""
                        style={{
                          width: "30px",
                          height: "auto",
                          margin: "0 5px 10px 5px",
                          fontSize: "175%",
                        }}
                      />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </Header>
            <div
              style={{
                marginTop: "24px",
                paddingLeft: "1%",
                paddingRight: "0%",
              }}
            >
              <Row>
                <div style={{ display: "flex", width: "80%" }}>
                  <h1 style={{ marginRight: "20%", fontSize: "25px" }}>
                    Summary of Unpaid Dues with Follow-Up Details
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      float: "right",
                      width: "60px",
                      marginBottom: "24px",
                      marginLeft: "20%",
                    }}
                  >
                    <Button
                      type="primary"
                      style={{
                        margin: "0 1vw",
                        backgroundColor: "rgb(40, 52, 149)",
                        border: "none",
                      }}
                    >
                      Send Bulk Messages
                    </Button>
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      style={{ border: "2px black" }}
                      onClick={() => setDroppeddown2(!droppeddown2)}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Button style={{ color: "rgb(22, 28, 75)" }}>
                            Export
                            <DownOutlined />
                          </Button>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                </div>
              </Row>
              <Row gutter={20} style={{ width: "100%" }}>
                <Col style={{ width: "17%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          OUTSTANDING
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                      prefix={"Rs "}
                    />
                  </Card>
                </Col>
                <Col style={{ width: "17%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          OVERDUE
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                      prefix={"Rs "}
                    />
                  </Card>
                </Col>
                <Col style={{ width: "17%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          ADVANCE PAID
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                      prefix={"Rs "}
                    />
                  </Card>
                </Col>
                <Col style={{ width: "17%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          OUTSTANDING IN BRANCH
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                      prefix={"Rs "}
                    />
                  </Card>
                </Col>
                <Col style={{ width: "17%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          OUTSTANDING DEBTORS
                        </Title>
                      }
                      value={7692}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                      prefix={"Rs "}
                    />
                  </Card>
                </Col>
              </Row>
              <Row style={{ margin: "1% 0" }}>
                <div style={{ display: "flex" }}>
                  <Input
                    placeholder="Search Company"
                    style={{
                      margin: "5% 15px 0 0",
                      width: "320px",
                      height: "40px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "30%",
                    marginBottom: "2%",
                    float: "right",
                    justifyContent: "flex-end",
                  }}
                >
                  <Col span={8} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      Overdue grouping
                      <br /> frequency
                    </p>
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      style={{ border: "2px black" }}
                      onClick={() => setDroppeddown2(!droppeddown2)}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Button style={{ color: "rgb(22, 28, 75)" }}>
                            Export
                            <DownOutlined />
                          </Button>
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                  <Col span={8} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      Filter via
                      <br /> Priority
                    </p>
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      style={{ border: "2px black" }}
                      onClick={() => setDroppeddown2(!droppeddown2)}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Button style={{ color: "rgb(22, 28, 75)" }}>
                            Export
                            <DownOutlined />
                          </Button>
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                  <Col span={8} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      Filter via
                      <br /> Account Manager
                    </p>
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      style={{ border: "2px black" }}
                      onClick={() => setDroppeddown2(!droppeddown2)}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Button style={{ color: "rgb(22, 28, 75)" }}>
                            Export
                            <DownOutlined />
                          </Button>
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                  <Col span={8} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      Filter via
                      <br /> Groups
                    </p>
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      style={{ border: "2px black" }}
                      onClick={() => setDroppeddown2(!droppeddown2)}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Button style={{ color: "rgb(22, 28, 75)" }}>
                            Export
                            <DownOutlined />
                          </Button>
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                </div>
              </Row>
              <Row style={{ marginBottom: "1% 0" }}>
                <Col span={16}>
                  <Radio.Group
                    options={plainOptions}
                    onChange={onChangeSummaryValue}
                    value={summaryValue}
                    optionType="button"
                  />
                </Col>

              </Row>
              <Table
                style={{ marginRight: "2%" }}
                columns={columns}
                dataSource={data}
                onChange={onChangeTableValues}
                pagination={{
                  size: "small",
                }}
              />
              ;
              <Button
                type="primary"
                style={{
                  margin: "5px 40vw 2% 40vw",
                  backgroundColor: "rgb(40, 52, 149)",
                  border: "none",
                }}
              >
                Create Receipt
              </Button>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Collect;
