function validateLoginPayload(payload) {
  const errors = {};
  const email = String(payload.email || "").trim();
  const password = String(payload.password || "").trim();

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email must be valid";
  }

  if (!password) {
    errors.password = "Password is required";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

module.exports = {
  validateLoginPayload
};