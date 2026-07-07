'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const password = await bcrypt.hash('Admin@1234', 10);

    await queryInterface.bulkInsert('AdminUsers', [
      {
        email: 'info@sparesto.com',
        password,
        role: 'Super Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('AdminUsers', { email: 'info@sparesto.com' });
  }
};