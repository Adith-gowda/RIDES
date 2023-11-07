import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import BikeList from './Bikelist';
import Footer from './Footer';


function Bike(){

    const {id, company} = useParams();
    const [username, setUsername] = useState("");

    const [data , setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/product/"+company)
        .then((res)=>{
            if(res.status===200){
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[company])

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])


    return(
        <div class="bg-dark">
            <Nav id={id} username={username}/>
            <BikeList data={data} id={id} username={username} company={company}/>
            <Footer userid={id} username={username}/>
        </div>
    )
}

export default Bike;