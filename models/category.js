import Sequelize from "sequelize";
import database from  './database.js';

const Category = database.define('category',{
    id: {
        type: Sequelize.INTEGER,
        autoIncerement: true,
        allowNull: false,
        primaryKey: true
    },
    CategoryName: Sequelize.STRING,
    CategoryMainImage: Sequelize.STRING
})

export default Category;