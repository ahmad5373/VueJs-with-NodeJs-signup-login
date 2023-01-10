const user = require("../model/user");
//For Password Hashing
const bcrypt = require("bcrypt");

//Create A New User
exports.createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    await user
      .findOne({ where: { email: email, deletedAt: null } })
      .then(async function (userData) {
        if (userData) {
          res.status([]).json({
            message: "This email is already exist.",
          });
        } else {
          const roleId = "1";
          const userName = first_name + " " + last_name;
          const encryptpassword = await bcrypt.hash(password, 10); //Encrypt password using bcrypt technique
          const data = {
            userName: userName,
            email: email,
            password: encryptpassword,
            phone: phone,
            roleId: roleId,
          };
          // console.log("data",data)
          const userData = await user.create(data);
          res.status(200).json({
            message: "User created successfully.",
            Data: userData,
          });
        }
      });
  } catch (error) {
    console.log("error occure while creating new user", error);
    res.status(401).json({
      message: "error occure while creating new user",
      err,
    });
  }
};

// Login User functionality
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("email", email);
  user
    .findOne({ where: { email: email, deletedAt: null } })
    .then(async function (userData) {
      if (!userData) {
        res.status(401).json({ message: "Invalid Email Address" });
      } else {
        response_compare = await bcrypt.compare(password, userData.password);
        // console.log('UserData' ,userData);

        if (response_compare) {
          return res.status(200).json({
            message: "Login succesfully.",
            data: userData,
          });
        } else {
          res.status(401).json({
            message: "Incorrect password please enter valid password",
          });
        }
      }
    });
};
