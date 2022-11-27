import React from "react";
import post from './Post.module.scss'

function Post(props){
    return (
            <div className={post.postCSS}>
                <img className={post.imgpick} src="https://i.pinimg.com/736x/71/0b/dd/710bddd1fac224a60e82ddd57cbf0d93.jpg" alt="" />
                {props.message}
                <span>{props.like} Like</span>
                <span>{props.dislike} Dislike</span>
            </div>
    )
}

export default Post