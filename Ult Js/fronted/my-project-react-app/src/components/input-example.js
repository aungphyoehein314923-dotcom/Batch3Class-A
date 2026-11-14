import { useState } from "react";

export default function InputExample() {
    const [name, setName] = useState("");
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h2> Live Input Synchronization</h2>
            <input
                type="text"
                placeholder="Enter your name."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    padding: "8px",
                    fontSize: "16px",
                    marginTop: "10px",
                    width: "250px"

                }} />
            <p>Hello,{name}</p>

        </div>
    );
}