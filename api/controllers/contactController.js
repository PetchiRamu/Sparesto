const { Contact } = require("../models");
const sendContactNotification = require("../utils/sendContactNotification");

exports.createContact = async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      serviceRequired,
      message,
    } = req.body;

    const contact = await Contact.create({
      name,
      company,
      email,
      phone,
      serviceRequired,
      message,
    });

    await sendContactNotification(
      name,
      email,
      phone,
      serviceRequired,
      message
    );

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.log("Controller Error:");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};