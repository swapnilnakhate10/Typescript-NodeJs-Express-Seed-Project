import * as express from "express";
import UserRoutes = require("./UserRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/users/", new UserRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
