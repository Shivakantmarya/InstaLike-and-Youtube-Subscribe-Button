import { useState } from "react"
import SubscribeBtn from "./SubscribeBtn";

export default function InstaLikeBtn(){
let [isLiked, setIsLiked] = useState(false);
let [isTexted, setIsTexed] = useState("Unliked");

let notStyled = {
    fontSize : '200px',
    cursor : 'pointer'
}

let Styled = {
    fontSize : '200px',
    color : 'red',
    cursor : 'pointer'
}

    let updateBtn = ()=>{
       setIsLiked(!isLiked);
       setIsTexed(!isTexted)
    }

    return(
        <div>
            <h1>Instagram Like Button</h1>
            <p onClick={updateBtn}>
                {
                    isLiked ? (<i class="fa-solid fa-heart" style={Styled}></i>) :
                     (<i className="fa-regular fa-heart" style={notStyled}></i>)
                }
            </p>
            <h1>
                {
                    isTexted ? "Like" : "Unlike"
                }
            </h1>

            <SubscribeBtn/>
        </div>
    )
}