"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let birthSchema = new mongoose_1.default.Schema({
    idBirth: { type: Number, required: true, default: new Date().getTime() },
    birthDate: { type: Date, required: true, default: new Date() },
    idCowMother: { type: Number, required: true }
});
birthSchema.plugin(mongoose_paginate_1.default);
const birth = mongoose_1.default.model("birth", birthSchema);
exports.default = birth;
