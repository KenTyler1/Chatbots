const express = require("express"),
  mongoose = require("mongoose"),
  port = 8000;
const app = express();
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const listRoute = require('./routes/lists');
const ratingRoute = require('./routes/rating');
const registerRoute = require('./routes/register');
app.use('/posts',postsRoute);
app.use('/lists', listRoute);
app.use('/rating', ratingRoute);
app.use('/register', registerRoute);

const Lists = require("./models/List");
// Connect to DB
async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://tonykhanh:GiaKhanh2k@cluster.b8hrw2v.mongodb.net/travel",
            { useUnifiedTopology: true, useNewUrlParser: true },
            () => console.log('Connected to DB')
        );
    }
    catch(error){
        console.log(error);
    }
}

connect();


app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/search/:key", async (req, res) => {
  let data = await Lists.find({
    "%or": [
     {description: {$regex:req.params.key}}
    ]
  })
  res.send(data);
});
//How to we start listening to the server
app.listen(port, () => {
  console.log("Running");
});


