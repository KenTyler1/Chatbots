import React, { Component } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:8000/register/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert(data.status);
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Quên mật khẩu</h3>

        <div className="mb-3">
          <label>Địa chỉ email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Nhập email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Đăng ký</a>
        </p>
        <a href="/sign-in" style={{ fontSize: 13 }}>
          <BsFillArrowLeftCircleFill /> Quay lại
        </a>
      </form>
    );
  }
}
