import React from "react";
import "./Styles/roadmap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Roadmap = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center textHeader">FCI Token Roadmap</h1>
          <div className="row timeline mt-5">
            <div className="col-md-3 ">
              <div className="card mb-3 animate">
                <div className="card-header bg-success text-white text-center">
                  <h4>Quarter 1</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-left topCard">
                    Launch and promote the FCI token on cryptocurrency exchanges
                    to increase its liquidity and accessibility
                  </h5>
                  <ul>
                    <li>
                      Develop the initial version of the token fairness detector
                      using AI and integrate it into the platform
                    </li>
                    <li>
                      Launch a marketing campaign to promote the FCI token and
                      the token fairness detector to potential users and
                      investors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 animate">
                <div className="card-header bg-success text-white text-center">
                  <h4>Quarter 2</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-left topCard">
                    Expand the functionality of the token fairness detector to
                    include more advanced analytics and reporting tools
                  </h5>
                  <ul>
                    <li>
                      Integrate staking mechanisms into the platform to allow
                      users to stake FCI tokens and gain access to the token
                      fairness detector and other features
                    </li>
                    <li>
                      Collaborate with other blockchain-based platforms to
                      expand the reach of the FCI token and promote its adoption
                      among a wider audience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 animate">
                <div className="card-header bg-success text-white text-center">
                  <h4>Quarter 3</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-left topCard">
                    Launch a mobile app for the platform to increase
                    accessibility and user engagement
                  </h5>
                  <ul>
                    <li>
                      Develop and launch additional features for the platform,
                      such as a portfolio management tool and a social trading
                      platform
                    </li>
                    <li>
                      Host a community event or hackathon to engage with users
                      and encourage further platform development and innovation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 animate">
                <div className="card-header bg-success text-white text-center">
                  <h4>Quarter 4</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-left topCard">
                    Integrate cross-chain functionality into the platform to
                    enable seamless transactions across different blockchain
                    networks
                  </h5>
                  <ul>
                    <li>
                      Expand the platform's user base through targeted marketing
                      campaigns and community outreach initiatives
                    </li>
                    <li>
                      Partner with reputable institutions or organizations to
                      further enhance the platform's credibility and reliability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
