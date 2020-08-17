import express from "express"; // ES6
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// ---------- Mongoose Connection ---------- //
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ---------- Body Parser Connection ---------- //
/* Allow body-parser to parse the requests that are coming in,
** and parse it in a way which is readable by the API.*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
    res.send(`Node and Express server running on http://localhost:${PORT}.`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}.`);
});