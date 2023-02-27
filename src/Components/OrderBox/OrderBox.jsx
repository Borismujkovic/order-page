import "./OrderBox.css";

import logo from "../../Assets/logo.png";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

export const OrderBox = () => {
  const { order } = useContext(CartContext);

  return (
    <div className="order-box">
      <div className="details-logo">
        <h1>CryptoForests</h1>
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="text">
        <p className="paragraphDetails">
          You ordered <span>{order.number}</span> pieces of{" "}
          <span>{order.wood}</span> in <span>{order.Plot}</span> with{" "}
          <span>{order.length}</span> length of usage.
        </p>
        <ul>
          <li>
            FSE: <span>{order.FSE}</span>
          </li>
          <li>
            Confirm C: <span>{order.ConfirmC}</span>{" "}
          </li>
          <li>
            {" "}
            Satellite: <span>{order.Satellite}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
