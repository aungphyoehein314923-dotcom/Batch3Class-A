"use client"
export default function CardWrapper({ children }) {
  return (
    <div style={{
      border: "2px solid #ccc",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "10px",
      margin: "15px"
    }}>
      {children}
    </div>
  );
}