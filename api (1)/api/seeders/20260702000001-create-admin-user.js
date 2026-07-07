'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const password = await bcrypt.hash('Admin@1234', 10);

    await queryInterface.bulkInsert('Users', [
      {
        companyName: 'Sparesto',
        email: 'info@sparesto.com',
        phone: '0000000000',
        password,
        role: 'Super Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', { email: 'info@sparesto.com' });
  }
};