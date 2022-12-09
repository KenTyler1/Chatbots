import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([""]);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const sizes = ["1Day", "2Days", "3Days", "4Days", "Other"];
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const params = useParams();


  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:8000/lists/${params.id}`);
    result = await result.json();
    setTitle(result.title);
    setImages(result.images);
    setDescription(result.description);
    setContent(result.content);
    setPrice(result.price);
    setCount(result.count);
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
        <br/>
        <input
          type="hidden"
          className="form-control"
          value={sizes}
        />
        <br />
        <button className="btn btn-primary" onClick={updateProduct}>
          Update Tours
        </button>
      </div>
    </div>
  );
}
