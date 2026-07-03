const axios = require("axios");

const sendContactNotification = async (
  name,
  email,
  phone,
  serviceRequired,
  message
) => {
  try {
    const appId = process.env.ONESIGNAL_APP_ID;
    const apiKey = process.env.ONESIGNAL_API_KEY;

    console.log("App ID:", appId);
    console.log("API Key:", apiKey);

    const notificationBody = {
      app_id: appId,

      headings: {
        en: "New Contact Enquiry",
      },

      contents: {
        en: `Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceRequired}

Message:
${message}`,
      },

      included_segments: ["Subscribed Users"],
    };

    console.log("Notification Body:");
    console.log(notificationBody);

    const response = await axios.post(
      "https://api.onesignal.com/notifications",
      notificationBody,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("OneSignal Success:");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log("OneSignal Error:");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    throw error;
  }
};

module.exports = sendContactNotification;