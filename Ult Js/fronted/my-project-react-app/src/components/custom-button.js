

export default function CustomButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
        >
            Hire Me
        </button>
    );
}