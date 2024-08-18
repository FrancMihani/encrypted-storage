"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookiesStorage_1 = __importDefault(require("./cookiesStorage"));
const encryption_1 = __importDefault(require("./encryption"));
const cookiesSecureStorage = {
    getItem: (key) => {
        const cryptoService = new encryption_1.default();
        return cookiesStorage_1.default.getItem(key)
            ? cryptoService.decrypt(cookiesStorage_1.default.getItem(key))
            : '';
    },
    removeItem(key) {
        cookiesStorage_1.default.removeItem(key);
    },
    setItem(key, value) {
        var _a;
        const cryptoService = new encryption_1.default();
        cookiesStorage_1.default.setItem(key, (_a = cryptoService.encrypt(value)) !== null && _a !== void 0 ? _a : '');
    },
};
exports.default = cookiesSecureStorage;
