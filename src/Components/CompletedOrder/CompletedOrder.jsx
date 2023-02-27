import "./CompletedOrder.css";

import logo from "../../Assets/logo.png";

export const CompletedOrder = () => {
  const complete = (
    <div className="complete">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <h1>Order Completed</h1>
      <div className="orderContent">
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos
          veritatis recusandae. Nesciunt id voluptatem nemo eligendi dicta est
          ad!
        </p>
        <h2>Thank You! :)</h2>
      </div>
      <div className="finalButtons">
        <button>My Orders</button>
        <a href="https://cryptoforests.earth/a6.preview.html#" target="_blank">
          <button className="backButton">Back to Home</button>
        </a>
      </div>
    </div>
  );

  return <div id="completedOrder">{complete}</div>;
};
