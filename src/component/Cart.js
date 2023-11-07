import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import CartList from './CartList';


function Cart(){

    const {id} = useParams();

    const [username, setUsername] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
            setCart(res.data.cart);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const listitems = () => {
        return cart.map((item)=>{
            return <CartList id={id} item={item}/>
        })
    }

    return (
        <div class="bg-dark">
            <Nav id={id} username={username}/>
            <div class="bi bi-cart4 h3 bg-secondary text-light p-2 text-center mb-5"> Cart Section</div>
            {cart.length===0? <div class="text-center my-5 text-white">Oops! It seems you have not added anything to your Cart...</div>: <div class="container-lg"><div class="row my-5">{listitems()}</div></div>}
            <Footer userid={id} username={username}/>
        </div>
      );
}

export default Cart;