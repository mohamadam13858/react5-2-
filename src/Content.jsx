import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery.jsx';
import Posts from './posts/Posts.jsx';
import style from './style.module.css'
import Todos from './todos/Todos.jsx';
import Users from './users/Users.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddUser from './adduser.jsx';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    const [isUser , setIsUser] = useState(true)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={"${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none"} 
            onClick={handleShowMenu}
            ></i>
            <Routes>
                <Route path='/' element={<Users/>}/>
                <Route path='/User/AddUser' element={<AddUser/>}> 
                <Route path=':userId'/>
                </Route>
                <Route path='/Posts' element={<Posts/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='/Todos' element={<Todos/>}/>
                <Route path='*' element={<Users/>}/>
            </Routes>
        </div>
    )

}

export default Content;