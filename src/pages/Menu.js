import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import "./styles.css"; // Import the CSS file

const handleProductClick = (menu) => {
  window.dataLayer.push({
    event: "product_click",
    product_id: menu.id,
    product_name: menu.name,
    product_price: menu.price,
    product_class: "item",
  });

  console.log("Data layer push:", {
    event: "product_click",
    product_id: menu.id,
    product_name: menu.name,
    product_price: menu.price,
  });
};

const Menu = () => {
  return (
    <Layout>
      <div className="container">
        {MenuList.map((menu) => (
          <div
            className="card"
            key={menu.id}
            onClick={() => handleProductClick(menu)}
          >
            <img src={menu.image} alt={menu.name} />
            <div className="card-content">
              <h5>{menu.name}</h5>
              <p>{menu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
