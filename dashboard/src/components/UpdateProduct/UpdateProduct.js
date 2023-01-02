import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([])
  const [images1, setImages1] = useState("");
  const [images2, setImages2] = useState("");
  const [images3, setImages3] = useState("");
  const [images4, setImages4] = useState("");
  const [images5, setImages5] = useState("");
  const [images6, setImages6] = useState("");

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

  const params = useParams();


  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:8000/lists/${params.id}`);
    result = await result.json();
    setTitle(result.title);

    setImages1(result.images[0]);
    setImages2(result.images[1]);
    setImages3(result.images[2]);
    setImages4(result.images[3]);
    setImages5(result.images[4]);
    setImages6(result.images[5]);

    setDescription(result.description);
    setContent(result.content);
    setPrice(result.price);
    setCount(result.count);
    setTime(result.time);
    setAge(result.age);
    setPhone(result.phone);
    setTicket(result.ticket);
    setTour(result.tour);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:8000/lists/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        title,
        images,
        description,
        content,
        price,
        count,
        time,
        age,
        phone,
        ticket,
        tour
      }),
      headers: {
        "Content-Type": "Application/json"
      },
    });
    result = await result.json();
    console.log(result);
  }

  return (
    <div>
      <div className="col-sm-6 offset-sm-3">
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
          value={images1}
          onChange={(e) => setImages1(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Images"
          value={images2}
          onChange={(e) => setImages2(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Images"
          value={images3}
          onChange={(e) => setImages3(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Images"
          value={images4}
          onChange={(e) => setImages4(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Images"
          value={images5}
          onChange={(e) => setImages5(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Images"
          value={images6}
          onChange={(e) => setImages6(e.target.value)}
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
        <br/>
        <input
          type="text"
          className="form-control"
          placeholder="Amount"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          placeholder="Amount"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          placeholder="Amount"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          placeholder="Amount"
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          placeholder="Amount"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
        />
        <br/>
        <input
          type="hidden"
          className="form-control"
          value={sizes}
        />
        <input
          type="hidden"
          className="form-control"
          value={images}
        />
        <br />
        <button className="btn btn-primary" onClick={updateProduct}>
          Update Tours
        </button>
      </div>
    </div>
  );
}
