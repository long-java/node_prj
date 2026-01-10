const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Website của bạn đã live!");
});

const port = process.env.PORT || 3000;  
app.listen(port, () => console.log(`Running on ${port}`));
