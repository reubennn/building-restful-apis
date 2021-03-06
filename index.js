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

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connected successfully to the MongoDB server.")
});

// ---------- Body Parser Connection ---------- //
/* Allow body-parser to parse the requests that are coming in,
** and parse it in a way which is readable by the API.*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// Serving static files
app.use(express.static("public"));
// http://localhost:4000/football.jpeg
// http://localhost:4000/sky.jpeg

app.get("/", (req, res) => {
    res.send(`Node and Express server running on http://localhost:${PORT}.`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}.`);
});