import Express from "express"; // ES6

const app = Express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send(`Node and Express server running on http://localhost:${PORT}.`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}.`);
});