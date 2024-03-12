"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
/*  /create model:

{
    "name": "USA",
    "totalCases": 48346667,
    "activeCases":  9251204,
    "deaths": 788779,
    "recovered": 38306684
}

*/
class CountryInstance extends sequelize_1.Model {
}
exports.CountryInstance = CountryInstance;
CountryInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    totalCases: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    activeCases: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    deaths: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    recovered: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'Countries',
});
