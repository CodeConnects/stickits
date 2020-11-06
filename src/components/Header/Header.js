import React from "react";

// import logo from '../logo.svg';
import logo from '../../logo-57.png';


const Header = () => {
    return (
        <header id="main-footer" className="app-header">
            <h2>
                <img src={logo} className="app-logo" alt="logo" />
                Sticky Note Board
            </h2>
        </header>
    );
}

export default Header;
