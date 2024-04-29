import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"; // Assuming you're using Bootstrap
import "../components/modal.css"
import { useLocation, useNavigate } from "react-router-dom";
function CheckOutPage() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //direct to home page

  const location=useLocation();
  const navigate=useNavigate();

  const from=location.state?.from?.pathname || "/";

  const handleOrderConfirm=()=>{
    alert("your order is placed successfully")
    localStorage.removeItem("cart");
    navigate(from,{replace: true})
  }

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <div className="modal-dialog">
          <h5>Select your payment method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAA/1BMVEX+/v42UqH5oTLlMjfyazUvTZ+wutcmR51vgbkzUKApSZ0sS57+/v/5ozLybDUxTp8fQ5vkHCP5nyzlLTLT2Oi5wdujrtH5nijy8/jj5vAXP5no6/P4+fw6VaNMZKrAx9/5mhP64uP6tWbpQjZgdLJ8jL70ejRAWqXkJSv2xcbrSzba3uyHlcPJz+NZbq/jERqTn8j98ePrbG/nR0vmOj/969fwlZfpV1v6sVv2ijPyqKpyg7ntfYD4lzL88fL95Mj509TzsbL80qn6qUn7vnj7xInueHcAM5X63d7uWTb8z5/1u731fzT+9u72ycr5pT3Kycqhn6DsYVj82rbuiIoGN8L8AAAJIUlEQVR4nO2beVcayRrGQZamGyLNEpZmEQ0MGMC4Rm/IoEbNLBnjzE2+/2e5vdVb1RtVndF4j+f5Hf8Qumm6nnrXqiaTAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgZVJ77Bp6a9a7NOv6YO/j7+6Ojo/ufeUs/nasPxyenjdmskTs9+Xi9GzzoiHD26fbmod5ut7cebm4/nT3LTT41V99ntVmjkfNoNGrvTt8HpDi7q4/a9fqWh63G6OHu6Lnu9qn4cl6b5ULYlnF8xU64vBi1t0LYWuy9KKO4Oqk1wip4UtSOXZs4uxnVwyp4Uoz2jl5K0Kx8T1DBYTa7zmTuElTwlPj03AN4HHZPIh4RoPb5IuIRAUZ7PzV99HvdXufxL7u/wRhc3uS3f92ow1b7ITledooRlv3IWU1+tBf8UGDE3eJiqFmmaVrmdNVqRtWY0+d2UsuwWYXcm+1tqRD1V4lCNK3fLFMLYA5eh06qDOkU0xFpabGXFtesUjzQtEJVz7roBcOcTnqBy/TG/JsG6YKWggx5h8062Jkj2SK6r0sDreDfvjcGKzRbTZMdMg6d14dl/2V1TOcUda2aDaJbAR0q0zI/VO6mkeF3qQx5j22ZEA+bYkR/OSloghLVYdA1JgV2+4Z7+yX22pPFpjM2RSX9s4OXaWnCMXOZQob1qSQ25PLbvhC/vJLEiL3N6bPTGgi3ac4DMtEYCyX39ZS91nwP6k4L2SjllXiVylRUihRU4fPmTJHL/cFkyOf/IxFi9Kfs2w65EEZRPFCkA94sdpmb+OaR6RXCLuGp1BKvsiOag6+oGqrBIa8SIrY2hAgmhEEzuRDfP2Cj1Afu69dsRPrUM/yDOGuwdWiKVykFTtIH0ayUQCWn7BWKniGhM2B3WR0KbzdpIjXPTBYs3vmTWhRm2k4TmvNnD1rXxcRJRsRMSzlQfpCZw1tRhnxekjy3RtJeg0+ZJbxLw84WvIENmX0YruHzcJHVzVWxOZ83d1qrgWmIYgpX8TUNJ+dETlKZg9wg6lKDKJJjCIGyT+L43lKx6Cw3XCxppqtT4WPL1US4dD+cT8qqgfJLquigEiFGsgjBbVeYLW71mjdKXk1Yrn3QTOvlefx1xaswOQKut4ljmTn8EdZBljLad7LvpCJCSGvkBdUDf0jMavywecA+pG8YGsXaISs4DbWKcv1OIkMuLEN+W+YYN7IWfBItFOc0+6ZfZa4oTHqGT1OcnSbmAPKdAaVPLdl4RKRu8TaigzRStmWRshjOiKLVZ/13eJj00gd3fGMRe1VBu/Kiw2xOKyadHOBjihpK2TFkSxG8QmL1f38QdpUe9SJ+MB3yIkorxXfcPXZds1lhjlGYxJ4aJm22cPhLpsOt5Ev7NCZW//Oaqew3TTw9ZL1BixmxoLXifINVaE5wZMmZhZvNrGXRIRdRwc6cEr+oX0gDBHVQfk1M8Y2aBao6WQxpWlyHrK4No4VBhRmVY1MtCrMqqzW/y9wiTgdZ17n1Sva1NP1lz2q7vFZgRTIVW1R8jwMVc1UbhntJdlW3H1lq4Stu4ip19aBUQci+tltmaW3oWg5Nvj5lp/BgwFYpulR++UqYq+BUj6uCK3QoYQTasAS+Po0O0pVKqpHdhSceJSm681rLoMS3I3qGe2ggzjWlXi/BsGuWVQJlul7z8XSgoOdaLblJVmfhj7+V5Z/aMUJVs24JUYKqEq/+ZC+5iW3gueyByhx37sjzeWWwiFmTs6d8qgWV0C2yCGot/PaUAqWlECifKT5kOszEnfQuLLiQD4SaTUbl0CgHlKhO2Shp3H5BSv2JytqcNF+8iZHh3+cLniidVB9JkbZOvIoKjaI70QKtNQuDFaYcW3rpMCcyFALl09QP0gaDj10v9zNUKJq0gM0XZaJW3S1Zwvqc34XxuoviIpNaaW3uWepJ8ba1OcUKNqSMWAXFNZfNoZBCLa8054vbzLcWFCgVWs70bbdCfyFdq7VbAcqUO6twcZkRYn98e1BZcSG8+oJai6ze8lkxR1HZxLh+gn5TvjKX4UWPPh7Q3hTtx1QSwiQXggpxfy2HL/5my4YHP0Nhd2/3B9YfZOHhQUEGvlml064Fn/qeEWo2I5DjeKPsR7d3OEqbGNIAEXGMxwgPgX6SDbkZc3CQkPy5DqFKLIaqSqBM7xiP4haZSlgHcSWRRsm65nnYLLhfuHvAB7E7PCSmwiZG6swpXa++UZEheuviwtGY2nC/wDy0SuJzAv0JmYOrVDNiXAGUNjHey0qptPsXl2o6tELtY1YYpxbe2RxXC9pgVVz27JM6zcOBkC4c+SbxO110jsomxjrdEsS/X4TxCc2hGMx4s+nPZN/dAisYzqMf9p/QbrkrnB3eiBZE2GnlxAVNkXQbWo8THZyxBWRge7kuvLIyvTfmYdsh3IaTb/VXVyKsu1fcxDhPkTKkyeIuo7qzuhKNOVD8RprNxHSgOTNNa7Lhqou5nm4q3dOuTAfuGdLawQ6Sf//zt5IOyQ9sHISrqPCuJX3KHTff6g+twe1Q8a6yNpfJ7MuKKeq+ZU9I1Z09PUWDmAs6BBZL+IY4U2ccmxarphdTqLUIPRnDyzHFTQzlEPGr7CkQxVzhIj65ElhEpAU2XfOqqI4Zo0PVPPBmmS/yhjd1aX9AcRPDTp4yi3CFkMhQTyWDPY8aRfay+KhXy/TfNfz57beGllauUgVut06aNWZdw4IuEynCSwa7kOo9fZA9P/lWLkM7nQyZnRIR6KZa9Daf397rxcFUtxOnjTEYroq8J+NXicx6kQ4pP3K639gsxOy/D5ufp20/PPXD5v3efN5cLufdnvzcH2d9viFINGrf+/d7G5+vvn0xv0q5ziWUlo3ayVfnhG9JJlEf3aT0if9r1u9nMWGiUTu99k+4/7PdjtpEffTqhTxsz7k+d36PwzWwhTneF0/4dtEWtai3R/W9l2QLxO71x5PZu5rDu8b59y/BX6vZPdTRt9ub9sijfXH37f7l/m5vvXu1v//1ap3wiz2bo7PLy8uzFxMaf5BKzH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBX/A2U44ijmJ5G+AAAAAElFTkSuQmCC"
                        alt=""
                        width="60"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                </ul>

                {/* contacts */}
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>

                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Card Number</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="expirationMonth"
                              id="expirationMonth"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>Expiration Month</span>
                          </div>

                          <div className="inputbox">
                            <input
                              type="text"
                              name="expirationYear"
                              id="expirationYear"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>Expiration Year</span>
                          </div>

                          <div className="inputbox">
                            <input
                              type="text"
                              name="cvv"
                              id="cvv"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>CVV</span>
                          </div>
                        </div>

                        <div className="px-5 pay">
                            <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>Order Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}

                  <div className={`tab-pane fade ${activeTab==="paypal"?"show active":""}`}
                  id='paypal'
                  role='tabpanel'
                  aria-labelledby="paypal-tab"
                  >
                     <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Amout Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Enter your email</span>
                        </div>

                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Your Name</span>
                        
                        </div>

                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Extra Info</span>
                        
                        </div>
                       
                        <div className="px-5 pay">
                            <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>Add Paypal</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* payment desclaimer */}
                <p className="mt-3 px-4 p-Disclaimer"><em>Payment Disclaimer</em> In no event small payment or partial payment by owner for any material or service</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CheckOutPage;