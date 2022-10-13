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
import { Input, Radio, Pagination, Table, Divider } from "antd";
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


const maincolumn = [
  {
    title: "Sales Amount",
    dataIndex: "sales_amount"
  },
  {
    title: "Total Sales",
    dataIndex: "total_sales"
  },
  {
    title: "Paid",
    dataIndex: "paid"
  }
]

const maindata = [
  {
    sales_amount: "Rs 20,000",
    total_sales: "Rs 20,000",
    paid: "Rs 10,000"
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
    title: "SALES INVOICE NO.",
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
    dataIndex: "button",
  },
  // {
  //   title: "BALANCE DUE",
  //   dataIndex: "balance_due",
  //   sorter: {
  //     compare: (a, b) => a.inv_no - b.inv_no,
  //     multiple: 3,
  //   },
  // },
  // {
  //   title: "STATUS",
  //   dataIndex: "status",
  //   filters: [
  //     {
  //       text: 'Partially Paid',
  //       value: 'Partially Paid',
  //     },
  //     {
  //       text: 'Not Overdue',
  //       value: 'Not Overdue',
  //     },
  //     {
  //       text: 'Paid',
  //       value: 'Paid',
  //     },
  //     {
  //       text: 'Overdue',
  //       value: 'Overdue',
  //     },
  //     {
  //       text: 'Due Today',
  //       value: 'Due Today',
  //     },
  //     {
  //       text: 'Created Today',
  //       value: 'Created Today',
  //     },
  //   ],
  //   onFilter: (value, record) => record.name.indexOf(value) === 0,
  // },
  // {
  //   title: "ACKNOWLEDGED",
  //   dataIndex: "acknowledged",
  // },
  // {
  //   title: "SEND INVOICE",
  //   dataIndex: "send_invoice",
  // },
];

const data = [
  {
    key: "1",
    date: "John Brown",
    inv_no: 1,
    customer_name: 60,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "2",
    date: "Jim Green",
    inv_no: 2,
    customer_name: 66,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "3",
    date: "Joe Black",
    inv_no: 3,
    customer_name: 90,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "4",
    date: "Jim Red",
    inv_no: 4,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "5",
    date: "Jim Red",
    inv_no: 5,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "6",
    date: "Jim Red",
    inv_no: 6,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "7",
    date: "Jim Red",
    inv_no: 7,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "8",
    date: "Jim Red",
    inv_no: 8,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "9",
    date: "Jim Red",
    inv_no: 9,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "10",
    date: "Jim Red",
    inv_no: 10,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
  },
  {
    key: "11",
    date: "Jim Red",
    inv_no: 11,
    customer_name: 99,
    amount: 70,
    due_date: 70,
    balance_due: 70,
    invoice_type: 70,
    status: 70,
    acknowledged: 70,
    send_invoice: 70,
    button: "Unpaid"
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

const Invoices = () => {
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
                      <h1 style={{ fontSize: '15px' , marginTop: "-8%"}}>Bill Your Sales to Customers</h1>
                    </div>
                    <div style={{
                      display: "flex", width: "60px",
                      marginLeft: "auto",
                      marginRight: 0,
                      marginTop: "32px"
                    }}>
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
                </div>
              </Row>
              <hr />
              <Row style={{ marginBottom: "1%" , marginTop: "-3%"}}>
                <div style={{ display: "flex" }}>
                  <Input
                    placeholder="Search by Debtor Name"
                    style={{
                      margin: "5% 15px 0 0",
                      width: "320px",
                      height: "40px",
                    }}
                  />
                  <Input
                    placeholder="Filter via Invoice Date"
                    style={{
                      margin: "5% 15px 0 0",
                      width: "280px",
                      height: "40px",
                    }}
                  />
                  <Input
                    placeholder="Filter via Invoice Due Date"
                    style={{
                      margin: "5% 15px 0 0",
                      width: "280px",
                      height: "40px",
                    }}
                  />
                  <Input
                    placeholder="Filter via Tally Groups"
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
                columns={maincolumn}
                dataSource={maindata}
                onChange={onChangeTableValues}
                pagination={
                  false
                }
              />
              <Table
                style={{ marginRight: "2%" }}
                columns={columns}
                dataSource={data}
                onChange={onChangeTableValues}
                pagination={{
                  size: "small",
                }}
              />
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Invoices;
