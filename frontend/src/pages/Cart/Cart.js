import React from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom'
import { useCart } from "react-use-cart";
import Navbar2 from '../../components/Navbar/Navbar2';

const Cart = () => {
    const navigate = useNavigate();
    const {
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
    } = useCart();

    return (
        <>
            <Navbar2 />
            {console.log(items)}
            <h1 className='cart-title'>Your Cart ({totalUniqueItems})</h1>
            <div className='cart-container'>
                <div className='cart'>
                    {items.map((item) => (
                        <div className="cartItem" key={item.id}>
                            <img src={item.image} />
                            <div className="description">
                                <h1><b>{item.productName}</b></h1>
                                <p>$ {item.price}</p>
                                <div className="countHandler">
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <input value={item.quantity} />
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <div className='delete'>
                                <button onClick={() => removeItem(item.id)}>&times;</button>
                            </div>
                        </div>
                    ))}
                </div>



                {totalUniqueItems > 0 ? (
                    <div className="checkout">
                        <h1>Total: ${cartTotal} </h1>
                        <div>

                            <button className='btn' onClick={() => navigate("/product")}> Continue Shopping </button>
                            <button
                                className='btn'
                                onClick={() => {
                                    //     checkout();
                                    navigate("/checkout");
                                }}
                            >
                                {" "}
                                Checkout{" "}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='cartempty'>
                        <h1>Your Shopping Cart is Empty</h1>
                    </div>
                )}
            </div>


        </>
    );
}

export default Cart