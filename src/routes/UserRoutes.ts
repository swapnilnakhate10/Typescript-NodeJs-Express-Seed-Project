import express = require("express");
var router = express.Router();

class UserRoutes {
    get routes() : express.Router {
        router.get('/all');
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;