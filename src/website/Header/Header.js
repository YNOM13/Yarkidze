/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { NavLink } from "react-router-dom"
import classes from '../Header/Header.module.scss'

function Header(){
    return(
        <header className={classes.header}>
            <NavLink to="/">
                <img className={classes.imgLogo} src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            </NavLink>
        </header>
    )
}

export default Header