const express = require("express");
const app = express();
const port = process.env.PORT || 7600;

require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("./routers/mens");
app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log(`connection is live at port no ${port}`);
})