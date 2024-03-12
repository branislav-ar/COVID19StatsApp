"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class CountryValidator {
    checkCreateCountry() {
        return [
            //id value checking
            (0, express_validator_1.body)('id')
                .optional()
                .isUUID(4)
                .withMessage('The id value should have a UUIDv4 format.'),
            //string value checking
            (0, express_validator_1.body)('name')
                .notEmpty()
                .withMessage('The name value should not be empty.'),
            //numberical values checking
            (0, express_validator_1.body)('totalCases')
                .optional()
                .isNumeric()
                .withMessage('The totalCases value should be a number.')
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The activeCases value should be in the erange from 0 to 7 billion.'),
            (0, express_validator_1.body)('activeCases')
                .optional()
                .isNumeric()
                .withMessage('The activeCases value should be a number.')
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The activeCases value should be in the erange from 0 to 7 billion.'),
            (0, express_validator_1.body)('deaths')
                .optional()
                .isNumeric()
                .withMessage('The deaths value should be a number.')
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The deaths value should be in the erange from 0 to 7 billion.'),
            (0, express_validator_1.body)('recovered')
                .optional()
                .isNumeric()
                .withMessage('The recovered value should be a number.')
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The recovered value should be in the erange from 0 to 7 billion.'),
        ];
    }
    checkIdParams() {
        return [
            (0, express_validator_1.param)("id")
                .notEmpty()
                .withMessage('The value should not be empty.')
                .isUUID(4)
                .withMessage('The id value should have a UUIDv4 format.')
        ];
    }
}
exports.default = new CountryValidator();
