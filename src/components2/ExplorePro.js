import React from 'react';

import '../css2/ExplorePro.css';
import clear from '../image2/clear-collection.jpg'

function ExplorePro() {


    return (
        <div className="explore-section">
            <div className="e-img-container">
                <img alt="clear watches" src={clear} className="e-image" />
                <div className="e-img-slogan">NEW ARRIVALS</div>

            </div>


        </div>

    );
}


export default ExplorePro;