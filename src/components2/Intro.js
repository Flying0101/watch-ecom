import React from 'react';

import '../css2/Intro.css';
import WV from '../video/watch-intro.mp4';

function Intro() {


    return (
        <div className="Intro-section">

            <div className="i-hdr-container">
                <div>
                    <p className="intro-header">T3 WATCHES</p>
                    <p className="i-sub-header">THE COLLECTION</p>
                </div>
            </div>
            <video autoPlay playsInline loop muted id="watch-video" >
                <source src={WV} type='video/mp4' />
            </video>



        </div>

    );
}


export default Intro;