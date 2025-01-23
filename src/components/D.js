import React from "react";
import { FaEnvelope, FaDollarSign, FaUser, FaDatabase, FaSearch, FaPaintBrush, FaEllipsisH } from "react-icons/fa";
import { SiMailgun } from "react-icons/si";

const D = () => {
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
        Supercharge your app instantly, <br /> launch faster, make $
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "30px", color: "#ccc" }}>
        Login users, process payments, and send emails at lightspeed. Spend your time building <br/>your startup, not integrating APIs. 
        ShipFast provides you with the boilerplate code you<br/> need to launch, FAST.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "40px" }}>
        <FeatureIcon icon={<FaEnvelope />} text="Emails" active />
        <FeatureIcon icon={<FaDollarSign />} text="Payments" />
        <FeatureIcon icon={<FaUser />} text="Login" />
        <FeatureIcon icon={<FaDatabase />} text="Database" />
        <FeatureIcon icon={<FaSearch />} text="SEO" />
        <FeatureIcon icon={<FaPaintBrush />} text="Style" />
        <FeatureIcon icon={<FaEllipsisH />} text="More" />
      </div>

      <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto", padding: "20px", backgroundColor: "#181818", borderRadius: "8px" }}>
        <h3 style={{ marginBottom: "15px" }}>Emails</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#ccc" }}>
          <li>✔️ Send transactional emails</li>
          <li>✔️ DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)</li>
          <li>✔️ Webhook to receive & forward emails</li>
          <li style={{ color: "#00ff00" }}>✔️ Time saved: 3 hours</li>
          <li style={{ color: "#00ff00" }}>✔️ Headaches: 0</li>
        </ul>
        <p className="mt-4 text-gray-300 flex items-center space-x-2">
        <SiMailgun /><p style={{ color: "#ffba00" }}>with Mailgun</p>
        </p>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon, text, active }) => (
  <div style={{ color: active ? "#ffba00" : "#ccc", cursor: "pointer" }}>
    <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
    <p style={{ fontSize: "14px", fontWeight: active ? "bold" : "normal" }}>{text}</p>
  </div>
);

export default D;
