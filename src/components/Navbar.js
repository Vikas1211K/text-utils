import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.link}</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light  '}`}>
                            <input className="custom-control-input" onClick={props.tmode} type="checkbox" id="customSwitch1" />
                            <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string
}



