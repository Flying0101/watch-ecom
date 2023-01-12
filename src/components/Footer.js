import React from 'react';

import '../css/Footer.css';


function Footer() {




    return (
        <footer className="footer-section">
            <div className="f-contact-container">
                <div className="f-c-div">
                    <h2 className="f-c-header">Invest in a good watch</h2>
                    <p className="f-c-inf">take a look at our new watches! </p>
                </div>

                <button className="f-c-btn">Contact us</button>
            </div>

            <div className="f-links-container">
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</li>
                    </ul>
                </div>


            </div>

            <div className="f-bottom-container">
                <div className="f-b-wraper">
                    <p className="f-b-text">2023 Terms privacy</p>
                    <button className="f-b-btn">BACK TO TOP</button>
                </div>
            </div>
        </footer>
    )

}

export default Footer