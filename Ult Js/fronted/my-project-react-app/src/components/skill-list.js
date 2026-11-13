export default function SkillList({ skills }) {
    return (
        <div style={{ padding: "lerm" }}>
            <h2>My Skills</h2>

            <ul>
                {skills.map((skills, index) => (
                    <li key={index} style={{
                        color: "green",
                        margin: "8px"
                    }}>
                        {skills}
                    </li>
                ))}
            </ul>
        </div>
    );
}