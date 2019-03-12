import * as express from "express";
import UserService = require("../service/UserService");

class UserController {
    private localUserService: UserService;
    constructor() {
        this.localUserService = new UserService();
    }

    public getUserData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            console.log("getUserData");
            const userService = new UserService();
            userService.getUserData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in Get User Data . ", e);
        }
    }
}

export = UserController;
