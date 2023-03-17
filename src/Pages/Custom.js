import React from "react";
import "./Styles/custom.css";

const Custom = () => {
  return (
    <div className="custom">
      <div className="container centerScreen">
        <div className="row">
          <div className="col-sm-12 about">
            <h1 className="textHeader">Why we need a $FCI Token ?</h1>
            <p className="textUtil">
              FCI is a custom token issued by your platform, which users can
              stake in order to utilize the token fairness detector and other
              features of your dapp. There are several reasons why the FCI token
              is important for users to use your dapp:
            </p>
            <br />
            <br />
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">
                Access to features: By staking FCI tokens, users gain access to
                the token fairness detector and other features of your dapp,
                which can help them make more informed decisions about their
                investments and improve the overall fairness and transparency of
                the cryptocurrency ecosystem.
              </li>
              <li className="list-group-item">
                Incentives: Staking FCI tokens can also provide users with
                incentives, such as reduced transaction fees or rewards for
                contributing to the platform's growth and development.
              </li>
              <li className="list-group-item">
                Value appreciation: As more users adopt your dapp and stake FCI
                tokens, the demand for the token may increase, potentially
                leading to appreciation in its value.
              </li>
              <li className="list-group-item">
                Platform governance: In some cases, staking FCI tokens may also
                provide users with voting rights and a say in the governance of
                the platform, allowing them to influence the direction of its
                development and ensure that it remains aligned with their
                interests.
              </li>
            </ol>
            <br />
            <br />
            <p className="textUtil">
              Overall, the FCI token plays a critical role in incentivizing
              users to adopt your dapp, providing access to important features,
              and potentially creating value for users who hold and stake the
              token. By effectively leveraging the FCI token and its associated
              benefits, you can help drive broader adoption of your platform and
              promote a fair and transparent cryptocurrency ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
