
import "./button.module.css";
export default function Button(props) {
    console.log("Button Component Render.");
    return (
        <button className="btn" onClick={props.onClick}>Click Button</button>
    );
}
