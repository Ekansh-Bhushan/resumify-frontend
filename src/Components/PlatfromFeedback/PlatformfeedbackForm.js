import React, { useReducer } from "react";
import StarRating from "./starRating";
import MyComponent from "./option";
import "./feedbackForm.css";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function PlatformfeedbackForm({userData, setProgress, Mentor, isFetched, notifyList} ) {
  // const[state,dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  const sendFeedBack = async () => {
    toast.success("FeedBack Submitted !");
  };

  return (
    <>
  {/* top bar here */}
    <div className="form">
      <div className="form-top-area">
        <h1>Feedback Form</h1>
        <h2>How Was Your Experience With Our Platform</h2>
      </div>
      <div className="form-star-area">
        <StarRating />
      </div>
      <div className="form-what-went-wrong-area">What can we help you with?</div>

      <div className="myoptions">
        <MyComponent />
      </div>
      <form className="form-area">
        {/* <input
          className="input-in-form-area"
          style={{
              border: "2px solid #108CFF",
              outline: "none",
              width: "100%",
              height: "100%",
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              backgroundColor: "transparent",
              padding: "10px",
            }}
            /> */}

        {/* <button
          className="btn-add"
          onClick={(e) => {
              e.preventDefault();
              if (e.target.previousSibling.value === "") return;
            }}
            style={{
                backgroundColor: "#108CFF",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
                border: "none",
                outline: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px",
            }}
        >
          Add
        </button> */}
        <button
        className="btn-submit"
          // onClick={(e) => {
          //     e.preventDefault();
          //     if (e.target.previousSibling.value === "") return;
          //   }}
          // onClick={() => navigate('/homepage')}
          onClick={sendFeedBack}

            style={{
                backgroundColor: "#108CFF",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
                border: "none",
                outline: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px",
            }}
            
        >
          
          Submit
        </button>
      </form>
    </div>
   {/* footer here */}
            </>
  );
}

export default PlatformfeedbackForm;
