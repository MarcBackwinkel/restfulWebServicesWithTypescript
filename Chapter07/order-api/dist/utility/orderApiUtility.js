"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOutput = void 0;
exports.formatOutput = (res, data, statusCode, applicationType) => {
    return res.format({
        json: () => {
            res.type(applicationType);
            res.status(statusCode).send(data);
        },
        default: () => {
            res.status(406).send();
        }
    });
};
