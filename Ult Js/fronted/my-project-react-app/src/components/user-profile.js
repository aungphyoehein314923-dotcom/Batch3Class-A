export default function UserProfile({ users }) {

    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "lerm",
            borderRadius: "8px",
            backgroundColor: "#eaf4ff"
        }}>
            <h2 style={{ color: "blue" }}>User Profile</h2>
            <p>Name: {users.name}</p>
            <p>Role: {users.role}</p>
            <p>Company: {users.company}</p>
        </div>
    );
}