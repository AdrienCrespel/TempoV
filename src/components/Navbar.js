import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Tempo V &nbsp;
                    <img src="../images/dieu_eca.png" alt=""/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Accueil
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/services'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Cartes
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/products'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Crafts
                    </Link>
                    </li>

                    <li>
                    <Link
                        to='/sign-up'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                    >
                        Connexion
                    </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Connexion</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
