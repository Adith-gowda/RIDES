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
                        <div class="container-fluid my-5">
                            <div class="row justify-content-center">
                                <div class="col-8 pt-3 px-4 border border-secondary border-1 mb-4" style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                                    <table class="table table-stripped text-left" cellPadding={20} style={{backgroundColor:"#fcfcfc"}}>
                                        <tr>
                                            <td><i class="bi bi-person-fill"></i>Username</td>
                                            <td>: {user.username}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-envelope-fill"></i>Email</td>
                                            <td>: {user.email}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-telephone-fill"></i>Phone No.</td>
                                            <td>: {user.phoneNo}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-house-fill"></i>Address</td>
                                            <td>: {user.address}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-pin-map-fill"></i>Pincode</td>
                                            <td>: {user.pincode}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-heart-fill"></i>Wishlist</td>
                                            <td>: {user.wishlist.length} count</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-cart-fill"></i>Cart</td>
                                            <td>: {user.cart.length} count</td>
                                        </tr>
                                        <tr>
                                            <td><i class="bi bi-bag-fill"></i>Orders</td>
                                            <td>: {user.order.length} count</td>
                                        </tr>
                                        <tr>
                                            <td class="text-center"><i class="bi bi-caret-right-fill"></i>Ordered vehicles<i class="bi bi-caret-left-fill"></i></td>
                                            <td>{user.order.length ===0? <div>Not yet ordered anything</div>:
                                            <span>
                                                {
                                                    user.order.map((vehicle)=>{
                                                        return <div>Vehicle Id : {vehicle}</div>
                                                    })
                                                } 
                                            </span>       
                                        }</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} class="text-center">
                                                <div className="btn btn-danger"  id={user._id} onClick={handleDelete}><i class="bi bi-box-arrow-left"></i> Delete this User</div>
                                            </td>
                                        </tr>
                                    </table>
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