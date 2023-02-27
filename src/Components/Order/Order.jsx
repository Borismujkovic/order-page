
import "./Order.css";

import logo from "../../Assets/logo.png";
import { OrderForm } from "../OrderForm/OrderForm";

export const Order = (props) => {


  const header = (
    <div className="header">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        optio suscipit minima natus cum commodi, vitae obcaecati perspiciatis
        enim quos reiciendis quo rerum doloremque ipsa odio veniam eveniet autem
        magnam sapiente maiores.
      </p>
    </div>
  );

  return (
    <div id="Order">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
        <div className="steps">
          <div className="circle1">1</div>
          <div className="line"></div>
          <div className="circle2">2</div>
          <div className="line"></div>
          <div className="circle3">3</div>
        </div>
      </div>
      {header}
      <OrderForm />
    </div>
  );
};
