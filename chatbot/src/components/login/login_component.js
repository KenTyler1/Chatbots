import React, { Component } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// import { GoogleLogin } from "@react-oauth/google";
// import GoogleLogout from "react-google-login";

// import jwt_decode from "jwt-decode";
import app from "../firebase/firebase_config";

import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:8000/register/login-user/", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Đăng nhập thành công");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./";
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Đăng Nhập</h3>
        <div className="mb-3">
          <label>Địa chỉ email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Nhập email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Nhớ tôi &nbsp;
            </label>
            <a href="/reset" style={{ textTransform: "none", marginLeft: 30, fontWeight: "bold"}}>
              Quên mật khẩu
            </a>
          </div>
        </div>
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded.email);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
          auto_select
        />
        <GoogleLogout
          buttonText="Logout"
        ></GoogleLogout>   */}

        <div className="d-grid" style={{ marginTop: 20 }}>
          <button type="submit" className="btn btn-primary" onClick={() => {
            app.createUserWithEmailAndPassword(this.state.email , this.state.password)
            .then((userCredential)=>{
                // send verification mail.
              userCredential.user.sendEmailVerification();
              app.signOut();
              alert("Email đã được gửi");
            })
            .catch(alert);
          }}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Đăng ký</a>
        </p>
        <a href="/" style={{ fontSize: 13 }}>
          <BsFillArrowLeftCircleFill /> Quay lại
        </a>
      </form>
    );
  }
}
