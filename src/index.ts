import mongoose from "mongoose";
import express, {Request,Response} from "express";
import Cow from "./cow.model";
import Birth from "./birth.model";
import CowProd from "./cowProd.model";
import Exam from"./examMedic.model";
import bodyParser from "body-parser";

/* Instanciate express*/
const app=express();

/* Middleware bodyParser to parse the query body into Json*/
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({
    origin: '*'
}));


/* Connect to dataBase mangoDB*/
const uri="mongodb://localhost:27017/cowProduction";
mongoose.connect(uri,(err)=>{
if(err) console.log(err)
else console.log("Mongo dataBase connected sucessfuly");
});

app.get("/",(req:Request,resp:Response)=>{
resp.send("Hello Express");
});

/* API Rest: HTTP GET http://localhost:8085/cows */
/******************* GET cows*****************/
app.get("/cows",(req:Request,resp:Response)=>{
Cow.find((err, cows)=>{
if(err) resp.status(500).send(err)
else resp.send(cows);
});
});

/* GET cow BY ID*/
app.get("/cows/:id",(req:Request,resp:Response)=>{
Cow.findById(req.params.id,(err, cow)=>{
if(err) resp.status(500).send(err)
else resp.send(cow);
});
});
/*******************Get Exams ***********************/
app.get("/exams",(req:Request,resp:Response)=>{
Exam.find((err, exams)=>{
if(err) resp.status(500).send(err)
else resp.send(exams);
});
});

/* GET exam BY ID*/
app.get("/exams/:id",(req:Request,resp:Response)=>{
Exam.findById(req.params.id,(err, exam)=>{
if(err) resp.status(500).send(err)
else resp.send(exam);
});
});

/*******************Get Births ***********************/
app.get("/births",(req:Request,resp:Response)=>{
Birth.find((err, births)=>{
if(err) resp.status(500).send(err)
else resp.send(births);
});
});

/* GET birth BY ID*/
app.get("/births/:id",(req:Request,resp:Response)=>{
Birth.findById(req.params.id,(err, birth)=>{
if(err) resp.status(500).send(err)
else resp.send(birth);
});
});

/*******************Get Cow production ***********************/
app.get("/cowProds",(req:Request,resp:Response)=>{
CowProd.find((err, cowprods)=>{
if(err) resp.status(500).send(err)
else resp.send(cowprods);
});
});

/* GET cow Production BY ID*/
app.get("/cowProds/:id",(req:Request,resp:Response)=>{
CowProd.findById(req.params.id,(err, cowprod)=>{
if(err) resp.status(500).send(err)
else resp.send(cowprod);
});
});

/* Post request to save cows */
app.post("/cows",(req:Request,resp:Response)=>{
let cow = new Cow(req.body);
cow.save(err=>{
if(err) resp.status(500).send(err)
else resp.send(cow);
});
});

/* Post request to save exams */
app.post("/exams",(req:Request,resp:Response)=>{
let exam = new Exam(req.body);
exam.save(err=>{
if(err) resp.status(500).send(err)
else resp.send(exam);
});
});

/* Post request to save births */
app.post("/births",(req:Request,resp:Response)=>{
let birth = new Birth(req.body);
birth.save(err=>{
if(err) resp.status(500).send(err)
else resp.send(birth);
});
});

/* Post request to save cow productions */
app.post("/cowProds",(req:Request,resp:Response)=>{
let cowprod = new CowProd(req.body);
cowprod.save(err=>{
if(err) resp.status(500).send(err)
else resp.send(cowprod);
});
});

/* HTTP request PUT to Update cow  */
app.put("/cows/:id",(req:Request,resp:Response)=>{
Cow.findByIdAndUpdate(req.params.id,req.body,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("cow updated succesfully");
});
});

/* HTTP request PUT to Update exam  */
app.put("/exams/:id",(req:Request,resp:Response)=>{
Exam.findByIdAndUpdate(req.params.id,req.body,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("Exam updated succesfully");
});
});

/* HTTP request PUT to Update birth  */
app.put("/births/:id",(req:Request,resp:Response)=>{
Birth.findByIdAndUpdate(req.params.id,req.body,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("Birth updated succesfully");
});
});

/* HTTP request PUT to Update cow Productions  */
app.put("/cowProds/:id",(req:Request,resp:Response)=>{
CowProd.findByIdAndUpdate(req.params.id,req.body,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("cow Production updated succesfully");
});
});

/* HTTP request delete to delete cow  */
app.delete("/cows/:id",(req:Request,resp:Response)=>{
Cow.findByIdAndDelete(req.params.id,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("cow deleted succesfully");
});
});

/* HTTP request delete to delete exam  */
app.delete("/exams/:id",(req:Request,resp:Response)=>{
Exam.findByIdAndDelete(req.params.id,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("Exam deleted succesfully");
});
});

/* HTTP request delete to delete birth  */
app.delete("/births/:id",(req:Request,resp:Response)=>{
Birth.findByIdAndDelete(req.params.id,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("Birth deleted succesfully");
});
});

/* HTTP request delete to delete cow Production  */
app.delete("/cowProds/:id",(req:Request,resp:Response)=>{
CowProd.findByIdAndDelete(req.params.id,(err)=>{
if(err) resp.status(500).send(err)
else resp.send("cow production deleted succesfully");
});
});

/* GET HTTP Pagination cows http://localhost:8085/pcows?page=1&size=5*/
app.get("/pcows",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
Cow.paginate({},{page:p,limit:size},(err, cows)=>{
if(err) resp.status(500).send(err)
else resp.send(cows);
});
});

/* GET HTTP Pagination exams http://localhost:8085/pexams?page=1&size=5*/
app.get("/pexams",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
Exam.paginate({},{page:p,limit:size},(err, exams)=>{
if(err) resp.status(500).send(err)
else resp.send(exams);
});
});

/* GET HTTP Pagination births http://localhost:8085/pbirths?page=1&size=5*/
app.get("/pbirths",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
Birth.paginate({},{page:p,limit:size},(err, births)=>{
if(err) resp.status(500).send(err)
else resp.send(births);
});
});

/* GET HTTP Pagination births http://localhost:8085/pbirths?page=1&size=5*/
app.get("/pcowProds",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
CowProd.paginate({},{page:p,limit:size},(err, cowprods)=>{
if(err) resp.status(500).send(err)
else resp.send(cowprods);
});
});

/* GET HTTP Search for cows type http://localhost:8085/cows-search?kw=xxxxxx*/
app.get("/cows-search",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
let kw:String=req.query.kw || "";
Cow.paginate({race:{$regex:".*(?i)"+kw+".*"}},{page:p,limit:size},(err, cows)=>{
if(err) resp.status(500).send(err)
else resp.send(cows);
});
});

/* GET HTTP Search for exams pathology http://localhost:8085/exams-search?kw=xxxxxx*/
app.get("/exams-search",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
let kw:String=req.query.kw || "";
Exam.paginate({pathology:{$regex:".*(?i)"+kw+".*"}},{page:p,limit:size},(err, exams)=>{
if(err) resp.status(500).send(err)
else resp.send(exams);
});
});




app.listen(8085,()=> {
console.log("server started");
});