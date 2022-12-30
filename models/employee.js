'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    emp_id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_number: DataTypes.INTEGER,
    password: DataTypes.STRING,
    no_of_sick_leaves: DataTypes.DECIMAL,
    no_of_casual_leaves: DataTypes.DECIMAL,
    password: DataTypes.STRING,
    designation_id: DataTypes.INTEGER,
    profile_pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};