import React from 'react';
import logo from "../logo3.jpg"
import { HiBars3, IconName } from "react-icons/hi2";


const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className='container'>
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <HiBars3 />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">expirence</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact me</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;