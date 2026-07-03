const BASE_URL = "http://localhost:5000/api";

const apiRequest = async (url, method = "GET", body = null) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// Register
export const registerUser = async (payload) => {
  return apiRequest("/auth/register", "POST", payload);
};

// Login
export const loginUser = async (payload) => {
  return apiRequest("/auth/login", "POST", payload);
};

// Send OTP
export const sendOTP = async (payload) => {
  return apiRequest("/auth/send-otp", "POST", payload);
};