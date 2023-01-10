import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { data } from '../store/watches';
import { cartdata } from '../store/cart';

import '../css2/Product.css';


function Product() {
    const [cartItem, setCartItem] = useRecoilState(cartdata);

    const params = useParams();
    const dataInfo = useRecoilValue(data);
    const watch = dataInfo.find(project => project.id == params.id)

    console.log(watch);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function AddToCart(currWatch) {
        const newWatch = {
            ...currWatch
        }

        setCartItem([...cartItem, newWatch]);
        alert('Watch added to cart! ');
    }

    console.log(cartItem);


    return (
        <div className="Product-section">

            <div className="navbar-vis"></div>

            <div className="product-grid">

                <div className="pr-div-one">
                    <img src={watch.image} className="pr-img" />
                </div>
                <div className="pr-div-two">

                    <div>
                        <p className="pr-name">{watch.name}</p>
                        <p className="pr-sort">{watch.sort}</p>
                        <p className="instock">in stock</p>
                        <p className="pr-price">{watch.price} kr</p>
                        <button className="buy-btn" onClick={() => AddToCart(watch)}>PUT IN CART</button>

                        <p className="pr-info">Silver-toned dial with “Grande Tapisserie” pattern, white gold applied hour-markers and Royal Oak hands with luminescent coating.</p>
                    </div>
                </div>

            </div>






        </div>

    );
}


export default Product;