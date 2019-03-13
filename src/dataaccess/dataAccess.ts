import * as Mongoose from "mongoose";

export class DataAccess {

    public static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

     public static connect(): Mongoose.Connection {
         const mongoUrl: string = "mongodb://127.0.0.1/MyTestDb";
         Mongoose.set("debug", true);
         if (this.mongooseInstance) {
             return this.mongooseInstance;
         }
         this.mongooseConnection = Mongoose.connection;
         this.mongooseConnection.once("open", () => {
             console.log("Connected to mongodb");
         });
         this.mongooseInstance = Mongoose.connect(mongoUrl);
         return this.mongooseInstance;
     }

}
