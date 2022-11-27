import React from "react";
import styleDialog from './Dialogs.module.scss'
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props){


    let dialogsElements  = props.dialogsData
    .map(dialog=><DialogItem key={dialog.id} id = {dialog.id} name={dialog.name}></DialogItem>)



    let messagesElements = props.messagesData
    .map(i=><Message key={i.id} message={i.message}/>)
    
    return (
        <div className={styleDialog.box}>

            <div className={styleDialog.preitem}>

                {dialogsElements}  


            </div>
            
            <div className={styleDialog.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs