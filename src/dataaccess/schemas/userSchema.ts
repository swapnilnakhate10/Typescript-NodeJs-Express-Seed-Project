import { Schema } from "mongoose";

export let userSchema: Schema = new Schema({
    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String
});
