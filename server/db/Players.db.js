import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.sql, { dialect: "postgres" });

export const players_database = sequelize.define('players', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Time_login: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Time_to_solve: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    manager:{
       type: DataTypes.STRING,
    },
    Password:{
        type: DataTypes.STRING, 
    }
}
);
 
export async function creat_table() {
    try {
         await sequelize.sync();
        console.log('connectet to SQL');
    } catch (error) {
        console.error('Error syncing SQL:', error);
    }
}
export default creat_table
