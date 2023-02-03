import React from 'react'
import "./styles/Navbar.css"

const NavBar = ({changeTheme, theme}) => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__title'>Where in the world?</h1>
            <div onClick={changeTheme} className='navbar__btn'>
            <i onClick={changeTheme} className={`nabar__icon bx bx-${theme === "light" ? "moon" : "sun"}`}></i>
                <h4 className='navbar__textTheme' onClick={changeTheme}>Dark Mode</h4>
            </div>
        </nav>
    )
}

export default NavBar