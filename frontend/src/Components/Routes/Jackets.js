import React from 'react';
import BCZ from '../MainParts/BCZ'
import ProductContainer from '../MainParts/ProductContainer'
import Slider from '../SmallParts/Slider'
import Footer from '../MainParts/Footer'


function Jackets (){
    // const [products,setProducts] = useState([]);
   
    // useEffect(()=>{
    //     const getProducts = async ()=>{
    //         try{
    //             const response = await client.get('/admin')
    //         setProducts(response.body);
    //         }
            
    //         catch(err){
    //             console.log(err);
    //         }
    //     }
    // },[])
    return(
        <React.Fragment>
        <Slider/>
        <BCZ/>
        <ProductContainer/>
        <Footer/>
        </React.Fragment>
    )
}

export default Jackets;