import React from 'react';
import img from '../../Assets/img/img.jpg';

function CartItems({onAdd,onRemove,cartItems}){
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    
    
    return (
        <>
        <div className="cart-items-container">
            {cartItems.map((item)=>{
                return (
                <div className="cart-item" key={item._id}>
                <div className="info">
                    <div className="item-img">
                        <img src={item.img} alt={"title"} />
                    </div>

                    <div className="item-title">
                        <p>{"title mtgrd reegrtry rr ererrr"}</p>
                    </div>

                    <div className="quantity-buttons">
                        <li className="qty-button">
                            <button onClick={()=>onAdd(item)}>+</button>
                        </li>
                        <p>{item.qty}</p>
                        <li className="qty-button">
                            <button onClick={()=>onRemove(item)}>-</button>
                        </li>

                    </div>

                    <div className="item-price">
                        <p>{item.qty} x ₹{parseInt(item.price)*item.qty}</p>
                    </div>
            </div>
        </div>  
                )
            })}
            
        </div>

        <div className="summary">
            <div className="summary-container">
                <div className="summary-total-price">
                    <h3>total price : <span>₹{itemsPrice}</span></h3> 
                </div>

                <div className="checkout-button">
                    <button className="checkout" onClick = {()=>alert("Order Placed !!")}>checkout</button>
                </div>
            </div>

        </div>

        </>
    )
}

export default CartItems;