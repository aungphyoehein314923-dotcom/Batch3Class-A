import { useState } from "react";

export default function ToogleMessage() {
    const [isVisible, setIsVisible] = useState(false);
    const toogleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <h2
                style={{ fontSize: "18px", padding: "15px", fontFamily: "sans-serif" }}>
                Conditional Message
            </h2>
            <button
                onClick={toogleVisibility}
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "skyblue",
                    color: "white",
                }}>
                {isVisible ? "Hide Message" : "Show Message"}
            </button>
            <div>
                {isVisible && (
                    <p style={{ color: "gold", fontSize: "18px" }}>
                        This is a secret Message
                    </p>
                )}
            </div>
        </div>
    );
}