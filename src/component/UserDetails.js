import React from 'react';
import AdminNav from './AdminNav';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';

function UserDetails(){

    const {id} = useParams();
    const [adminname, setUsername] = useState("");
    const [userdata, setUserData] = useState([]);

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/admin-account/"+id)
        .then((res)=>{
            setUsername(res.data.adminname);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/")
        .then((res)=>{
            setUserData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    
    const handleDelete = (e) => {
        const id = e.target.id;
        Axios.delete("https://bike-showroom-backend.onrender.com/bikes/delete-user/"+id)
        .then((res)=>{
            if(res.status===200){
                alert("User deleted successfully");
                window.location.reload();
            }
            else{
                alert("User not deleted");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div class="bg-dark">
            <AdminNav id={id} username={adminname}/>
            {
                userdata.map((user)=>{
                    return (
                        <div class="container-lg my-5">
                            <div class="row justify-content-center">
                                <div class="col-md-6 py-4 px-4 mb-5 border border-secondary border-1" style={{backgroundColor: "rgba(222, 220, 220, 0.7)"}}>
                                    <form>
                                        <div class="form-group my-2">
                                            <label for="username" class="fw-bold bi bi-person-circle"> Username :</label>
                                            <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" defaultValue={user.username} readOnly />
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="email" class="fw-bold bi bi-envelope-fill"> Email :</label>
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" defaultValue={user.email} readOnly/>
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="phoneno" class="fw-bold bi bi-telephone-fill"> PhoneNo :</label>
                                            <input type="text" class="form-control" id="phoneno" defaultValue={user.phoneNo} readOnly />
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="address" class="fw-bold bi bi-geo-alt-fill"> Address :</label>
                                            <textarea type="text" class="form-control" id="address" aria-describedby="addressHelp" defaultValue={user.address} readOnly/>
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="pincode" class="fw-bold bi bi-geo-fill"> Pincode :</label>
                                            <input type="text" class="form-control" id="pincode" aria-describedby="pincodeHelp" defaultValue={user.pincode} readOnly/>
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="pincode" class="fw-bold bi bi-heart-fill"> WishList :</label>
                                            <input type="text" class="form-control" id="pincode" aria-describedby="pincodeHelp" defaultValue={user.wishlist.length + " count"} readOnly/>
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="pincode" class="fw-bold bi bi-cart-fill"> Cart :</label>
                                            <input type="text" class="form-control" id="pincode" aria-describedby="pincodeHelp" defaultValue={user.cart.length + " count"} readOnly/>
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="pincode" class="fw-bold bi bi-bag-check-fill"> Orders :</label>
                                            <input type="text" class="form-control" id="pincode" aria-describedby="pincodeHelp" defaultValue={user.order.length + " count"} readOnly/>
                                        </div>
                                        <div class="form-group my-1 text-center">
                                            <label for="pincode" class="fw-bold">Ordered Vehicles :</label>
                                            {user.order.length ===0? <div>Not yet ordered anything</div>:
                                                <span>
                                                    {
                                                        user.order.map((vehicle)=>{
                                                            return <div>Vehicle ID : {vehicle}</div>
                                                        })
                                                    } 
                                                </span>       
                                            }
                                            <div className="btn btn-danger my-2"  id={user._id} onClick={handleDelete}><i class="bi bi-box-arrow-left"></i> Delete this User</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserDetails;