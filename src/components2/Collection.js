import React from 'react';
import { Link } from "react-router-dom";

import { useMemo } from 'react';
import { useRecoilState } from 'recoil';

import '../css2/Collection.css';

import ScrollToBottom from 'react-scroll-to-bottom';
import { data } from '../store/watches';



function Collection() {


    const [watchList] = useRecoilState(data);

    const steelWatches = useMemo(() => {
        return watchList.filter((task) => task.material === 'steel');
    }, [watchList]);

    const diverWatches = useMemo(() => {
        return watchList.filter((task) => task.material === 'diver');
    }, [watchList]);








    const navStyle = {
        color: 'black',

    };

    return (
        <div className="Collection-section">
            <p className="collection-header">THE COLLECTION</p>



            <div className="watch-c-container">
                <p className="c-header">- Steel WATCHES</p>
                <div className="watch-collection">
                    <ScrollToBottom className="few-w-scroll">
                        <div className="wa-container">
                            {steelWatches.map((dat) => (
                                <div className="wa-sub-con">
                                    <Link style={navStyle} to={`/preview/${dat.id}`}>
                                        <img alt="watch displayed" src={dat.image} className="wa-img" />

                                    </Link>
                                    <div className="w">
                                        <p className="watch-name">{dat.name}</p>
                                        <p className="watch-infor">{dat.sort}</p>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </ScrollToBottom>
                </div>
            </div>




            <div className="watch-container-two">
                <p className="c-header">- Diver WATCHES</p>
                <div className="watch-collection">
                    <ScrollToBottom className="few-w-scroll">
                        <div className="wa-container">
                            {diverWatches.map((dat) => (
                                <div className="wa-sub-con">
                                    <Link style={navStyle} to={`/preview/${dat.id}`}>
                                        <img alt="watch displayed" src={dat.image} className="wa-img" />
                                    </Link>
                                    <div className="w">
                                        <p className="watch-name">{dat.name}</p>
                                        <p className="watch-infor">{dat.sort}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </ScrollToBottom>
                </div>
            </div>




            <div className="ftr">

            </div>

            <div className="line">

            </div>


        </div>

    );
}


export default Collection;