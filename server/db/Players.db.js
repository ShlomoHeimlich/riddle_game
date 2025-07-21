import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql://root@localhost:3306/players", { dialect: "mysql" });

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
        allowNull: false
    },
    Time_to_solve: {
        type: DataTypes.FLOAT,
        allowNull: false
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
