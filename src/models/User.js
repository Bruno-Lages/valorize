const { Sequelize, DataTypes, Model } = require('sequelize');
const { v4 } = require('uuid');

class User extends Model {
    static init(dbconnection){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: function() {
                    return v4();
                },
              },
    
              name: {
                type: DataTypes.STRING,
                validate: {
                    len: [2, 50],
                }
              },
    
              email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                }
              },

              admin: {
                  type: DataTypes.BOOLEAN,
              },
        },
        {
            sequelize: dbconnection,
            tableName: 'users',
        })
    }
}

module.exports = User;