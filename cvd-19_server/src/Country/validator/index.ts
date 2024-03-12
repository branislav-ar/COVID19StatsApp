import { body, param } from "express-validator";

class CountryValidator {
    checkCreateCountry() {
        return [
            //id value checking
            body('id')
                .optional()
                .isUUID(4)
                .withMessage('The id value should have a UUIDv4 format.'),
            //string value checking
            body('name')
				.notEmpty()
				.withMessage('The name value should not be empty.'),
            //numberical values checking
            body('totalCases')
                .optional()
                .isNumeric()
                .withMessage('The totalCases value should be a number.')
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The totalCases value should be in the erange from 0 to 7 billion.'),
            body('activeCases')
                .optional()
                .isNumeric()
                .withMessage('The activeCases value should be a number.')  
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The activeCases value should be in the erange from 0 to 7 billion.'),
            body('deaths')
                .optional()
                .isNumeric()
                .withMessage('The deaths value should be a number.')  
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The deaths value should be in the erange from 0 to 7 billion.'),
            body('recovered')
                .optional()
                .isNumeric()
                .withMessage('The recovered value should be a number.')  
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The recovered value should be in the erange from 0 to 7 billion.'),
            ];
    }
    checkIdParams() {
        return [
            param("id")
            .notEmpty()
            .withMessage('The id value should not be empty.')
            .isUUID(4)
            .withMessage('The id value should have a UUIDv4 format.')
        ]
    }
    checkNameParams() {
        return [
            param("name")
            .notEmpty()
            .withMessage('The name value should not be empty.')
        ]
    }
    checkUpdatedParams() {
        return [
            //numberical values checking
            body('totalCases')
                .optional()
                .isNumeric()
                .withMessage('The totalCases value should be a number.')
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The totalCases value should be in the erange from 0 to 7 billion.'),
            body('activeCases')
                .optional()
                .isNumeric()
                .withMessage('The activeCases value should be a number.')  
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The activeCases value should be in the erange from 0 to 7 billion.'),
            body('deaths')
                .optional()
                .isNumeric()
                .withMessage('The deaths value should be a number.')  
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The deaths value should be in the erange from 0 to 7 billion.'),
            body('recovered')
                .optional()
                .isNumeric()
                .withMessage('The recovered value should be a number.')  
                .isInt({ min: 0, max: 7000000000 })
                .withMessage('The recovered value should be in the erange from 0 to 7 billion.'),
            ];
    }
}

export default new CountryValidator();