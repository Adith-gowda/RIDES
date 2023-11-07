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
            <div class="container-fluid mb-5 profile1 pt-5" style={{fontFamily:"Times"}}>
                <div class="row justify-content-center">
                <div class="title d-flex justify-content-center mb-2" style={{fontSize: "2em",fontFamily: 'Times'}}><span class="bi bi-person-circle fw-bold text-dark"> Profile</span></div>
                    <div class="col-8 pt-4 px-4 border border-secondary border-1 " style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                        <table class="table table-stripped" cellPadding={20} style={{backgroundColor:"#fcfcfc"}}>
                            <tr>
                                <td><i class="bi bi-person-fill"></i>Username</td>
                                <td>: {username}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-envelope-fill"></i>Email</td>
                                <td>: {email}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-telephone-fill"></i>Phone No.</td>
                                <td>: {phoneNo}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-geo-alt-fill"></i>Address</td>
                                <td>: {address}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-geo-fill"></i>Pincode</td>
                                <td>: {pincode}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} class="text-center">
                                    <Link to="/"><div className="btn btn-primary"><i class="bi bi-box-arrow-left"></i> Log Out</div></Link>
                                    <Link to={"/editProfile/"+id}><div className="btn btn-secondary"><i class="bi bi-pencil-square"></i> Edit Profile</div></Link>
                                </td>
                            </tr>
                        </table>
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