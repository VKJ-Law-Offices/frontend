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

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const columns = [
  {
    title: "DEBTOR NAME",
    dataIndex: "debtor_name",
    sorter: {
      compare: (a, b) => a.debtor_name - b.debtor_name,
      multiple: 3,
    },
  },
  {
    title: "PROJECTED AMOUNT",
    dataIndex: "projected_amount",
    sorter: {
      compare: (a, b) => a.projected_amount - b.projected_amount,
      multiple: 3,
    },
  },
  {
    title: "TOTAL INVOICES",
    dataIndex: "invoices",
    sorter: {
        compare: (a, b) => a.invoices - b.invoices,
        multiple: 3,
    },
  },
  {
    title: "INVOICE NUMBERS",
    dataIndex: "invoice_numbers",
  },
];

const data = [
  {
    key: "1",
    debtor_name: "John Brown",
    projected_amount: 1,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "2",
    debtor_name: "Jim Green",
    projected_amount: 2,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "3",
    debtor_name: "Joe Black",
    projected_amount: 3,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "4",
    debtor_name: "Jim Red",
    projected_amount: 4,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "5",
    debtor_name: "Jim Red",
    projected_amount: 5,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "6",
    debtor_name: "Jim Red",
    projected_amount: 6,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "7",
    debtor_name: "Jim Red",
    projected_amount: 7,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "8",
    debtor_name: "Jim Red",
    projected_amount: 8,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "9",
    debtor_name: "Jim Red",
    projected_amount: 9,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "10",
    debtor_name: "Jim Red",
    projected_amount: 10,
    invoices: 70,
    invoice_numbers: 70,
  },
  {
    key: "11",
    debtor_name: "Jim Red",
    projected_amount: 11,
    invoices: 70,
    invoice_numbers: 70,
  },
];

const onChangeTableValues = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const plainOptions = ["Upcoming Projections", "Earlier Projections"];
const options = [
  {
    label: "Upcoming Projections",
    value: "Upcoming Projections",
  },
  {
    label: "Earlier Projections",
    value: "Earlier Projections",
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

const ProjectedCollections = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [droppeddown2, setDroppeddown2] = useState(false);
  const [droppeddown3, setDroppeddown3] = useState(false);
  const [droppeddown4, setDroppeddown4] = useState(false);
  const [droppeddown5, setDroppeddown5] = useState(false);
  const [droppeddown6, setDroppeddown6] = useState(false);
  const [summaryValue, setSummaryValue] = useState("Upcoming Projections");

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
            <div style={{display:"flex", flexDirection:"row"}}>
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
              </div>

              <div style={{marginLeft: "auto",
                      marginRight: "2%"}}>
                <img src="https://app.credflow.in/imgs/userPermission.9e283aebf3c3255a5c0711a85d9ab00a.svg" alt=""
                style={{ width:"30px", height:"auto", margin: "0 5px 10px 5px", fontSize: "175%" }}
                />
                <NavLink className="nav-link" to="/settings" variant="body2">
                  <SettingOutlined
                    style={{ padding: "0 5px", fontSize: "175%" }}
                  />
                </NavLink>
                <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png" alt=""
                style={{ width:"30px", height:"auto", margin: "0 5px 10px 5px", fontSize: "175%" }}
                />
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
                    Projected Collection Reports
                  </h1>
                  <div
                    style={{
                        display: "flex",
                        width: "60px",
                        marginBottom: "24px",
                        marginLeft: "auto",
                        marginRight: 0,
                      }}
                  >
                    <Button
                      type="primary"
                      style={{
                        margin: "0 5vw",
                        backgroundColor: "rgb(40, 52, 149)",
                        border: "none",
                      }}
                    >
                      Export Excel
                    </Button>
                  </div>
                </div>
              </Row>
              <Row gutter={20} style={{ width: "100%" }}>
                <Col style={{ width: "20%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          DEBTORS
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                  </Card>
                </Col>
                <Col style={{ width: "20%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          PROJECTED AMOUNT
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                  </Card>
                </Col>
                <Col style={{ width: "20%" }}>
                  <Card bordered={false}>
                    <Statistic
                      title={
                        <Title
                          level={5}
                          style={{ fontSize: "12px", color: "grey" }}
                        >
                          INVOICES
                        </Title>
                      }
                      value={0}
                      valueStyle={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                  </Card>
                </Col>
              </Row>
              <Row style={{ margin: "1% 0" }}>
                <div style={{ display: "flex" }}>
                  <Input
                    placeholder="Search by Debtor Name"
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
                  <Col span={10} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      Start Date
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
                  <Col span={10} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      End Date
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
                  <Col span={10} style={{ margin: "0 5%" }}>
                    <p style={{ marginBottom: 0 }}>
                      Filter via Tally Groups
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
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default ProjectedCollections;