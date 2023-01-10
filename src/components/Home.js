import React from 'react';


import '../css/Home.css';
import homepageVideo from '../video/watch-video.mp4';

function Home() {


    return (
        <div className="home-section">
            <video autoPlay playsInline loop muted id="home-video" >
                <source src={homepageVideo}  type='video/mp4' />
            </video>

        </div>

    );
}


export default Home;