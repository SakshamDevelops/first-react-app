import React from "react"

function Details(props){
    return <div>
        <p className="info" >{props.tele}</p>
        <p className="info">{props.email}</p>
    </div>
}

export default Details