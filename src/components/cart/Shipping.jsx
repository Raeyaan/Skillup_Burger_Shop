import React, { useState } from "react";

import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

const Shipping = () => {
  const [countryCode, setCode] = useState("");
  const [stateCode, setState] = useState("");
  const [houseCode, setHouse] = useState("");
  const [phoneCode, setPhone] = useState("");
  const handleCountryChange = (event) => {
    setCode(event.target.value);
    localStorage.setItem("countryCode", event.target.value);
    console.log(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
    localStorage.setItem("stateCode", event.target.value);
  };
  const handleHouseChange = (event) => {
    setHouse(event.target.value);
    localStorage.setItem("houseCode", event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    localStorage.setItem("phoneCode", event.target.value);
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input
              onChange={handleHouseChange}
              type="text"
              placeholder="Enter House No."
            />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <div>
              {/* COUNTRY DROPDOWN*/}
              <label>Country</label>
              <select onChange={handleCountryChange}>
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <label>State</label>
            <select onChange={handleStateChange}>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(countryCode).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>

            <input
              onChange={handlePhoneChange}
              type="number"
              placeholder="Enter Phone No."
            />
          </div>

          <Popup
            trigger={<button type="button">Confirm Order</button>}
            position="right center"
          >
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
