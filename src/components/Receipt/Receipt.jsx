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
    title: "PAYMENT NUMBER",
    dataIndex: "payment_number",
  },
  {
    title: "RECEIPT NUMBER",
    dataIndex: "receipt_number",
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
    title: "DEBTOR",
    dataIndex: "debtor",
  },
  {
    title: "AMOUNT",
    dataIndex: "amount",
    sorter: {
      compare: (a, b) => a.amount - b.amount,
      multiple: 3,
    },
  },
  {
    title: "MODE",
    dataIndex: "mode",
  },
  {
    title: "SYNCING STATUS",
    dataIndex: "syncing_status",
    sorter: {
      compare: (a, b) => a.syncing_status - b.syncing_status,
      multiple: 3,
    },
  },
];

const data = [
  {
    key: "1",
    payment_number: "John Brown",
    receipt_number: 1,
    date: 60,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "2",
    payment_number: "Jim Green",
    receipt_number: 2,
    date: 66,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "3",
    payment_number: "Joe Black",
    receipt_number: 3,
    date: 90,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "4",
    payment_number: "Jim Red",
    receipt_number: 4,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "5",
    payment_number: "Jim Red",
    receipt_number: 5,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "6",
    payment_number: "Jim Red",
    receipt_number: 6,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "7",
    payment_number: "Jim Red",
    receipt_number: 7,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "8",
    payment_number: "Jim Red",
    receipt_number: 8,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "9",
    payment_number: "Jim Red",
    receipt_number: 9,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "10",
    payment_number: "Jim Red",
    receipt_number: 10,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
  {
    key: "11",
    payment_number: "Jim Red",
    receipt_number: 11,
    date: 99,
    debtor: 70,
    amount: 70,
    mode: 70,
    syncing_status: 70,
  },
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

const Receipt = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [droppeddown2, setDroppeddown2] = useState(false);
  const [droppeddown3, setDroppeddown3] = useState(false);
  const [droppeddown4, setDroppeddown4] = useState(false);
  const [droppeddown5, setDroppeddown5] = useState(false);
  const [droppeddown6, setDroppeddown6] = useState(false);
  const [payValue, setPayValue] = useState("MSME Pay");

  const onChangePayValue = ({ target: { value } }) => {
    console.log("radio4 checked", value);
    setPayValue(value);
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
              defaultSelectedKeys={["5"]}
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
              <Row>
                <div style={{ display: "flex", width: "95%" }}>
                  <h1 style={{ marginRight: "20%", fontSize: "25px" }}>
                    Payment Received 
                  </h1>
                  <div
                    style={{
                      marginLeft: "auto",
                      marginRight: "0",
                    }}
                  >
                    <Button
                      type="primary"
                    //   style={{ margin: "0.5vw" }}
                    >
                        <SettingOutlined/>
                      Payment Settings
                    </Button>
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
                          ONLINE PAYMENTS
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
                          TOTAL COLLECTION
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
                          PAYMENT REQUESTS
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                      prefix={"Rs "}
                    />
                  </Card>
                </Col>
              </Row>
              <Row style={{ margin: "1% 0" }}>
                <div style={{ display: "flex", flexDirection:'column' }}>
                    <p style={{ margin: 0 }}>
                        Syncing Status
                    </p>
                  <Input
                    placeholder="Search"
                    style={{
                      margin: "0 15px 0 0",
                      width: "400px",
                      height: "40px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    margin: 0,
                    float: "right",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width:'150px', display: "flex", flexDirection:'column' }}>
                    <p style={{ marginBottom: 0 }}>
                        Syncing Status
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
                  </div>
                  <div style={{ width:'150px', marginRight:'5%', display: "flex", flexDirection:'column' }}>
                    <p style={{ marginBottom: 0 }}>
                    Filter via Date Range:
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
                  </div>
                  <Button
                      type="primary"
                      style={{ marginTop: "5%" }}
                    >
                        Download Statement
                    </Button>
                </div>
              </Row>
              <Row style={{ marginBottom: "1% 0" }}>
                <Col span={16}>
                  <Radio.Group
                    options={plainOptions}
                    onChange={onChangePayValue}
                    value={payValue}
                    optionType="button"
                    buttonStyle="solid"
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
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Receipt;
