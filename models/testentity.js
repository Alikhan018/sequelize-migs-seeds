'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestEntity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TestEntity.init({
    firstName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TestEntity',
  });
  return TestEntity;
};