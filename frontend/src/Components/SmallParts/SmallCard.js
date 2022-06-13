import React from 'react';
import img from "../../Assets/img/img.jpg";



function SmallCard({item,onAdd}){
    return(
        <div className="product-card" >
            
                <div className="card-img">
                    <img src={item.img} alt={item.title}/>
                </div>
                
                <h1 className="product-card-title">{item.title}</h1>
                <h2 className="product-card-price">₹{item.price}</h2>
                <p className="product-card-info">{item.des}</p>

                <button onClick={()=>onAdd(item)}>+</button>
        </div>
    )

}

export default SmallCard;

