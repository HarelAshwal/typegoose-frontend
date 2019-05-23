import * as mongoose from 'mongoose';
import { User, AccessLevel } from './User';

var MongoUri = "mongodb+srv://**@cluster0-qitg8.azure.mongodb.net/orxu-tester3?retryWrites=true";
mongoose.connect(MongoUri, { useNewUrlParser: true } as any);
const UserModel = new User().getModelForClass(User, { existingConnection: mongoose.connection });

// UserModel is a regular Mongoose Model with correct types
// (async () => {
//     // get latest Id
//     var latest = await TestModel.find({ StartTime: { $gt: new Date('2019-04-09 15:37:18.637') } }) as TestEntry[];

//     console.log(latest);

//     // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
// })();

// Users
(async () => {
    var u = new UserModel();

    u.name = "admin2";
    u.password = "admin2";
    u.accessLevel = AccessLevel.Admin;

    u.save();

    // get latest Id
    var latest = await UserModel.find();

    console.log(latest);

    var latest = await UserModel.find({ name: "koko" });
    console.log(latest);


    // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
})();

