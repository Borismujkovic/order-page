import { useState } from "react";
import "./Agreement.css";

import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

import pdf from "../../Assets/CV.pdf";

export const Agreement = () => {
  const [agreement, setAgreement] = useState(false);
  const [aLink, setALink] = useState(false);

  const agreementHandler = () => {
    setAgreement(!agreement);
    setALink(!aLink);
  };

  const header = (
    <div className="agreement-header">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        optio suscipit minima natus cum commodi, vitae obcaecati perspiciatis
        enim quos reiciendis quo rerum doloremque ipsa odio veniam eveniet autem
        magnam sapiente quod iure modi a saepe dolor. Tempora voluptatem
        explicabo omnis minus, aliquid necessitatibus, laudantium id esse
        inventore sit maiores.
      </p>
    </div>
  );

  const agreementContent = (
    <div className="agreement">
      <div className="download">
        <h2>Download Agreement</h2>
        <button className="download-button">
          <a href={pdf} target="_blank" rel="noreferrer">
            Download
          </a>
        </button>
      </div>
      <div className="terms">
        <h2>Accept Agreement Terms</h2>
        <div className="agreementLabel">
          <input
            type="checkbox"
            onChange={agreementHandler}
            className="agreement-check"
          />{" "}
          <label>Yes</label>
        </div>
      </div>
      <div className="buttons">
        <Link to="/">
          <button>Back</button>
        </Link>
        <Link to="/order/payment" className={aLink ? "" : "a-link"}>
          <button className={agreement ? "" : "agreementButton"}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
  return (
    <div id="Agreement">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
        <div className="steps">
          <div className="circle2">1</div>
          <div className="line"></div>
          <div className="circle1">2</div>
          <div className="line"></div>
          <div className="circle3">3</div>
        </div>
      </div>
      {header}
      {agreementContent}
    </div>
  );
};
