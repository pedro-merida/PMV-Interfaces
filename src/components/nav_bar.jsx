import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className="navbar navbar-transparent navbar-absolute fixed-top ">
      <div className="container-fluid" style={{padding: "0 50px 0 50px"}}>
        <h3>SPA</h3> 
        <div className="navbar-nav" style={{width: "50%"}}></div>
        <button className="navbar-toggler" type="button" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
