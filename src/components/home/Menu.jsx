// Write all the code here
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
//add this function
function Menu() {
  const [Cart, addToCart] = useState([]);
  const [visible, setVisible] = useState(false);
  const addToCartHandler = (item) => {
    addToCart([...Cart, item]);
  };

  const toggle = () => {
    setVisible(true);
  };
  return (
    <div>
         {!visible && (
        <div className="explore-button">
        <button onClick={toggle}>Explore</button>
        </div>
            )}
      {visible && (
        <div className="menuCards">
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            price={200}
            title="Cheese Burger"
            handler={addToCartHandler}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            price={250}
            title="Cheese Burger with French Fries"
            handler={addToCartHandler}
            delay={0.2}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            price={300}
            title="Veggie Burger"
            handler={addToCartHandler}
            delay={0.3}
          />
        </div>
      )}
    </div>
  );
}
export default Menu;
