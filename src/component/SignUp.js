import { useState } from "react";
import Axios from "axios";
import signupbg from "./images/signupbg2.jpg";

function SignUp(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [order, setOrders] = useState([]);
    const [cart, setCart] = useState([]);
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {username: username, email: email, password: password, wishlist: wishlist, order: order, cart: cart, phoneNo: phoneNo, address: address, pincode: pincode};
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/signup-user",data)
        .then((res)=>{
            if(res.data==="user already exists"){
                alert("User already exists");
                window.location.href = "/";
            }
            else{
                alert("Signup successful");
                window.location.href = "/";
            }
        }).catch((err)=>{
            console.log(err);
        })

        setUsername("");
        setEmail("");
        setPassword("");
        setPhoneNo("");
        setAddress("");
        setPincode("");
    }

    const divStyle = {
        backgroundImage: `url(${signupbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opdacitiy: '2.0',
        height: '706px',
      };

    return(
        <div style={divStyle}>
        <div class="container-lg pt-5">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-7 pt-4 px-4 border-bottom border-secondary border-2" style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="title d-flex justify-content-center mb-2 fw-bold" style={{fontSize: "2em",fontFamily: 'Times New Roman, Times, serif'}}>Sign Up</div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0%"}}>
                                <span class="tt" data-bs-placement="bottom" title="Your username should contain alphabets and can also contain . , _ , number but cannot start a with number">
                                <i class="bi bi-person-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="username" placeholder="Username" style={{borderRadius: "0%"}} onChange={(event)=>setUsername(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0%"}}>
                                <span class="tt" data-bs-placement="bottom" title="You must follow the general rules of email validation">
                                    <i class="bi bi-envelope-fill"></i>
                                </span>
                            </span>
                            <input type="email" class="form-control" id="email" placeholder="Email" style={{borderRadius: "0"}} onChange={(event)=>setEmail(event.target.value)} required/>
                        </div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="Your Password should contain minimum of 8 characters which should include atleast 1 symbol, 1 number, uppercase and lowercase characters but cannot start a with number">
                                    <i class="bi bi-lock"></i>
                                </span>
                            </span>
                            <input type="password" class="form-control" id="password" placeholder="Password" style={{borderRadius: "0"}} onChange={(event)=>setPassword(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="Valid IND format number">
                                    <i class="bi bi-telephone-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="phoneNo" placeholder="Phone No" style={{borderRadius: "0"}} onChange={(event)=>setPhoneNo(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="Enter the same address as mentioned in your Adhaar card">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </span>
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Home Address" style={{borderRadius: "0"}} onChange={(event)=>setAddress(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="It should contain 6 digits">
                                    <i class="bi bi-geo-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="pincode" placeholder="Pincode" style={{borderRadius: "0"}} onChange={(event)=>setPincode(event.target.value)} required/>
                        </div>

                        <div class="d-flex justify-content-between mt-3 mb-4" style={{fontSize: "small"}}>
                            <span>
                                <input type="checkbox"/>
                                <span> Agree to our terms & conditions</span>
                            </span>
                        </div>

                        <div>
                            <input type="submit" class="form-control bg-primary text-light fw-bold my-3" id="submit" style={{borderRadius: "0"}} value="Sign up"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp;