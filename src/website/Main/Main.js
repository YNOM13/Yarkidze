import React from "react"
import style from './Main.module.scss'
import MyPosts from "./my-posts/MyPosts/MyPosts"

import ProfileInfo from "./ProfileInfo/ProfileInfo"

function Main(props){
 
    return(
        <div className={style.main}>
            <ProfileInfo/>
            <MyPosts postData={props.postsData}/>  
            
        </div>
    )
}

export default Main