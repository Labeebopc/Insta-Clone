import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <>
            <nav className="header">
                <article className="logo">
                    {/* Since it's require inside src, the image is only rendering when the component is getting loaded (rather than static loading) */}
                    <Link to="/"> <img src={require('../../images/header-name.png')} alt="logo" /></Link>

                </article>

                <article className="camera-icon">
                    <Link to="addpost"><i className="fa-solid fa-camera camera"></i></Link>
                    {/* <img src={require('../../images/header-camera.png')} alt="camera-icon" /> */}
                </article>

            </nav>
        </>
    )
}

export default Header;