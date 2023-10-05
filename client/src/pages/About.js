import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import AboutImg from "../Assets/AboutImg.png";
function About() {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <section className="container">
        <div className="row m-5">
          
          <div className="col-md-6 ">
            <img className="img-fluid" src={AboutImg} alt="aboutimg" />
          </div>
          <div className="col-md-6 mt-5">
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
    </Layout>
  );
}

export default About;
