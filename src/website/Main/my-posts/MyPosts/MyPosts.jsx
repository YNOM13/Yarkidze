import React from "react";
import postStyle from'./MyPosts.module.scss'
import Post from "../Posts/Post";


function MyPosts(props){  

    let postingELements = props.postData.map(p=><Post key={p.id} like={p.likesCount} message={p.message}/>)

    return (
        <div className={postStyle.padd}>
            <div className={postStyle.styling}>
                My post 
            </div>
            <div>
                <textarea className={postStyle.textMax} name="" id="" cols="30" rows="10"></textarea>
                <div className={postStyle.buttonsStyle}>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
        

    
            <div>
                {postingELements}
            </div>
            
        </div>
    )
}

export default MyPosts