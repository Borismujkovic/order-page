import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import "./OrderForm.css";
import { OrderBox } from "../OrderBox/OrderBox";

export const OrderForm = (props) => {
  const { orderWithInitialValue } = useContext(CartContext);
  const { setOrder } = useContext(CartContext);

  const [wood, setWood] = useState("Paulownia");
  const [lengthOfTrees, setLengthOfTrees] = useState("Medium");
  const [numberOfTrees, setNumberOfTrees] = useState("1");
  const [FSE, setFSE] = useState("No");
  const [carbon, setCarbon] = useState("No");
  const [plot, setPlot] = useState(null);
  const [satellite, setSatellite] = useState("No");

  const [orderWithCalculatedPrice, setOrderWithCalculatedPrice] = useState({
    wood,
    length: lengthOfTrees,
    number: numberOfTrees,
    FSE,
    ConfirmC: carbon,
    Plot: plot,
    Satellite: satellite,
    price: 0,
  });

  useEffect(() => {
    calculatePriceOfOrder(
      wood,
      lengthOfTrees,
      numberOfTrees,
      FSE,
      carbon,
      plot,
      satellite
    );
  }, [wood, lengthOfTrees, numberOfTrees, FSE, carbon, plot, satellite]);

  const getPricePerWoodType = (woodType) => {
    if (woodType === "Paulownia") {
      return 80;
    } else if (woodType === "Birch") {
      return 60;
    } else if (woodType === "Pine") {
      return 70;
    }
  };

  const getPriceWithPlot = (price, plot) => {
    if (plot === "Jug") {
      return price * 0.83;
    } else if (plot === "Vojvodina") {
      return price * 1.09;
    }

    return price;
  };

  const calculatePriceOfOrder = (
    wood,
    lengthOfTrees,
    numberOfTrees,
    FSE,
    carbon,
    plot,
    satellite
  ) => {
    const initialWoodPrice = getPricePerWoodType(wood);
    const calculatedPricePerNumber = initialWoodPrice * numberOfTrees;

    const calculatedPricePerNumberWithFSE =
      FSE === "Yes" ? calculatedPricePerNumber * 1.1 : calculatedPricePerNumber;

    const calculatedPricePerNumberWithFSEWithCarbon =
      carbon === "Yes"
        ? calculatedPricePerNumberWithFSE * 1.05
        : calculatedPricePerNumberWithFSE;

    let calculatedPricePerNumberWithFSEWithCarbonWithPlot = getPriceWithPlot(
      calculatedPricePerNumberWithFSEWithCarbon,
      plot
    );

    const calculatedPricePerNumberWithFSEWithCarbonWithPlotWithSatellite =
      satellite === "Yes"
        ? calculatedPricePerNumberWithFSEWithCarbonWithPlot * 1.01
        : calculatedPricePerNumberWithFSEWithCarbonWithPlot;

    const updatedOrder = {
      ...orderWithInitialValue,
      wood,
      length: lengthOfTrees,
      number: numberOfTrees,
      FSE,
      ConfirmC: carbon,
      Plot: plot,
      Satellite: satellite,
      price: calculatedPricePerNumberWithFSEWithCarbonWithPlotWithSatellite,
    };

    setOrderWithCalculatedPrice(updatedOrder);

    setOrder(updatedOrder);
  };

  return (
    <form className="orderDetails">
      <div className="form mainForm">
        <h1>Order</h1>
        <div className="formSelect">
          <label>Wood:</label>
          <span class="custom-dropdown">
            <select
              name="wood"
              id=""
              onChange={(event) => {
                setWood(event.target.value);
              }}
              value={wood}
              defaultValue={wood}
            >
              <option value="-">-</option>
              <option value="Paulownia" className="option">
                Paulownia
              </option>
              <option value="Birch" className="option">
                Birch
              </option>
              <option value="Pine" className="option">
                Pine
              </option>
            </select>
          </span>
        </div>
        <div className="formSelect">
          <label>Length of usage:</label>
          <div className="usageLength">
            <span class="custom-dropdown">
              <select
                name="wood"
                onChange={(event) => {
                  setLengthOfTrees(event.target.value);
                }}
                value={lengthOfTrees}
                defaultValue={lengthOfTrees}
              >
                <option value="-">-</option>
                <option value="Short">Short</option>
                <option value="Medium">Medium</option>
                <option value="Long">Long</option>
              </select>
            </span>
          </div>
        </div>
        <div className="formSelect">
          <label>Number of trees:</label>
          <input
            type="number"
            className="number"
            min="1"
            max="200"
            onChange={(event) => {
              setNumberOfTrees(event.target.value);
            }}
            value={numberOfTrees}
            defaultValue={numberOfTrees}
          />
        </div>
        <div className="formSelect">
          <label htmlFor="radio">FSE:</label>
          <div
            onChange={(event) => {
              setFSE(event.target.value);
            }}
          >
            <input
              type="radio"
              name="FSE"
              value="Yes"
              checked={FSE === "Yes"}
              className="input"
            />{" "}
            <label>Yes</label>
            <input
              type="radio"
              name="FSE"
              value="No"
              checked={FSE === "No"}
              className="input"
            />{" "}
            <label>No</label>
          </div>
        </div>
        <div className="formSelect">
          <label htmlFor="radio">Carbon C:</label>
          <div
            onChange={(event) => {
              setCarbon(event.target.value);
            }}
          >
            <input
              type="radio"
              name="ConfirmC"
              value="Yes"
              checked={carbon === "Yes"}
              className="input"
            />{" "}
            <label>Yes</label>
            <input
              type="radio"
              name="ConfirmC"
              value="No"
              checked={carbon === "No"}
              className="input"
            />{" "}
            <label>No</label>
          </div>
        </div>
        <div className="formSelect">
          <label>Plot:</label>
          <span class="custom-dropdown">
            <select
              name="plot"
              id=""
              value={plot}
              onChange={(event) => {
                setPlot(event.target.value);
              }}
            >
              <option value="-">-</option>
              <option value="Sumadija">Sumadija</option>
              <option value="Jug">Jug</option>
              <option value="Vojvodina">Vojvodina</option>
            </select>
          </span>
        </div>
        <div className="formSelect">
          <label htmlFor="radio">Satellite:</label>
          <div
            onChange={(event) => {
              setSatellite(event.target.value);
            }}
          >
            <input
              type="radio"
              name="Satellite"
              value="Yes"
              className="input"
              checked={satellite === "Yes"}
            />{" "}
            <label>Yes</label>
            <input
              type="radio"
              name="Satellite"
              value="No"
              className="input"
              checked={satellite === "No"}
            />{" "}
            <label>No</label>
          </div>
        </div>
      </div>

      <div className="form details">
        <OrderBox />
        <div className="total-price">
          <div className="price">
            <p>Your order:</p>
            <span>{orderWithCalculatedPrice.price.toFixed(2)} €</span>
          </div>
          <div className="price">
            <p>Subtotal:</p>
            <span>{orderWithCalculatedPrice.price.toFixed(2)} €</span>
          </div>
          <div className="price">
            <p>VAT:</p>
            <span>0.00 €</span>
          </div>
          <div className="price">
            <p>Total:</p>
            <span>{orderWithCalculatedPrice.price.toFixed(2)} €</span>
          </div>
        </div>
        <div className="button">
          <Link to="/order/agreement">
            <button
              type="submit"
              onClick={() => {
                // props.orderHandler()
                setOrder(orderWithCalculatedPrice);
              }}
            >
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};
