export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f3f4f6",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#ffffff",
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "420px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ fontSize: "28px" }}>Maya Tank</h1>
        <p style={{ marginTop: "10px" }}>
          Online Business & Digital Skills Coach
        </p>
        <p style={{ marginTop: "10px", color: "#555" }}>
          Learn • Grow • Earn Online
        </p>

        <a
          href="https://wa.me/919313253955"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 22px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
