const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<center><h1>Render OK</h1></center>");
});

const port = process.env.PORT || 3000;  
app.listen(port, () => console.log(`Running on ${port}`));
