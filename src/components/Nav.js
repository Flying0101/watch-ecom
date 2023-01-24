import React, { useState } from 'react';
import { Link } from "react-router-dom";


import '../css/Nav.css';

import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import SA from '../image/sail-yacht.jpg';
import SE from '../image/sw-flag.png';


import { useRecoilState } from 'recoil';
import { cartdata } from '../store/cart';



function Nav() {

    const [show, setShow] = useState(false);
    const [cartItem] = useRecoilState(cartdata);

    function toggle() {

        setShow(!show);

    }

    function test() {
        console.log(show);

    }

    function reset() {
        setShow(false);
    }

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    };



    return (<div>
        <div className={!show ? "Navigation" : "diss"}>

            <ul className="nav-ul">
                <FaBars className="navbar-mobile" onClick={() => toggle()} />
                <Link className="link-css" to='/watches'>
                    <li className="nav-links">WATCHES</li>
                </Link>
                <li className="nav-links">MATERIALS</li>
                <li className="nav-links">ABOUT</li>
            </ul>
            <Link className="home-link" to='/'>
                <p className="nav-logo"  >T3</p>
            </Link>
            <ul className="nav-ul-two">
                <Link className="home-link" to='/cart'>
                    <li className="nav-links">CART</li>
                </Link>
                <Link className="home-link" to='/cart'>
                    <FaShoppingCart className="shop-logo" onClick={() => test()} />
                    <p className="shop-qty">{cartItem.length}</p>
                </Link>
            </ul>

        </div>

        <div className={!show ? "diss" : "burger-bar"}>

            <FaArrowRight className="burg-close" onClick={() => toggle()} />
            <p className="burg-logo">T3</p>

            <div className="burg-nav-img">
                <img alt="navigation bar icon" src={SA} className="nav-img" />
            </div>

            <div className="line-breaker">
                <ul className="burg-ul">
                    <Link style={navStyle} to='/watches'>
                        <li className="burg-links" onClick={() => reset()} >WATCHES</li>
                    </Link>
                    <Link style={navStyle} to='/watches'>

                        <li className="burg-links" onClick={() => reset()}>MATERIALS</li>
                    </Link>
                    <Link style={navStyle} to='/watches'>

                        <li className="burg-links" onClick={() => reset()}>ABOUT</li>
                    </Link>

                </ul>
            </div>

            <p className="burg-nav-footer"> Sweden, Stockholm </p>
            <img alt="navigation bar icon" src={SE} className="se-flag" />

        </div>




    </div>
    );
}



export default Nav; 