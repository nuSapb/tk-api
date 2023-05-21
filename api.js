var Db = require("./dboperations");
var Order = require("./order");
const dboperations = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/results").get((request, response) => {
    dboperations.getResults().then((result) => {
      console.log(request.params)
      response.json(result);
    });
  });

router.route("/results/:date").get((request, response) => {
    dboperations.getResults(request.params.date).then((result) => {
      console.log(request.params)
      response.json(result[0]);
    });
  });


router.route("/tk_lcd").get((request, response) => {
    dboperations.getTKLCD().then((result) => {
      response.json(result);
    });
  });
  
  router.route("/tk_lcd/results").get((request, response) => {
    dboperations.getTKLCDResults().then((result) => {
      response.json(result);
    });
  });
  
  router.route("/tk_lcd/results/:date").get((request, response) => {
    dboperations.getTKLCDResults(request.params.date).then((result) => {
      response.json(result[0]);
    });
  });

var port = process.env.PORT || 5000;
app.listen(port);
console.log("TK-API is runnning at " + port);
