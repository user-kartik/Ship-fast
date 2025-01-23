import React from "react";
import { FaBolt, FaCrown } from "react-icons/fa";

const H = () => {
  return (
    <div style={{ backgroundColor: "#111", color: "#fff", padding: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "36px" }}>
          Boost your app, launch, earn
        </h1>
        <p style={{ color: "#aaa", fontSize: "18px" }}>
          Don't waste time on Stripe subscriptions or designing a pricing
          section...
        </p>
        <button
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px",
            border: "none",
            marginTop: "20px",
          }}
        >
          <FaBolt style={{ marginRight: "8px" }} />
          Get ShipFast
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 60px",
          borderTop: "1px solid #333",
          paddingTop: "20px",
        }}
      >
        <div>
          <h3 style={{ display: "flex", alignItems: "center" }}>
            <FaBolt style={{ marginRight: "10px", color: "#ffc107" }} />
            ShipFast
          </h3>
          <p style={{ color: "#aaa", fontSize: "14px", margin: "10px 0" }}>
            Ship your startup in days, not weeks
          </p>
          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Copyright © 2025 - All rights reserved
          </p>
          <button
            style={{
              backgroundColor: "#000",
              color: "#ffc107",
              padding: "8px 16px",
              fontSize: "14px",
              border: "1px solid #ffc107",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <FaBolt style={{ marginRight: "5px" }} />
            Built with ShipFast
          </button>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "10px" }}>
            LINKS
          </h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#aaa" }}>
            <li>Login</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>Leaderboard</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "10px" }}>
            LEGAL
          </h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#aaa" }}>
            <li>Terms of services</li>
            <li>Privacy policy</li>
            <li>Licenses</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "10px" }}>
            BY THE MAKER OF SHIPFAST
          </h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#aaa" }}>
            <li>Newsletter for makers</li>
            <li>IndiePage</li>
            <li>GamifyList</li>
            <li>WorkbookPDF</li>
            <li>LogoFast</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default H;
