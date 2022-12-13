"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let cowSchema = new mongoose_1.default.Schema({
    idCow: { type: Number, required: true },
    iDate: { type: Date, required: true, default: new Date() },
    race: { type: String, required: true }
});
cowSchema.plugin(mongoose_paginate_1.default);
const cow = mongoose_1.default.model("cow", cowSchema);
exports.default = cow;
