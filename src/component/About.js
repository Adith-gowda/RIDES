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
            <div class="body1 pt-2" style={{fontFamily:"Times New Roman"}}>
                <title>Our Showroom</title>
                <div class="container1">
                    <h1>Welcome to Our Showroom</h1>

                    <div class="point">
                        <h2>A Haven for Automobile Enthusiasts!</h2>
                        <p>Nestled in the heart of the city, our showroom stands as a testament to luxury, innovation, and elegance in the world of automobiles. As you step inside, you are greeted by a symphony of gleaming cars, each a masterpiece in its own right. Our showroom is not just a place to buy vehicles; its an experience, a journey through the latest and most coveted models from renowned manufacturers around the globe.</p>
                    </div>

                    <div class="point">
                        <h2>A World of Choices</h2>
                        <p>From sleek sedans to robust SUVs and cutting-edge electric vehicles, our showroom boasts an extensive collection that caters to every taste and preference. Immerse yourself in the scent of new leather and the sheen of polished metal as you explore the showroom floor. Each vehicle is a marvel of engineering, promising comfort, performance, and style in equal measure.</p>
                    </div>

                    <div class="point">
                        <h2>Expert Guidance</h2>
                        <p>Our knowledgeable and friendly staff are more than just salespeople; they are automotive enthusiasts who understand the intricacies of each vehicle on display. They are dedicated to providing you with comprehensive information, guiding you through the features and options, and ensuring you make an informed decision tailored to your needs.</p>
                    </div>

                    <div class="point">
                        <h2>Visit Us Today</h2>
                        <p>Whether youre a car enthusiast, a first-time buyer, or someone simply seeking automotive inspiration, our showroom invites you to embark on a captivating journey. Come and witness the epitome of automotive excellence, where passion meets precision, and where every vehicle tells a story of craftsmanship and performance. Join us at our showroom, where dreams are realized, and the road ahead is paved with excitement and unparalleled driving experiences.</p>
                    </div>
                </div>
            </div>
            <Footer userid={id} username={username}/>
        </div>
    )
}

export default About;