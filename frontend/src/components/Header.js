import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={{ background: '#00000088', 
            position:'sticky', 
            top: 0, 
            zIndex: 5, 
            height: '7vh'
            }}
        >
            <Link to="/home" style={{ fontSize: '3vmin', color: '#ffffff', position: 'absolute', left: '20%', top: '20%'}}>Home</Link>
            <Link to="/user/login" style={{ fontSize: '3vmin', color: '#ffffff', position: 'absolute', left: '70%', top: '20%'}}>Login</Link>
        </header>
    )
}

export default Header;
