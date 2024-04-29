import React, { useState } from "react";
import Ratting from "../components/Ratting";

const reviewTitle = "Add a Review";

const ReviewList = [
  {
    imgUrl: "/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

function Review() {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <div>
      <div className="row">
        <div className={`col-md-2 ${reviewShow ? "RevActive" : "DescActive"}`}>
          <button
            className="desc bg-danger"
            onClick={() => setReviewShow(false)}
          >
            Description
          </button>
        </div>
        <div className="col-md-2">
          <button
            className="rev bg-primary"
            onClick={() => setReviewShow(true)}
          >
            Reviews
          </button>
        </div>
      </div>

      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        {reviewShow ? (
          <div className="review-showing mt-4">
            <div>
              {ReviewList.map((review, i) => (
                <div key={i} className="row">
                  <div className="post-thumb my-2 col-md-4">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>
                  <div className="post-content col-md-8">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewTitle}</h5>
                </div>

                <form action="action" className="row">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className="me-2">Your Rating</span>
                      <Ratting />
                    </div>
                  </div>

                  <div className="col-md-12 col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Type Here Message"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="description mt-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="post-item row">
              <div className="post-content col-md-6">
                <ul className="lab-ul my-1">
                  <li className="lab-ul my-1">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                  </li>
                  <li className="lab-ul my-1">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                  </li>
                  <li className="lab-ul my-1">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                  </li>
                  <li className="lab-ul my-1">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                  </li>
                  <li className="lab-ul my-1">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                  </li>
                  <li className="lab-ul my-1">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                  </li>
                </ul>
              </div>

              <div className="post-thumb col-md-6">
                <img src="/assets/images/shop/01.jpg" alt="" />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
