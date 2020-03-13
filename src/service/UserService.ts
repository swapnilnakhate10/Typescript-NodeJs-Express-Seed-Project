const bcrypt = require("bcryptjs");
import User = require("../dataaccess/mongoose/User");
import UserRepository = require("../dataaccess/repository/UserRepository");

class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public createUserData(user: User, callback: (error: any, response: any) => void) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        this.userRepository.create(user, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getUserById(userId: any, callback: (error: any, response: any) => void) {
        this.userRepository.retrieveById(userId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllUserData(callback: (error: any, response: any) => void) {
        this.userRepository.retrieve({}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public updateUserData(userId: any, updatedUser: User, callback: (error: any, response: any) => void) {
        const updateQuery = { _id : userId };
        this.userRepository.update(updateQuery, updatedUser, {new: true}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public deleteUserById(userId: any, callback: (error: any, response: any) => void) {
        const updateQuery = { _id : userId };
        this.userRepository.deleteById(updateQuery, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public loginUser(userCredentials: any, callback: (error: any, response: any) => void) {
        const findUserQuery = { email : userCredentials.email };
        this.userRepository.retrieveOne(findUserQuery, (err, res) => {
            if (err) {
                callback(err, null);
            } else if (res) {
                bcrypt.compare(userCredentials.password, res.password, (error: any, result: any) => {
                    if (error) {
                        callback(error, null);
                    } else if (result) {
                        callback(null, res);
                    } else {
                        const errorMessage = new Error();
                        errorMessage.message = "Invalid Credentials.";
                        callback(errorMessage, null);
                    }
                });
            } else {
                const errorMessage = new Error();
                errorMessage.message = "User not found";
                callback(errorMessage, null);
            }
        });
    }

}

Object.seal(UserService);
export = UserService;
