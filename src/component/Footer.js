import React from "react";
import "../App.css";
import Rides from "./images/Rides.jpg";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Footer(props){

    var today = new Date();
    
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [message, setMessage] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        const data = {userid:props.userid , username:props.username, message: message, date: date};
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/user-feedback",data)
        .then((res)=>{
            if(res.status===200){
                alert("Message sent successfully");
                window.location.reload();
            }
            else{
                alert("Message not sent");
            }
        }).catch((err)=>{
            console.log(err);
        })

        setMessage("");
    }


    return(
        <div>
            <section id="contact" class="footer_wrapper mt-3 mt-md-0 pt-5" style={{backgroundColor: "#e8e6e6", fontFamily:"Times"}}>
                <div class="container pb-3">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                                <img src={Rides} alt="company-logo" style={{width:'70px'}} />
                                <span class="ms-2" style={{fontFamily: 'Times New Roman, Times, serif', fontSize:'20px'}}>R I D E S</span>
                                <p class="ps-0">Place for the most luxurious and crazy bikes.</p>
                                <div class="contact-info">
                                <ul class="list-unstyled">
                                    <li><div><i class="fa fa-phone me-3"></i>9919938589</div></li>
                                    <li><div><i class="fa fa-envelope me-3"></i>ridesconsultant@gmail.com</div></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-10 my-2">
                            <h5 class="text-muted">Showroom Address</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    12345 Maple Avenue,<br/>
                                    Building C-6789,<br/>
                                    Blossom Residency Complex<br/>
                                    Sunnyville, Stateville 54321-9876<br/>
                                    District Central, Countryland<br/>
                                    R I D E S Pvt Ltd.<br/>
                                    P.O. Box 1010<br/>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-2">
                            <h5 class="text-decoration-underline">Write to Us</h5>
                            <div class="form-group mb-4">
                                <textarea type="text" onChange={(event)=>{setMessage(event.target.value)}} class="form-control bg-transparent border-1 border-dark" placeholder="Your text goes here"/>
                                <button type="submit" onClick={handleSend} class="btn btn-dark rounded-2 mt-3 border-white text-white"><i class="bi bi-send"></i></button>
                            </div>
                            <h5>Follow us</h5>
                            <ul class="social-network d-flex align-items-center p-0">
                                <li><Link to="https://www.facebook.com/saswatdash2003" class="border border-secondary"><i class="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="https://x.com/ManobhiSriram?t=CTmUtmwHkOgFMR7CIXBO4A&s=08" class="border border-secondary"><i class="bi bi-twitter"></i></Link></li>
                                <li><Link to="https://www.linkedin.com/in/manobhi-sriram-86b455229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="border border-secondary"><i class="bi bi-linkedin"></i></Link></li>
                                <li><Link to="https://instagram.com/iamskd_404?igshid=MXM1cmF4N2d2N3U5MA==" class="border border-secondary"><i class="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container-fluid d-flex justify-content-center bg-secondary pt-3">
                    <p>Copyright <span style={{color:"white"}}>© Rides </span> All rights reserved</p>
                </div>
            </section>
        </div>
    )
}

export default Footer;