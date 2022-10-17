import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    SearchOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Input, Radio, Pagination, Table, Divider, Checkbox } from "antd";
import { Card, Button, Col, Row, Statistic } from "antd";
import { Layout, Menu, Typography } from "antd";
import Icon, { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space, Tag } from "antd";

import "antd/dist/antd.css";
import "../../DashboardLayout/dashboard-layout.css"
import background from "../../../resources/search-icon-SBI-300266455-preview.jpg";

const { Column, ColumnGroup } = Table;
const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const columns = [
    {
        title: <Checkbox></Checkbox>,
        dataIndex: "check",
    },
    {
        title: "  DEBITOR NAME",
        dataIndex: "debitor_name",
    },
    {
        title: "DATE",
        dataIndex: "date",
        sorter: {
            compare: (a, b) => a.date - b.date,
            multiple: 3,
        },
    },
    {
        title: "PROMISE TO PAY",
        dataIndex: "promise_to_play",
    },
    {
        title: "ADDED ON",
        dataIndex: "added_on",
        sorter: {
            compare: (a, b) => a.amount - b.amount,
            multiple: 3,
        },
    },
    {
        title: "TASK DETAILS",
        dataIndex: "task_details",
    },
    {
        title: "STATUS",
        dataIndex: "status",
    },
    {
        title: "ACCOUNT MANAGER",
        dataIndex: "account_manager",
        sorter: {
            compare: (a, b) => a.syncing_status - b.syncing_status,
            multiple: 3,
        },
    },
    {
        title: "HISTORY",
        dataIndex: "history"
    }
];

const data = [
    {
        key: "1",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    },
    {
        key: "2",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    },
    {
        key: "3",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    },
    {
        key: "4",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    },
    {
        key: "5",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    },
    {
        key: "6",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    },
    {
        key: "7",
        check: <Checkbox style={{ border: "1ps solid black" }}></Checkbox>,
        debitor_name: "John Brown",
        account_manager: "John wick",
        date: "22-sep-2002",
        promise_to_pay: "add amount",
        added_on: "20-aug-2002",
        status: "false",
        history: <Button style={{ backgroundColor: "#1890ff", color: "white" }}>See details</Button>
    }

];

const onChangeTableValues = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};

const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};

const plainOptions = ["MSME Pay", "All Payments", "Requested Payments"];
const options = [
    {
        label: "MSME Pay",
        value: "MSME Pay",
    },
    {
        label: "All Payments",
        value: "All Payments",
    },
    {
        label: "Requested Payments",
        value: "Requested Payments",
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

const Actions = () => {
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
            <div className="components-layout-demo-custom-trigger">
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
              defaultSelectedKeys={["13"]}
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
                        <div className="ant-row" style={{ marginTop: "24px", paddingLeft: "1%" }}>
                            <div className="" style={{ width: "95%", display: 'flex', justifyContent: 'space-between' }}>
                                <h1 style={{ "margin-left": "15px", "font-size": "25px" }}>Tasks</h1>
                                <div className="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn-secondary">
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Export to Excel</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ant-row" style={{ marginTop: "24px", paddingLeft: "1%" }}>
                            <div className="ant-col" style={{ "padding-left": "10px", "padding-right": "10px", "width": "17%" }}>
                                <div className="ant-card">
                                    <div class="ant-card-body">
                                        <div class="ant-statistic">
                                            <div class="ant-statistic-title">
                                                <h5 class="ant-typography" style={{ "font-size": "12px", "color": "grey" }}>Open Taks</h5>
                                            </div>
                                            <div class="ant-statistic-content" style={{ "font-size": "20px", "font-weight": "bold" }}>
                                                <span class="ant-statistic-content-value">
                                                    <span class="ant-statistic-content-value-int">23</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-col" style={{ "padding-left": "10px", "padding-right": "10px", "width": "17%" }}>
                                <div className="ant-card">
                                    <div class="ant-card-body">
                                        <div class="ant-statistic">
                                            <div class="ant-statistic-title">
                                                <h5 class="ant-typography" style={{ "font-size": "12px", "color": "grey" }}>Open Taks</h5>
                                            </div>
                                            <div class="ant-statistic-content" style={{ "font-size": "20px", "font-weight": "bold" }}>
                                                <span class="ant-statistic-content-value">
                                                    <span class="ant-statistic-content-value-int">23</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-col" style={{ "padding-left": "10px", "padding-right": "10px", "width": "17%" }}>
                                <div className="ant-card">
                                    <div class="ant-card-body">
                                        <div class="ant-statistic">
                                            <div class="ant-statistic-title">
                                                <h5 class="ant-typography" style={{ "font-size": "12px", "color": "grey" }}>Open Taks</h5>
                                            </div>
                                            <div class="ant-statistic-content" style={{ "font-size": "20px", "font-weight": "bold" }}>
                                                <span class="ant-statistic-content-value">
                                                    <span class="ant-statistic-content-value-int">23</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ant-row" style={{ marginTop: "24px", paddingLeft: "1%", width: "95%", marginLeft: "auto", marginRight: "auto" }}>
                            <div style={{ "display": "flex", "flex-direction": "column" }}>
                                <p style={{ "margin": " 0px;" }}>Search as per client details</p>
                                <input placeholder="Search according to client name,value" class="ant-input" type="text" value="" style={{ "margin": "0px 15px 0px 0px", "width": "100vw", "max-width": "600px", "height": "40px" }} />
                            </div>
                        </div>
                        <div className="ant-row" style={{ marginTop: "24px", marginBottom: "24px", paddingLeft: "1%", width: "95%", marginLeft: "auto", marginRight: "auto", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <div class="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn" style={{ backgroundColor: "transparent", color: "#1890ff" }}>
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Closed Tasks</span>
                                        </span>
                                    </button>
                                </div>
                                <div class="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn" style={{ backgroundColor: "transparent", color: "#1890ff" }}>
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Temporary Tasks</span>
                                        </span>
                                    </button>
                                </div>
                                <div class="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn" style={{ backgroundColor: "transparent", color: "#1890ff" }}>
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Open Taks</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <div class="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn-primary">
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Closed Tasks</span>
                                        </span>
                                    </button>
                                </div>
                                <div class="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn-primary">
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Temporary Tasks</span>
                                        </span>
                                    </button>
                                </div>
                                <div class="buttons-wrapper">
                                    <button type="button" class="ant-btn ant-btn-primary">
                                        <span role="img" aria-label="setting" class="anticon anticon-setting">
                                            <span>Open Taks</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Table
                            style={{ margin: "auto 2%" }}
                            columns={columns}
                            dataSource={data}
                            onChange={onChangeTableValues}
                            pagination={{
                                size: "small",
                            }}
                        />
                    </Layout>

                </Layout>
            </div>
            <div>
            </div>

        </div>
    );
};

export default Actions;