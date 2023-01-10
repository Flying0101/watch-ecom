import React from 'react';


import '../css/Manufacture.css';
import '../css/Mounting.css';
import MFW from '../image/Mfacture1.jpg';
import MFF from '../image/Mfacture2.jpg';

import MFK from '../image/Mfacture.jpg';
import FAC from '../image/FactureOne.jpg';
import MONT from '../image/testing.jpg';
import MONT2 from '../image/testing2.jpg';






function Manufacture() {

    return (
        <div>
            <div className="Manufacture-section">
                <p className="manu-slogan">FROM PROTOTYPE TO FINISHED WATCHES</p>
                <div className="manu-img-con">
                    <img alt="watch part" src={MFF} className="manu-img" />
                </div>
                <div className="manu-img-con2">
                    <img alt="watch gold link" src={MFW} className="manu-img2" />
                </div>
                <div className="m-intro">
                    <div className="m-int-container">
                        <p className="m-intro-hdr">THE QUALITY OF A ROLEX WATCH IS THE RESULT OF A STRICT METHODOLOGY.</p>
                        <p className="m-intro-inf"> From the design of a new model to the individual testing of each watch when it comes out of production, every effort is made to ensure that the brands standards of excellence are met. Rolex has played a pioneering role in developing tests and protocols to guarantee the reliability and robustness of its timepieces.</p>
                    </div>
                </div>


                <div className="fac-img-container">
                    <img alt="watch dial" src={MFK} className="fac-img1" />

                </div>


                <div className="watch-fac-container">
                    <div className="fac-w-img">
                        <img alt="watch parts" src={FAC} className="fac-w-img1" />

                    </div>
                    <div className="fac-w-img">
                        <p className="fac-info">
                            Shocks or impacts, temperature variations, magnetic fields, wear and tear, humidity Rolex watches must be able to resist even the harshest conditions over a long period without their integrity or performance being compromised or diminished.  For Hans Wilsdorf, the brands founder, it was essential that each Rolex watch give the exact time and that its movement be protected in the best way. More than a hundred years after the first models were created, this philosophy still underpins the development and production of every watch stamped with the emblematic crown.Guaranteeing the reliability of a Rolex watch requires the application of a multitude of skills and expertise. Engineers specialized in materials, physics, mechanics and micro technology, as well as technicians, movement constructors, prototype makers, statisticians and horologists all work together to develop optimal solutions for each model, according to its intended use.
                        </p>

                    </div>

                </div>

            </div>




            <div className="Mounting-section">

                <p className="mount-slogan">MADE TO BE TOUGHEST <br />
                    <span id="ms-inf"> The process starts during the design phase of a new product. A list is drawn up of the stresses that the watch is likely to have to withstand. Purely virtual and based on a product-use scenario, this first step provides a broad overview of the risks, which are then organized into the order in which the issues should be approached. Simulations can then be programmed.</span> </p>
                <div className="mount-pic">

                    <img alt="building a watch" src={MONT} className="mo-img" />

                </div>

                <div className="mon-container">

                    <div className="mon-grid">
                        <div className="mon-div">
                            <p className="mon-info">Staff in white coats, computerized workbenches, an atmosphere of quiet composure and dedication to the quality of work in a Rolex workshop, the concentration is palpable. Here, Rolex watchmakers perpetuate the time-honoured traditions of their art while every day taking it to new realms using the state-of-the-art equipment and processes at their disposal.</p>
                        </div>
                        <div className="mon-div">

                            <img alt="watch dial" src={MONT2} className="mon-img" />
                        </div>

                    </div>
                </div>
 
            </div>

        </div>
    );
}


export default Manufacture;