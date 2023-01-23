import React, { useState } from 'react';


import '../css/Material.css';
import GM from '../image/materialOne.jpg';
import GT from '../image/Mfacture2.jpg';




function Material() {

    const [showDiv, setShowDiv] = useState(false);

    function materialInfo() {

        setShowDiv(!showDiv);
    }





    return (
        <div className="Material-section">

            <div className="m-container">

                {!showDiv ? (<div className="mg-div">
                    <div className="mg-wraper">
                        <p className="mg-p">A MEETING <br /> OF METALS</p>
                        <p className="mg-btn" onClick={() => materialInfo()}>- Learn more</p>

                    </div>
                    <img alt="gold and silver bars" src={GM} className="mg-img" />
                </div>) : (
                    <div >
                        <p className="material-slogan">USING THE FINEST MATERIALS</p>

                        <p className="mgd-inf">Rare and precious, considered the noblest of metals, platinum is striking for its silvery whiteness and its vibrant luminosity. Over time it has become the ultimate metal of prestige, with the ability to showcase precious stones like no other material. T3 uses 950 platinum, an alloy consisting of 950‰ (thousandths) of platinum generally combined with ruthenium. This allows the metal to be robust enough to be used in watch cases, while maintaining its legendary shine and brilliance.</p>

                        <div className="mg-img-two">
                            <img alt="very small watch part" src={GT} className="mg-img-two" />
                        </div>
                    </div>)}




            </div>


        </div>

    );
}


export default Material;