import React from 'react';

import Intro from '../components2/Intro';
import Display from '../components2/Display';
import Collection from '../components2/Collection'; 


function Landing() {


    return (
        <div className="Watch-page">
            <Intro /> 
            <Display />
            <Collection /> 
           

        </div>

    );
}


export default Landing;