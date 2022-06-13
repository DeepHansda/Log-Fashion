/* eslint-disable no-unused-expressions */
import React,{useState,useEffect} from 'react';
import Header from './Components/MainParts/Header'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Auth from './Components/Routes/Auth'


const client = axios.create(
  { 
      baseURL : "https://log-fashion-api-deephansda.vercel.app/"
  }
)







function App() {
  const [products,setProducts] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  const [auth,setAuth] = useState()

  const onAdd = (item) => {
    const exist = cartItems.find((i)=> i._id === item._id);

    if(exist) {
      setCartItems(
        cartItems.map((x)=>
          x._id === item._id ? {...exist , qty: exist.qty + 1} : x
        )
      );
      }


      else{
        setCartItems(
          [...cartItems,{...item , qty:1}]
        )
      }
    
  }

  const onRemove = (item) => {
    const exist = cartItems.find((i)=> i._id===item._id);

    if(exist.qty===1) {
      setCartItems(cartItems.filter((i) =>  i._id !== item._id));
    }

    else{
      setCartItems(
        cartItems.map((i)=>
          i._id===item._id ? {...exist, qty:exist.qty-1} : i
        )
      )
    }
  }



  useEffect(()=>{
    const getProducts = async ()=>{
        try{
            const response = await client.get('/admin')
            setProducts(response.data[0].allCategories);
            const token = localStorage.getItem('jwt');
            setAuth(token)
            
          }
          
          catch(err){
            console.log(err);
          }
        }
        getProducts()
      },[])
      
      
    




  return (
    <div className="App">
      {!auth ? <Auth client = {client} setAuth = {setAuth}/> :
      <div className="main">
      <Header
      products = {products}
      onAdd = {onAdd}
      onRemove = {onRemove}
      cartItems = {cartItems}
      client = {client}
      auth = {auth}
  
      />

  

    </div>
}
    </div>
  );
}


export default App;
