import React from "react"
import styleProfile from "./ProfileInfo.module.scss"
const ProfileInfo = () =>{
    return(
        <div>
            <div className="background">
                <img className={styleProfile.imgBack} src="https://www.pixelstalk.net/wp-content/uploads/2016/08/HD-Panoramic-Background.jpg" alt="back"/>
            </div>
            <div className={styleProfile.padd}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo