import { Fascinate } from "next/font/google";

export default function Profile(props){
    console.log("user: ",props.user)
    return(
 <div>
<h3>{props.user.name}</h3>
<p>{props.user.age}</p>
<p>{props.user.country}</p>
 </div>
    );
}