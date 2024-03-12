"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const model_1 = require("../model");
class CountryController {
    async create(req, res) {
        const id = (0, uuid_1.v4)();
        try {
            const record = await model_1.CountryInstance.create({ ...req.body, id });
            return res.json({ record, msg: 'Successfully created a new Country!' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to create!', status: 500, route: '/create' });
        }
    }
    async readAll(req, res) {
        try {
            const records = await model_1.CountryInstance.findAll({ where: {} });
            return res.json(records);
        }
        catch (e) {
            return res.json({ msg: 'Failed to read all!', status: 500, route: '/read' });
        }
    }
    async readById(req, res) {
        try {
            const { id } = req.params;
            const record = await model_1.CountryInstance.findOne({ where: { id } });
            return res.json(record);
        }
        catch (e) {
            return res.json({ msg: 'Failed to read!', status: 500, route: '/read/:id' });
        }
    }
    async updateById(req, res) {
        try {
            const { id } = req.params;
            const record = await model_1.CountryInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ msg: 'Cannot find existing Country.' });
            }
            const updatedRecord = await record.update({
                totalCases: record.getDataValue('totalCases') + 1
                //ovde dodati fju za promenu vr!!!
            });
            return res.json({ record: updatedRecord, msg: 'Successfully updated a Country!' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to update!', status: 500, route: '/update/:id' });
        }
    }
    async deleteById(req, res) {
        try {
            const { id } = req.params;
            const record = await model_1.CountryInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ msg: 'Cannot find existing Country.' });
            }
            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord, msg: 'Successfully deleted a Country!' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to delete!', status: 500, route: '/delete/:id' });
        }
    }
}
exports.default = new CountryController();
