import React from "react";
import "./Styles/top.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Top = () => {
  return (
    <div>
      <div className="container centerScreen">
        <div className="row">
          <div className="col-sm-12 about">
            <h1 className="textHeader">FCI Token Decryptor!</h1>
            <p className="text">
              A token fairness detector using AI has the potential to play a
              vital role in maintaining a fair and transparent token ecosystem,
              promoting trust and confidence among users, and driving broader
              adoption of cryptocurrency technologies.
            </p>
            <button type="button" className="btn btn-dark">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
