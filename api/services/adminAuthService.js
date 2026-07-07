const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminUser } = require("../models");

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

async function findAdminByEmail(email) {
  if (!email) return null;
  const normalizedEmail = normalizeEmail(email);
  return AdminUser.findOne({ where: { email: normalizedEmail } });
}

async function login({ email, password }) {
  const normalizedEmail = normalizeEmail(email);
  const user = await findAdminByEmail(normalizedEmail);
  if (!user) {
    const error = new Error("Admin user not found");
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
  findAdminByEmail,
  login
};