import React from "react";
import './navbar.css';
import Logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
const Navbar = () => {
    return (
        <>
            <div className="navbar-c9es2">
                <div className="navbar-inner-c9es2 row mx-0">
                    <div className="col-4">
                        <div className="star-logo-erzew">
                            <img src={Logo} />
                        </div>
                    </div>
                    <div className="col-8 d-none  d-md-flex justify-content-end align-items-center">
                        <div className="mx-3 nav-option-zfnei">Categories</div>
                        <div className="mx-3 nav-option-zfnei">Blog</div>
                        <div className="mx-3 nav-option-zfnei">Login</div>
                        <div className="ms-5 me-2 btn for-business-ew3l9">FOR BUSSINESS</div>
                    </div>
                    <div className="col-4 d-md-none d-flex justify-content-end">
                        <img src={menu} className="mx-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;