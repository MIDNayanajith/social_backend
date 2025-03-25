import { db } from "../connect.js";
import bcrypt from "bcryptjs";
export const register = (req, res) => {
  //check if user exists

  const q = "SELECT * FROM users Where username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    //create a new user

    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been successfully created!.");
    });
  });
};

export const login = (req, res) => {
  //to do
};

export const logout = (req, res) => {
  //to do
};
