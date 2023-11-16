import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

function OrderConfirm(){
    const {productid,id} = useParams();
    const [userdata, setUserdata] = useState([]);
    const [productdata, setProductdata] = useState([]);

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/orderedProduct/"+productid)
        .then((res)=>{
            setProductdata(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[productid])

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUserdata(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const handleCancel = () => {
        window.location.href = "/Cart/"+id;
    }

    const handleSubmit = () => {
        const userid = id;
        const productid = productdata._id;
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/addtoorder",{userid,productid})
        .then((res)=>{
            alert("Order Placed Successfully");
            window.location.href = "/Profile/"+id;
        }).catch((err)=>{
            console.log(err);
        })

    }


    return(
        <div class="container-lg">
            <div class="row justify-content-center" style={{height:"700px"}}>
                <div class="col-lg-10" style={{backgroundColor:"#e8e6e6"}}>
                    <div class="d-flex justify-content-between px-1 bg-secondary text-light" style={{fontFamily:"Times News Roman"}}>
                        <div class="display-6 my-3"><i class="bi bi-check-circle-fill"></i> Order Confirmation Page</div>
                        <div class="btn btn-danger fw-bold my-3 text-center" onClick={handleCancel}>Cancel</div>
                    </div>
                    <div class="row justify-content-center px-3">
                        <div className="card col-lg-6 my-4 py-3">
                            <img src={productdata.image} className="card-img-top" alt={productdata.bikename} />
                            <div className="card-body" >
                                <h4 className="card-title text-center">{productdata.bikename}</h4>
                                <h6 className="card-text text-center">{productdata.bikeprice}*</h6>
                                <code className="card-text">{`>>`} Rating: {productdata.bikerating}</code><br/>
                                <code className="card-text">{`>>`} Kmpl: {productdata.kmpl}</code><br/>
                                <code className="card-text">{`>>`} CC: {productdata.bikecc}</code><br/>
                                <cite className="card-text"><i class="bi bi-bookmark-fill"> {productdata.description}</i></cite><br/>
                            </div>
                        </div>
                        <div className="card col-lg-6 my-4 py-3" style={{fontFamily:"Times"}}>
                            <div className="card-body" >
                                <h2 className="card-title text-center"><i class="bi bi-person-fill"></i> : {userdata.username}</h2>
                                <div className="card-text title text-muted text-center my-2">User Id : {userdata._id}</div>
                                <h6 className="card-text"><i class="bi bi-envelope-fill"></i> : {userdata.email}</h6>
                                <h6 className="card-text"><i class="bi bi-telephone-fill"></i> : {userdata.phoneNo}</h6>
                                <h6 className="card-text"><i class="bi bi-geo-fill"></i>  : {userdata.pincode}</h6>
                                <h6 className="card-text"><i class="bi bi-geo-alt-fill"></i> : {userdata.address}</h6>
                                <hr/>
                                <div>
                                    <h4 className="card-title text-center text-decoration-underline">Delivery Details</h4>
                                    <p>
                                        1. Delivery Address : {userdata.address}<br/>
                                        2. Delivery Pincode : {userdata.pincode}<br/>
                                        3. Only Cash On Delivery Available*<br/>
                                        4. Order will be delivered within next 15 working days*<br/>
                                        5. Please do check our cancellation & return policies*<br/>
                                        6. Please check your order details before placing order*<br/>
                                    </p>
                                    <hr/>
                                </div> 

                                <div class="container-sm card1 checkout">
                                    <label class="title1">Checkout</label>
                                    <div class="details">
                                        <span>Your cart subtotal:</span>
                                        <span>{productdata.bikeprice}</span>
                                        <span>Discount through applied coupons:</span>
                                        <span>0/-</span>
                                        <span>Shipping fees:</span>
                                        <span>1000/-</span>
                                    </div>
                                    <div class="checkout--footer">
                                        <label class="price">{productdata.bikeprice}</label>
                                        <button class="checkout-btn" onClick={handleSubmit}>Checkout</button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirm;