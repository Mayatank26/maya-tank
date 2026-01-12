export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff8fb1, #ffc1d9)",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      
      {/* HERO */}
      <div style={{
        maxWidth: "900px",
        margin: "auto",
        background: "#ffffff",
        borderRadius: "20px",
        padding: "40px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
      }}>
        <h1 style={{ fontSize: "36px", color: "#d63384" }}>
          Start Your Online Business From Home
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Learn digital skills, online income methods & step-by-step guidance — even if you are a beginner.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#25D366",
            color: "#fff",
            padding: "14px 26px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* ABOUT */}
      <div style={{
        maxWidth: "900px",
        margin: "40px auto",
        background: "#fff",
        borderRadius: "20px",
        padding: "40px"
      }}>
        <h2 style={{ color: "#d63384" }}>Hi, I’m Maya Tank</h2>
        <p style={{ color: "#555", fontSize: "16px" }}>
          I help beginners start their online business journey with clarity, confidence and the right guidance.
          My goal is to help you build something real — not fake promises.
        </p>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div style={{
        maxWidth: "900px",
        margin: "40px auto",
        background: "#fff",
        borderRadius: "20px",
        padding: "40px"
      }}>
        <h2 style={{ color: "#d63384" }}>What You Will Learn</h2>
        <ul style={{ color: "#555", fontSize: "16px", lineHeight: "1.8" }}>
          <li>Digital Marketing Basics</li>
          <li>Online Income Methods</li>
          <li>Beginner Friendly System</li>
          <li>Personal WhatsApp Guidance</li>
        </ul>
      </div>

      {/* FOOTER */}
      <p style={{ textAlign: "center", color: "#fff", marginTop: "40px" }}>
        © 2026 Maya Tank | All Rights Reserved
      </p>
    </div>
  );
}
