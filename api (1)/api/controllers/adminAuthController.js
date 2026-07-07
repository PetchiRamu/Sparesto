const adminAuthService = require("../services/adminAuthService");
const { validateLoginPayload } = require("../validators/authValidator");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { valid, errors } = validateLoginPayload({ email, password });
    if (!valid) {
      return res.status(400).json({ success: false, errors });
    }

    const { token, user } = await adminAuthService.login({ email, password });
    res.status(200).json({ success: true, token, user });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ success: false, message: error.message || "Server error" });
  }
};