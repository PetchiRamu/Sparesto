const { AdminUser, sequelize } = require('./models');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log('Tables:', tables);
    const admin = await AdminUser.findOne({ where: { email: 'info@sparesto.com' } });
    console.log('Admin:', admin ? JSON.stringify(admin.toJSON()) : null);
  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close();
  }
})();
