const authService = require("../services/authService");
const { validateLoginPayload } = require("../validators/authValidator");
const { generateOTP } = require("../utils/generateOTP");
const sendOTP = require("../utils/sendOTP");

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await authService.findUserByEmail(email);
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
    res.status(error.status || 500).json({ message: error.message || "Server error" });
  }
};

exports.register = async (req, res) => {
  try {
    const { companyName, email, phone, password } = req.body;
    if (!companyName || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await authService.register({ companyName, email, phone, password });
    if (!result.success) {
      return res.status(result.status || 400).json({ message: result.message });
    }

    res.status(201).json({
      success: true,
      message: "Registration successful"
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message || "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { valid, errors } = validateLoginPayload({ email, password });
    if (!valid) {
      return res.status(400).json({ success: false, errors });
    }

    const { token, user } = await authService.login({ email, password });

    res.status(200).json({
      success: true,
      token,
      user
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Server error"
    });
  }
};