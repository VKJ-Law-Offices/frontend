import React, { useState, useEffect } from "react";
import { message, Upload } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  EditOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown, Space } from "antd";
import Icon, { DownOutlined, UpOutlined } from "@ant-design/icons";
import {  } from "antd";

import "antd/dist/antd.css";
import "../DashboardLayout/dashboard-layout.css";
import { NavLink } from "react-router-dom";

const { Header, Sider } = Layout;

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

const Profile = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [droppeddown, setDroppeddown] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")){
      setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    }
  },[])

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
              ]}
            />
          </Sider>

          <Layout
            className="site-layout"
            style={{
              marginLeft: collapsed ? 80 : 200,
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
                margin:"1% 5% 0 5%",
                paddingLeft: "0%",
                paddingRight: "0%",
                minHeight: "100vh",
                fontSize: "18px"
              }}
            >
                <h1 style={{ fontSize: "180%", color: "grey", marginBottom:"3%" }}>
                    <b>
                        Profile
                    </b>
                </h1>

                <div style={{display: "flex", flexDirection:"row"}}>
                <div style={{paddingRight: "15%"}}>
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Name:
                            </h1>
                            <p style={{width:"400px"}}>
                                {/* A to Z Money Recovery And Credit Pvt Ltd */}
                                {userDetails.name}
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Email:
                            </h1>
                            <p style={{width:"400px"}}>
                                {/* accounts@vkjlaw.com */}
                                {userDetails.email}
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Phone Number:
                            </h1>
                            <p style={{width:"400px"}}>
                                {/* 9589303384 */}
                                {userDetails.phone}
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                        <div>
                            <h1>
                                Whatsapp Number:
                            </h1>
                            <p style={{width:"400px"}}>
                                {/* 9589303384 */}
                                {userDetails.phone}
                            </p>
                        </div>
                        
                        <div style={{paddingLeft: "10%"}}>
                            <EditOutlined />
                        </div>
                    </div>

                    <Button
                      type="primary"
                      style={{ marginTop: "5%" }}
                    >
                        Change Password
                    </Button>
                    
                </div>

                <div>
                    <h1 style={{ textAlign: "center", color: "grey"}}>
                        Referrals
                    </h1>
                    <p>
                        Referral Code: <b>7MGVE4</b>
                    </p>
                </div>
                </div>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Profile;
