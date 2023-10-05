import React from "react";
import Layout from "../components/Layout/Layout";
import Page404 from "../Assets/page404g.gif";
import { Link } from "react-router-dom";

function PagenotFound() {
  return (
    <Layout>
      <section className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div>
          <img src={Page404} alt="404 Page Not Found" className="img-fluid" />
        </div>
        <div className="mt-3">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn-main">
              Go back Home
              <span className="material-symbols-outlined">cottage</span>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default PagenotFound;
