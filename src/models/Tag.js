const { Sequelize, DataTypes, Model } = require('sequelize');
const {v4, validate} = require('uuid');

module.exports = class Tag extends Model {
    static init(dbconnection){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: function() {
                    return v4();
                }
            },

            name: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [2, 30],
                        msg: 'The tag name must have between 2 and 30 characters',
                    }
                }
            },
        }, 
        {
            sequelize: dbconnection,
            tableName: 'tags',
        })
    }
}