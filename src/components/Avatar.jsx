import React from "react"
import Contacts from "../contacts"

function Avatar(props){
    return <div>
    <img
    className="circle-img"
    src={props.img}
    alt="avatar_img"/>
    </div>
}

export default Avatar