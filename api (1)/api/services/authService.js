const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function createToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d"
    }
  );
}

async function findUserByEmail(email) {
  if (!email) return null;
  const normalizedEmail = normalizeEmail(email);
  return User.findOne({ where: { email: normalizedEmail } });
}

async function register({ companyName, email, phone, password, role = "Admin" }) {
  const normalizedEmail = normalizeEmail(email);

  const existingUser = await findUserByEmail(normalizedEmail);
  if (existingUser) {
    return {
      success: false,
      status: 400,
      message: "User already exists"
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    companyName,
    email: normalizedEmail,
    phone,
    password: hashedPassword,
    role
  });

  return {
    success: true,
    user
  };
}

async function login({ email, password }) {
  const normalizedEmail = normalizeEmail(email);
  const user = await findUserByEmail(normalizedEmail);
  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }

  if (!password) {
    const error = new Error("Password is required");
    error.status = 400;
    throw error;
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }

  const token = createToken(user);
  return {
    token,
    user
  };
}

module.exports = {
  findUserByEmail,
  register,
  login
};