import React from 'react';
import { Link } from 'react-router-dom';
import Rides from './images/Rides.jpg';
import Dropdown from 'react-bootstrap/Dropdown';


function Nav(props){

    const {id, username} = props;

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = "/bike/"+id+"/"+e.target.text;
    }

    return(
        <div> 
            <nav class="navbar navbar-expand-lg  justify-content-between px-3" style={{backgroundColor: "#e8e6e6"}}>
                <div class="col-lg-3 navbar-brand">
                    <img src={Rides} style={{width:'50px'}} alt="logo"/>
                    <span class="ms-2" style={{fontFamily: 'Times New Roman, Times, serif'}}>R I D E S</span>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    arai-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <Dropdown style={{width:"250px", textAlign:"left", fontStyle:"italic"}}>
                    <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontStyle:"italic"}}>
                        Search by Brand
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleClick}>TVSBike</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>TVSScooty</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>KTM</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>Ducati</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>RoyalEnfield</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>Vespa</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>Suzuki</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>Activa</Dropdown.Item>   
                    </Dropdown.Menu>
                </Dropdown>
                
                <div className="nav navbar-collapse collapse justify-content-lg-end justify-content-sm-evenly" id="main-nav">
                    <Link to={"/Home/"+id} class="nav-link text-dark"><div class="bi bi-house-door  "> Home</div></Link>
                    <Link to={"/About/"+id} class="nav-link text-dark"><div class="bi bi-info-lg ">About</div></Link>
                    <Link to={"/Cart/"+id} class="nav-link text-dark"><div class="bi bi-cart4 "> Cart</div></Link>
                    <Link to={"/Wishlist/"+id} class="nav-link text-dark"><div class="bi bi-bag-heart "> Wishlist</div></Link>
                    <Link to={"/Profile/"+id} class="nav-link text-dark"><div class="bi bi-person-circle "> {username}</div></Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;