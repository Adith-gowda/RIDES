import React from "react";
import AdminNav from "./AdminNav";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function FeedBack() {

    const {id} = useParams();
    const [adminname, setUsername] = useState("");
    const [feedback, setFeedback] = useState([]);
    const [feedbackDate, setFeedbackDate] = useState([]);

    useEffect(() => {
        Axios.get("https://bike-showroom-backend.onrender.com/bikes/admin-feedback")
        .then(res => {
            if(res.status === 200){
                setFeedback(res.data.reverse());
            }
        }).catch(err => {
            console.log(err);
        })
    })

    const handleSearch = () => {
        const Date = document.getElementById("datevalue").value;
        if(Date === ""){
            alert("Please enter a date");
            setFeedbackDate([]);
        }
        else{
            Axios.post("https://bike-showroom-backend.onrender.com/bikes/admin-feedback-date", {date: Date})
            .then(res => {
                if(res.data==="No feedbacks on this date"){
                    setFeedbackDate([]);
                    alert("No feedbacks on this date");
                }
                else{
                    setFeedbackDate(res.data.reverse());
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }


    return (
        <div class="bg-dark">
            <AdminNav id={id} adminname={adminname}/>
            <div className="container-lg my-5">
                <h3 class="text-light text-center">Feedback by users</h3>
                <span className="input-group my-3">
                    <input type="text" className="form-control" id="datevalue" placeholder="Search by date (YYYY-M-D)"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </span>
                <hr class="border"/>
                {
                    feedbackDate.length > 0 ? 

                        feedbackDate.map((item, index) => {
                            return(
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <div className="card mb-4 bg-secondary">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12 text-light">
                                                        <h5 className="card-title text-decoration-underline"><span class="bi bi-person-circle"></span> {item.username}</h5>
                                                        <p className="card-text">{item.message}</p>
                                                        <p className="card-text"><small className="text-light">On {item.date}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :   
                        <div class="text-light text-center">Search for the comments on specific date</div>

                }
                <hr class="border"/>
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