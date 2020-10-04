const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let values = [1, 3, 6, 9, 12];
  let multipliedValues = values.map(function(num) {
    let multipliedValue = num * 3
    return multipliedValue;
  });
  res.json(multipliedValues);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})