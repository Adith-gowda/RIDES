import React from 'react';
import { useState, useEffect } from 'react';


function OrderList(props){

    const [productdata, setProductdata] = useState([]);

    useEffect(()=>{
        fetch("https://bike-showroom-backend.onrender.com/bikes/orderedProduct/"+props.item)
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            setProductdata(data);
        }).catch((err)=>{
            console.log(err);
        })
    },[props.item])



    return(
        <div class="row justify-content-center my-2">
                <div class="col-lg-10" style={{backgroundColor:"#e8e6e6"}}>
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
                                <h2 className="card-title text-center"><i class="bi bi-person-fill"></i> : {props.username}</h2>
                                <div className="card-text title text-muted text-center my-2">User Id : {props.id}</div>
                                <h6 className="card-text"><i class="bi bi-envelope-fill"></i> : {props.email}</h6>
                                <h6 className="card-text"><i class="bi bi-telephone-fill"></i> : {props.phoneNo}</h6>
                                <h6 className="card-text"><i class="bi bi-geo-fill"></i>  : {props.pincode}</h6>
                                <h6 className="card-text"><i class="bi bi-geo-alt-fill"></i> : {props.address}</h6>
                                <hr/>
                                <div>
                                    <h4 className="card-title text-center text-decoration-underline">Delivery Details</h4>
                                    <p>
                                        1. Delivery Address : {props.address}<br/>
                                        2. Delivery Pincode : {props.pincode}<br/>
                                        3. Only Cash On Delivery Available*<br/>
                                        4. Order will be delivered within next 15 working days*<br/>
                                        5. Please do check our cancellation & return policies*<br/>
                                        6. Please check your order details before placing order*<br/>
                                    </p>
                                    <hr/>
                                </div> 

                                <div class=" container-sm card1 checkout">
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
                                        <div>Order Delivered <i class="bi bi-emoji-smile-fill"></i></div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
    )
}

export default OrderList;