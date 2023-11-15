import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import loginbg from "./images/loginbg3.webp";
function Adminlogin(){

    const [adminemail, setEmail] = useState("");
    const [adminpassword, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {adminemail,adminpassword};
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/login-admin",data)
        .then((res)=>{
            if(res.data === "admin not registered"){
                alert("Your not the admin, please login as user or signup!");
            }else if(res.data === "password incorrect"){
                alert("Admin password is incorrect");
            }
            else{
                alert("Admin Login successful");
                const id = res.data;
                window.location.href = "/Admin/"+id;
            }
        }).catch((err)=>{
            console.log(err);
        })

        setEmail("");
        setPassword("");
    }

    const divStyle = {
        backgroundImage: `url(${loginbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opdacitiy: '1.0',
        height: '706px',
      };

    return(
        <div style={divStyle}>
        <div class="container-lg pt-5">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-5 col-sm-6 pt-4 px-4 border-bottom border-secondary border-2" style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="title d-flex justify-content-center mb-2 fw-bold" style={{fontSize: "2em",fontFamily: 'Times New Roman, Times, serif'}}>Admin Login</div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0%"}}>
                                <span class="tt" data-bs-placement="bottom" title="You must follow the general rules of email validation">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="email" placeholder="Email" style={{borderRadius: "0"}} onChange={(event)=>setEmail(event.target.value)} required/>
                        </div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="Your Password should contain minimum of 8 characters which should include atleast 1 symbol, 1 number, uppercase and lowercase characters but cannot start a with number">
                                    <i class="bi bi-lock"></i>
                                </span>
                            </span>
                            <input type="password" class="form-control" id="password" placeholder="Password" style={{borderRadius: "0"}} onChange={(event)=>setPassword(event.target.value)} required/>
                        </div>
                        <div class="d-flex">
                            <input type="submit" class="form-control bg-primary text-light fw-bold" id="submit" style={{borderRadius: "0"}} value="Log in"/>
                            <Link to="/"><button class="btn btn-danger">User</button></Link>
                        </div>
                        <div class="d-flex justify-content-between mt-3 mb-4" style={{fontSize: "smaller"}}>
                            <span>
                                <input type="checkbox"/>
                                <span>Remember me</span>
                            </span>
                            <Link to="/forgotpassword-user" class="text-decoration-none">Forgot Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Adminlogin;