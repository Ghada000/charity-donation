import React, { useState } from "react";
import Data from "../dummyData.json";
import img1 from "../icones/star.png";
import "./css/FeedBack.css";

function Popup({
    handleClosePopup,
    handleAddReview,
    newReview,
    handleInputChange,
    handleRatingChange,
}) {
    return (
        <div className="overlay">
            <div className="popup  " onClick={(e) => e.stopPropagation()}>
                <h2 className="text-center ">Add a Review</h2>
                <form className="row">
                    <label  htmlFor="user" className="row">
                        <span className="col-3">User:</span>
                        <input className="col-9 Form-control my-2"
                            type="text"
                            name="user"
                            value={newReview.user}
                            onChange={handleInputChange}
                        />
                    </label >
                    
                    <label className="row">
                        <span className="col-3">Email:</span>
                        <input className="col-9 Form-control  my-2"
                            type="text"
                            name="email"
                            value={newReview.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    
                    <label className="row">
                    <span className="col-3">Rating:</span>
                        <select className="col-9 Form-control my-2"
                            name="rating"
                            value={newReview.rating}
                            onChange={(e) => handleRatingChange(e.target.value)}
                        >
                            <option value={0}>Select Rating</option>
                            {[1, 2, 3, 4, 5].map((option) => (
                                <option key={option} value={option}>
                                    {`${option} Star${option !== 1 ? "s" : ""}`}
                                </option>
                            ))}
                        </select>
                    </label>
                    
                    <label className="row">
                    <span className="col-3 ">Comment:</span>
                        <textarea style={{ resize: "none" }} rows={5}  className="col-9 Form-control my-2 "
                            name="comment"
                            value={newReview.comment}
                            onChange={handleInputChange}
                        />
                    </label>
                    <div className="buttons d-flex justify-content-between">
                        <button type="button" onClick={handleAddReview}>
                            Add Review
                        </button>
                        <button type="button" onClick={handleClosePopup}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Feedback() {
    const [data, setData] = useState(Data);
    const [newReview, setNewReview] = useState({
        user: "",
        email: "",
        rating: 0,
        comment: "",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleRatingChange = (rating) => {
        setNewReview((prevReview) => ({
            ...prevReview,
            rating,
        }));
    };

    const handleAddReview = () => {
        if (
            !newReview.user ||
            !newReview.email ||
            !newReview.rating ||
            !newReview.comment
        ) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const newReviewObj = {
            id: Date.now(),
            user: newReview.user,
            email: newReview.email,
            rating: parseInt(newReview.rating, 10),
            comment: newReview.comment,
        };

        setData((prevData) => [...prevData, newReviewObj]);

        setNewReview({
            user: "",
            email: "",
            rating: 0,
            comment: "",
        });

        setShowPopup(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className=" mt-2 p-5 mx-5">
            <h1 className="text-center mx-5 title">Feedbacks</h1>
            <div className="d-flex justify-content-end px-4">
                <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => setShowPopup(true)}
                >
                    Add Review
                </button>
            </div>
            <div
                className="d-flex row  justify-content-start"
                style={{ width: "100%" }}
            >
                {data.map((ele) => (
                  <div 
                  key={ele.id}
                  className="col-md-3 my-3" 
                >
                    <div
                style={{ height: "100%" }}
                className="card my-3  p-3 rounded-4 shadow bg-body-tertiary"
                    >
                        <p>{ele.user}</p>
                        <h6>{ele.email}</h6>
                        <div>
                            {[...Array(ele.rating)].map((_, index) => (
                                <img
                                    alt="Star"
                                    width={"20px"}
                                    height={"20px"}
                                    key={index}
                                    src={img1}
                                />
                            ))}
                        </div>
                        <h3>{ele.comment}</h3>
                    </div>
                  </div>
                ))}
            </div>

            {showPopup && (
                <Popup
                    handleClosePopup={handleClosePopup}
                    handleAddReview={handleAddReview}
                    newReview={newReview}
                    handleInputChange={handleInputChange}
                    handleRatingChange={handleRatingChange}
                />
            )}
        </div>
    );
}

export default Feedback;
