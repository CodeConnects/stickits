import React from "react";

// import logo from '../logo.svg';
import logo from '../logo-57.png';


const Header = () => {
    return (
        <header className="app-header">
            <h2>
                <img src={logo} className="app-logo" alt="logo" />
                Sticky Note Widgets
            </h2>
        </header>
    );
}

export default Header;
