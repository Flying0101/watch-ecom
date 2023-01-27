import React from 'react';

import '../css/About.css';
import ST from '../image/gold-a.png';
import ST2 from '../image/audemars.png';
import { Link } from "react-router-dom";




function About() {


    function scrollSteel() {

        window.scrollTo(0, 2100)
    }

    return (
        <div className="About-section">


            <h1 className="about-his">COLLECTIONS</h1>


            <div className="a-grid-container">
                <div className="about-grid">
                    <Link className="link-css" to='/watches'>
                        <div className="ag-div">
                            <p className="ag-p">GOLD</p>
                            <img alt="stockholm" src={ST} className="sthlm-pic" />
                        </div>

                    </Link>

                    <Link className="link-css" to='/watches' onClick={() => scrollSteel()}>
                        <div className="ag-div">
                            <p className="ag-p">STEEL</p>
                            <img alt="stockholm" src={ST2} className="sthlm-pic" />
                        </div>

                    </Link>
                </div>
            </div>

        </div>

    );
}


export default About;