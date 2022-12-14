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
        title: "Item Name",
        dataIndex: "date",
        sorter: {
            compare: (a, b) => a.date - b.date,
            multiple: 3,
        },
    },
    {
        title: "Item Code",
        dataIndex: "inv_no",
    },
    {
        title: "Stock Value",
        dataIndex: "customer_name",
    },
    {
        title: "Sold Qty",
        dataIndex: "due_date",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "Sales Value",
        dataIndex: "amount",
        sorter: {
            compare: (a, b) => a.inv_no - b.inv_no,
            multiple: 3,
        },
    },
    {
        title: "Avg Cost Value",
        dataIndex: "tags",
        key: "tags",
    },
    {
        title: "Avg Sales Value",
        dataIndex: "tags",
        key: "tags",
    },
    {
        title: "Last Sale Date",
        dataIndex: "tags",
        key: "tags",
    }
];

const data = [
    {
        key: "1",
        item_name: "Nails",
        item_code: "14500035",
        stock_qty: 550,
        stock_value: "Rs. 1100",
        sold_qty: 50,
        sales_value: 150,
        avg_cost_value: "Rs 2",
        avg_sales_value: "Rs 3",
        last_sale_date: "22-Sept-2022"
    },
    {
        key: "2",
        item_name: "Steel Plate",
        item_code: "14500054",
        stock_qty: 100,
        stock_value: "Rs. 75000",
        sold_qty: 5,
        sales_value: "Rs. 1500",
        avg_cost_value: "Rs 2000",
        avg_sales_value: "Rs. 3000",
        last_sale_date: "02-Aug-2022"
    },
    {
        key: "3",
        item_name: "Pipes",
        item_code: "14500031",
        stock_qty: 200,
        stock_value: "Rs. 10000",
        sold_qty: 10,
        sales_value: "Rs. 1000",
        avg_cost_value: "Rs. 1800",
        avg_sales_value: "Rs. 2200",
        last_sale_date: "01-July-2022"
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

const StockItems = () => {
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
              defaultSelectedKeys={["16"]}
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
                                            <h2 style={{ fontSize: '25px', fontWeight: '900', marginTop: "10px" }}>Stock Items</h2>
                                        </div>
                                        <div style={{
                                            display: "flex", width: "60px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
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
                                            ><a style={{ color: "#000000" }}>Item Settings</a>&nbsp;
                                                <FiSettings />
                                            </Button>
                                            <Button
                                                type="primary"
                                                style={{
                                                    margin: "0 1vw",
                                                    backgroundColor: "#d8d7df",
                                                    color: "#000000",
                                                    border: "none",
                                                }}
                                            ><a style={{ color: "#000000" }}>Bulk Edit Items</a>&nbsp;
                                                <FiSettings />
                                            </Button>
                                            <Button
                                                type="primary"
                                                style={{
                                                    margin: "0 1vw",
                                                    backgroundColor: "#d8d7df",
                                                    color: "#000000",
                                                    border: "none",
                                                }}
                                            ><a style={{ color: "#000000" }}>Bulk Add Items</a>&nbsp;
                                                <FiSettings />
                                            </Button>
                                            <Button
                                                type="primary"
                                                style={{
                                                    margin: "0 1vw",
                                                    backgroundColor: "rgb(40, 52, 149)",
                                                    border: "none",
                                                }}
                                            ><a style={{ color: "#ffffff" }}>Create Items</a>
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </Row>
                            <hr />
                            <Row style={{ marginBottom: "1%", marginTop: "-3%" }}>
                                <div style={{ display: "flex" }}>
                                    <Input
                                        placeholder="Search as per Item Name"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "320px",
                                            height: "40px",
                                        }}
                                    />
                                    <Input
                                        placeholder="Filter Date"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "280px",
                                            height: "40px",
                                        }}
                                    />
                                    <Input
                                        placeholder="Filter Low Stock"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "280px",
                                            height: "40px",
                                        }}
                                    />
                                    <Input
                                        placeholder="Filter via Expiring Stock"
                                        style={{
                                            margin: "5% 15px 0 0",
                                            width: "220px",
                                            height: "40px",
                                        }}
                                    />
                                </div>
                            </Row>
                            <Table dataSource={data}>
                                <Column title="Item Name" dataIndex="item_name" key="item_name" />
                                <Column title="Item Code" dataIndex="item_code" key="item_code" />
                                <Column title="Stock Qty" dataIndex="stock_qty" key="stock_qty" />
                                <Column title="Stock Value" dataIndex="stock_value" key="stock_value" />
                                <Column title="Sold Qty" dataIndex="sold_qty" key="sold_qty" />
                                <Column title="Sales Value" dataIndex="sales_value" key="sales_value" />
                                <Column title="Avg Cost Value" dataIndex="avg_cost_value" key="avg_cost_value" />
                                <Column title="Avg Sales Value" dataIndex="avg_sales_value" key="avg_sales_value" />
                                <Column title="Last Sale Date" dataIndex="last_sale_date" key="last_sale_date" />
                            </Table>
                        </div>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};
export default StockItems