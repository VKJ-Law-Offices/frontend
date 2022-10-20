import React from 'react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { GrCertificate } from 'react-icons/gr';
import { TbFileCertificate } from 'react-icons/tb';


import "./Homepage.css"
import { Button, Descriptions, PageHeader, Card } from 'antd';
const Homepage = () => {
  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="MSME Payments"
          extra={[
            <Button key="2" href="https://www.msmepayments.com/signin">Sign In</Button>,
            <Button key="1" type="primary" href="https://www.msmepayments.com/signup">Sign Up</Button>,
          ]}
        >
        </PageHeader>
      </div>

      <div style={{ width: "50%", margin: "auto" }}>
        <h1>Ensure Growth. Shelter easiness. Be effortless</h1>
        <p>We help MSMEs do their e-invoicing & accounting in such a way that it helps them in faster recovery of payments, reduce their bad debt, get instant collateral-free loans and increase their profits and cash flow.</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <Button
            type="primary"
            style={{
              margin: "auto",
              marginTop: "1rem",
              backgroundColor: "rgb(40, 52, 149)",
              border: "none",
            }}
            href="https://www.msmepayments.com/signin"
          >
            Sign Up Now for Free
          </Button>

        </div>
        <div style={{ display: "flex", marginTop: "1.25rem" }}>
          <p style={{ textAlign: "center", fontWeight: "750" }}>Automated Financial Operation</p>
          <p style={{ textAlign: "center", paddingLeft: "75px", fontWeight: "750" }}>Collateral Free Instant Loan</p>
          <p style={{ textAlign: "center", paddingLeft: "75px", fontWeight: "750" }}>Get Payments Faster</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Your financial Operation shouldn't be complicated</h2>
          <p style={{ textAlign: "justify" }}>Creating e-invoices with all regulations feels like an overwhelming process. It can cause a lot of unnecessary process. It can cause a lot of unnecessary stress. Most business are afraid of government penalties and errors. <br />Lack of working capital makes frustrations and worry to take loans. Sometimes achieving a steady cash flow seems like a far star. <br />At msmepayments.com</p>
        </div>
        <img src="/images/image1.png" style={{ width: "450px" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <img src="/images/image2.png" style={{ width: "250px", marginTop: "45px" }} />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>E-invoicing & Accounting Fast And Easy</h2>
          <p style={{ textAlign: "justify" }}> Generate e-invoices with easy tips <br />Smart Validation <br />Bulk e-invoices generaion <br />Cost-effective <br />Easily trackable <br />Multiple GSTIN <br />Recurring e-invoices</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Instant Loan With Invoice Discounting</h2>
          <p style={{ textAlign: "justify" }}>Get a short-term loan with unpaid dues <br />Collateral free <br />Unlock fund quickly <br />Easily accessible <br />Get up to 90% of your dues <br />Get a loan in 24-72 hours</p>
        </div>
        <img src="/images/image3.png" style={{ width: "450px" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src="/images/image6.png" style={{ width: "400px", marginTop: "45px" }} />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Money Recovery Tool</h2>
          <p style={{ textAlign: "justify" }}>Automatic payment reminder on SMS, Emails & Calls <br />Auto sync with Tally <br />Auto-generated report <br />One-click sharing information <br />Tracking communication history to customers <br />Can access it from anywhere <br />Simple to Run <br />And has many more features....</p>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "3.25rem" }}>
        <img src="/images/image8.jpg" style={{ width: "200px", margin: "auto" }} /><h3 >E-invoicing With Validation</h3><br /><p>Get your e-invoices & accounting with few clicks, smart Validation to save you from errors</p>
        <img src="/images/image9.jpg" style={{ width: "200px", margin: "auto" }} /><h3>Automatic Payment Recovery System</h3><br /><p>Through our Payment reminder tool automate your payments collection system.</p>
        <img src="/images/image10.jpg" style={{ width: "200px", margin: "auto" }} /><h3>Get Collateral Free Instant Loan</h3><br /><p>Get loans within 24-72 hours up to 90% your of unpaid dues without paperwork</p>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
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


      <div className="site-card-border-less-wrapper" >
        <Card
          bordered={false}
          style={{
            width: "80%",
            marginLeft: "120px",
            alignContent: "center",
          }}
        >
          <h1 >Our Mission</h1>
          <p>To provide world class payment follow-up system to every MSME of the World & help them in getting timely payments.</p>
          <h1>Our Vision</h1>
          <p>Every MSME of the World is using MsmePayments.com to get paid timely.</p>
          <Button
            type="primary"
            style={{
              margin: "0.5vw",
              backgroundColor: "rgb(40, 52, 149)",
              border: "none",
            }}

            href="https://www.msmepayments.com/signin"
          >
            Sign Up Now for Free!
          </Button>
        </Card>
      </div>
      <br />
      <hr />
      <br />
      <div >
        <h1 >The Fortune is in The Follow-Up</h1>
        <p >If you are a small business or mid-business and you are worried about being able to survive in the world of the internet, we will make sure that you don't survive; you thrive.</p>
        <Button
          type="primary"
          style={{
            margin: "0.5vw",
            backgroundColor: "rgb(40, 52, 149)",
            border: "none",
          }}

          href="https://www.msmepayments.com/signin"
        >
          Sign Up Now for Free!
        </Button>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <div>
          <img src="/images/logo.png" />
          <p>Toll Free No: +917415636172</p>
          <p>Email:<a> support@msmepayments.com</a></p>
        </div>
        <div>
          <a>Home</a>
        </div>
        <div>
          <h1>Our Social Networks</h1>
          <div>
            <AiFillTwitterSquare />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
        </div>
        <p>@2022 msmepayments.com all rights are reserved</p>
      </div>
    </div >
  )
}

export default Homepage