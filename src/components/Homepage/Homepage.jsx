import React from 'react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { GrCertificate } from 'react-icons/gr';
import { TbFileCertificate } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';



import "./Homepage.css"
import { Button, Descriptions, PageHeader, Card } from 'antd';
const Homepage = () => {
  return (
    <div>
      <div className="site-page-header-ghost-wrapper" style={{ position: "fixed", zIndex: "4" }}>
        <PageHeader
          ghost={false}
          extra={[
            <img src='images/logo.png' style={{ width: "250px", marginRight: "900px" }} />,
            <Button key="2" href="https://www.msmepayments.com/signin">Sign In</Button>,
            <Button key="1" type="primary" href="https://www.msmepayments.com/signup">Sign Up</Button>,
          ]}
        >
        </PageHeader>
      </div>

      <div style={{ width: "60%", margin: "auto", textAlign: "justify", paddingTop: "150px",paddingBottom:"80px", textAlign: "center" ,transform: "scale(1.6)"}}>
        <p style={{ fontSize: "20px", fontWeight: "500" }}>We help Business Owner in faster recovery of their payments and reduce bad debts, guaranteed, through our Money Recovery & eInvoicing Tool.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <Button
            type="primary"
            style={{
              margin: "auto",
              marginTop: "1rem",
              backgroundColor: "rgb(40, 52, 149)",
              border: "none",
            }}
            href="https://www.msmepayments.com/signup"
          >
            Sign Up Now for Free
          </Button>

        </div>
        <div style={{ display: "flex", marginTop: "1.25rem" }}>
          <p style={{ textAlign: "center", fontWeight: "750" }}> GST E-Invoicing</p>
          <p style={{ textAlign: "center", paddingLeft: "75px", fontWeight: "750" }}>Faster Recovery (Reduce Bad Debts)</p>
          <p style={{ textAlign: "center", paddingLeft: "75px", fontWeight: "750" }}>Instant Collateral Free Loan (Zero Security)</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", transform: "scale(1.2)" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Money Recovery, e-Invoicing & Invoice Discounting Tool </h2>
          <p style={{ textAlign: "justify" }}>Creating e-invoices and following up on payments and ensuring recovery of payments on time with all regulations feels like an overwhelming process. It can cause a lot of unnecessary pressure and stress for business owners like you. Most businesses are afraid of government penalties and errors.
            Lack of working capital also causes frustration and worry. Sometimes achieving a steady cash flow seems like an impossible goal.
            At msmepayments.com, we help MSMEs in GST e-Invoicing & Accounting, faster recovery of payments, reduce bad debts and generate more profits, and get instant collateral-free loans, all in one single platform.</p>
        </div>
        <img src="/images/image1.png" style={{ width: "450px" }} />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", transform: "scale(1.2)" }}>
        <img src="/images/image2.png" style={{ width: "250px", marginTop: "45px" }} />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>E-invoicing & Accounting Fast And Easy</h2>
          <p style={{ textAlign: "justify" }}> <TiTick />Generate e-invoices with easy tips <br /><TiTick />Smart Validation <br /><TiTick />Bulk e-invoices generaion <br /><TiTick />Cost-effective <br /><TiTick />Easily trackable <br /><TiTick />Multiple GSTIN <br /><TiTick />Recurring e-invoices</p>
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", transform: "scale(1.2)" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Instant Loan With Invoice Discounting</h2>
          <p style={{ textAlign: "justify" }}><TiTick />Get a short-term loan with unpaid dues <br /><TiTick />Collateral free <br /><TiTick />Unlock fund quickly <br /><TiTick />Easily accessible <br /><TiTick />Get up to 90% of your dues <br /><TiTick />Get a loan in 24-72 hours</p>
        </div>
        <img src="/images/image3.png" style={{ width: "450px" }} />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", transform: "scale(1.2)" }}>
        <img src="/images/image6.png" style={{ width: "400px", marginTop: "45px" }} />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Money Recovery Tool</h2>
          <p style={{ textAlign: "justify" }}><TiTick />Automatic payment reminder on SMS, Emails & Calls <br /><TiTick />Auto sync with Tally <br /><TiTick />Auto-generated report <br /><TiTick />One-click sharing information <br /><TiTick />Tracking communication history to customers <br /><TiTick />Can access it from anywhere <br /><TiTick />Simple to Run <br /><TiTick />And has many more features....</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", marginTop: "3.25rem", padding: "1rem", justifyContent: "space-evenly", textAlign: "center", transform: "scale(1.2)" }}>
        <span style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", width: "200px" }}>
          <img src="/images/image8.jpg" style={{ width: "200px", margin: "auto" }} /><h3 ><br />E-invoicing With Validation</h3><br /><p>Get  e-invoices & accounting with few clicks, smart Validation saves from errors</p>
        </span>
        <span style={{ display: "flex", flexDirection: "column", width: "200px" }}>
          <img src="/images/image9.jpg" style={{ width: "200px", margin: "auto" }} /><h3>Automatic Payment Recovery System</h3><br /><p>Through our Payment reminder tool automate your payments collection system.</p>
        </span>
        <span style={{ display: "flex", flexDirection: "column", width: "200px" }}>
          <img src="/images/image10.jpg" style={{ width: "200px", margin: "auto" }} /><h3>Get Collateral Free Instant Loan</h3><br /><p>Get loans within 24-72 hours up to 90% your of unpaid dues without paperwork</p>
        </span>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", transform: "scale(1.2)" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>We help remove the financial complexity that overwhelms you so you can focus on business expansion an enjoy your profit.</h2>
          <p style={{ textAlign: "justify" }}>The process of making an easy financial Operation & steady working capital can be bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you must be worried about Operation expenses. Taking your business towards continuous growth will be a great process. We have to stand with you.</p>
          <br />
          <div style={{ textAlign: "justify" }}>
            <p><GoVerified /> &nbsp;NASSCOM Certified </p>
            <p><GrCertificate />&nbsp;Startup India Registered</p>
            <p><TbFileCertificate />&nbsp;DPIIT Certified</p>
          </div>
        </div>
        <img src="/images/image5.png" style={{ width: "450px" }} />
      </div>
      <br />
      <br />
      <br />

      <div className="site-card-border-less-wrapper" style={{ textAlign: "center" }}>
        <Card
          bordered={false}
          style={{
            width: "80%",
            marginLeft: "120px",
            alignContent: "center",
          }}
        >
          <h1>Our Mission</h1>
          <p style={{ fontWeight: "500" }}>To provide world class payment follow-up system to every MSME of the World & help them in getting timely payments.</p>
          <h1>Our Vision</h1>
          <p style={{ fontWeight: "500" }}>Every MSME of the World is using MsmePayments.com to get paid timely.</p>
          <Button
            type="primary"
            style={{
              margin: "0.5vw auto",
              backgroundColor: "rgb(40, 52, 149)",
              border: "none",
            }}

            href="https://www.msmepayments.com/signup"
          >
            Sign Up Now for Free!
          </Button>


        </Card>
      </div>
      <br />
      <hr />
      <br />
      <div style={{ width: "50%", margin: "auto", transform: "scale(1.2)" }}>
        <h1 style={{ textAlign: "center" }}>The Fortune is in The Follow-Up</h1>
        <p style={{ textAlign: "justify" }}>If you are a small business or mid-business and you are worried about being able to survive in the world of the internet, we will make sure that you don't survive you thrive.</p>
        <div style={{ display: "flex" }}>

          <Button
            type="primary"
            style={{
              margin: "0.5vw auto",
              backgroundColor: "rgb(40, 52, 149)",
              border: "none",
            }}

            href="https://www.msmepayments.com/signup"
          >
            Sign Up Now for Free!
          </Button>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "1.5rem 0" }}>
        <div>
          <img src="/images/logo.png" style={{ width: "250px", marginLeft: "59px" }} />
          <p style={{ marginLeft: "59px", marginTop: "1rem" }}>Toll Free No: +917415636172</p>
          <p style={{ marginLeft: "59px" }}>Email:<a> support@msmepayments.com</a></p>
        </div>
        <div>
          <a style={{ marginLeft: "59px", fontSize: "20px" }}>Home</a>
        </div>
        <div>
          <h1>Our Social Networks</h1>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "40px", color: "#0c78c0" }}>
            <AiFillTwitterSquare />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", padding: "1rem 0" }}>@2022 msmepayments.com all rights are reserved</p>
    </div >
  )
}

export default Homepage