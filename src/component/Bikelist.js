import React from 'react';
import Axios from 'axios';

function BikeList(props){

    const handleCart = (e) => {
        e.preventDefault();
        const userid = props.id;
        const productid = e.target.id;
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/addtocart",{userid,productid})
            .then((res)=>{
                if(res.status===200){
                    alert("This Product added to cart");
                }
                else{
                    Promise.reject();
                }
            }).catch((err)=>{
                console.log(err);
            })
    }

    const handleWishlist = (e) => {
        e.preventDefault();
        const userid = props.id;
        const productid = e.target.id;
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/addtowishlist",{userid,productid})
            .then((res)=>{
                if(res.status===200){
                    alert("This Product added to wishlist");
                }
                else{
                    Promise.reject();
                }
            }).catch((err)=>{
                console.log(err);
            })
    }


    return(
        <div class="mb-5">
            <div class="h4 text-center bg-secondary text-light p-2" style={{fontFamily:"Times New Roman"}}><i class="bi bi-caret-right"></i> List of available <span class="text-dark">{props.company}</span> vehicles <i class="bi bi-caret-left"></i></div>
            {props.company==="KTM"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i> KTM bikes price in India starts at Rs 1.79 Lakh for KTM 125 Duke, which is the cheapest model. The most expensive KTM two wheeler is KTM 390 Adventure priced at Rs 3.62 Lakh. The most popular models for KTM includes 4 Sports Naked, 3 Sports, 3 Adventure Tourer and 3 Off Road. Upcoming KTM bike in India include KTM 2024 390 Adventure, KTM 890 Adventure , KTM 2024 125 Duke which are expected to launch in 2023. Select a KTM motorcycle to find out its latest price, specifications, KTM Finance, offers, mileage, colors, images and more at R I D E S. To get more details of KTM bikes, download R I D E S App.Searching for KTM Bike?</div>: <span></span>}
            {props.company==="RoyalEnfield"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>The cheapest model of Royal Enfield, the Royal Enfield Hunter 350, has a starting price of Rs 1.50 Lakh in India. The Super Meteor 650, which costs Rs 3.85 Lakh, is the priciest two-wheeler produced by Royal Enfield. Five cruisers, two Cafe Racers, two Adventure Tourers, one Tourer, and one Off Road are among the most famous Royal Enfield models. The Himalayan 450, Scrambler 650, and Continental GT 650 are upcoming RE motorcycles in India scheduled to be on sale in 2023.</div>: <span></span>}
            {props.company==="Ducati"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>Ducati bikes price in India starts at Rs 9.39 Lakh for Ducati Scrambler 800, which is the cheapest model. The most expensive Ducati bike is Streetfighter V4 priced at Rs 72 Lakh. Most popular models for Ducati includes Panigale V4 (Rs 27.41 Lakh), Monster (Rs 12.95 Lakh), Scrambler 800 (Rs 9.39 Lakh). Select a Ducati motorcycle to find out its latest price, specifications, Ducati Finance, offers, mileage, colors, images and more at R I D E S. To get more details of Ducati Bikes, download R I D E S App.</div>: <span></span>}
            {props.company==="TVSBike"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>TVS bikes price in India starts at Rs 44,999 for TVS XL100, which is the cheapest model. The most expensive TVS two wheeler is TVS Apache RR 310 priced at Rs 2.72 Lakh. The most popular models for TVS includes 5 Sports, 8 Scooters, 2 Electric, 1 Cruiser, 1 Cafe Racer, 1 Moped, 2 Commuter and 1 Sports Naked. Upcoming TVS bike in India include TVS Fiero 125 , TVS ADV which are expected to launch in 2023. Select a TVS motorcycle to find out its latest price, specifications, TVS Finance, offers, mileage, colors, images and more at R I D E S. To get more details of TVS bikes, download R I D E S App.Searching for TVS Scooters?</div>: <span></span>}
            {props.company==="Suzuki"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>Suzuki bikes price in India starts at Rs 79,899 for Suzuki Access 125, which is the cheapest model. The most expensive Suzuki two wheeler is Suzuki Hayabusa priced at Rs 16.90 Lakh. The most popular models for Suzuki includes 3 Scooters, 2 Super, 4 Sports, 2 Adventure Tourer and 1 Sports Naked. Upcoming Suzuki bike in India include Suzuki V-Strom 1050, Suzuki GSX-S1000 , Suzuki GSX R1000R which are expected to launch in 2023. Select a Suzuki motorcycle to find out its latest price, specifications, Suzuki Finance, offers, mileage, colors, images and more at R I D E S. To get more details of Suzuki bikes, download R I D E S App.Searching for Suzuki Scooters?</div>: <span></span>}
            {props.company==="Vespa"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>Vespa bike price starts from Rs. 1,17,497. Vespa offers 5 new models in India with most popular bikes being SXL 125, ZX 125 and VXL 125. Most expensive Vespa bike is SXL 150, which is priced at Rs. 1,49,662. Vespa is a legendary scooter brand that is a part of the Italian conglomerate, Piaggio. Founded in 1946 in Florence, Vespa is one of the oldest two-wheeler brands in the world. The Vespa scooters are known for their design, simplicity and its ability to attract anyone towards it whenever it’s on the road.. To get more details of Ducati Bikes, download R I D E SApp.</div>: <span></span>}
            {props.company==="TVSScooty"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>TVS bikes/scooters price in India starts at Rs 44,999 for TVS XL100, which is the cheapest model. The most expensive TVS two wheeler is TVS Apache RR 310 priced at Rs 2.72 Lakh. The most popular models for TVS includes 5 Sports, 8 Scooters, 2 Electric, 1 Cruiser, 1 Cafe Racer, 1 Moped, 2 Commuter and 1 Sports Naked. Upcoming TVS bike in India include TVS Fiero 125 , TVS ADV which are expected to launch in 2023. Select a TVS motorcycle to find out its latest price, specifications, TVS Finance, offers, mileage, colors, images and more at R I D E S. To get more details of TVS bikes, download R I D E S App.Searching for TVS Scooters?</div>: <span></span>}
            {props.company==="Activa"? <div class="container-lg px-5 mb-3 text-light" style={{fontFamily:"Times New Roman",textAlign:"justify", fontStyle:"italic"}}><i class="bi bi-bookmark-fill"></i>The Honda Activa is a brand of scooters made by Honda Motorcycle and Scooter India. There are 2 Activa models on offer with price starting from Rs. 67,844 (ex-showroom). The cheapest model under the series is Honda Activa 6G with 109.5 cc engine generating 7.68 bhp of power, whereas the most expensive model is Honda Activa 125 with 124cc engine generating 8.18 bhp of power.The Activa was launched at a time when geared scooters and 100cc commuter motorcycles ruled the Indian two wheeler market, in 2000. 18 years on, it regularly tops the sales charts as the highest-selling individual vehicle in the country. To get more details of Ducati Bikes, download R I D E S App.</div>: <span></span>}


            <hr/>
            <div className="container-lg">
                <div className="row">
                    {props.data.map((item)=>{
                        return(
                            <div className="col-lg-3 col-md-6 mb-3" >
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.bikename} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{item.bikename}</h4>
                                        <h6 className="card-text text-center">{item.bikeprice}*</h6>
                                        <code className="card-text">{`>>`} Rating: {item.bikerating}</code><br/>
                                        <code className="card-text title">{`>>`} Kmpl: {item.kmpl}</code><br/>
                                        <code className="card-text title">{`>>`} CC: {item.bikecc}</code><br/>
                                        <cite className="card-text title"><i class="bi bi-bookmark-fill"> {item.description}</i></cite><br/>
                                        <center>
                                        <div onClick={handleCart} className="btn btn-secondary mt-3" id={item._id}>Add to <i class="bi bi-cart4"></i></div>
                                        <div onClick={handleWishlist} className="btn btn-danger mt-3 mx-2 lg-ms-2 md-ms-0 sm-ms-0" id={item._id}>Add to <i class="bi bi-heart"></i></div  >
                                        </center>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BikeList;