import * as express from "express";
import {DataAccess} from "./dataaccess/dataAccess";
import {BaseRoutes} from "./routes";

/**
 * Import Controllers (route handlers).
 */

/**
 * Create Express server.
 */
const app = express();

app.set("port", process.env.PORT || 8080);

/**
 * Start Express server.
 */

app.use("/", new BaseRoutes().routes);

app.listen(app.get("port"), () => {
    DataAccess.connect();
    console.log("server started at http://localhost:" + app.get("port"));
});

module.exports = app;
