import React from 'react';
import { Link } from 'react-router-dom';
import Rides from './images/Rides.jpg';

function AdminNav(props){

    const {id, adminname} = props;

    return(
        <div style={{fontFamily: 'Times New Roman, Times, serif'}}>
            <nav class="navbar px-3 py-0" style={{backgroundColor: "#e8e6e6"}}>
                <div class="col-lg-3 navbar-brand">
                    <img src={Rides} style={{width:'50px'}} alt="logo"/>
                    <span class="ms-2" style={{fontFamily: 'Times New Roman, Times, serif'}}>R I D E S</span>
                </div>
                <div className="nav">
                    <Link to={"/Admin/"+id} class="nav-link text-dark"><div class="bi bi-house-door" style={{fontSize:"20px"}}> Home</div></Link>
                    <Link to={"/UserDetails/"+id} class="nav-link text-dark"><div class="bi bi-list-ul" style={{fontSize:"20px"}}> Users List</div></Link>
                    <Link to={"/Feedback/"+id} class="nav-link text-dark"><div class="bi bi-chat-square-dots" style={{fontSize:"20px"}}> Feedback</div></Link>
                    <Link to="/" class="nav-link text-dark"><div class="bi bi-box-arrow-left btn btn-danger"> Log Out</div></Link>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav;

