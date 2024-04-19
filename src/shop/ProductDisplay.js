import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "avsvhs snajsdk hsjadkjsjndks jsjddjs wsdjs djsnd jsdns sjsndm jsndsndms dbsjdjs jsdsns sjndsnd kjanskjd";

function ProductDisplay({ item }) {
  const { name, id, price, seller, ratingCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, SetColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    SetColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setQuantity(1);
    setSize("Select Size");
    SetColor("Select Color");
    setCoupon("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h4>{name}</h4>
          <p className="rating">
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingCount} review</span>
          </p>
          <h4>${price}</h4>
          <h6>{seller}</h6>
          <p>{desc}</p>
        </div>
        {/* cart components */}
        <div className="row">
          <div className="col-md-6">
            <div className="select-product size">
              <select value={size} onChange={handleSizeChange}>
                <option>Select Size</option>
                <option>SM</option>
                <option>MD</option>
                <option>LD</option>
                <option>XL</option>
                <option>XLL</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="select-product color">
              <select value={color} onChange={handleColorChange}>
                <option>Select Color</option>
                <option>blue</option>
                <option>red</option>
                <option>black</option>
                <option>white</option>
                <option>pink</option>
              </select>
            </div>
          </div>

          {/* cart plus minus */}
          <div className="row">
            <div className="col-md-6">
              <div className="cart-plus-minus mt-3 mb-2">
                <div className="dec qtybutton" onClick={handleDecrease}>
                  -
                </div>
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  name="qtybutton"
                  id="qtybutton"
                  value={prequantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                />
                <div className="inc qtybutton" onClick={handleIncrease}>
                  +
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="discount-code mt-3 mb-2">
                <input
                  type="text"
                  placeholder="enter discount code"
                  onChange={(e) => setCoupon(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="lab-btn">
                <span>Add to Cart</span>
              </button>
            </div>
            <div className="col-md-6">
              <Link to="/cart-page" className="lab-btn bg-primary">
                <span>Check out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProductDisplay;
