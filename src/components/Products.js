import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./products.css";
import img1 from "../img1.jpeg";
import img2 from "../img2.jpeg";
import img3 from "../img3.jpeg";
import shoe1 from "../components/images/shoe1.PNG";
import shoe2 from "../components/images/shoe2.PNG";
import shoe3 from "../components/images/shoe3.PNG";
import shoe4 from "../components/images/shoe4.PNG";
import shoe5 from "../components/images/shoe5.PNG";
import shoe6 from "../components/images/shoe6.PNG";
import shoe7 from "../components/images/shoe7.PNG";
import shoe8 from "../components/images/shoe8.PNG";

const Products = () => {
  return (
    <div className="container">
      <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="col-md-4 ">
          <div className="card card1">
            <div className="card-body">
              <div className="row" style={{ margin: 0, padding: 0 }}>
                <div className="col-6 md-3"  style={{ padding: 0 }}>
                  <div
                    className="card"
                    style={{ border: "none", outline: 0, borderRadius: 0 }}
                  >
                    <div className="card-body">
                      <img
                        src={img1}
                        alt="img1"
                        style={{ height: "50vh", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-6 md-3" style={{ padding: 0 }}>
                  <div className="card" style={{ border: "none" }}>
                    <div className="card-body">
                      <img
                        src={img2}
                        alt="img2"
                        style={{ height: "22vh", width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-12" style={{ padding: 0 }}>
                      <div className="card" style={{ border: "none" }}>
                        <div className="card-body">
                          <img
                            src={img3}
                            alt="img3"
                            style={{ height: "24vh", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card card2">
            <div className="card-body">
              <h1>Special Shoes With Offers</h1>
              <p>
                Good shoes are like dependable companions for your feet. They
                embrace each step with a cushioned comfort that transforms
                walking into a joyful experience. The perfect pair fits snugly,
                supporting your journey wherever it takes you. Whether strolling
                through city streets or venturing along nature trails, good
                shoes offer a balance of style and substance. With their sturdy
                soles and impeccable craftsmanship, they promise not just
                durability, but a touch of elegance to every stride.
              </p>

              <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <span
                        class="badge salebadge"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          transform: "rotate(180deg)",
                        }}
                      >
                        <span class="badge-content">25% OFF</span>
                      </span>
                      <img
                        src={shoe1}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                
                      <img
                        src={shoe2}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                
                      <img
                        src={shoe3}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                
                      <img
                        src={shoe4}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

              </div>










              <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <span
                        class="badge salebadge"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          transform: "rotate(180deg)",
                        }}
                      >
                        <span class="badge-content">25% OFF</span>
                      </span>
                      <img
                        src={shoe5}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                
                      <img
                        src={shoe6}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                
                      <img
                        src={shoe7}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                
                      <img
                        src={shoe8}
                        alt="s1"
                        style={{ height: "24vh", width: "100%" }}
                      />

                      <div
                        class="d-flex justify-content-between mb-2"
                        style={{ fontSize: "small" }}
                      >
                        <p class="text-muted mb-0">LIFESTYLE </p>
                        <div class="ms-auto text-warning">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <b>MEN SHOES ON 23X, NEW PRODUCT</b>
                      </p>
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
};

export default Products;
