"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const data_1 = require("./data");
exports.isPrimitive = (Type) => ['String', 'Number', 'Boolean', 'Date'].includes(Type.name);
exports.isObject = (Type) => {
    let prototype = Type.prototype;
    let name = Type.name;
    while (name) {
        if (name === 'Object') {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
        name = prototype ? prototype.constructor.name : null;
    }
    return false;
};
exports.isNumber = (Type) => Type.name === 'Number';
exports.isString = (Type) => Type.name === 'String';
exports.initAsObject = (name, key) => {
    if (!data_1.schema[name]) {
        data_1.schema[name] = {};
    }
    if (!data_1.schema[name][key]) {
        data_1.schema[name][key] = {};
    }
};
exports.initAsArray = (name, key) => {
    if (!data_1.schema[name]) {
        data_1.schema[name] = {};
    }
    if (!data_1.schema[name][key]) {
        data_1.schema[name][key] = [{}];
    }
};
exports.getClassForDocument = (document) => {
    const modelName = document.constructor
        .modelName;
    return data_1.constructors[modelName];
};
//# sourceMappingURL=utils.js.map