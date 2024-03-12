"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = __importDefault(require("../validator"));
const middleware_1 = __importDefault(require("../../middleware"));
const controller_1 = __importDefault(require("../controller"));
const router = express_1.default.Router();
//POST NEW COUNTRY
router.post("/create", validator_1.default.checkCreateCountry(), middleware_1.default.handleValidationsErrors, controller_1.default.create);
//GET ALL
router.get("/read", controller_1.default.readAll);
//GET BY ID
router.get("/read/:id", validator_1.default.checkIdParams(), middleware_1.default.handleValidationsErrors, controller_1.default.readById);
//UPDATE BY ID
router.put("/update/:id", validator_1.default.checkIdParams(), middleware_1.default.handleValidationsErrors, controller_1.default.updateById);
//DELETE BY ID
router.delete("/delete/:id", validator_1.default.checkIdParams(), middleware_1.default.handleValidationsErrors, controller_1.default.deleteById);
exports.default = router;
