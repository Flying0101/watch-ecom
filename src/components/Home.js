import React from 'react';


import '../css/Home.css';
import homepageVideo from '../video/MASTER.mp4';

function Home() {


    return (
        <div className="home-section">
            <video autoPlay playsInline loop muted id="home-video" >
                <source src={homepageVideo} type='video/mp4' />
            </video>

            <div className="home-slogan-container">
                <h1 className="home-slogan">Experience our heritage</h1>
                <p className="home-sub-slogan">watches made with scrupulous attention to detail</p>
            </div>
        </div>

    );
}


export default Home;