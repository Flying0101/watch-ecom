import React from 'react';

import Intro from '../components2/Intro';
import Display from '../components2/Display';
import Collection from '../components2/Collection';
import PreFooter from '../components2/PreFooter';
import Footer from '../components/Footer';

function Landing() {


    return (
        <div className="Watch-page">
            <Intro />
            <Display />
            <Collection />
            <PreFooter />
            <Footer />


        </div>

    );
}


export default Landing;