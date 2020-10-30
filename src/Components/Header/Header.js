import React from 'react';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderTop from './HeaderTop/HeaderTop';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="inner__header">
            <HeaderTop />
            <HeaderMiddle />
            </div>
        </div>
    );
};

export default Header;