import React, { Component } from "react";
import app from "../firebase/firebase_config";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const auth = getAuth(app);
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      verifyButton: false,
      verifyOtp: false,
      otp: "",
      verified: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
  }

  onCaptchVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          this.onSignInSubmit();
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  }

  onSignInSubmit() {
    this.onCaptchVerify();
    const phoneNumber = "+84" + this.state.mobile;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("Otp đã được gửi");
        this.setState({ verifyOtp: true });
        // ...
      })
      .catch((error) => {});
  }

  verifyCode() {
    window.confirmationResult
      .confirm(this.state.otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        alert("Verification Done");
        this.setState({
          verified: true,
          verifyOtp: false,
        });
        // ...
      })
      .catch((error) => {
        alert("Invalid OTP");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }
  handleSubmit(e) {
    if (this.state.verified) {
      const { fname, lname, email, password } = this.state;
      console.log(fname, lname, email, password);
      fetch("http://localhost:8000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
        });
    }
    else {
      alert("Vui lòng xác minh số điện thoại")
    }
  }

  changeMobile(e) {
    this.setState({ mobile: e.target.value }, function () {
      if (this.state.mobile.length === 10) {
        this.setState({
          verifyButton: true,
        });
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Đăng ký</h3>
        <div id="recaptcha-container"></div>
        <div className="mb-3">
          <label>Họ</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập họ"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Tên</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tên"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="number"
            className="form-control"
            placeholder="Nhập số điện thoại"
            onChange={(e) => this.changeMobile(e)}
          />
          {this.state.verifyButton ? (
            <input
              type="button"
              value={this.state.verified ? "Verified" : "Verify"}
              onClick={this.onSignInSubmit}
              style={{
                backgroundColor: "#0163d2",
                width: "100%",
                padding: 8,
                color: "white",
                border: "none",
              }}
            />
          ) : null}
        </div>
        {this.state.verifyOtp ? (
          <div className="mb-3">
            <label>OTP</label>
            <input
              type="number"
              className="form-control"
              placeholder="Nhập số OTP"
              onChange={(e) => this.setState({ otp: e.target.value })}
            />
            <input
              type="button"
              value="OTP"
              onClick={this.verifyCode}
              style={{
                backgroundColor: "#0163d2",
                width: "100%",
                padding: 8,
                color: "white",
                border: "none",
              }}
            />
          </div>
        ) : null}
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

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Đăng ký
          </button>
        </div>
        <p className="forgot-password text-right">
          Đã đăng ký <a href="/sign-in">đăng nhập?</a>
        </p>
        <a href="/sign-in" style={{ fontSize: 13 }}>
          <BsFillArrowLeftCircleFill /> Quay lại
        </a>
      </form>
    );
  }
}
