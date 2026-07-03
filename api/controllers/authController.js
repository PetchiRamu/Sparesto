// const User = require("../models/User");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { generateOTP } = require("../utils/generateOTP");
const sendOTP = require("../utils/sendOTP");


exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = generateOTP();
    await user.update({
      otp,
      otpExpire: new Date(Date.now() + 300000)
    });

    await sendOTP(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};


exports.register = async (req, res) => {

  try {

    const {
      companyName,
      email,
      phone,
      password,
      otp
    } = req.body;

    const userExist = await User.findOne({
      where: { email }
    });

    if (userExist)
      return res.status(400).json({
        message: "User already exists"
      });

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      companyName,
      email,
      phone,
      password: hashPassword
    });

    res.status(201).json({
      success: true,
      message: "Registration successful"
    });

  } catch (error) {

    res.status(500).json(error);

  }

};


exports.login = async (req, res) => {
  try {
    const { email, password, otp } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (password) {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ message: "Invalid password" });
      }
    } else if (otp) {
      if (!user.otp || !user.otpExpire || user.otpExpire < new Date()) {
        return res.status(400).json({ message: "OTP is invalid or expired" });
      }
      if (String(user.otp) !== String(otp)) {
        return res.status(400).json({ message: "Invalid OTP" });
      }
      await user.update({ otp: null, otpExpire: null });
    } else {
      return res.status(400).json({ message: "Password or OTP is required" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "365d"
    });

    res.status(200).json({
      success: true,
      token,
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};