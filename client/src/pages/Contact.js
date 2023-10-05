import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactImg from '../Assets/contactImg.png'
function Contact() {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <section className="container">
      <div className=" row mt-5  ">
        <div className="col-md-6">
          <h1 className="Header_title">Contact Us</h1>
          <p>Contact us today for any questions or support needs. Our team is ready to assist you promptly. Reach out now!</p>
          <div className="card mt-3" >
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
    </Layout>
  )
}

export default Contact
