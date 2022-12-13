import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let examMedicalSchema = new mongoose.Schema({
idExam:{type:Number, required:true},
examDay:{type:Date, required:true, default:new Date()},
pathology:{type:String,required:true},
idCow: {type:Number, required:true}
});

examMedicalSchema.plugin(mongoosePaginate);
const examMed = mongoose.model("examMed",examMedicalSchema);
export default examMed;