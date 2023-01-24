import React from 'react';


import '../css/Manufacture.css';
import '../css/Mounting.css';

import MFK from '../image/Mfacture.jpg';
import FAC from '../image/FactureOne.jpg';
import MONT from '../image/testing.jpg';





function Manufacture() {

    return (
        <div>
            <div className="Manufacture-section">

                <div className="m-intro">
                    <div className="m-int-container">
                        <p className="m-intro-hdr">THE QUALITY OF A T3 WATCH IS THE RESULT OF A STRICT <br /> METHODOLOGY.</p>
                        <p className="m-intro-inf"> From the design of a new model to the individual testing of each watch when it comes out of production, every effort is made to ensure that the brands standards of excellence are met. T3 has played a pioneering role in developing tests and protocols to guarantee the reliability and robustness of its timepieces.</p>
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
                        <h1>Performance / Quality </h1>
                        <p className="fac-info">
                            Shocks or impacts, temperature variations, magnetic fields, wear and tear, humidity T3 watches must be able to resist even the harshest conditions over a long period without their integrity or performance being compromised or diminished.  For Hans Wilsdorf, the brands founder, it was essential that each T3 watch give the exact time and that its movement be protected in the best way. More than a hundred years after the first models were created, this philosophy still underpins the development and production of every watch stamped with the emblematic crown.Guaranteeing the reliability of a T3 watch requires the application of a multitude of skills and expertise. Engineers specialized in materials, physics, mechanics and micro technology, as well as technicians, movement constructors, prototype makers, statisticians and horologists all work together to develop optimal solutions for each model, according to its intended use.
                        </p>

                    </div>

                </div>

            </div>




            <div className="Mounting-section">


                <div className="mount-pic">
                    <p className="mount-slogan">MADE TO BE TOUGHEST <br />
                        <span id="ms-inf"> The process starts during the design phase of a new product. A list is drawn up of the stresses that the watch is likely to have to withstand. Purely virtual and based on a product-use scenario, this first step provides a broad overview of the risks, which are then organized into the order in which the issues should be approached. Simulations can then be programmed.</span> </p>
                    <img alt="building a watch" src={MONT} className="mo-img" />

                </div>

                <div className="mon-container">

                    <div className="mon-i-div" >
                        <div className="mon-btn-div">
                            <div>
                                <p className="mon-btn-h">T3 WATCHES</p>
                                <button className="mon-btn">DISCOVER MORE</button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}


export default Manufacture;