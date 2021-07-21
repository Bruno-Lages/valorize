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

            password: {
                type: DataTypes.STRING,
            },
    
              name: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [2, 50],
                        msg: 'Invalid name',
                    }
                }
              },
    
              email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'Invalid Email'
                    }
                }
              },

              admin: {
                  type: DataTypes.BOOLEAN,
                  defaultValue: false
              },
        },
        {
            sequelize: dbconnection,
            tableName: 'users',
        })
    }

    static associate(models) {
        this.hasMany(models.Compliment, { foreignKey: 'user_sender'});
        this.hasMany(models.Compliment, { foreignKey: 'user_receiver'});
    }
}

module.exports = User;