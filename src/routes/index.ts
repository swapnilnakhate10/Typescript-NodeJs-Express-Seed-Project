import * as express from "express";
import UserRoutes = require("./UserRoutes");

const app = express();

export class BaseRoutes {
    get routes() {
        app.use("/user", new UserRoutes().routes);
        return app;
    }
}
