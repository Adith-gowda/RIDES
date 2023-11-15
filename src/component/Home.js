import React from 'react';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import activa from './images/activa.jpg';
import ducati from './images/Ducati.jpg';
import ktm from './images/KTM.jpg';
import royal from './images/RL.jpg';
import suzuki from './images/suzuki.jpg';
import vespa from './images/vespa.jpg';
import tvs from './images/TVS.jpg';
import Bike1 from './images/Bike1.png';
import Bike2 from './images/Bike2.png';
import Bike3 from './images/Bike3.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useRef } from 'react';
import { Carousel } from 'bootstrap';
import Footer from './Footer';




function Home(){

    const {id} = useParams();

    const [username, setUsername] = useState("");

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/account/"+id)
        .then((res)=>{
            setUsername(res.data.username);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const ktmbike = "KTM";
    const tvsbike = "TVSBike";
    const tvsscooty = "TVSScooty";
    const royalenfieldbike = "RoyalEnfield";
    const ducatibike = "Ducati";
    const vespascooty = "Vespa";
    const suzukiscooty = "Suzuki";
    const activascooty = "Activa";

    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            new Carousel(carouselRef.current, {
                interval: 10, // Change slide every 2 seconds
                pause: false
            });
        }
    }, []);

    return(
        <div class="bg-dark">
            <Nav  id={id} username={username} />
            <div id="imageCarousel" class="carousel slide container-lg my-3" data-bs-ride="carousel" >
                <div class="carousel-inner" style={{height:'600px'}}>
                    <div class="carousel-item active">
                        <img src={Bike1} class="d-block w-100" alt="Bike 1"/>
                    </div>
                    
                    <div class="carousel-item">
                        <img src={Bike2} class="d-block w-100" alt="Bike 2"/>
                    </div>
                    <div class="carousel-item">
                        <img src={Bike3} class="d-block w-100" alt="Bike 3"/>
                    </div>
                </div>
            </div>
            <div class="text-light text-center">Scroll Down <i class="bi bi-arrow-down"></i></div>
            <hr class="border"/>
            <section id="price" class="price_wrapper mt-5" style={{fontFamily:"Times New Roman"}}>
                <section id="price" class="price_wrapper">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 section-title text-center mb-5">
                        
                        <div class="display-6 text-light">Our Bike Brands <i class="bi bi-stars"></i></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"400px"}}>
                            <ul class="list-unstyled card-head card-image-top">
                            <li>
                                <img src={tvs} class="img-fluid rounded-3" alt='tvsbike'/>
                            </li>
                            
                            </ul>
                            <hr />
                            <h3>₹86,803-2.57 L<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title my-4 mb-4"> The TVS Motors has a mileage of 55.0 kmpl</div>
                            <Link to={"/bike/"+id+"/"+tvsbike}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"400px"}}>
                            <ul class="list-unstyled card-head">
                            <li>
                                <img src={royal} class="img-fluid rounded-3" alt='royalbike'/>
                            </li>
                            </ul>
                            <hr />
                            <h3>Starting at ₹1.49 L<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title my-3 mb-4"> The average mileage is 30 to 40 kmpl</div>
                            <Link to={"/bike/"+id+"/"+royalenfieldbike}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"400px"}}>
                            <ul class="list-unstyled card-head">
                            <li>
                                <img src={ktm} class="img-fluid rounded-3" alt='ktmbike'/>
                            </li>
                            </ul>
                            <hr />
                            <h3>₹1.79 L-₹8.63 L<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title mb-2"> The mileage of KTM 125 Duke is 48.05 kmpl.</div>
                            <Link to={"/bike/"+id+"/"+ktmbike}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"400px"}}>
                            <ul class="list-unstyled card-head">
                                <li>
                                    <img src={ducati} class="img-fluid rounded-3" alt='ducatibike'/>
                                </li>
                            </ul>
                            <hr />
                            <h3>₹ 9.39 L-24.57 L<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title my-2"> The average mileage of ducati is 13 kmpl.</div>
                            <Link to={"/bike/"+id+"/"+ducatibike}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <hr class="border"/>
                <section id="price" class="price_wrapper my-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 section-title text-center mb-5">
                        
                        <div class="display-6 text-light">Our Scooter Brands <i class="bi bi-stars"></i></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"320px"}}>
                            <ul class="list-unstyled card-head">
                            <li>
                                <img src={vespa} class="img-fluid rounded-3" alt='vespa'/>
                            </li>
                            
                            </ul>
                            <hr />
                            <h3>₹ 73,573-1.43 L<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title"> The Vespa scooter has a mileage of 60 kmpl</div>
                            
                            <Link to={"/bike/"+id+"/"+vespascooty}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"320px"}}>
                            <ul class="list-unstyled card-head">
                                <li>
                                    <img src={suzuki} class="img-fluid rounded-3" alt='suzuki'/>
                                </li>
                            </ul>
                            <hr />
                            <h3>₹ 93,000-97,000<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title my-3"> The Suzuki Access 125 has a mileage of 52.45-64 kmpl.</div>
                            <Link to={"/bike/"+id+"/"+suzukiscooty}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"320px"}}>
                            <ul class="list-unstyled card-head">
                            <li>
                                <img src={tvs} class="img-fluid rounded-3" alt='tvs'/>
                            </li>
                            </ul>
                            <hr />
                            <h3>₹ 44,999-1.2 L<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title mb-2">TVS has a mileage of 55.0 kmpl</div>
                            <Link to={"/bike/"+id+"/"+tvsscooty}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-4 text-center rounded-3" style={{height:"320px"}}>
                            <ul class="list-unstyled card-head">
                                <li>
                                    <img src={activa} class="img-fluid rounded-3" alt='activa'/>
                                </li>
                            </ul>
                            <hr />
                            <h3>₹ 77,714-84,204<sub class="fs-6 fw-normal"></sub></h3>
                            <div class="title my-3"> The mileage of Honda Activa 125 is 60 Kmpl.</div>
                            <Link to={"/bike/"+id+"/"+activascooty}><button class="btn btn-primary px-5"><span class="bi bi-eye"> See More</span></button></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </section>
            <hr class="border"/>
            <Footer userid={id} username={username}/>
        </div>
    )
}

export default Home;