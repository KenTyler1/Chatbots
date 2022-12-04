import { useState } from "react";
import './Rating.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function App() {
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  async function addRating() {
    console.warn(
      rating,
      comment
    );

    let result = await fetch("http://localhost:8000/rating", {
      method: "post",
      body: JSON.stringify({
        rating,
        comment
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    alert("Cám ơn bạn vì đã góp ý để chúng tôi phát triển hơn.");
  }

  const handleClick = value => {
    setRating(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
      <h2>Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              type="text"
              key={index}
              size={20}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || rating) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          )
        })}
      </div>
      <textarea
        type='text'
        placeholder="What's your experience?"
        style={styles.textarea}
        value={comment}
        onChange={e => setComment(e.target.value)}
      />

      <button
        style={styles.button}
        onClick={addRating}
      >
        Submit
      </button>
      
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 275
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 275,
    padding: 10,
  }

};




export default App;
 