import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PageHeader from "../components/PageHeader";
import CheckOutPage from "./CheckOutPage";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Calculate total price for each item
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity; // Multiply price by quantity
  };

  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // Update local storage with new cart items
    updateLocalStorage(cartItems);
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // Update local storage with new cart items
      updateLocalStorage(cartItems);
    }
  };

  // Handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    // Update new cart
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0); // Initialize total as 0

  // Order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt={item.name} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -{" "}
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <button onClick={() => handleRemoveItem(item)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* -----cart top ends------ */}
            {/* cart button */}
            <div className="cart-button">
              {/* checkout button */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code..."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>

              {/* shopping box */}

              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculating-shiping">
                      <h3>Calculating Shiping</h3>

                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom</option>
                          <option value="us">United State</option>
                          <option value="in">India</option>
                          <option value="sk">South Korea</option>
                        </select>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="in">India</option>
                          <option value="sk">South Korea</option>
                          <option value="uk">United Kingdom</option>
                          <option value="us">United State</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="PostalCode/Zip"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Adress</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">${cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">Shipping Handling</span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
