import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            
            <a className="navbar-brand" href="/">
            <img src="favicon-32x32.png" alt="Logo" width="28" height="26" class="d-inline-block align-text-top"/>
            {props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
                </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
                </form> */}

                
                {/* <div className="form-check form-check-inline">
                    <input className="form-check-input dot1" onClick={props.changeThemer} type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label text-danger" htmlFor="inlineCheckbox1"></label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input dot2" onClick={props.changeThemeb} type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label text-primary" htmlFor="inlineCheckbox1"></label>
                </div> */}

                <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`} >
                    <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{(props.mode).charAt(0).toUpperCase()+(props.mode).substring(1)} Mode</label>
                </div>

            </div>
        </div>
    </nav>
  )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: "This is Title",
//     homeText : "This is Home",
//     aboutText:  "This is About"
// }