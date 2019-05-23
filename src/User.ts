import { prop, Typegoose } from './typegoose';
// import { AccessLevel } from "../client/src/app/models/User";

export enum AccessLevel {
    Technician = 'technician',
    Manager = 'manager',
    Admin = 'admin',
}

export class User extends Typegoose {

    @prop()
    public name: string = "";

    @prop()
    public email: string = "";

    @prop()
    public password: string = "";

    @prop({ enum: AccessLevel })
    public accessLevel: AccessLevel = AccessLevel.Technician;
}

export class UserUtils {


    static accessLevelToNumber(accessLevel: AccessLevel) {
        const keys = Object.keys(AccessLevel);
        const values = keys.map(k => AccessLevel[k as any]); // [0, 1]
        return values.indexOf(accessLevel);
    }
}