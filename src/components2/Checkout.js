import React from 'react';

import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cartdata } from '../store/cart';

import '../css2/Checkout.css';

import ScrollToBottom from 'react-scroll-to-bottom';



function Checkout() {

    const [cartItem, setCartItem] = useRecoilState(cartdata);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {

        let list = [];

        try {
            cartItem.forEach((as) => {
                list = [...list, as.price];

            })

            const initialValue = 0;
            const sumWithInitial = list.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
            );
            setTotalCost(sumWithInitial);

        } catch (error) {
            console.error(error);
        }

        console.log(list);


    }, [cartItem])




    function delSpecWatch(index) {

        const deletedList = [...cartItem].filter((item, i) => index !== i)

        console.log(deletedList);
        setCartItem(deletedList)

    }

    return (
        <div className="Checkout-page">
            <div className="navbar-vis"></div>

            <div className="cart-container">
                <p className="products">PRODUCTS: {cartItem.length}</p>
                <p className="price">PRICE:</p>
                <div className="cartpart">
                    <ScrollToBottom className="cart-scroll" id="lol">


                        {cartItem.map((watch, index) => (

                            <div className="selected-container">
                                <div className="img-info-con">
                                    <img src={watch.image} className="check-img" />
                                    <div>
                                        <p className="check-name">{watch.name}</p>
                                        <p className="check-inf">{watch.sort}</p>
                                        <button className="delete-btn" onClick={() => delSpecWatch(index)}>remove</button>
                                    </div>
                                </div>
                                <div className="qty-pr-container">
                                    <p className="check-price">{watch.price}</p>
                                </div>
                            </div>


                        ))}



                    </ScrollToBottom>
                </div >
                <div className="total-inf">
                    <p className="total-sum">TOTAL SUM: {totalCost} kr</p>
                    <p className="shipping">free shipping, call to book dropoff</p>
                    <p className="proceed-sale">CONTINUE</p>
                </div>
            </div>
        </div>

    );
}


export default Checkout;