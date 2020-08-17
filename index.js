import express from "express"; // ES6
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 4000;

routes(app);

app.get("/", (req, res) => {
    res.send(`Node and Express server running on http://localhost:${PORT}.`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}.`);
});