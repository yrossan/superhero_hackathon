import React from 'react'
import {NavLink, Outlet} from "react-router-dom"

const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

const PageWrapper = () => {
  return (
    <>
    <header>
        <nav>
            <NavLink to ="/" style={styles}>
                Home
            </NavLink>
            <NavLink to ="/heroes" style={styles}>
                Heroes
            </NavLink>
            <NavLink to ="/search" style={styles}>
                Search
            </NavLink>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default PageWrapper
