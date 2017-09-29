const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const ac = require("./controllers/ac");
const uc = require("./controllers/uc");
const cfs = require("./middlewares/checkForSession");
const users = require("./user");
const session = require("express-session");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "acbdefg",
    resave: false,
    saveUninitialized: false
  })
);
app.use(cfs);
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

//Login Endpoints
app.post("/api/auth/login", ac.login);
app.post("/api/auth/register", ac.register);
app.post("/api/auth/logout", ac.signout);
//Property Management Endpoints
app.post(
  "/api/properties/:id/:propertyname/:propertydescription/:address/:city/:state/:zip/:imgurl/:loamamount/:monthlymortgage/:desiredrent",
  uc.createProperty
);
app.get("/api/filteredProperties/:desiredRent", uc.filterProperty);
app.get("/api/properties/:id", uc.returnProperty);
app.delete("/api/properties/", uc.deleteProperty);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
