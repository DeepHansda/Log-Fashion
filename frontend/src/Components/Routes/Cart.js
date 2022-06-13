import React from "react";
import CartItems from '../MainParts/CartItems'

function Cart ({onAdd,onRemove,cartItems}){
    return(
        <div className="cart" >
            {cartItems.length===0 && <div style={{fontSize:'50px'}}>cart is empty</div>}
            <CartItems onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </div>
    )
}

export default Cart