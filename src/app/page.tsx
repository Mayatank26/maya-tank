"use client";

export default function Home() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <span style={styles.badge}>Women Only Community</span>

          <h1 style={styles.heading}>
            Join 10,000+ <span style={{ color: "#ff4d94" }}>Women</span>
          </h1>

          <p style={styles.subText}>
            Rising together • From homemaker to skill-based growth
          </p>

          <button style={styles.primaryBtn}>
            Connect on WhatsApp
          </button>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.videoBox}>
            ▶ YouTube Video Placeholder
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>✨ Real Success Stories</h2>

        <div style={styles.grid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={styles.card}>
              Screenshot {i}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>What Happens When You Join?</h2>

        <div style={styles.steps}>
          <div style={styles.step}>① Instant WhatsApp Connection</div>
          <div style={styles.step}>② Complete Training Access</div>
          <div style={styles.step}>③ Daily Mentorship</div>
          <div style={styles.step}>④ Start Confidently</div>
        </div>
      </section>

      {/* FORM */}
      <section style={styles.formSection}>
        <h2 style={{ color: "#fff" }}>Ready to Transform Your Life?</h2>

        <div style={styles.formBox}>
          <input placeholder="Full Name" style={styles.input} />
          <input placeholder="Age" style={styles.input} />
          <input placeholder="Profession" style={styles.input} />

          <button style={styles.primaryBtn}>
            Message on WhatsApp Now
          </button>
        </div>
      </section>

    </div>
  );
}

const styles: any = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
    minHeight: "100vh",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px",
    gap: "40px",
    background: "#fff",
  },

  heroLeft: { maxWidth: "500px" },

  badge: {
    background: "linear-gradient(90deg,#ff758c,#ff7eb3)",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "14px",
  },

  heading: { fontSize: "42px", margin: "20px 0" },

  subText: { color: "#555", fontSize: "18px" },

  heroRight: { flex: 1 },

  videoBox: {
    height: "260px",
    borderRadius: "20px",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryBtn: {
    marginTop: "20px",
    padding: "14px 30px",
    background: "linear-gradient(90deg,#ff4d94,#ff7eb3)",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
  },

  section: { padding: "60px", background: "#fff" },

  sectionAlt: { padding: "60px", background: "#f9f0ff" },

  sectionTitle: { fontSize: "32px", marginBottom: "30px" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
  },

  card: {
    height: "180px",
    background: "#eee",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
  },

  step: {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },

  formSection: {
    padding: "80px 20px",
    textAlign: "center",
  },

  formBox: {
    maxWidth: "400px",
    margin: "30px auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
};
