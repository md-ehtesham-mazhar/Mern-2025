const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    // console.log(req.body);
    res.status(200).send("Welcome to Server of Mern 2025 router");
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body);

    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res
      .status(200)
      .json({
        msg: "registration successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    //res.status(400).json({ msg: "page not found" });
    next(error);
  }
};

//login

const login = async(req, res)=>{
  try {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});

    if(!userExist){
      return res.status(400).json({message:"invalid credential"});
    }

    //const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if(user){
      res
      .status(200)
      .json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }else{
      res.status(401).json({message:"invalid email or password"});
    }
    
  } catch (error) {
    //res.status(500).json("internal server error");
    next(error);
  }
};

//user-- send data
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
    //res.status(200).json({msg: "hii user"});

  } catch (error) {
    console.log(`error from user route ${error}`);
    
  }
};


module.exports = { home, register, login, user };
