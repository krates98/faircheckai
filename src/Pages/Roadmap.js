import React from "react";
import "./Styles/roadmap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div class="container centerScreen">
        <div class="row">
          <div class="col-sm-12 ">
            <h1 class="textHead">Roadmap</h1>
          </div>
          <div class="container py-5">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline">
                  <li>
                    <div class="timeline-badge">Q1</div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">
                          Launch and promote the FCI token on cryptocurrency
                          exchanges to increase its liquidity and accessibility
                        </h4>
                      </div>
                      <div class="timeline-body">
                        <p>
                          Develop the initial version of the token fairness
                          detector using AI and integrate it into the platform
                        </p>
                        <p>
                          Launch a marketing campaign to promote the FCI token
                          and the token fairness detector to potential users and
                          investors
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-badge">Q2</div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">
                          Expand the functionality of the token fairness
                          detector to include more advanced analytics and
                          reporting tools
                        </h4>
                      </div>
                      <div class="timeline-body">
                        <p>
                          Integrate staking mechanisms into the platform to
                          allow users to stake FCI tokens and gain access to the
                          token fairness detector and other features
                        </p>
                        <p>
                          Collaborate with other blockchain-based platforms to
                          expand the reach of the FCI token and promote its
                          adoption among a wider audience
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-badge">Q3</div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">
                          Launch a mobile app for the platform to increase
                          accessibility and user engagement
                        </h4>
                      </div>
                      <div class="timeline-body">
                        <p>
                          Develop and launch additional features for the
                          platform, such as a portfolio management tool and a
                          social trading platform
                        </p>
                        <p>
                          Host a community event or hackathon to engage with
                          users and encourage further platform development and
                          innovation
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-badge">Q4</div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">
                          Integrate cross-chain functionality into the platform
                          to enable seamless transactions across different
                          blockchain networks
                        </h4>
                      </div>
                      <div class="timeline-body">
                        <p>
                          Expand the platform's user base through targeted
                          marketing campaigns and community outreach initiatives
                        </p>
                        <p>
                          Partner with reputable institutions or organizations
                          to further enhance the platform's credibility and
                          reliability
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-badge">Post-Year</div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">
                          Develop and launch additional features, such as a
                          decentralized exchange and a lending and borrowing
                          platform
                        </h4>
                      </div>
                      <div class="timeline-body">
                        <p>
                          Expand the range of supported cryptocurrencies to
                          increase the platform's utility and appeal
                        </p>
                        <p>
                          Collaborate with regulators and industry leaders to
                          ensure compliance with relevant laws and regulations
                          and promote wider adoption of cryptocurrency
                          technologies
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
