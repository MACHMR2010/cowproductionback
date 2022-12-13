"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let examMedicalSchema = new mongoose_1.default.Schema({
    idExam: { type: Number, required: true },
    examDay: { type: Date, required: true, default: new Date() },
    pathology: { type: String, required: true },
    idCow: { type: Number, required: true }
});
examMedicalSchema.plugin(mongoose_paginate_1.default);
const examMed = mongoose_1.default.model("examMed", examMedicalSchema);
exports.default = examMed;
