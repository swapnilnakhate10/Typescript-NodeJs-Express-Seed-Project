import * as express from "express";
import UserRoutes = require("./UserRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        console.log("Routes Init");
        app.use("/api/users/", new UserRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
