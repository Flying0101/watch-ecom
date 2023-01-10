import React from 'react';


import '../css/Material.css';
import GM from '../image/materialOne.jpg'; 
import GT from '../image/materialTwo.jpg';





function Material() {
    // className=""

    return (
        <div className="Material-section">

            <p className="material-slogan">USING THE FINEST MATERIALS</p>
            <div className="m-grid-container">
                <div className="material-grid">
                    <div className="mg-div">
                        <p className="mgd-inf">Rare and precious, considered the noblest of metals, platinum is striking for its silvery whiteness and its vibrant luminosity. Over time it has become the ultimate metal of prestige, with the ability to showcase precious stones like no other material. T3 uses 950 platinum, an alloy consisting of 950‰ (thousandths) of platinum generally combined with ruthenium. This allows the metal to be robust enough to be used in watch cases, while maintaining its legendary shine and brilliance.</p>

                    </div>
                    <div className="mg-div">
                        <img alt="gold and silver bars" src={GM} className="mg-img" />

                    </div>
                    <div className="mg-div">
                        <img  alt="very small watch part" src={GT} className="mg-img" />
                    </div>
                </div>
            </div>


        </div>

    );
}


export default Material;