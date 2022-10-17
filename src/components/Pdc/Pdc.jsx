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

const columns = [
    {
        title: "Vendor Name",
        dataIndex: "date",
        sorter: {
            compare: (a, b) => a.date - b.date,
            multiple: 3,
        },
    },
    {
        title: "PDC Date",
        dataIndex: "inv_no",
    },
    {
        title: "Amount",
        dataIndex: "customer_name",
    },
    {
        title: "Bill No.",
        dataIndex: "due_date",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "Cheque No.",
        dataIndex: "amount",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "Bank Name",
        dataIndex: "amount",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    }, {
        title: "Account No.",
        dataIndex: "amount",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "Status",
        dataIndex: "tags",
        key: "tags",
    }
];

const data = [
    {
        key: "1",
        vendor_name: "John Brown",
        pdc_date: "01-Oct-2022",
        amount: 70,
        bill_no: 1234,
        cheque_no: 4321,
        bank_name: "SBI",
        account_no: 847243,
        tags: ["Received"]
    }, {
        key: "2",
        vendor_name: "Krishan Kumar",
        pdc_date: "11-Sept-2022",
        amount: 170,
        bill_no: 1235,
        cheque_no: 4871,
        bank_name: "PNB",
        account_no: 912243,
        tags: ["Cleared"]
    }, {
        key: "3",
        vendor_name: "Laxman Mahato",
        pdc_date: "21-Aug-2022",
        amount: 1779,
        bill_no: 2334,
        cheque_no: 5398,
        bank_name: "Axis",
        account_no: 840023,
        tags: ["Under Clearance"]
    }, {
        key: "4",
        vendor_name: "Mohit Taygi",
        pdc_date: "01-Aug-2022",
        amount: 1220,
        bill_no: 1984,
        cheque_no: 4354,
        bank_name: "SBI",
        account_no: 976637,
        tags: ["Bounced"]
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

const Pdc = () => {
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
                            </span>
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
                                            <h2 style={{ fontSize: '25px', fontWeight: '900', marginTop: "10px" }}>Sales Invoices</h2>
                                            <h1 style={{ fontSize: '15px', marginTop: "-8%" }}>Bill Your Sales to Customers</h1>
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
                                                    backgroundColor: "rgb(40, 52, 149)",
                                                    border: "none",
                                                }}
                                            ><a style={{ color: "#ffffff" }}>Add PDC</a>
                                            </Button>
                                            <Button
                                                type="primary"
                                                style={{
                                                    margin: "0 1vw",
                                                    backgroundColor: "#d8d7df",
                                                    color: "#000000",
                                                    border: "none",
                                                }}
                                            ><a style={{ color: "#000000" }}>Export Excel</a>
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
                                        placeholder="Search by Time"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "320px",
                                            height: "40px",
                                        }}
                                    />
                                    <Input
                                        placeholder="Search by Amount"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "320px",
                                            height: "40px",
                                        }}
                                    />
                                </div>
                            </Row>

                            <Table dataSource={data}>
                                <Column title="Vendor Name" dataIndex="vendor_name" key="vendor_name" />
                                <Column title="PDC Date" dataIndex="pdc_date" key="pdc_date" />
                                <Column title="Amount" dataIndex="amount" key="amount" />
                                <Column title="Bill No." dataIndex="bill_no" key="bill_no" />
                                <Column title="Cheque No." dataIndex="cheque_no" key="cheque_no" />
                                <Column title="Bank Name" dataIndex="bank_name" key="bank_name" />
                                <Column title="Account No." dataIndex="account_no" key="account_no" />
                                <Column title="Tags" dataIndex="tags" key="tags" />
                                <Column
                                    title="Status"
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

export default Pdc