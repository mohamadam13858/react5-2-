import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? { right: 0 } : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user1.jpg" alt="" />
                </li>
                <NavLink to="/" className={({isActive})=>{return isActive ? "active_nav" : ""}}>
                    <li>
                        کاربران
                    </li>
                </NavLink>
                <NavLink to="/Posts" className={({isActive})=>{return isActive ? "active_nav" : ""}}>
                    <li>
                        مدیریت پست ها
                    </li>
                </NavLink>
                <NavLink to="/Gallery"className={({isActive})=>{return isActive ? "active_nav" : ""}}>
                    <li>
                        مدیریت گالری
                    </li>
                </NavLink>
                <NavLink to="/Todos"className={({isActive})=>{return isActive ? "active_nav" : ""}}>
                    <li>
                        مدیریت گارها
                    </li>
                </NavLink>
            </ul>
        </div>
    )

}

export default Sidebar;