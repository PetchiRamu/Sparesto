const axios = require("axios");

const sendOTP = async (email, otp) => {
  console.log("\n========================================");
  console.log("========================================");
  console.log(`Email: ${email}`);
  console.log(`OTP: ${otp}`);
  console.log(`Valid for: 5 minutes`);
  console.log("========================================\n");

  // The actual text/html content for the email body
  const emailMessage = `Your OTP is ${otp}. This OTP will expire in 5 minutes.`;

  try {
    const response = await axios.post(
      "https://onesignal.com/api/v1/notifications",
      {
        app_id: process.env.ONESIGNAL_APP_ID,
        email_to: [email], 
        email_subject: "Your Sparesto OTP",
        
        // 🛠️ FIX: Explicitly passing the email body parameters
        email_body: emailMessage, 
        
        headings: {
          en: "Sparesto OTP",
        },
        contents: {
          en: emailMessage,
        },
        include_unsubscribed: true 
      },
      {
        headers: {
          Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ OneSignal notification sent successfully");
    return response.data;
  } catch (error) {
    console.warn("⚠️  OneSignal delivery failed, but OTP is generated above");
    console.error("OneSignal error:", error.response?.data || error.message);
    return { success: false, message: "OTP generated in console, but email sending failed." };
  }
};

module.exports = sendOTP;