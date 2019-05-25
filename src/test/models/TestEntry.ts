import { prop, Typegoose, arrayProp } from '../../typegoose';

export enum TestStatus { Pass, Fail, Running }

export class Parameter {
    constructor(
        public Name: string,
        public Value: string,
        public GroupName: string = "",
    ) { }
}


export class TestEntry extends Typegoose {


    @prop()
    Id: number;

    @prop()
    StationName: string;

    @prop()
    TechnicianName: string;

    @prop()
    SerialNumber: string;

    @prop()
    PartNumber: string;

    @prop()
    TestName: string;

    @prop()
    StartTime: Date;

    @prop()
    EndTime: Date;

    @prop()
    Status: string;

    @prop()
    AteVersion: string;

    @prop()
    AteName: string;

    @arrayProp({ items: Parameter })
    Parameters?: Parameter[];

    // @arrayProp({ items: Message })
    // TestLog: Message[];

}

