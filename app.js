const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/addition", (req, res) => {
  res.sendFile(__dirname + "/addition.html");
  if (!numbers) {
    return res
      .status(400)
      .send(
        'Please provide an array of numbers in the "numbers" query parameter.'
      );
  }
  const numbers = req.query.numbers.split(",").map(Number); // Split the 'numbers' query parameter by commas and convert each string to a number
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Sum the array of numbers using the reduce method

  res.send(`The sum of ${numbers.join(" + ")} is ${sum}.`); // Send the sum as a response
});

app.get("/multiplication", (req, res) => {
  res.sendFile(__dirname + "/multiplication.html");
  const numbers = req.query.numbers;
  if (!numbers) {
    return res
      .status(400)
      .send(
        'Please provide an array of numbers in the "numbers" query parameter.'
      );
  }
  const product = numbers.split(",").reduce((acc, num) => acc * num, 1);
  res.send(`The product of ${numbers} is ${product}.`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
