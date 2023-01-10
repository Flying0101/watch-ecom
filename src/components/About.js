import React from 'react';


import '../css/About.css';
import ST from '../image/sthlm.jpg';

function About() {

 
    return (
        <div className="About-section">
 
            <p className="about-his">Our Story</p>

            <div className="a-grid-container">
                <div className="about-grid">
                    <div className="ag-div">
                        <img alt="stockholm" src={ST} className="sthlm-pic" />
                    </div>

                    <div className="ag-div2">
                        <h2 className="ag-header">Swedish <br className="line-br"/> T3</h2>
                        <p className="ag-info">Experience our heritage, craftsmanship and connection to the world in the Musée Atelier Audemars Piguet which pays tribute to the craftspeople who have made what Audemars Piguet is today, generation after generation.</p>

                        <p className="ag-btn"> ━━ Discover more</p>
                    </div>
                </div>
            </div>

        </div>

    );
}


export default About;