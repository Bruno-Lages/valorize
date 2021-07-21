const { Sequelize, DataTypes, Model } = require('sequelize');
const { v4 } = require('uuid');

module.exports = class Compliment extends Model {
    static init(dbconnection) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: function() {
                    return v4();
                }
            },

            message: {
                type: DataTypes.STRING
            }
        }, 
        {
            sequelize: dbconnection,
            tableName: 'compliments',
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_sender', as: 'sender' });
        this.belongsTo(models.User, { foreignKey: 'user_receiver', as: 'receiver' });
        this.belongsTo(models.Tag, { foreignKey: 'tag_id' });
    }
}
