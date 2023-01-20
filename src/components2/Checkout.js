import React from 'react';
import { Link } from "react-router-dom";

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


    //<div className="total-inf">
    // <p className="total-sum">TOTAL SUM: {totalCost} kr</p>
    // <p className="shipping">free shipping, call to book dropoff</p>
    //  <p className="proceed-sale">CONTINUE</p>
    //</div>

    function delSpecWatch(index) {

        const deletedList = [...cartItem].filter((item, i) => index !== i)

        console.log(deletedList);
        setCartItem(deletedList)

    }

    return (
        <div className="Checkout-page">
            <div className="navbar-vis"></div>

            <div className="cart-container">

                <div className="item-list-container">
                    <div className="cart-top-wraper">
                        <p className="cart-h">Shopping Cart</p>
                        <p className="products">{cartItem.length} Items</p>

                    </div>

                    <div className="c-info-bar">
                        <p className="pr-details">PRODUCT DETAILS</p>
                        <p className="qty">QUANTITY</p>
                        <p className="price">PRICE</p>
                    </div>
                    <div className="cartpart">
                        <ScrollToBottom className="cart-scroll" id="lol">


                            {cartItem.map((watch, index) => (

                                <div className="selected-container">
                                    <div className="img-info-con">
                                        <img alt="watch displayed" src={watch.image} className="check-img" />
                                        <div>
                                            <p className="check-name">{watch.name}</p>
                                            <p className="check-inf">{watch.sort}</p>
                                            <button className="delete-btn" onClick={() => delSpecWatch(index)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="qty-pr-container">
                                        <p>Qty: 1</p>
                                        <p className="check-price">{watch.price.toLocaleString()} kr</p>
                                    </div>
                                </div>


                            ))}



                        </ScrollToBottom>

                    </div >
                    <Link className="link-css" to='/watches'>
                        <p className="continue-shop"> ← Continue Shopping</p>

                    </Link>
                </div>

                <div className="checkout-container">
                    <div className="total-checkout-wraper">
                        <p className="check-h">Order Summary</p>

                        <div className="c-pre-total">
                            <p className="c-pre-items">ITEMS {cartItem.length}</p>
                            <p className="c-pre-price">{totalCost.toLocaleString()} kr</p>
                        </div>

                        <p className="check-ship">SHIPPING</p>
                        <select className="c-ship-select">
                            <option className="c-s-option">Standard Delivery - 349 kr</option>
                        </select>

                        <p className="check-promo-h">Promo code</p>
                        <input className="check-p-input" placeholder="Enter your code" />
                        <button className="check-p-btn">APPLY</button>

                        <div className="check-total-wrap">
                            <p className="c-total-h">TOTAL COST</p>
                            <p className="c-total-price"> {totalCost.toLocaleString()} kr</p>
                        </div>

                        <button className="c-total-btn">CHECKOUT</button>
                    </div>
                </div>

            </div>

        </div>

    );
}


export default Checkout;