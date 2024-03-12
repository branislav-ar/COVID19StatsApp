import express from 'express';
import CountryValidator from '../validator';
import Middleware  from '../../middleware';
import ConuntryController from '../controller';

const router = express.Router();

//POST NEW COUNTRY
router.post("/create",
        CountryValidator.checkCreateCountry(),
        Middleware.handleValidationsErrors,
        ConuntryController.create
    )

//GET ALL
router.get("/read",
        ConuntryController.readAll
)

//GET BY NAME
router.get("/read/:name",
        CountryValidator.checkNameParams(),
        Middleware.handleValidationsErrors,
        ConuntryController.readByName
    )

//GET BY ID
/* router.get("/read/:id",
        CountryValidator.checkIdParams(),
        Middleware.handleValidationsErrors,
        ConuntryController.readById
    ) */

//UPDATE BY NAME
router.put("/update/:name",
        CountryValidator.checkUpdatedParams(),
        Middleware.handleValidationsErrors,
        ConuntryController.updateByName
    )
    /* 
        {
            "name": "Brasil",
            "totalCases": 22003399,
            "activeCases": 176124,
            "deaths": 612370,
            "recovered": 21214823
        }
    */

//DELETE BY ID
router.delete("/delete/:id",
        CountryValidator.checkIdParams(),
        Middleware.handleValidationsErrors,
        ConuntryController.deleteById
    )

export default router;