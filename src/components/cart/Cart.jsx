import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState({
    1: { title: "Cheese Burger", img: burger1, value: 0 },
    2: { title: "Veg Cheese Burger", img: burger2, value: 0 },
    3: { title: "Cheese Burger with French Fries", img: burger3, value: 0 },
  });

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);
  const increment = (itemId) => {
    setItems((prevItems) => {
      const updatedItems = {
        ...prevItems,
        [itemId]: { ...prevItems[itemId], value: prevItems[itemId].value + 1 },
      };
      // Save updated items to localStorage
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  const decrement = (itemId) => {
    setItems((prevItems) => {
      const updatedItems = {
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          value: Math.max(prevItems[itemId].value - 1, 0),
        },
      };
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  

  const calculateTotal = () => {
    let subtotal = 0;
    Object.values(items).forEach((item) => {
      subtotal += item.value * 2000; // Assuming each item costs ₹2000
    });

    const tax = subtotal * 0.18;
    const shippingCharges = 200;
    const total = subtotal + tax + shippingCharges;
    localStorage.setItem("total", total);
    localStorage.setItem("shippingCharges", shippingCharges);
    localStorage.setItem("tax", tax);
    localStorage.setItem("subTotal", subtotal);

    return { subtotal, tax, shippingCharges, total };
  };

  const { subtotal, tax, shippingCharges, total } = calculateTotal();
  const getQuantity = (itemId) => {
    return items[itemId].value;
  };

  return (
    <section className="cart">
      <main>
        {Object.keys(items).map((itemId) => (
          <CartItem
            key={itemId}
            title={items[itemId].title}
            img={items[itemId].img}
            value={items[itemId].value}
            increment={() => increment(itemId)}
            decrement={() => decrement(itemId)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subtotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
