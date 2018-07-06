const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 4000
const cors = require('cors')


const sheets = require("./routes/sheets");

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "DELETE");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });


app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/sheets", sheets);


app.listen(port, () => {
  console.log("listening on " + port);
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});



module.exports = app;
