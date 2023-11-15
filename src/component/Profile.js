import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import OrderList from "./OrderList";
import "../App.css";

function Profile(){

    const {id} = useParams();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [order, setOrders] = useState([]);
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
            setEmail(res.data.email);
            setOrders(res.data.order);
            setPhoneNo(res.data.phoneNo);
            setAddress(res.data.address);
            setPincode(res.data.pincode);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const listitems = () => {
        return order.map((item)=>{
            return <OrderList 
                id={id}
                username = {username}
                email = {email}
                phoneNo = {phoneNo}
                address = {address}
                pincode = {pincode}
                item={item}/>
        })
    }

    return(
        <div class="bg-dark">
            <Nav id={id} username={username}/>
            <div class="container-fluid mb-5 profile1 py-5" style={{fontFamily:"Times"}}>
                <div class="row justify-content-center">
                    <div class="col-md-6 pt-4 px-4 border border-secondary border-1" style={{backgroundColor: "rgba(222, 220, 220, 0.7)"}}>
                        <form>
                            <div class="title d-flex justify-content-center mb-2 text-dark h2"><span class="bi bi-person-circle fw-bold"> Profile</span></div>
                            <div class="form-group my-1">
                                <label for="username" class="fw-bold bi bi-person-fill"> Username :</label>
                                <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" defaultValue={username} readOnly />
                            </div>
                            <div class="form-group my-1">
                                <label for="email" class="fw-bold bi bi-envelope-fill"> Email :</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" defaultValue={email} readOnly />
                            </div>
                            <div class="form-group my-1">
                                <label for="phoneno" class="fw-bold bi bi-telephone-fill"> PhoneNo :</label>
                                <input type="text" class="form-control" id="phoneno" defaultValue={phoneNo} readOnly />
                            </div>
                            <div class="form-group my-1">
                                <label for="address" class="fw-bold bi bi-geo-alt-fill"> Address :</label>
                                <textarea type="text" class="form-control" id="address" aria-describedby="addressHelp" defaultValue={address} readOnly />
                            </div>
                            <div class="form-group my-1">
                                <label for="pincode" class="fw-bold bi bi-geo-fill"> Pincode :</label>
                                <input type="text" class="form-control" id="pincode" aria-describedby="pincodeHelp" defaultValue={pincode} readOnly />
                            </div>
                            <center class="my-3">
                                <Link to="/"><div className="btn btn-danger me-3 my-md-0 my-2"><i class="bi bi-box-arrow-left"></i> Log Out</div></Link>
                                <Link to={"/editProfile/"+id}><div className="btn btn-secondary"><i class="bi bi-pencil-square"></i> Edit Profile</div></Link>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
            <hr class="border"/>
            <div class="container-fluid my-5 text-light pb-5">
                <div class="my-5 d-flex justify-content-center">
                    <div class="title mb-2" style={{fontSize: "2em",fontFamily: 'Times New Roman, Times, serif'}}><i class="bi bi-bag-fill"></i> Your Orders</div>
                </div>
                {order.length === 0 ? <div class="text-center text-light">Oops! You have not ordered anything yet...</div> :<div>{listitems()}</div>}
            </div>
            <hr class="border"/>
            <Footer userid={id} username={username}/>
        </div>
    )
}

export default Profile;