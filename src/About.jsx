import "./styles/aboutstyle.css";


function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ color: "#4CAF50", marginBottom: "30px" }}>Team Members</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {/* Suraj Kumar Yadav */}
        <div
          style={{
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#333" }}>Suraj Kumar Yadav</h2>
          <p style={{ fontWeight: "bold", color: "#555" }}>Roll No: 21052047</p>
        </div>

        {/* Nandita Ranjan */}
        <div
          style={{
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#333" }}>Nandita Ranjan</h2>
          <p style={{ fontWeight: "bold", color: "#555" }}>Roll No: 21052083</p>
        </div>

        {/* Chandan Gupta */}
        <div
          style={{
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#333" }}>Chandan Gupta</h2>
          <p style={{ fontWeight: "bold", color: "#555" }}>Roll No: 21051987</p>
        </div>

        {/* Shivani Kumari */}
        <div
          style={{
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#333" }}>Shivani Kumari</h2>
          <p style={{ fontWeight: "bold", color: "#555" }}>Roll No: 2105573</p>
        </div>

        {/* Abhishek Kumar */}
        <div
          style={{
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#333" }}>Abhishek Kumar</h2>
          <p style={{ fontWeight: "bold", color: "#555" }}>Roll No: 2105598</p>
        </div>
      </div>
    </div>
  );
}

export default About;
