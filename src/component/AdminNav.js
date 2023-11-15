import React from 'react';
import { Link } from 'react-router-dom';
import Rides from './images/Rides.jpg';

function AdminNav(props){

    const {id, adminname} = props;

    return(
        <div style={{fontFamily: 'Times New Roman, Times, serif'}}>
            <nav class="navbar navbar-expand-lg justify-content-between px-3 py-0" style={{backgroundColor: "#e8e6e6"}}>
                <div class="col-lg-3 navbar-brand">
                    <img src={Rides} style={{width:'50px'}} alt="logo"/>
                    <span class="ms-2" style={{fontFamily: 'Times New Roman, Times, serif'}}>R I D E S</span>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    arai-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div className="nav collapse navbar-collapse justify-content-lg-end justify-content-sm-evenly" id="main-nav">
                    <Link to={"/Admin/"+id} class="nav-link text-dark"><div class="bi bi-house-door btn btn-outline-secondary"> Home</div></Link>
                    <Link to={"/UserDetails/"+id} class="nav-link text-dark"><div class="bi bi-people btn btn-outline-secondary"> Users List</div></Link>
                    <Link to={"/Feedback/"+id} class="nav-link text-dark"><div class="bi bi-chat-square-dots btn btn-outline-secondary"> Feedback</div></Link>
                    <Link to="/" class="nav-link text-dark"><div class="bi bi-box-arrow-left btn btn-outline-danger"> Log Out</div></Link>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav;

