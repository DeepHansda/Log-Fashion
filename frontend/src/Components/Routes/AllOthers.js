import React,{useState,useEffect} from 'react'
import SCZ from '../MainParts/SCZ'
import ProductContainer from '../MainParts/ProductContainer'
import Slider from '../SmallParts/Slider'
import Footer from '../MainParts/Footer'
import {useParams} from 'react-router-dom'




function AllOthers ({products,onAdd}){
    var params = useParams().el
    const [sort,setSort] = useState([]); 





    const filterProducts = async()=>{
        const newProduct = await products.filter((item)=> (item.categoryName === params))
        setSort(newProduct);
    }

    useEffect(()=>{
        filterProducts();
    },[ ,params]);





    return(
        <React.Fragment>
        {sort.map((item,index)=>{
            return (
                <>
                <SCZ item={item} onAdd={onAdd} key={index}/>
                <ProductContainer item={item} onAdd={onAdd} key={index}/>
                </>

            )
        })}
    
        </React.Fragment>
    )
}

export default AllOthers;