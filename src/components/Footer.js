import React from 'react';

import '../css/Footer.css';


function Footer() {

    function scrollTop() {
        window.scrollTo(0, 0)
    }


    return (
        <footer className="footer-section">

            <div className="f-links-container">
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">Established since 2022 <br />Our mission is to give you the best possible service and guide you.</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">Shipping</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">We offer three kinds of delivery, no matter what watch you choose we will make sure it gets to you in a proper way.</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">Pages</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">- WATCH COLLECTION <br /><br />this site is expanding and more pages are comming soon!</li>
                    </ul>
                </div>


            </div>

            <div className="f-bottom-container">
                <div className="f-b-wraper">
                    <p className="f-b-text">2023 Terms privacy</p>
                    <button className="f-b-btn" onClick={() => scrollTop()}>BACK TO TOP</button>
                </div>
            </div>
        </footer>
    )

}

export default Footer