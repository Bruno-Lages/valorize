'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', 
        { 
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true
              },
    
              name: {
                type: Sequelize.STRING,
                allowNull: false
              },
    
              email: {
                type: Sequelize.STRING,
                allowNull: false
              },

              admin: {
                  type: Sequelize.BOOLEAN,
                  allowNull: false
              },
    
              created_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
    
              updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
              } 
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
