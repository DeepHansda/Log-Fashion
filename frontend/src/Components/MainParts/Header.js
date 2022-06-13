import React,{useState} from 'react'
import logo from '../../Assets/img/LOGO.png'
import catData from '../../Data/catData';
import {Link,Route,Routes} from 'react-router-dom'
import Main from '../Routes/Main'
import AllOthers from '../Routes/AllOthers'
import Cart from '../Routes/Cart';
import jwt from 'jwt-decode'
import Profile from '../Routes/Profile'
import { ImList2,ImCross,ImCart } from "react-icons/im";



function Header({products,onAdd,onRemove,cartItems,client,auth}){
    const [show,setShow] = useState(false)
    const parseDetails = jwt(auth)

    const showSlide = ()=>{
        setShow(!show);
    }
    return (
        <>
        <div className="header">
        <div className="bar">

        <Link to="/"><div id="logo"><img src={logo} alt="logo"/></div></Link>

        <div id="burger" >
            <Link to="/cart">

            <span id="cart-icon">
            <ImCart/>
            {cartItems.length}
            </span>

            </Link>
            <div onClick = {showSlide}>
                {show ?<ImCross/> : <ImList2/>} 
            </div>
        </div>
        
        
        <ul className="navbar" style = {{left: `${show ? '0' : '-100%'}`}}>
            <li className="navlist"><Link to='/'>home</Link></li>
            <li className="navlist" ><Link to='/cart'>cart <span className="cart-badge">{cartItems.length}</span></Link></li>
            <li className="navlist"><Link to="/profile">{parseDetails.regDetails.name}</Link></li>

        </ul>
        
        </div>
        <ul className="categories">
            {
                catData.map((link,index)=>{
                    return(
                        <li key ={index}><Link to={link.link}>{link.title}</Link></li>
                    )
                })
            }
            </ul>
    </div>

<Routes>
<Route path="/" element={<Main client = {client}/>} />
<Route path="/profile"  element={<Profile parseDetails = {parseDetails.regDetails} />} />
<Route path = '/cart' element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
<Route path = '/jackets/:el' element={<AllOthers products={products} onAdd = {onAdd} />} />
<Route path = '/tshirts/:el' element={<AllOthers products={products} onAdd = {onAdd} />} />
<Route path = '/shirts/:el' element={<AllOthers products={products} onAdd = {onAdd} />} />
<Route path = '/jeans_and_trousers/:el' element={<AllOthers products={products} onAdd = {onAdd} />} />



</Routes>

</>

    
    );
}

export default Header;