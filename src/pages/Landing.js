import React from 'react';


import Home from '../components/Home';
import About from '../components/About';
import Material from '../components/Material';
import Manufacture from '../components/Manufacture';
import PreFooter from '../components2/PreFooter';
import Footer from '../components/Footer';

function Landing() {


    return (
        <div className="Landing-section">
            <Home />
            <About />
            <Material />
            <Manufacture />
            <PreFooter />
            <Footer />

        </div>

    );
}


export default Landing;