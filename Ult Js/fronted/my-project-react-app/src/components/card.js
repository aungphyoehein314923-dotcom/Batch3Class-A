export default function Card (props){
return(
    <div style={{border:" 1px solid #ddd",
    padding:"lerm",
    borderButtom:"lrem",
    borderRadius:"8px",
    }}>
<h3>{props.title}</h3>
<p>{props.description}</p>
    </div>
)
}