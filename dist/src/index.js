"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cow_model_1 = __importDefault(require("../model/cow.model"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
/* Connect to dataBase mangoDB*/
const uri = "mongodb://localhost:27017/cowProduction";
mongoose_1.default.connect(uri, (err) => {
    if (err)
        console.log(err);
    else
        console.log("Mongo dataBase connected sucessfuly");
});
app.get("/", (req, resp) => {
    resp.send("Hello Express");
});
/* API Rest: HTTP GET http://localhost:8700/cows */
app.get("/cows", (req, resp) => {
    cow_model_1.default.find((err, cows) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cows);
    });
});
app.listen(8085, () => {
    console.log("server started");
});
