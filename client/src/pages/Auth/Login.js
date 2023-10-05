import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import LoginImg from "../../Assets/Login.webp";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        Swal.fire({
          icon: "success",
          title: "User successfully Login",
        });
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
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
    <Layout title={"Login - Ecommerce app"}>
      <div className="container ">
        <div className="row mt-5 ">
          <div className="col-md-6">
            <img className="img-fluid" src={LoginImg} alt="aboutimg" />
          </div>
          <div className="col-md-6 card">
            <h1 className="Header_title">Login</h1>
            <p>
              Login to access your account. Securely manage your profile and
              explore personalized features. Stay connected with us
              effortlessly.
            </p>
            <div className="card m-3">
              <div className="card-body p-3">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter your email address"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="btn-main mb-4">
                    Login
                  </button>
                  <hr />
                  <span>Don't have a account to login </span>{" "}
                  <Link to="/register" style={{ color: "#E33F6D" }}>
                    Signup
                  </Link>
                  <hr />
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        navigate("/forgot-password");
                      }}
                    >
                      Forgot Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
