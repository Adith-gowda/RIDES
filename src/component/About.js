import React from "react";
import "../App.css";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "./Footer";


function About() {

    const {id} = useParams();
    const [username, setUsername] = useState("");

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    
    return(
        <div>
            <Nav id={id} username={username}/>
            <div class="body1" style={{fontFamily:"Times New Roman"}}>
                <div class="container-lg py-3">
                    <div class="row" style={{opacity:"0.8"}}>
                        <center>
                        <div class="col-md-8 col-lg-10 mt-2 mb-lg-3">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-decoration-underline">Welcome to Our Showroom</h5>
                                    <p class="card-text">A Haven for Automobile Enthusiasts! Nestled in the heart of the city, our showroom stands as a testament to luxury, innovation, and elegance in the world of automobiles.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-10 mt-2 mb-lg-3">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-decoration-underline">A World of Choices</h5>
                                    <p class="card-text">From sleek sedans to robust SUVs and cutting-edge electric vehicles, our showroom boasts an extensive collection that caters to every taste and preference.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8 col-lg-10 mt-2 mb-lg-3">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-decoration-underline">Expert Guidance</h5>
                                    <p class="card-text">Our knowledgeable and friendly staff are more than just salespeople; they are automotive enthusiasts who understand the intricacies of each vehicle on display.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8 col-lg-10 mt-2 mb-lg-3">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-decoration-underline">Visit Us Today</h5>
                                    <p class="card-text">Whether youre a car enthusiast, a first-time buyer, or someone seeking automotive inspiration, our showroom invites you to embark on a captivating journey.</p>
                                </div>
                            </div>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
            <Footer userid={id} username={username}/>
        </div>
    )
}

export default About;