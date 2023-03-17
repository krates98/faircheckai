import PieChart from "../components/PieChart";
import React from "react";
import "./Styles/tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="textHeader text-center">Understanding Tokenomics</h1>
            <div className="row mt-5">
              <div className="col-sm-6">
                <PieChart />
              </div>
              <div className="col-sm-6 d-flex align-items-center justify-content-center">
                <div>
                  <h3>Token Distribution Information</h3>
                  <p>
                    This pie chart shows the breakdown of token distribution for
                    our project. The largest portion of tokens (50%) are
                    allocated to public sale, with 20% going to team and
                    advisors, 15% to platform development and marketing, 10% to
                    ecosystem development, and 5% to partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
