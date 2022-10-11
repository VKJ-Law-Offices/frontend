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
                {/* <ProfileIcon style={{ color:"red", padding: "0 5px", fontSize: "175%" }} /> */}
              </span>
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
