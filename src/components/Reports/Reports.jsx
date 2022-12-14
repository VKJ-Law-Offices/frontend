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

const Reports = () => {
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
              defaultSelectedKeys={["7"]}
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
                {
                  key: "13",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/actions" variant="body2">Actions</NavLink>
                },
                {
                  key: "14",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/communication" variant="body2">Communication</NavLink>
                },
                {
                  key: "15",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/purchase" variant="body2">Purchase</NavLink>
                },
                {
                  key: "16",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/stock_items" variant="body2">Stock Items</NavLink>
                },
                {
                  key: "17",
                  icon: <UploadOutlined />,
                  label: <NavLink className="nav-link" to="/pdc" variant="body2">PDC</NavLink>
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
              <Col span={24} style={{ padding: "1%" }}>
                <Card>
                  <NavLink
                    to="/debtor_summary"
                    variant="body2"
                    className="signin_navlink"
                  >
                    <h1 style={{ textAlign: "center" }}>Debtor Summary</h1>
                  </NavLink>
                </Card>
              </Col>
              <Col span={24} style={{ padding: "1%" }}>
                <Card>
                  <NavLink
                    to="/sales_manager_report"
                    variant="body2"
                    className="signin_navlink"
                  >
                    <h1 style={{ textAlign: "center" }}>
                      Sales Manager Report
                    </h1>
                  </NavLink>
                </Card>
              </Col>
              <Col span={24} style={{ padding: "1%" }}>
                <Card>
                  <NavLink
                    to="/projected_collections"
                    variant="body2"
                    className="signin_navlink"
                  >
                    <h1 style={{ textAlign: "center" }}>
                      Projected Collections
                    </h1>
                  </NavLink>
                </Card>
              </Col>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Reports;
