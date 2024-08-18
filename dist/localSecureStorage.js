"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encryption_1 = __importDefault(require("./encryption"));
const utils_1 = require("./utils");
const localSecureStorage = {
    getItem: (key) => {
        var _a;
        const cryptoService = new encryption_1.default();
        return !(0, utils_1.isServer)()
            ? localStorage.getItem(key)
                ? cryptoService.decrypt((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : '')
                : ''
            : '';
    },
    setItem: (key, value) => {
        var _a;
        const cryptoService = new encryption_1.default();
        if (!(0, utils_1.isServer)()) {
            localStorage.setItem(key, (_a = cryptoService.encrypt(value)) !== null && _a !== void 0 ? _a : '');
        }
    },
    removeItem: (key) => !(0, utils_1.isServer)() ? localStorage.removeItem(key) : undefined,
};
exports.default = localSecureStorage;
