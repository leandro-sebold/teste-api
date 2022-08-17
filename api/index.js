const express = require("express")
const app = express();

const book = express.Router();
book.get("/book", async function (req, res) {
    res.json({ message: 'Eba' })
});
book.post("/book", async function (req, res) {
    res.json({ message: 'Eba2' })
});

app.use("/api/", book);

app.listen(3200);