import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let birthSchema = new mongoose.Schema({
idBirth:{type:Number, required:true, default:new Date().getTime(); },
birthDate:{type:Date, required:true, default:new Date()},
idCowMother: {type:Number, required:true}
});

birthSchema.plugin(mongoosePaginate);
const birth = mongoose.model("birth",birthSchema);
export default birth;