const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Registers = require("../models/Register");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
"hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
//Get back all the drops

router.get("/", async (req, res) => {
  try {
    const registers = await Registers.find();
    res.json(registers);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a post
router.post("/", async (req, res) => {
  const {fname, lname, email, password} = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await Registers.findOne({email});

    if(oldUser) {
      return res.json({error: 'User Exists'});
    }
    await Registers.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.json({ status: "ok"});
  } catch (error) {
    res.json({ status: "Error" });
  }
});

//Login user
router.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await Registers.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});


router.post("/userData", async (req, res) => {
  const {token} = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    Registers.findOne({email: useremail})
    .then((data) => {
      res.send({status: "ok", data: data});
    })
    .catch((error)=> {
      res.send({status: "error", data: error});
    });
    
  }catch(error) {}
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await Registers.findOne ({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:8000/register/reset-password/${oldUser._id}/${token}`;
    console.log(link);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

router.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await Registers.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await Registers.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await Registers.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

//Specific post
router.get("/:registerId", async (req, res) => {
  try {
    const register = await Registers.findById(req.params.registerId);
    res.json(register);
  } catch (err) {
    res.json({ message: err });
  }
});

// //Delete post
// router.delete("/:registerId", async (req, res) => {
//   try {
//     const removedRegister = await Registers.remove({ _id: req.params.registerId });
//     res.json(removedRegister);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// //Update a list
// router.patch("/:registerId", async (req, res) => {
//   try {
//     const id = req.params.registerId;
//     const updates = req.body;
//     const options = {new: true}
    
//     const result = await Lists.findByIdAndUpdate(id, updates, options);

//     res.json(result);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });



module.exports = router;
