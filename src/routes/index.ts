import * as express from "express";
import UserRoutes = require("./UserRoutes");

var app = express();

export class BaseRoutes {
    get routes() {
        app.use('/api/user', new UserRoutes().routes);
        return app;
    }
}