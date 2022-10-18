import React from 'react';
import "./Homepage.css"

import { Button, Card } from "antd";
const Homepage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Are You Making This Mistake?</h2>
          <p style={{ textAlign: "justify" }}>If you are reading this, you are probably tossing and turning at night, worrying about overdue payments. Avoiding bad debt, reducing your financial burden, and increasing your profitability are some of the most crucial aspects of your MSME. But following up with clients who are not eager to pay and delaying new projects due to overdue payments is frustrating and undermines your chances of success and growth.</p>
        </div>
        <img src="/images/image2.png" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src="/images/image3.png" />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Say GoodBye to Overdue Payments</h2>
          <p style={{ textAlign: "justify" }}>MSMEpayments.com is a one-stop solution for MSMEs in India struggling with delayed payments. Established to address a burning issue that keeps companies hostage to overdue payments, MSMEpayments.com takes all the guesswork and frustration out of following up on your invoices and maintaining cash flow.</p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Reduce Your Financial Burden By Recovering Overdue Payments</h1>
      <Button
        type="primary"
        style={{
          margin: "0.5vw",
          backgroundColor: "rgb(40, 52, 149)",
          border: "none",
        }}
      >
        Sign Up Now for Free
      </Button>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src="/images/image4.png" />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Invest in your Peace of mind</h2>
          <p style={{ textAlign: "justify" }}>Dealing with overdue payments will not only take a toll on your relationship with your clients and your mood but also sabotage your financial future. Our innovative solution adds that much-needed extra layer of security around your business, increasing your financial stability and safeguarding you from delayed payments</p>
        </div>

      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Top 5 Reasons To Choose The Money Recovery Tool:</h2>
          <ul>
            <p>Maintain good relationships with clients</p>
            <p>Gives room for more projects</p>
            <p>Deal with pleasent and happy vendors</p>
            <p>Automate your cash recovery system</p>
            <p>Increase growth and profitability</p>
          </ul>

        </div>
        <img src="/images/image5.png" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src="/images/image6.png" />
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Cutting Edge Technology to the Rescue</h2>
          <p style={{ textAlign: "justify" }}>Choosing MSMEpayments.com comes with a plethora of benefits that will help you avoid all the headaches of overdue payments. Our innovative AI-based Money Recovery Tool checks all the boxes and allows you to effectively deal with overdue payments without any fuss.</p>
        </div>
      </div>
      <h1>If You Keep Doing What You've Always Done, You'll Keep Getting What You've Always Got</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "30%", marginTop: "75px" }}>
          <h2>Backed Up By Perfect Integration</h2>
          <p style={{ textAlign: "justify" }}>You can easily follow up on your payments with MSMEpayments.com by perfectly integrating it into your payment system. It automatically prompts payments based on your other accounting software, making it an easy payment recovery process.
          </p>
        </div>
        <img src="/images/image7.png" />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card
          title="Innovative Tools"
          style={{
            width: 300,
          }}
        >
          <p>With features such as reports and an ROI calculator, you can effortlessly track and be on top of various aspects such as payments and performance.</p>
        </Card>
        <Card
          title="Fully Automated"
          style={{
            width: 300,
          }}
        >
          <p>By helping MSMEs automate the invoice follow-ups through email, thus eliminating the need to manually follow up with clients or keep track of pending invoices.</p>
        </Card>
        <Card
          title="Certified By DPIIT"
          style={{
            width: 300,
          }}
        >
          <p>Certified by the Department for Promotion of Industry and Internal Trade, MSMEpayments.com is recognized as a promising startup in the business finance sector.</p>
        </Card>
        <br />
      </div>
      <div className="site-card-border-less-wrapper">
        <Card
          bordered={false}
          style={{
            width: "80%",
            marginLeft: "120px",
            alignContent: "center",
          }}
        >
          <h1>Our Mission</h1>
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
          >
            Sign Up Now for Free!
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Homepage