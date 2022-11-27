import React from "react";
import { NavLink } from "react-router-dom";
import styleDialogItem from "./DialogItem.module.scss"
const DialogItem = (props) =>{
    return (
            <div>
                <NavLink className={colorLink => colorLink.isActive ?
                 styleDialogItem.active: styleDialogItem.item } to={`dialogs/${props.id}`}>{props.name}</NavLink>
            </div>
    )
}

export default DialogItem