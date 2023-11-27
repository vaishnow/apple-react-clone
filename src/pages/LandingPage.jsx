import React from "react";
import { ReactComponent as AppleIcon } from "../icons/logo.svg";
import { Col, Row } from "react-bootstrap";

function LandingPage() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(./images/hero_ase2023__fajyx7tk70a6_medium.jpg)",
        }}
      >
        <h1>So many offers.</h1>
        <h1>So little time .</h1>
        <p className="fs-5">
          <span>
            Today is your last chance to buy an eligible product and get an
            Apple Gift Card
          </span>
          <span>up to $200 to use on a later purchase.* Only at Apple.</span>
        </p>
      </section>
      <section
        className="text-light medhu1"
        style={{
          backgroundImage:
            "url(./images/hero_iphone15pro__i70z9oz3hj2i_medium.jpg )",
        }}
      >
        <h1>iPhone 15 Pro.</h1>
        <p className="fs-3">Titanium. So strong. So light. So Pro</p>
        <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
          <a href="">
            Learn More<i className="fa-solid fa-angle-right"></i>
          </a>
          <a href="">
            Buy<i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </section>
      <section className="watch-container text-light">
        <div style={{ textAlign: "left" }}>
          <video
            className="w-100 watch-video text-start"
            no-controls="true"
            muted
            autoPlay
            loop
          >
            <source src="./videos/large_2x.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="caption ">
          <h2>
            <AppleIcon style={{ scale: "280%" }} className="me-3 mb-1" />
            WATCH
          </h2>
          <h5>SERIES 9</h5>
          <h4>Double tap. A magical new way to use Apple Watch.</h4>
          <div className="mx-auto d-flex justify-content-around medhu">
            <a href="" className="btn btn-light rounded-pill">
              Learn more
            </a>
            <a href="" className="btn btn-light rounded-pill">
              Buy
            </a>
          </div>
        </div>
      </section>
      <Row className="mx-auto text-center w-100 p-3 g-5">
        <Col
          xs={12}
          md={5}
          style={{
            backgroundImage:
              'url("./images/promo_mbp__ek7p477bkp6q_medium.jpg")',
          }}
          className=" prod-card"
        >
          <h2>MacBook Pro.</h2>
          <p className="fs-4">Mind-blowing.Head-turning</p>
          <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
            <a href="">
              Learn More<i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="">
              Buy<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </Col>
        <Col></Col>
        <Col
          xs={12}
          md={5}
          style={{
            backgroundImage:
              'url("./images/holiday_2023_promo__dirvdl6a3r2a_medium.jpg")',
          }}
          className=" prod-card"
        >
          <h2>Wonder awaits</h2>
          <p className="fs-4">
            <div>Give the gifts they've been</div>
            <div> looking forward to all year.</div>
          </p>
          <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
            <a href="" className="mx-auto">
              Shop<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </Col>
        <Col
          xs={12}
          md={5}
          style={{
            backgroundImage:
              'url("./images/promo_iphone15_announce__fmxxi8r9fkuy_medium.jpg")',
          }}
          className=" prod-card"
        >
          <h2>iPhone 15</h2>
          <div>New camera. New design. Newphoria.</div>
          <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
            <a href="">
              Learn More<i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="">
              Buy<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </Col>
        <Col></Col>
        <Col
          xs={12}
          md={5}
          style={{
            backgroundImage:
              'url("./images/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium.jpg")',
          }}
          className=" prod-card"
        >
          <h2>
            <AppleIcon style={{ scale: "200%" }} className="me-3 mb-1" />
            WATCH
          </h2>
          <h6 className="text-warning fw-bold">ULTRA 2</h6>
          <div>Next level adventure</div>
          <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
            <a href="">
              Learn More<i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="">
              Buy<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </Col>
        <Col
          xs={12}
          md={5}
          style={{
            backgroundImage:
              'url("./images/tile__cauwwcyyn9hy_medium.jpg")',
          }}
          className=" prod-card"
        >
        <h2>
          <AppleIcon style={{ scale: "200%" }} className="me-2 mb-1" />
          Card
        </h2>
          <div>Get up to 3% Daily Cash back</div>
          <div>with everv purchase.</div>
          <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
            <a href="">
              Learn More<i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="">
              Apply now<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </Col>
        <Col></Col>
        <Col
          xs={12}
          md={5}
          style={{
            backgroundImage:
              'url("./images/promo_iphone_tradein__bugw15ka691e_medium.jpg")',
          }}
          className=" prod-card"
        >
        <h2>
          <AppleIcon style={{ scale: "200%" }} className="me-2 mb-1" />
          Trade In
        </h2>
          <div>Get $200-$650 in credit when</div>
          <div>you trade in iPhone 11 or higher.2</div>
          <div className="w-50 medhu mx-auto text-primary d-flex justify-content-between fs-5">
            <a href="">
              Learn More<i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="">
              Buy<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
