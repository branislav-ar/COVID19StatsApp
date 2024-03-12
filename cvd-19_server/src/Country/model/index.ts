import { DataTypes, Model } from "sequelize";
import db from "../../config/database.config";

interface CountryAttributes {
    id: string,
    name: string,
    totalCases: number,
    activeCases:  number,
    deaths: number,
    recovered: number;
}

/*  /create model:

{
    "name": "USA",
    "totalCases": 48346667,
    "activeCases":  9251204,
    "deaths": 788779,
    "recovered": 38306684
}

*/

export class CountryInstance extends Model<CountryAttributes> {}
    
CountryInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalCases: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0,
        },
        activeCases: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0,
        },
        deaths: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0,
        },
        recovered: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize: db,
        tableName: 'Countries',
    }
);