'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [{
      emp_id: 1,
      name: 'Jason',
      email: 'jason@example.com',
      mobile_number: 454545454,
      password: 'jsw@1234',
      no_of_sick_leaves:2.0,
      no_of_casual_leaves: 1.0,
      designation_id:10,
      profile_pic: 'http/ggl.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
