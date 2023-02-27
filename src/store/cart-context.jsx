import React from "react";

export const CartContext = React.createContext({
  orderWithInitialValue: {},
  order: {},
  paymentDetails: {},
  paymentDetailsHandler: (details) => {},
  submitOrder: () => {},
});
