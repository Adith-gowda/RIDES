import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import WishListDetails from './WishListDetails';


function WishList(){

    const {id} = useParams();

    const [username, setUsername] = useState("");
    const [wishlist, setWishList] = useState([]);

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
            setWishList(res.data.wishlist);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const listitems = () => {
        return wishlist.map((item)=>{
            return <WishListDetails id={id} item={item}/>
        })
    }

    return (
        <div class="bg-dark">
            <Nav id={id} username={username}/>
            <div class="bi bi-heart h3 bg-secondary text-light p-2 text-center mb-5"> WishList Section</div>
            {wishlist.length===0? <div class="text-center my-5 text-light">Oops! It seems you have not added anything to your WishList...</div>: <div class="container-lg"><div class="row my-5">{listitems()}</div></div>}
            <Footer userid={id} username={username}/>
        </div>
      );
}

export default WishList;