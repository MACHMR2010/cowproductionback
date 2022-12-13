import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let cowSchema = new mongoose.Schema({
idCow:{type:Number, required:true},
iDate:{type:Date, required:true, default:new Date()},
race:{type:String,required:true}
});

cowSchema.plugin(mongoosePaginate);
const cow = mongoose.model("cow",cowSchema);
export default cow;