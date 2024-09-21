import { useState } from "react"

export default function SubscribeBtn(){

let [sub, setSub] = useState("Unsubscribe");

let subStyle = {
    border: "none",
    outline : "none",
    borderRadius: "8px",
    border: "2px solid red",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "600",
    fontFamily: "inherit",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    transition: "border-color 0.25s"
}

let SubscribeMe = ()=>{
    setSub(!sub);
}

    return(
        <div>
                {
                    sub ? (<span><button onClick={SubscribeMe}>{"Subscribe"}</button></span>): (<span><button onClick={SubscribeMe} style={subStyle}>{"Unsubscribe"}</button></span>)
                }
        </div>
    )
}