// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");

// // const sequelize = require("./config/db");
// const db = require("./models");

// const authRoutes = require("./routes/authRoutes");
// const contactRoutes = require("./routes/contactRoutes");

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));

// app.use("/api/auth", authRoutes);
// app.use("/api/contact", contactRoutes);


// db.sequelize.authenticate()
//   .then(() => {
//     console.log("Database Connected");
//   })
//   .catch(err => {
//     console.log(err);
//   });

  

// app.listen(process.env.PORT, () => {

//   console.log("Server running");

// });


require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const db = require("./models");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});