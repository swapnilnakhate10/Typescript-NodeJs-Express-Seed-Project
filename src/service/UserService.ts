
class UserService {

    constructor() {}

    public getUserData(callback: (error: any, response: any) => void) {
        const data = ["ac", "de"];
        callback(null, data);
    }
}

Object.seal(UserService);
export = UserService;
