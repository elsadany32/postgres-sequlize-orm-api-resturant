 'use strict';
module.exports = {
  async up(
    queryInterface: {
      createTable: (
        arg0: string,
        arg1: {
          id: {
            allowNull: boolean;
            autoIncrement: boolean;
            primaryKey: boolean;
            type: any;
          };
          openingHours: { type: any };
          cashBalance: { type: any };
          restaurantName: { type: any };
          createdAt: { allowNull: boolean; type: any };
          updatedAt: { allowNull: boolean; type: any };
        }
      ) => any;
    },
    Sequelize: { INTEGER: any; NUMBER: any; DATE: any; STRING: any }
  ) {
    await queryInterface.createTable("Restaurants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cashBalance: {
        type: Sequelize.NUMBER,
      },
      restaurantName: {
        type: Sequelize.STRING,
      },
      openingHours: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(
    queryInterface: { dropTable: (arg0: string) => any },
    Sequelize: any
  ) {
    await queryInterface.dropTable("Restaurants");
  },
};