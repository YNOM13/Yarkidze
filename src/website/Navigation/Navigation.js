import React from "react"
import { NavLink } from "react-router-dom"
import classes from '../Navigation/Navigation.module.scss'

function Navigation(){
    return(
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>

                <li>
                    <NavLink className = {navData => navData.isActive ? classes.active : classes.navigation__list} to="/">
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink className = {navData => navData.isActive ? classes.active : classes.navigation__list} to="/dialogs/">
                        Messages
                    </NavLink>
                </li>

                <li>
                    <NavLink className = {navData => navData.isActive ? classes.active : classes.navigation__list} to="/news">
                        News
                    </NavLink>
                </li>

                <li>
                    <NavLink className = {navData => navData.isActive ? classes.active : classes.navigation__list} to="/music">
                        Music
                    </NavLink>
                </li>

                <li>
                    <NavLink className = {navData => navData.isActive ? classes.active : classes.navigation__list} to="/settings">
                        Settigns
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation