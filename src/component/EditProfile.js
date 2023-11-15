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
        <div class="bg-dark my-5 py-3" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                <div class="container-lg my-5">
                    <div class="row justify-content-center">
                    <div class="title d-flex justify-content-center mb-2 text-light h2"><span class="bi bi-person-circle fw-bold"> Edit Profile</span></div>
                        <div class="col-lg-6 col-md-4 pt-4 px-4 border border-secondary border-1" style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group my-2">
                                    <label for="username" class="bi bi-person-fill"> Username :</label>
                                    <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" value={username} onChange={event => setUsername(event.target.value)}/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="email" class="bi bi-envelope-fill"> Email :</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={event => setEmail(event.target.value)}/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="phoneno" class="bi bi-telephone-fill"> PhoneNo :</label>
                                    <input type="text" class="form-control" id="phoneno" value={phoneNo} onChange={event => setPhoneNo(event.target.value)} />
                                </div>
                                <div class="form-group my-2">
                                    <label for="address" class="bi bi-geo-alt-fill"> Address :</label>
                                    <textarea type="text" class="form-control" id="address" aria-describedby="addressHelp" value={address} onChange={event => setAddress(event.target.value)}/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="pincode" class="bi bi-geo-fill"> Pincode :</label>
                                    <input type="text" class="form-control" id="pincode" aria-describedby="pincodeHelp" value={pincode} onChange={event => setPincode(event.target.value)}/>
                                </div>
                                <center class="my-3">
                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                    <button type="button" class="btn btn-danger mx-3 my-2" onClick={handleBack}>Cancel</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default EditProfile;