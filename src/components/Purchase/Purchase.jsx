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
import { Input, Radio, Pagination, Table, Divider } from "antd";
import { Card, Button, Col, Row, Statistic } from "antd";
import { Layout, Menu, Typography } from "antd";
import Icon, { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space, Tag } from "antd";

import "antd/dist/antd.css";
import "../DashboardLayout/dashboard-layout.css";
import background from "../../resources/search-icon-SBI-300266455-preview.jpg";

const { Column, ColumnGroup } = Table;
const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;


const maincolumn = [
    {
        title: "Purchases Amount",
        dataIndex: "purchases_amount"
    },
    {
        title: "Total Purchases",
        dataIndex: "total_purchases"
    },
    {
        title: "Paid",
        dataIndex: "paid"
    }
]

const maindata = [
    {
        purchases_amount: "Rs 20,000",
        total_purchases: "Rs 110,000",
        paid: "Rs 70,000"
    }
]

const columns = [
    {
        title: "DATE",
        dataIndex: "date",
        sorter: {
            compare: (a, b) => a.date - b.date,
            multiple: 3,
        },
    },
    {
        title: "PURCHASE INVOICE NO.",
        dataIndex: "inv_no",
    },
    {
        title: "PARTY NAME",
        dataIndex: "customer_name",
    },
    {
        title: "DUE IN",
        dataIndex: "due_date",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "AMOUNT",
        dataIndex: "amount",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "",
        dataIndex: "tags",
        key: "tags",
    }
];

const data = [
    {
        key: "1",
        date: "John Brown",
        sales_invoice: 1,
        party_name: "Arjun Singh",
        amount: 70,
        due_in: "23 Days",
        tags: ["Unpaid"]
    },
    {
        key: "2",
        date: "Jim Green",
        sales_invoice: 2,
        party_name: "Bhanu Prakash",
        amount: 70,
        due_in: "03 Days",
        tags: ["Paid"]
    },
    {
        key: "3",
        date: "Joe Black",
        sales_invoice: 3,
        party_name: "Chintan Chabra",
        amount: 70,
        due_in: "13 Days",
        tags: ["Unpaid"]
    },
    {
        key: "4",
        date: "Jim Red",
        sales_invoice: 4,
        party_name: "Dean Dio",
        amount: 70,
        due_in: "11 Days",
        tags: ["Unpaid"]
    },
    {
        key: "5",
        date: "Jim Red",
        sales_invoice: 5,
        party_name: "Jasmine Kapoor",
        amount: 70,
        due_in: "12 Days",
        tags: ["Unpaid"]
    },
    {
        key: "6",
        date: "Jim Red",
        sales_invoice: 6,
        party_name: "Zaid Khan",
        amount: 70,
        due_in: "31 Days",
        tags: ["Paid"],
    },
    {
        key: "7",
        date: "Jim Red",
        sales_invoice: 7,
        party_name: "Kotla Khan",
        amount: 70,
        due_in: "20 Days",
        tags: ["Unpaid"]
    },
    {
        key: "8",
        date: "Jim Red",
        sales_invoice: 8,
        party_name: "Rishi Yadav",
        amount: 70,
        due_in: "90 Days",
        tags: ["Unpaid"]
    },
    {
        key: "9",
        date: "Jim Red",
        sales_invoice: 9,
        party_name: "Rohan Kapoor",
        amount: 70,
        due_in: "75 Days",
        tags: ["Unpaid"]
    },
    {
        key: "10",
        date: "Jim Red",
        sales_invoice: 10,
        party_name: "Sanjiv Rathee",
        amount: 70,
        due_in: "9 Days",
        tags: ["Unpaid"]
    },
    {
        key: "11",
        date: "Jim Red",
        sales_invoice: 11,
        party_name: "Tarun Sharma",
        amount: 70,
        due_in: "07 Days",
        tags: ["Unpaid"]
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

const Purchase = () => {
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
              defaultSelectedKeys={["15"]}
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
                                paddingLeft: "1%",
                                paddingRight: "0%",
                            }}
                        >
                            <Row>
                                <div style={{ width: "80%" }}>
                                    <div
                                        style={{
                                            display: "flex",

                                        }}
                                    >
                                        <div>
                                            <h2 style={{ fontSize: '25px', fontWeight: '900', marginTop: "10px" }}>Bill / Purchase Invoices</h2>
                                            <h1 style={{ fontSize: '15px', marginTop: "-8%" }}>Bill Your Purchases from Suppliers</h1>
                                        </div>
                                        <div style={{
                                            display: "flex", width: "60px",
                                            marginLeft: "auto",
                                            marginRight: "70px",
                                            marginTop: "32px"
                                        }}>
                                            <Button
                                                type="primary"
                                                style={{
                                                    margin: "0 1vw",
                                                    backgroundColor: "#d8d7df",
                                                    color: "#000000",
                                                    border: "none",
                                                }}
                                            ><a style={{ color: "#000000" }}>Invoice Settings</a>&nbsp;
                                                <FiSettings />
                                            </Button>
                                            <Button
                                                type="primary"
                                                style={{
                                                    margin: "0 1vw",
                                                    backgroundColor: "rgb(40, 52, 149)",
                                                    border: "none",
                                                }}
                                            >
                                                <AiOutlineArrowUp />&nbsp;<a style={{ color: "#ffffff" }}>Purchase Sales Invo.</a>
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </Row>
                            <hr />
                            <Row style={{ marginBottom: "1%", marginTop: "-3%" }}>
                                <div style={{ display: "flex" }}>
                                    <Input
                                        placeholder="Search by Name"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "320px",
                                            height: "40px",
                                        }}
                                    />
                                    <Input
                                        placeholder="Filter via Date"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "280px",
                                            height: "40px",
                                        }}
                                    />
                                    <Input
                                        placeholder="Filter via Time"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "220px",
                                            height: "40px",
                                        }}
                                    />
                                </div>
                            </Row>
                            <Table
                                style={{ marginLeft: "0%", marginRight: "70%", paddingBottom: "1%" }}
                                tags={maindata}
                                columns={maincolumn}
                                dataSource={maindata}
                                onChange={onChangeTableValues}
                                pagination={
                                    false
                                }
                            />
                            <Table dataSource={data}>
                                <Column title="Date" dataIndex="date" key="date" />
                                <Column title="Purchase Invoice No" dataIndex="sales_invoice" key="sales_invoice" />
                                <Column title="Party Name" dataIndex="party_name" key="party_name" />
                                <Column title="Due In" dataIndex="due_in" key="due_in" />
                                <Column title="Amount" dataIndex="amount" key="amount" />
                                <Column
                                    title=""
                                    dataIndex="tags"
                                    key="tags"

                                    render={(tag) => (
                                        <>
                                            <Tag color="blue" key={tag}>
                                                {tag}
                                            </Tag>
                                        </>
                                    )}
                                />
                            </Table>
                        </div>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};

export default Purchase