import React from "react";
import "./HeroStyles.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import Video from "../../assets/maldivesVideo.mp4";
import {Link} from 'react-router-dom';


function Hero() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/lists");
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Du lịch hạng nhất</h1>
        <h2>Đứng vị trí hàng đầu trên toàn thế giới</h2>
        <form className="form">
          <div>
            <input
              type="text"
              placeholder="Tìm kiếm điểm đến"
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
        <div className="search-drop-down">
          {loading ? (
            <h4>Loading ...</h4>
          ) : (
            posts
              .filter((value) => {
                if (searchTitle === "") {
                  return console.log("Not thing");
                } else if (
                  value.title.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .slice(0, 6)
              .map((item) => (
                <ul>
                  <li key={item._id}>
                    <Link to={"/products/"+ item._id}>
                      <img src={item.images[0]} width={200} />
                      <h5>{item.title}</h5>
                    </Link>
                  </li>
                </ul>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
