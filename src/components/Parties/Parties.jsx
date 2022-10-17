import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";
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

const { Column, ColumnGroup } = Table;
const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const maincolumn = [
  {
    title: "All",
    dataIndex: "all",
  },
  {
    title: "To Collect",
    dataIndex: "to_collect",
  },
  {
    title: "To Pay",
    dataIndex: "to_pay",
  },
];

const maindata = [
  {
    to_collect: "Rs 20,000",
    to_pay: "Rs 10,000",
  },
];

const data = [
  {
    key: "1",
    name: "ABC Pvt Ltd",
    category: "--",
    mobile_number: 7799988521,
    party_type: "Customer",
    balance: "Rs. 20,000"
  },
  {
    key: "2",
    name: "XYZ Pvt Ltd",
    category: "--",
    mobile_number: 7123988521,
    party_type: "Customer",
    balance: "Rs. 10,500"
  }
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

const Parties = () => {
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
                      <h2
                        style={{
                          fontSize: "25px",
                          fontWeight: "900",
                          marginTop: "32px",
                        }}
                      >
                        Parties
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "60px",
                        marginLeft: "auto",
                        marginRight: "200px",
                        marginTop: "32px",
                      }}
                    >
                      <Button
                        type="primary"
                        style={{
                          margin: "0 1vw",
                          backgroundColor: "#d8d7df",
                          color: "#000000",
                          border: "none",
                        }}
                      >
                        <a style={{ color: "#000000" }}>Parties Settings</a>
                        &nbsp;
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
                        Bulk Import Parties
                      </Button>
                      <Button
                        type="primary"
                        style={{
                          margin: "0 1vw",
                          backgroundColor: "rgb(40, 52, 149)",
                          border: "none",
                        }}
                      >
                        <AiOutlineArrowUp />
                        &nbsp;<a style={{ color: "#ffffff" }}>Create Party</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Row>
              <hr />
              <Row style={{ marginBottom: "1%", marginTop: "-3%" }}>
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
                style={{
                  marginLeft: "0%",
                  marginRight: "70%",
                  paddingBottom: "1%",
                }}
                columns={maincolumn}
                dataSource={maindata}
                onChange={onChangeTableValues}
                pagination={false}
              />
              <Table dataSource={data}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Category" dataIndex="category" key="category" />
                <Column
                  title="Mobile Number"
                  dataIndex="mobile_number"
                  key="mobile_number"
                />
                <Column
                  title="Party Type"
                  dataIndex="party_type"
                  key="party_type"
                />
                <Column title="Balance" dataIndex="balance" key="balance"/>
              </Table>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Parties;
