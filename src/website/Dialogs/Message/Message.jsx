import React from "react";
import styleMessage from "./Message.module.scss"

function Message(props){
    return (
        <div className={styleMessage.message}>
            {props.message} 
        </div>
)
}

export default Message