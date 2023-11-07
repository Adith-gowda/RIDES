import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';



function EditProfile(){
    const {id} = useParams();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [order, setOrders] = useState([]);
    const [cart, setCart] = useState([]);
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
            setEmail(res.data.email);
            setWishlist(res.data.wishlist);
            setOrders(res.data.order);
            setCart(res.data.cart);
            setPhoneNo(res.data.phoneNo);
            setAddress(res.data.address);
            setPincode(res.data.pincode);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {username: username, email:email, wishlist:wishlist, order:order, cart:cart, phoneNo:phoneNo, address:address, pincode:pincode}
        Axios.put("https://bike-showroom-backend.onrender.com/bikes/update-user/"+id,data)
        .then((res)=>{
            alert("record updated successfully");
            window.location.href="/profile/"+id;
        })
        .catch((err)=>{alert(err)});
    }

    const handleBack = () =>{
        window.location.href="/profile/"+id;
    }

    return(
        <div class="bg-dark">
            <form onSubmit={handleSubmit}>
                <div class="container-lg my-5">
                    <div class="row justify-content-center">
                    <div class="title d-flex justify-content-center mb-2 text-light" style={{fontSize: "2em",fontFamily: 'Times New Roman, Times, serif'}}><span class="bi bi-person-circle fw-bold"> Edit Profile</span></div>
                        <div class="col-8 pt-4 px-4 border border-secondary border-1" style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                            <table class="table table-stripped" cellPadding={20} style={{backgroundColor:"#fcfcfc"}}>
                                <tr>
                                    <td><i class="bi bi-person-fill"></i>Username</td>
                                    <td>: <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-envelope-fill"></i>Email</td>
                                    <td>: <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-telephone-fill"></i>Phone No.</td>
                                    <td>: <input type="text" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-house-fill"></i>Address</td>
                                    <td>: <textarea type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-pin-map-fill"></i>Pincode</td>
                                    <td>: <input type="text" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button type="submit" class="btn btn-primary mx-2">Save Changes</button>
                                        <button class="btn btn-danger" onClick={handleBack}>Cancel</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;