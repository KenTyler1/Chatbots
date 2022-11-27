import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([""]);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const sizes = ["1Day", "2Days", "3Days", "4Days", "Other"];
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [ticket, setTicket] = useState("");
  const [tour, setTour] = useState("");

  async function addProduct() {
    console.warn(
      title,
      images,
      price,
      description,
      content,
      sizes,
      price,
      count,
      time,
      age,
      phone,
      ticket,
      tour
    );

    let result = await fetch("http://localhost:8000/lists", {
      method: "post",
      body: JSON.stringify({
        title,
        images,
        description,
        content,
        sizes,
        price,
        count,
        time,
        age,
        phone,
        ticket,
        tour
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    alert("Data has been saved");
  }

  return (
    <div>
      <div className="col-sm-6 offset-sm-3" style={{ marginBottom: 10 }}>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="By"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Ticket Type"
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          placeholder="Type tour"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
        />
        <br/>
        <button className="btn btn-primary" onClick={addProduct}>
          Add Tours
        </button>
      </div>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", marginLeft: 480 }}
      >
        <BsFillArrowLeftCircleFill />
        Back to dashboard
      </Link>
    </div>
  );
}
