import { useContext, useRef, useState } from "react";
import { CartContext } from "../../store/cart-context";

import "./Payment.css";

import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { OrderBox } from "../OrderBox/OrderBox";

const isCardValid = (value) =>
  value.trim().length > 13 && value.trim().length < 19;
const isEmpty = (value) => value.trim() === "";

const dateValidation = (value) => parseInt(value) < 13 && parseInt(value) > 0;
const cvcValidaion = (value) => value.trim().length === 3;
const yearValidation = (value) => parseInt(value) > 2022;

export const Payment = () => {
  const { paymentDetails } = useContext(CartContext);
  const { setPaymentDetails } = useContext(CartContext);
  const { order } = useContext(CartContext);
  const [submitButton, setSubmitButton] = useState(false);
  const [cardInputValidity, setCardInputValidity] = useState({
    card: true,
    name: true,
    expiryMonth: true,
    expiryYear: true,
    cvc: true,
  });

  const cardInputRef = useRef();
  const nameInputRef = useRef();
  const monthInputRef = useRef();
  const yearInputRef = useRef();
  const cvcInputRef = useRef();

  let orderNum = 1;

  const orderHandler = () => {
    const enteredCard = cardInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredExpiryMonth = monthInputRef.current.value;
    const enteredExpiryYear = yearInputRef.current.value;
    const enteredCvc = cvcInputRef.current.value;

    const enteredCardIsValid = isCardValid(enteredCard);
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredExpiryMonthIsValid = dateValidation(enteredExpiryMonth);
    const enteredExpiryYearIsValid = yearValidation(enteredExpiryYear);
    const enteredCvcIsValid = cvcValidaion(enteredCvc);

    setCardInputValidity({
      card: enteredCardIsValid,
      name: enteredNameIsValid,
      expiryMonth: enteredExpiryMonthIsValid,
      expiryYear: enteredExpiryYearIsValid,
      cvc: enteredCvcIsValid,
    });

    const formIsValid =
      enteredCardIsValid &&
      enteredNameIsValid &&
      enteredExpiryMonthIsValid &&
      enteredExpiryYearIsValid &&
      enteredCvcIsValid;
    console.log(formIsValid);

    if (formIsValid) {
      setSubmitButton(true);
      orderNum++;
      console.log(orderNum);
    }
    console.log(order);
    console.log(paymentDetails);
  };

  const cardControlClasses = `card-details ${
    cardInputValidity.card ? "" : "invalid"
  }`;
  const nameControlClasses = `card-details ${
    cardInputValidity.name ? "" : "invalid"
  }`;
  const expiryControlClasses = `card-details ${
    cardInputValidity.expiryMonth && cardInputValidity.expiryYear
      ? ""
      : "invalid"
  }`;
  const cvcControlClasses = `card-details ${
    cardInputValidity.cvc ? "" : "invalid"
  }`;

  const header = (
    <div className="header">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae
        provident tempora ratione exercitationem distinctio adipisci mollitia
        fugiat, rerum placeat voluptate ut assumenda reiciendis eius blanditiis
        recusandae sequi aliquid eum quod nostrum dolor laborum doloremque!
        Accusantium vero officiis non quos unde impedit iste explicabo? Officia
        dolorem nisi inventore velit harum.
      </p>
    </div>
  );
  const paymentProcess = (
    <form className="agreement">
      <div className="paymentProcess">
        <label htmlFor="">Card Number</label>
        <div className="card-number">
          <input type="tel" maxLength="4" required pattern="[0-9]{4}" />
          <input type="tel" maxLength="4" required pattern="[0-9]{4}" />
          <input type="tel" maxLength="4" required pattern="[0-9]{4}" />
          <input type="tel" maxLength="4" required pattern="[0-9]{4}" />
        </div>
      </div>
      <div className="paymentProcess">
        <label htmlFor="">Expiration date:</label>
        <div className="card-number">
          <input type="tel" maxLength="2" required pattern="[0-9]{2}" />
          <input type="tel" maxLength="4" required pattern="[0-9]{4}" />
        </div>
      </div>
      <div className="paymentProcess">
        <label htmlFor="orderNo">Order Number:</label>
        <div className="mathRandom">{paymentDetails.orderNumber}</div>
      </div>
      <div className="paymentProcess">
        <label htmlFor="paymentDetails">Save payment details:</label>
        <input type="checkbox" />
      </div>
    </form>
  );
  const paymentCard = (
    <form className="payment-form">
      <div className="paymentProcess"></div>
      <div className="card-input">
        <div className="payment-card">
          <div className={cardControlClasses}>
            <label>Card Number*</label>
            <input
              type="tel"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              pattern="/^(?:4[0-9]{12}(?:[0-9]{3})?)$/"
              minLength="13"
              maxLength="19"
              inputMode="numeric"
              ref={cardInputRef}
              onChange={() => {
                setPaymentDetails({
                  ...paymentDetails,
                  card: cardInputRef.current.value,
                });
              }}
            />
            {!cardInputValidity.card && (
              <p className="validity-check">Please enter a valid card.</p>
            )}
          </div>
          <div className={nameControlClasses}>
            <label>Name*</label>
            <input
              type="text"
              placeholder="Cardholder name"
              ref={nameInputRef}
              onChange={() => {
                setPaymentDetails({
                  ...paymentDetails,
                  name: nameInputRef.current.value,
                });
              }}
            />
            {!cardInputValidity.name && (
              <p className="validity-check">Please enter a valid name.</p>
            )}
          </div>
          <div className={expiryControlClasses}>
            <label>Expiry*</label>
            <div className="expiry">
              <input
                type="tel"
                placeholder="MM"
                maxLength="2"
                ref={monthInputRef}
                onChange={() => {
                  setPaymentDetails({
                    ...paymentDetails,
                    expiryMonth: monthInputRef.current.value,
                  });
                }}
              />
              <input
                type="tel"
                placeholder="YYYY"
                maxLength="4"
                ref={yearInputRef}
                onChange={() => {
                  setPaymentDetails({
                    ...paymentDetails,
                    expiryYear: yearInputRef.current.value,
                  });
                }}
              />
            </div>
            {!cardInputValidity.expiryMonth &&
              !cardInputValidity.expiryYear && (
                <p className="validity-check">
                  Please enter a valid expiry date.
                </p>
              )}
          </div>
          <div className={cvcControlClasses}>
            <label>CVC*</label>
            <input
              type="tel"
              placeholder="xxx"
              className="cvc"
              maxLength="3"
              ref={cvcInputRef}
              onChange={() => {
                setPaymentDetails({
                  ...paymentDetails,
                  cvc: cvcInputRef.current.value,
                });
              }}
            />
          </div>
          {!cardInputValidity.cvc && (
            <p className="validity-check">
              Please enter a valid three digit CVC.
            </p>
          )}
        </div>
        <div className="payment-order">
          <OrderBox />
          <div className="subtotal">
            <h3>Subtotal:</h3>
            <h3>{order.price.toFixed(2)} €</h3>
          </div>
        </div>
      </div>
      <div className="paymentProcess">
        <label htmlFor="orderNo">Order Number:</label>
        <div className="mathRandom">{orderNum}</div>
      </div>
      <div className="paymentProcess">
        <label htmlFor="paymentDetails">Save payment details:</label>
        <input type="checkbox" />
      </div>
      <div className="buttons">
        <Link to="/order/agreement">
          <button>Back</button>
        </Link>
        <Link to={submitButton ? "/order/orderCompleted" : "/order/payment"}>
          <button onClick={orderHandler}>Submit</button>
        </Link>
      </div>
    </form>
  );

  return (
    <div id="Payment">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
        <div className="steps">
          <div className="circle3">1</div>
          <div className="line"></div>
          <div className="circle2">2</div>
          <div className="line"></div>
          <div className="circle1">3</div>
        </div>
      </div>
      {header}

      {paymentCard}
    </div>
  );
};
