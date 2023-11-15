import { useState } from "react";
import Axios from "axios";
import signupbg from "./images/signupbg2.jpg";
import AdminNav from './AdminNav';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function AdminHome(){

    const {id} = useParams();
    const [adminname, setUsername] = useState("");

    const [company, setCompany] = useState("");
    const [bikename, setBikename] = useState("");
    const [bikeprice, setBikeprice] = useState("");
    const [bikerating, setBikerating] = useState("");
    const [kmpl, setKmpl] = useState("");
    const [bikecc, setBikecc] = useState("");
    const [description, setDescription] = useState("");
    const [bikeimage, setBikeimage] = useState("");


    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/admin-account/"+id)
        .then((res)=>{
            setUsername(res.data.adminname);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])



    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {company: company, bikename: bikename, bikeprice: bikeprice, bikerating: bikerating, kmpl: kmpl, bikecc: bikecc, description: description, image: bikeimage};
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/admin-product",data)
        .then((res)=>{
            if(res.status===200){
                alert("Product added to database");
                window.location.reload();
            }
            else{
                alert("Product not added to database");
            }
        }).catch((err)=>{
            console.log(err);
        })

        setCompany("");
        setBikename("");
        setBikeprice("");
        setBikerating("");
        setKmpl("");
        setBikecc("");
        setDescription("");
        setBikeimage("");
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
        <div>
        <AdminNav id={id} adminname={adminname}/>
        <div style={divStyle}>

        <div class="container-lg pt-5">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-7 pt-4 px-4 border-bottom border-secondary border-2" style={{backgroundColor: "rgba(222, 220, 220, 0.427)"}}>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="title d-flex justify-content-center mb-2 fw-bold" style={{fontSize: "2em",fontFamily: 'Times New Roman, Times, serif'}}>Bike/Scooter Data</div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0%"}}>
                                <span class="tt" data-bs-placement="bottom" title="Official valid brand name of the bike">
                                <i class="bi bi-building-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="company" placeholder="Company Name" style={{borderRadius: "0%"}} onChange={(event)=>setCompany(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0%"}}>
                                <span class="tt" data-bs-placement="bottom" title="Official bike name">
                                <i class="bi bi-info-square-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="bikename" placeholder="Bike Name" style={{borderRadius: "0"}} onChange={(event)=>setBikename(event.target.value)} required/>
                        </div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="bike on-road price">
                                <i class="bi bi-tag-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="bikeprice" placeholder="Bike Price" style={{borderRadius: "0"}} onChange={(event)=>setBikeprice(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="bike rating out of 5">
                                <i class="bi bi-star-half"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="bikerating" placeholder="Bike Rating" style={{borderRadius: "0"}} onChange={(event)=>setBikerating(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="kilometer per litre of petrol">
                                <i class="bi bi-signpost-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="kmpl" placeholder="KMPL" style={{borderRadius: "0"}} onChange={(event)=>setKmpl(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="bike cc">
                                <i class="bi bi-cc-circle-fill"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="bikecc" placeholder="Bike CC" style={{borderRadius: "0"}} onChange={(event)=>setBikecc(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="bike info">
                                <i class="bi bi-card-text"></i>
                                </span>
                            </span>
                            <textarea type="text" class="form-control" id="description" placeholder="Bike Description" style={{borderRadius: "0"}} onChange={(event)=>setDescription(event.target.value)} required/>
                        </div>

                        <div class="mb-3 input-group">
                            <span class="input-group-text" style={{borderRadius: "0"}}>
                                <span class="tt" data-bs-placement="bottom" title="valid bike image link">
                                <i class="bi bi-link-45deg"></i>
                                </span>
                            </span>
                            <input type="text" class="form-control" id="image" placeholder="Bike Image Link" style={{borderRadius: "0"}} onChange={(event)=>setBikeimage(event.target.value)} required/>
                        </div>
                        <div>
                            <input type="submit" class="form-control bg-primary text-light fw-bold my-3" id="submit" style={{borderRadius: "0"}} value="Add to DataBase"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default AdminHome;