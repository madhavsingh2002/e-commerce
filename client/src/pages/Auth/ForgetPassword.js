import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios";
import SignImg from "../../Assets/signup.avif";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function ForgetPassword() {
    const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        Swal.fire({
            icon: "success",
            title: "User password changed",
          });
        navigate("/login");
      } else {
        Swal.fire({
            icon: "error",
            title: "Some error occurred please try again later!",
          });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Some error occurred please try again later!",
      });
    }
  };

  return (
    <Layout title={"Reset-Password - Ecommerce app"}>
      <div className="container ">
        <div className=" row mt-5">
          <div className="col-md-6 mb-5">
            <img className="img-fluid" src={SignImg} alt="aboutimg" />
          </div>
          <div className="col-md-6  card ">
            <h1 className="Header_title">Reset Password</h1>
            <p>
              Sign up now to create your account and unlock exclusive benefits.
              Join our community and start your journey with us today!
            </p>
            <div className="card mt-1">
              <div className="card-body p-3">
                <form onSubmit={handleSubmit} action="">
                  
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter your email address"
                      required
                      autoFocus
                    />
                    <label htmlFor="floatingInput">
                      Enter Your Email address
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter your email password"
                      required
                      autoFocus
                    />
                    <label htmlFor="floatingInput">Enter your Password</label>
                  </div>
                  
                  
                  <div className="form-floating mt-4 mb-3">
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter your Security Question"
                      autoFocus
                    />
                    <label htmlFor="floatingInput">write any question for Safety</label>
                  </div>
                  <button type="submit" className="btn-main mb-4">
                    Reset Password
                  </button>
                  <hr />
                  <span>Already have a Account </span>{" "}
                  <Link to="/login" style={{ color: "#E33F6D" }}>
                    Login
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ForgetPassword
