"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cow_model_1 = __importDefault(require("./cow.model"));
const birth_model_1 = __importDefault(require("./birth.model"));
const cowProd_model_1 = __importDefault(require("./cowProd.model"));
const examMedic_model_1 = __importDefault(require("./examMedic.model"));
const body_parser_1 = __importDefault(require("body-parser"));
/* Instanciate express*/
const app = (0, express_1.default)();
/* Middleware bodyParser to parse the query body into Json*/
app.use(body_parser_1.default.json());
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
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
/* API Rest: HTTP GET http://localhost:8085/cows */
/******************* GET cows*****************/
app.get("/cows", (req, resp) => {
    cow_model_1.default.find((err, cows) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cows);
    });
});
/* GET cow BY ID*/
app.get("/cows/:id", (req, resp) => {
    cow_model_1.default.findById(req.params.id, (err, cow) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cow);
    });
});
/*******************Get Exams ***********************/
app.get("/exams", (req, resp) => {
    examMedic_model_1.default.find((err, exams) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(exams);
    });
});
/* GET exam BY ID*/
app.get("/exams/:id", (req, resp) => {
    examMedic_model_1.default.findById(req.params.id, (err, exam) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(exam);
    });
});
/*******************Get Births ***********************/
app.get("/births", (req, resp) => {
    birth_model_1.default.find((err, births) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(births);
    });
});
/* GET birth BY ID*/
app.get("/births/:id", (req, resp) => {
    birth_model_1.default.findById(req.params.id, (err, birth) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(birth);
    });
});
/*******************Get Cow production ***********************/
app.get("/cowProds", (req, resp) => {
    cowProd_model_1.default.find((err, cowprods) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cowprods);
    });
});
/* GET cow Production BY ID*/
app.get("/cowProds/:id", (req, resp) => {
    cowProd_model_1.default.findById(req.params.id, (err, cowprod) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cowprod);
    });
});
/* Post request to save cows */
app.post("/cows", (req, resp) => {
    let cow = new cow_model_1.default(req.body);
    cow.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cow);
    });
});
/* Post request to save exams */
app.post("/exams", (req, resp) => {
    let exam = new examMedic_model_1.default(req.body);
    exam.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(exam);
    });
});
/* Post request to save births */
app.post("/births", (req, resp) => {
    let birth = new birth_model_1.default(req.body);
    birth.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(birth);
    });
});
/* Post request to save cow productions */
app.post("/cowProds", (req, resp) => {
    let cowprod = new cowProd_model_1.default(req.body);
    cowprod.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cowprod);
    });
});
/* HTTP request PUT to Update cow  */
app.put("/cows/:id", (req, resp) => {
    cow_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("cow updated succesfully");
    });
});
/* HTTP request PUT to Update exam  */
app.put("/exams/:id", (req, resp) => {
    examMedic_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Exam updated succesfully");
    });
});
/* HTTP request PUT to Update birth  */
app.put("/births/:id", (req, resp) => {
    birth_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Birth updated succesfully");
    });
});
/* HTTP request PUT to Update cow Productions  */
app.put("/cowProds/:id", (req, resp) => {
    cowProd_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("cow Production updated succesfully");
    });
});
/* HTTP request delete to delete cow  */
app.delete("/cows/:id", (req, resp) => {
    cow_model_1.default.findByIdAndDelete(req.params.id, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("cow deleted succesfully");
    });
});
/* HTTP request delete to delete exam  */
app.delete("/exams/:id", (req, resp) => {
    examMedic_model_1.default.findByIdAndDelete(req.params.id, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Exam deleted succesfully");
    });
});
/* HTTP request delete to delete birth  */
app.delete("/births/:id", (req, resp) => {
    birth_model_1.default.findByIdAndDelete(req.params.id, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Birth deleted succesfully");
    });
});
/* HTTP request delete to delete cow Production  */
app.delete("/cowProds/:id", (req, resp) => {
    cowProd_model_1.default.findByIdAndDelete(req.params.id, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("cow production deleted succesfully");
    });
});
/* GET HTTP Pagination cows http://localhost:8085/pcows?page=1&size=5*/
app.get("/pcows", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    cow_model_1.default.paginate({}, { page: p, limit: size }, (err, cows) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cows);
    });
});
/* GET HTTP Pagination exams http://localhost:8085/pexams?page=1&size=5*/
app.get("/pexams", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    examMedic_model_1.default.paginate({}, { page: p, limit: size }, (err, exams) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(exams);
    });
});
/* GET HTTP Pagination births http://localhost:8085/pbirths?page=1&size=5*/
app.get("/pbirths", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    birth_model_1.default.paginate({}, { page: p, limit: size }, (err, births) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(births);
    });
});
/* GET HTTP Pagination births http://localhost:8085/pbirths?page=1&size=5*/
app.get("/pcowProds", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    cowProd_model_1.default.paginate({}, { page: p, limit: size }, (err, cowprods) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cowprods);
    });
});
/* GET HTTP Search for cows type http://localhost:8085/cows-search?kw=xxxxxx*/
app.get("/cows-search", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    let kw = req.query.kw || "";
    cow_model_1.default.paginate({ race: { $regex: ".*(?i)" + kw + ".*" } }, { page: p, limit: size }, (err, cows) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cows);
    });
});
/* GET HTTP Search for exams pathology http://localhost:8085/exams-search?kw=xxxxxx*/
app.get("/exams-search", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    let kw = req.query.kw || "";
    examMedic_model_1.default.paginate({ pathology: { $regex: ".*(?i)" + kw + ".*" } }, { page: p, limit: size }, (err, exams) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(exams);
    });
});
app.listen(8085, () => {
    console.log("server started");
});
