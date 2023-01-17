import React from 'react';

import '../css2/ExplorePro.css';
import clear from '../image2/clear-collection.jpg'

function ExplorePro() {


    return (
        <div className="explore-section">
            <div className="e-img-container">
                <img alt="clear watches" src={clear} className="e-image" />
                <div className="e-img-slogan">BE THE FIRST TO KNOW</div>

            </div>


            <div className="e-new-container">
                <div className="e-n-div">
                    <p className="e-news-h">The NewsLetter</p>
                    <p className="e-new-inf">Subcribe to T3 newsletter for updates, be the first one to know about new arrivals and such, we give monthly tips on how you can take care of your watches and you get good deals every week aswell, Your email will be secured and you can unsubcribe whenever you want.</p>
                </div>
                <div className="e-n-div">
                    <p className="e-write-pre-inf">Write your email below!</p>
                    <h2 className="e-write-h">Email</h2>
                    <textarea className="e-write-textarea"></textarea>
                    <button className="e-write-btn">Subscribe</button>
                </div>
            </div>


        </div>

    );
}


export default ExplorePro;