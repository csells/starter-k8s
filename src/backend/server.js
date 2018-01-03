let express = require("express");
let app = express();
let port = process.env.PORT || 8080;

app.use(function (req, res, next) {
  // BUG: shouldn't enable any origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route("/pi/:digits").get(getpi);
app.listen(port);
console.log(`backend server started on: ${port}`);

let pidigits = "3.1415926535897932384626433832795028841971693993751"; // plenty
function getpi(req, res) {
  let digits = parseInt(req.params.digits);
  return res.json({ pi: pidigits.substr(0, digits < 2 ? digits : digits + 1) });
}
