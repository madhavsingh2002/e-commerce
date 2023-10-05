import React from "react";
import Layout from "../components/Layout/Layout";
import ContactImg from "../Assets/contactImg.png";
import { Link } from "react-router-dom";
function Policy() {
  return (
    <Layout title={"Policy - Ecommerce app"}>
      <section className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="text-center">
              <img src={ContactImg} alt="aboutimg" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h1 className="Header_title">Policy</h1>
              <p>
                At Decor Haven Studio, we are a passionate team led by Madhav
                Singh, dedicated to redefining home decor. With an eye for
                quality and design, we carefully curate a captivating collection
                of decor pieces, furniture, and accents. Our mission is to
                transform your living spaces into personalized havens, where
                every element reflects your unique taste and lifestyle.
              </p>
              <div className="mb-5">
                <Link  to="/about" style={{ textDecoration: "none" }}>
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
        </div>
      </section>
    </Layout>
  );
}

export default Policy;
