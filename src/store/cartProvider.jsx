import { useState } from "react";
import { CartContext } from "./cart-context";

export const CartProvider = (props) => {
  const orderWithInitialValue = {
    wood: "Paulownia",
    length: "Medium",
    number: "1",
    FSE: "No",
    ConfirmC: "No",
    Plot: "Jug",
    Satellite: "No",
    initialPrice: 80,
    price: 80,
  };

  const [order, setOrder] = useState({
    wood: "",
    length: "",
    number: "",
    FSE: "",
    ConfirmC: "",
    Plot: "",
    Satellite: "",
    price: 0,
    initialPrice: 0,
  });

  const [paymentDetails, setPaymentDetails] = useState({
    card: "",
    name: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    orderNumber: 0,
  });

  return (
    <CartContext.Provider
      value={{
        orderWithInitialValue,
        order,
        setOrder,
        paymentDetails,
        setPaymentDetails,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
