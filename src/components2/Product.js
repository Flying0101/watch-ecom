import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { data } from '../store/watches';
import { cartdata } from '../store/cart';
import Lottie from "lottie-react";

import '../css2/Product.css';

import checked from '../lotties/84160-check-blue.json';


function Product() {
    const [cartItem, setCartItem] = useRecoilState(cartdata);
    const [show, setShow] = useState(false);

    const params = useParams();
    const dataInfo = useRecoilValue(data);
    const watch = dataInfo.find(project => project.id === Number(params.id))

    console.log(watch);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function AddToCart(currWatch) {
        const newWatch = {
            ...currWatch
        }

        setCartItem([...cartItem, newWatch]);
        setShow(true);
    }

    console.log(cartItem);


    // maybe add specifikation to watches
    return (
        <div className="Product-section">

            <div className="navbar-vis"></div>

            <div className="product-grid">

                <div className="pr-div-one">
                    <div>
                        <p className="pr-paths"> Home / All Watches / {watch.name} {watch.sort} </p>
                        <img alt="displayed watch" src={watch.image} className="pr-img" />
                    </div>
                </div>

                <div className="pr-div-two">

                    <div className="pr-wraper-two">
                        <p className="pr-limited">LIMITED INVENTORY</p>
                        <p className="pr-name">{watch.name} {watch.sort}</p>
                        <p className="pr-type">AUTOMATIC CHRONOGRAPH</p>
                        <p className="pr-line">━━━━━━━━━━</p>
                        <p className="pr-diameter">40 MM</p>
                        <p className="pr-ref">Ref: 23E87GAS56VAD <br /> [in stock]</p>

                        <p className="pr-info">Silver-toned dial with “Grande Tapisserie” pattern, white gold applied hour-markers and Royal Oak hands with luminescent coating. Silver-toned dial with “Grande Tapisserie” pattern, white gold applied hour-markers and Royal Oak hands with luminescent coating. Silver-toned dial with “Grande Tapisserie” pattern, white gold applied hour-markers and Royal Oak hands with luminescent coating.</p>
                        <div className="btn-price-wraper">
                            <button className={show ? "dissapear" : "buy-btn"} onClick={() => AddToCart(watch)}>ADD TO CART</button>
                            {show ? (<Lottie animationData={checked} loop={false} className={show ? "btn-anim" : "dissapear"} />) : ("")}

                            <p className="pr-price">{watch.price.toLocaleString()} kr</p>

                        </div>
                    </div>
                </div>

            </div>






        </div>

    );
}


export default Product;