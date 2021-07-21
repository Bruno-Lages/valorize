'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('compliments', 
        { 
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true
            },

            user_sender: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                    onUpdate: 'SET NULL',
                    onDelete: 'SET NULL',
                }
            },

            user_receiver: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                    onUpdate: 'SET NULL',
                    onDelete: 'SET NULL',
                }
            },

            tag_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'tags',
                    key: 'id',
                    onUpdate: 'SET NULL',
                    onDelete: 'SET NULL',
                }
            },

            message: {
                type: Sequelize.UUID,
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
        await queryInterface.dropTable('compliments');
    }
};
