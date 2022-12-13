"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let cowProdSchema = new mongoose_1.default.Schema({
    idProd: { type: Number, required: true, default: new Date().getTime() },
    prodDate: { type: Date, required: true, default: new Date() },
    amount: { type: Number, required: true }
});
cowProdSchema.plugin(mongoose_paginate_1.default);
const cowProd = mongoose_1.default.model("cowProd", cowProdSchema);
exports.default = cowProd;
