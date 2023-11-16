import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function CartList(props) {

    const [bikedata , setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/orderedProduct/"+props.item)
        .then((res)=>{
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[props.item])

    const handleDelete = (e) =>{
        e.preventDefault();
        const userid = props.id;
        const productid = e.target.id;
        Axios.post("https://bike-showroom-backend.onrender.com/bikes/deletefromcart/",{userid,productid})
        .then((res)=>{
            alert("deleted successfully");
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <div className="col-lg-3 col-md-6 mb-3">
            <div className="card">
                <img src={bikedata.image} className="card-img-top" alt={bikedata.bikename} />
                <div className="card-body">
                    <h4 className="card-title text-center">{bikedata.bikename}</h4>
                    <h6 className="card-text text-center">{bikedata.bikeprice}*</h6>
                    <code className="card-text">{`>>`} Rating: {bikedata.bikerating}</code><br/>
                    <code className="card-text title">{`>>`} Kmpl: {bikedata.kmpl}</code><br/>
                    <code className="card-text title">{`>>`} CC: {bikedata.bikecc}</code><br/>
                    <cite className="card-text title"><i class="bi bi-bookmark-fill"> {bikedata.description}</i></cite><br/>
                    <center>
                        <Link to={"/orderConfirmation/"+bikedata._id+"/"+props.id}><div className="btn btn-secondary mt-3" id={bikedata._id}>Buy Now <i class="bi bi-bag-fill"></i></div></Link>
                        <div onClick={handleDelete} className="btn btn-danger mt-3 mx-2 lg-ms-2 md-ms-0 sm-ms-0" id={bikedata._id}>Delete <i class="bi bi-trash"></i></div>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default CartList;