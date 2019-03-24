import express = require("express");
import UserController = require("../controllers/UserController");
const router = express.Router();

class UserRoutes {

    private userController: UserController;

    constructor() {
        this.userController = new UserController();
    }

    get routes(): express.Router {
        router.post("/", this.userController.createUser);
        router.get("/", this.userController.getAllUsers);
        router.get("/:id", this.userController.getUserById);
        router.put("/:id", this.userController.updateUser);
        router.delete("/:id", this.userController.deleteUserById);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;
