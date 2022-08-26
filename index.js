const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvendio al Challenge Javascript 01 >=)");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
