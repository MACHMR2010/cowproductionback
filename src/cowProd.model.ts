import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let cowProdSchema = new mongoose.Schema({
idProd:{type:Number, required:true, default:new Date().getTime()},
prodDate:{type:Date, required:true, default:new Date()},
amount: {type:Number, required:true}
});

cowProdSchema.plugin(mongoosePaginate);
const cowProd = mongoose.model("cowProd",cowProdSchema);
export default cowProd;