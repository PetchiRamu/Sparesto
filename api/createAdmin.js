const bcrypt = require("bcrypt");
const { AdminUser, sequelize } = require("./models");

async function createAdmin() {
  try {
    await sequelize.authenticate();

    const hashPassword = await bcrypt.hash("Admin@123", 10);

    await AdminUser.create({
      email: "info@sparesto.com",
      password: hashPassword,
      role: "Admin",
    });

    console.log("✅ Admin user created successfully");
    console.log("Email: info@sparesto.com");
    console.log("Password: Admin@123");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();