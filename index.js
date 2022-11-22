const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// *** Body Parser ***
app.use(bodyParser.urlencoded({ extended: true }));

// *** Tracking HTML File ***
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  let result = weight/height**2;
  if (result <= 18.5) {
    res.send("Your BMI is " + result.toFixed(1) + ". Your BMI falls within the underweight range.");
  } else if (result > 18.5 && result <= 24.9) {
    res.send("Your BMI is " + result.toFixed(1) + ". Your BMI falls within the normal or healthy weight range.");
  } else if (result > 24.9 && result <= 29.9) {
    res.send("Your BMI is " + result.toFixed(1) + ". Your BMI falls within the overweight range.");
  } else {
    res.send("Your BMI is " + result.toFixed(1) + ". Your BMI falls within the obese range.");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
