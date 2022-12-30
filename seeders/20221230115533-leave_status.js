'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('All_leave_statuses', [{
      leave_id: 13,
      approved_or_rejected_by: 15,
      approve_or_reject_date: 10-5-2018,
      leave_status: 'Accept',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('All_leave_statuses', null, {});
  }
};
