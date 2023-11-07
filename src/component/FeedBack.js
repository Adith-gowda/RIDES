import React from "react";
import AdminNav from "./AdminNav";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function FeedBack() {

    const {id} = useParams();
    const [adminname, setUsername] = useState("");
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/admin-feedback")
        .then(res => {
            if(res.status === 200){
                setFeedback(res.data);
            }
        }).catch(err => {
            console.log(err);
        })
    })

    return (
        <div class="bg-dark">
            <AdminNav id={id} adminname={adminname}/>
            <div className="container-lg my-5">
                <h3 class="text-light">Feedback by users</h3>
                {
                    feedback.length > 0 ? 

                        feedback.map((item, index) => {
                            return(
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h5 className="card-title text-decoration-underline"><span class="bi bi-person-circle"></span> {item.username}</h5>
                                                        <p className="card-text">{item.message}</p>
                                                        <p className="card-text"><small className="text-muted">On {item.date}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        : <div>Oops! No feedbacks yet.</div>
                }
            </div>
        </div>
                        
    );
}

export default FeedBack;