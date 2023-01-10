import React from 'react';

import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from "react-router-dom";
import '../css2/Display.css';

import ScrollToBottom from 'react-scroll-to-bottom';

import { data } from '../store/watches';


import AUD from '../image2/aud-logo.jpg';
import OME from '../image2/omg-logo.png';
import PAT from '../image2/patek-logo.png';
import ROL from '../image2/rolex-logo.jpg';
import TAG from '../image2/tag-logo.png';





function Display() {

    const watchList = useRecoilState(data);



    const goldWatches = useMemo(() => {
        return watchList.filter((task) => task.material === 'gold');
    }, [watchList]);



    function testt() {


    }







    const navStyle = {
        color: 'black'
    };


    return (
        <div className="Display-section">
            <div className="dis-inf-container">
                <div className="dis-inf-sub-con">
                    <p className="dis-inf">EXPLORE THE T3 COLLECTION OF PRESTIGIOUS, <br /> HIGH-PRECISION TIMEPIECES</p>
                    <p className="dis-sub-inf">We offer a wide assortment of oyster perpetual and Cellini watches to suit any wrist. Discover the broad selection of T3 watches to find a perfect combination of style and functionality</p>
                </div>
            </div>



            <div className="few-container">
                <p className="few-w-hdr" onClick={() => testt()} > ━ Gold Watches</p>
                <div className="few-w-display">
                    <ScrollToBottom className="few-w-scroll">
                        <div className="watch-scroll-con">

                            {goldWatches.map((dat) => (
                                <div className="pre-w-cont">
                                    <Link style={navStyle} to={`/preview/${dat.id}`}>
                                        <img alt="gold watch" src={dat.image} className="pre-img" />
                                    </Link>

                                    <div className="pre-inf-cont">
                                        <p className="pre-w-name">{dat.name}</p>
                                        <p className="pre-w-inf">{dat.sort}</p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </ScrollToBottom>

                </div>
            </div>

            <p className="brands-header">OUR PARTNERS</p>

            <div className="w-brands">
                <div className="brand-grid">
                    <div className="brands">
                        <img alt="watch brand icon" src={AUD} className="brand-img" />

                    </div>
                    <div className="brands">
                        <img alt="watch brand icon" src={OME} className="brand-img" />

                    </div>
                    <div className="brands">
                        <img alt="watch brand icon" src={PAT} className="brand-img" />

                    </div>
                    <div className="brands">
                        <img alt="watch brand icon" src={ROL} className="brand-img" />

                    </div>
                    <div className="brands">
                        <img alt="watch brand icon" src={TAG} className="brand-img" />

                    </div>
                </div>
            </div>





        </div>

    );
}


export default Display;