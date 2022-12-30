'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class All_leave_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  All_leave_status.init({
    leave_id: DataTypes.INTEGER,
    approved_or_rejected_by: DataTypes.INTEGER,
    approve_or_reject_date: DataTypes.DATE,
    leave_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'All_leave_status',
  });
  return All_leave_status;
};