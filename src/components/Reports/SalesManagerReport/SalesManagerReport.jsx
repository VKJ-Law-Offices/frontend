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
    title: "ACCOUNT MANAGER",
    dataIndex: "account_manager",
  },
  {
    title: "SALES ACHIEVED",
    dataIndex: "sales_achieved",
    sorter: {
      compare: (a, b) => a.sales_achieved - b.sales_achieved,
      multiple: 3,
    },
  },
  {
    title: "SALES TARGET",
    dataIndex: "sales_target",
    sorter: {
      compare: (a, b) => a.sales_target - b.sales_target,
      multiple: 3,
    },
  },
  {
    title: "TARGET COMPLETED",
    dataIndex: "target_completed",
    sorter: {
      compare: (a, b) => a.target_completed - b.target_completed,
      multiple: 3,
    },
  },
  {
    title: "OVERALL SALE",
    dataIndex: "overall_sale",
    sorter: {
      compare: (a, b) => a.overall_sale - b.overall_sale,
      multiple: 3,
    },
  },
  {
    title: "COLLECTION ACHIEVED",
    dataIndex: "collection_achieved",
    sorter: {
      compare: (a, b) => a.collection_achieved - b.collection_achieved,
      multiple: 3,
    },
  },
  {
    title: "COLLECTION TARGET",
    dataIndex: "collection_target",
    sorter: {
      compare: (a, b) => a.collection_target - b.collection_target,
      multiple: 3,
    },
  },
  {
    title: "TARGET COMPLETED",
    dataIndex: "target_completed",
    sorter: {
      compare: (a, b) => a.target_completed - b.target_completed,
      multiple: 3,
    },
  },
  {
    title: "OVERALL COLLECTION",
    dataIndex: "overall_collection",
    sorter: {
      compare: (a, b) => a.overall_collection - b.overall_collection,
      multiple: 3,
    },
  },
  {
    title: "ADD TARGETS",
    dataIndex: "add_targets",
  },
];

const data = [
  {
    key: "1",
    account_manager: "John Brown",
    sales_achieved: "John Brown",
    sales_target: 1,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "2",
    account_manager: "Jim Green",
    sales_achieved: "Jim Green",
    sales_target: 2,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "3",
    account_manager: "Joe Black",
    sales_achieved: "Joe Black",
    sales_target: 3,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "4",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 4,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "5",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 5,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "6",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 6,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "7",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 7,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "8",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 8,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "9",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 9,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "10",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 10,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
  },
  {
    key: "11",
    account_manager: "Jim Red",
    sales_achieved: "Jim Red",
    sales_target: 11,
    target_completed: "No targets",
    overall_sale: "sales",
    collection_achieved: "Rs 0",
    collection_target: "Rs 0",
    target_completed: "No targets",
    overall_collection: "0%",
    add_targets: "Add Target",
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

const SalesManagerReport = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [droppeddown2, setDroppeddown2] = useState(false);
  const [droppeddown3, setDroppeddown3] = useState(false);
  const [droppeddown4, setDroppeddown4] = useState(false);
  const [droppeddown5, setDroppeddown5] = useState(false);
  const [droppeddown6, setDroppeddown6] = useState(false);

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
              <Row>
              <Col span={23}>
                      <Card
                        bordered={false}
                        title={
                          <Title
                            style={{ color: "black" }}
                          >
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <h1>Sales Manager Report</h1>
                            <h5 style={{margin:"1% 0 0 2%"}}>October, 2022</h5>
                            </div>
                          </Title>
                        }
                      >
                        <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginRight:"10%"}}>
                            <h3>
                                TOTAL SALES: Rs-29,500
                            </h3>
                            <h3>
                                TOTAL COLLECTION: Rs 0
                            </h3>
                        </div>
                        <div style={{marginRight:"5%"}}>
                            <h3>
                                OVERALL SALES TARGET: Rs 0
                            </h3>
                            <h3>
                                OVERALL COLLECTION TARGET: Rs 0
                            </h3>
                        </div>
                        </div>
                      </Card>
                      </Col>
              </Row>
              <Row style={{ margin: "1% 0" }}>
                <div style={{ display: "flex" }}>
                  <Input
                    placeholder="Search Account Name"
                    style={{
                      margin: "5% 15px 0 0",
                      width: "320px",
                      height: "40px",
                    }}
                  />
                </div>
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

export default SalesManagerReport;
