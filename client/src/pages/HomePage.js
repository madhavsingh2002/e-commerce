import React from "react";
import Layout from "../components/Layout/Layout";
// import Hero_bg from "../Assets/herobanner2.";
import Hero_bg2 from "../Assets/homebanner2.jpg";
import { Link } from "react-router-dom";
import About from "./About";
import AboutImg from "../Assets/AboutImg.png";
import Banner1 from "../Assets/banner1.jpeg";
import ContactImg from "../Assets/contactImg.png";
import Banner4 from "../Assets/banner4.jpg";
import Banner5 from "../Assets/banner5.jpg";
import Banner6 from "../Assets/banner6.jpg";
import Faqimg from "../Assets/faq.png";
import Contact from "./Contact";
import Accordion from "react-bootstrap/Accordion";
import FB from "../Assets/facebook.svg";
import Tw from "../Assets/twitter.svg";
import Instra from "../Assets/instagram.svg";
import Li from "../Assets/linkedin-in.svg";

function HomePage() {
  return (
    <Layout title={"Home - Ecommerce app"}>
      {/* Hero-Section */}
      <section className="container ">
        <div className=" row mt-5  ">
          <div
            className="col-md-6 d-flex justify-content-center "
            style={{ flexDirection: "column" }}
          >
            <h1>Discover the Art of Home: Your Decor Haven Awaits!</h1>
            <p>
              {" "}
              Welcome to Decor Haven Studio, where Madhav Singh has curated an
              enchanting collection of decor and furniture. Discover exquisite
              pieces that blend art with functionality, elevating your living
              spaces into timeless havens of comfort and style. Embrace the
              magic of home decor with us today!
            </p>
            <div>
              <Link to="/collection" style={{ textDecoration: "none" }}>
                <button className="btn-main">
                  Browser Collection
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "white" }}
                  >
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mt-3 mb-5">
            <img className="img-fluid" src={Hero_bg2} alt="hero" />
          </div>
        </div>
      </section>
      {/* About-Section */}

      <section className="container about">
        <div className="row ">
          <div className="col-md-6  ">
            <img
              className="img-fluid"
              src={AboutImg}
              alt="aboutimg"
              style={{ height: "500px" }}
            />
          </div>
          <div className="col-md-6  mt-5">
            <h1 className="Header_title">About Us</h1>
            <p>
              At Decor Haven Studio, we are a passionate team led by Madhav
              Singh, dedicated to redefining home decor. With an eye for quality
              and design, we carefully curate a captivating collection of decor
              pieces, furniture, and accents. Our mission is to transform your
              living spaces into personalized havens, where every element
              reflects your unique taste and lifestyle.
            </p>
            <div className="mb-5">
              <Link to="/about" style={{ textDecoration: "none" }}>
                <button className="btn-main-disabled">
                  Know More
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container feature mt-5">
        <h1 className="Header_title text-center">Feature Product's</h1>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade mt-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Banner1}
                className="d-block w-100"
                alt="..."
                style={{ height: "600px" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={Banner4}
                className="d-block  w-100"
                alt="..."
                style={{ height: "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Banner5}
                className="d-block w-100"
                alt="..."
                style={{ height: "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Banner6}
                className="d-block w-100"
                alt="..."
                style={{ height: "600px" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mt-5">
        <div className=" row mt-5  ">
          <div className="col-md-6">
            <h1 className="Header_title">Contact Us</h1>
            <p>
              Contact us today for any questions or support needs. Our team is
              ready to assist you promptly. Reach out now!
            </p>
            <div className="card mt-3">
              <div className="card-body p-3">
                <form action="">
                  <div className="form-floating mt-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter your name"
                    />
                    <label for="floatingInput">Enter your name</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter your email address"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                    <label for="floatingPassword">Number</label>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>
                  <button type="submit" className="btn-main mb-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <img className="img-fluid" src={ContactImg} alt="aboutimg" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mt-5">
        <div className="row ">
          <div className="col-md-6  ">
            <h1 className="Header_title mb-3">Your questions, answered.</h1>
            <p className="mb-5">
              Find answers to common queries here. If your question isn't
              listed, reach out to our support team.
            </p>
            <img src={Faqimg} style={{ height: "330px" }} alt="faqimage" />
          </div>
          <div className="col-md-6  mt-5">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  What is the Decor Haven website?
                </Accordion.Header>
                <Accordion.Body>
                  The Decor Haven website is a platform meticulously crafted by
                  Madhav Singh using the MERN (MongoDB, Express, React, Node.js)
                  stack. It serves as a project showcase, portfolio, and resumé
                  hub, highlighting a diverse collection of design and decor
                  projects undertaken by Madhav. The website embodies a seamless
                  blend of creativity and technology, offering an immersive
                  experience to explore the world of interior design and decor.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Features of DecorHaven-Studio
                </Accordion.Header>
                <Accordion.Body>
                  1. Developed a full-featured e-commerce application using
                  React and Node.js. <br /> 2. Implemented functionalities such
                  as product listing, image upload, styling, and page routing.
                  <br /> 3. Managed state effectively using the reducer hook and
                  integrated the Bootstrap UI framework for a polished user
                  interface.
                  <br /> 4. Created components for product display and product
                  rating.
                  <br /> 5. Designed a product details screen to showcase
                  products with images and action buttons.
                  <br /> 6. Implemented loading and error message components for
                  better user experience.
                  <br /> 7. Utilized React context to handle adding items to the
                  cart and created a cart screen for managing cart items.
                  <br /> 8. Developed a sign-in screen with backend APIs for
                  user authentication and token generation.
                  <br /> 9. Connected to a MongoDB database and seeded sample
                  products and users for testing.
                  <br /> 10. Implemented features like shipping, payment method
                  selection, place order, and order history display.
                  <br /> 11. Integrated PayPal for secure payment processing.
                  <br /> 12. Created a profile screen for users to manage their
                  information.
                  <br /> 13. Successfully deployed the application to Heroku.
                  <br /> 14. Added extra features such as pagination, sorting,
                  filtering, image uploading, email sending, password reset,
                  email verification, and authorization. 15. Demonstrated
                  proficiency in unit testing using libraries like Jest or
                  Mocha.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Does Decor Haven Studio have a payment gateway?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely! Decor Haven Studio offers a convenient and secure
                  payment gateway to enhance your shopping experience. We
                  understand the importance of flexibility, which is why we have
                  integrated both card payments and PayPal options. Whether you
                  prefer to use your credit/debit card or utilize the trusted
                  services of PayPal, we've got you covered. Rest assured, your
                  transactions are handled with the highest level of security to
                  ensure a seamless and worry-free shopping journey.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Is Decor Haven Studio a commercial website?</Accordion.Header>
                <Accordion.Body>
                No, Decor Haven Studio is not a commercial website. It is designed solely for demonstration purposes. While it showcases a wide range of design and decor projects, please note that the products and services featured on the website are not available for actual purchase. Decor Haven Studio serves as a portfolio platform to showcase design expertise and creativity, offering visitors a glimpse into the world of interior design and decor without any commercial transactions.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      {/* Subscribe-section */}
      <section className="container mt-5">
        <div className="row ">
          <div className="col-md-6">
            <h1 className="Header_title mb-3">Subcribe for Letter's.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, nemo! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
              />
              <button className="btn-main" type="button">
                Subcribe
              </button>
            </div>
            <div
              className="d-flex justify-content-around"
              style={{ width: "50%" }}
            >
              <img style={{ height: "24px" }} src={FB} alt="facebook" />
              <img style={{ height: "24px" }} src={Tw} alt="twiter" />
              <img style={{ height: "24px" }} src={Li} alt="linkedln" />
              <img style={{ height: "24px" }} src={Instra} alt="intragram" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
