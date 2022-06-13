import React from 'react';
import SmallCard from '../SmallParts/SmallCard'

function ProductContainer({item,onAdd}) {
    const {productList} = item;
    return(
        <div className="productContainer">
        <div className="baseGround">

        { productList.map((item)=>{
            return (
                <SmallCard item={item} onAdd={onAdd} key={item._id}/>
            )
        })}

    </div>
    </div>
    )
}

export default ProductContainer;