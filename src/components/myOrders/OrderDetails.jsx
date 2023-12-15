import React, { useState, useEffect } from "react";
import Cart from "../cart/Cart";
function OrderDetails() {
  const [orderedItems, setOrderedItems] = useState({});

  const [countryCode, setCode] = useState("");
  const [stateCode, setState] = useState("");
  const [houseCode, setHouse] = useState("");
  const [phoneCode, setPhone] = useState("");
  const [total, setTotal] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [tax, setTax] = useState("");
  const [shippingCharges, setShippingCharges] = useState("");
  useEffect(() => {
    // Retrieve the selected country code from local storage
    const storedCountryCode = localStorage.getItem("countryCode");
    const storedstateCode = localStorage.getItem("stateCode");
    const storedhouseCode = localStorage.getItem("houseCode");
    const storedphoneCode = localStorage.getItem("phoneCode");
    const storedTotal = localStorage.getItem("total");
    const storedSubTotal = localStorage.getItem("subTotal");
    const storedShippingCharges = localStorage.getItem("shippingCharges");
    const storedTax = localStorage.getItem("tax");
    if (storedCountryCode) {
      setCode(storedCountryCode);
      setTotal(storedTotal);
      setState(storedstateCode);
      setHouse(storedhouseCode);
      setPhone(storedphoneCode);
      setSubTotal(storedSubTotal);
      setTax(storedTax);
      setShippingCharges(storedShippingCharges);
    }

    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setOrderedItems(storedItems);
    }
  }, []);

  return (
    <div className="orderDetails">
      <main>
        <h1>Shipping</h1>

        <div>
          <p>Country: {countryCode} </p>
          <p>State: {stateCode} </p>
          <p>House number: {houseCode} </p>
        </div>
        <h1>Contact</h1>
        <div>
          <p>Phone number: {phoneCode}</p>
        </div>
        <div>
          <p> </p>
        </div>
        <h1>Status</h1>
        <div>
          <p>Status: In Progress </p>
        </div>
        <h1>Payment</h1>
        <div>
          <p>Payment: Completed </p>
        </div>
        <h1>Amount: {total} </h1>
        <div>
          <p>Sub Total: {subTotal} </p>
          <p>Shipping Charges: {shippingCharges} </p>
          <p>Tax: {tax} </p>
          <p>Total Amount: {total} </p>
        </div>
      <article>
        <h1>Ordered Details</h1>
        {Object.keys(orderedItems).map((itemId) => (
          <div key={itemId}>
            <h4>
              {orderedItems[itemId].title}: {orderedItems[itemId].value}
            </h4>
          </div>
        ))}
        <div>
          <h4>Sub Total: {subTotal}</h4>
        </div>
      </article>
        </main>
    </div>
  );
}

export default OrderDetails;
